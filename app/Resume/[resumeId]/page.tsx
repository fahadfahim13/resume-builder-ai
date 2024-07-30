"use client";
import React, { useEffect, useRef } from "react";
import BasicTemplate from "@/components/Custom/Basic";
import { Button } from "@/components/ui/button";
import { useReactToPrint } from "react-to-print";
import ResumeController from "@/components/Custom/ResumeController";
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";
import {
  useGetDetailsResumeQuery,
  useUpdateResumeMutation,
} from "@/lib/redux/APIs/resume";
import { useSession } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";

const ResumeView = () => {
  const { resumeId } = useParams();
  const { status, data: userData } = useSession({
    required: true,
  });

  const {
    data: resumeData,
    isSuccess: resumeDataSuccess,
    isError: resumeDataEror,
    isLoading: resumeDataLoading,
  } = useGetDetailsResumeQuery(resumeId.toString());

  const [
    updateResume,
    {
      data: resumeUpdateResponse,
      isSuccess: resumeUpdateSuccess,
      isError: resumeUpdateError,
      isLoading: resumeUpdateLoading,
    },
  ] = useUpdateResumeMutation();

  useEffect(() => {
    if (
      resumeUpdateResponse &&
      !resumeUpdateLoading &&
      !resumeUpdateError &&
      resumeUpdateSuccess
    ) {
      toast({
        title: "Successfully Updated Resume",
        description: "Your Resume has been updated successfully!!",
        style: {
          backgroundColor: "green",
          color: "white",
        },
      });
    }
    if (!resumeUpdateLoading && resumeUpdateError && !resumeUpdateSuccess) {
      toast({
        title: "Couldn't Update Resume",
        description: "Something wrong happened!!",
        variant: "destructive",
      });
    }
  }, [
    resumeUpdateResponse,
    resumeUpdateSuccess,
    resumeUpdateLoading,
    resumeUpdateError,
  ]);

  const form = useForm<{
    resumeTitle: string;
    fullName: string;
    title: string;
    address: string;
    phone: string;
    email: string;
    companies: any[];
    projects: any[];
    education: any[];
    achievements: any[];
    skills: any[];
  }>({
    defaultValues: {
      resumeTitle: "",
      fullName: "",
      title: "",
      address: "",
      phone: "",
      email: "",
      companies: [],
      projects: [],
      education: [],
      achievements: [],
      skills: [],
    },
  });

  useEffect(() => {
    if (
      resumeData &&
      !resumeDataEror &&
      !resumeDataLoading &&
      resumeDataSuccess
    ) {
      const obj = JSON.parse(resumeData?.resumeJson).experiences
        ? JSON.parse(resumeData?.resumeJson)
        : JSON.parse(JSON.parse(resumeData?.resumeJson));
      const companies = obj.experiences.map((ex: any) => ({
        companyName: ex.header,
        jobTitle: ex.subHeader,
        duration: ex.header3,
        description: ex.description,
      }));
      const projects = obj.projects.map((ex: any) => ({
        companyName: ex.header,
        duration: ex.subHeader,
        jobTitle: ex.header3,
        description: ex.description,
      }));
      const education = obj.education.map((ex: any) => ({
        companyName: ex.header,
        duration: ex.header3,
        jobTitle: ex.subHeader,
        description: ex.description,
      }));

      const achievements = obj.achievements.map((ex: any) => ({
        companyName: ex.header,
        duration: ex.description,
        jobTitle: ex.description,
        description: ex.description,
      }));

      const skills = obj.skills.description.map((ex: any) => ({
        companyName: ex,
        duration: ex,
        jobTitle: ex,
        description: ex,
      }));

      form.setValue("resumeTitle", resumeData.name ?? "");
      form.setValue("fullName", obj?.introduction?.header ?? "");
      form.setValue("title", obj?.introduction?.subHeader ?? "");
      form.setValue("address", obj?.introduction?.header3 ?? "");
      form.setValue("phone", obj?.introduction?.smallDescription?.phone ?? "");
      form.setValue("email", obj?.introduction?.smallDescription?.email ?? "");
      form.setValue("companies", companies);
      form.setValue("projects", projects);
      form.setValue("education", education);
      form.setValue("achievements", achievements);
      form.setValue("skills", skills);
    }
  }, [resumeDataEror, resumeDataLoading, resumeDataSuccess, resumeData]);

  const divRef = useRef<HTMLElement>(null);

  const handlePrint = useReactToPrint({
    documentTitle: "Print This Resume",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    pageStyle: "padding: 16",
    removeAfterPrint: true,
  });

  function onSubmit(exp: boolean = false) {
    const formValues = form.getValues();
    let resumeObj = JSON.parse(resumeData?.resumeJson).experiences
      ? JSON.parse(resumeData?.resumeJson)
      : JSON.parse(JSON.parse(resumeData?.resumeJson));

    resumeObj = {
      ...resumeObj,
      introduction: {
        ...resumeObj.introduction,
        header: formValues.fullName,
        subHeader: formValues.title,
        header3: formValues.address,
        smallDescription: {
          ...resumeObj.introduction.smallDescription,
          email: formValues.email,
          phone: formValues.phone,
        },
      },
      skills: {
        ...resumeObj.skills,
        description: formValues.skills.map((sk) => sk.companyName),
      },
      experiences: formValues.companies.map((val: any) => ({
        header: val.companyName ?? "",
        subHeader: val.jobTitle ?? "",
        header3: val.duration ?? "",
        smallDescription: val.description ?? "",
        descriptionType: "paragraph",
        description: val.description ?? "",
      })),
      education: formValues.education.map((val) => ({
        header: val.companyName ?? "",
        subHeader: val.jobTitle ?? "",
        header3: val.duration ?? "",
        smallDescription: val.description ?? "",
        descriptionType: "paragraph",
        description: val.description ?? "",
      })),
      projects: formValues.projects.map((val) => ({
        header: val.companyName ?? "",
        subHeader: val.jobTitle ?? "",
        header3: val.jobTitle ?? "",
        smallDescription: val.duration ?? "",
        descriptionType: "paragraph",
        description: val.duration ?? "",
      })),
      achievements: formValues.achievements.map((val) => ({
        header: val.companyName ?? "",
        subHeader: val.jobTitle ?? "",
        header3: val.jobTitle ?? "",
        smallDescription: val.duration ?? "",
        descriptionType: "paragraph",
        description: val.duration ?? "",
      })),
    };

    const reqObject = {
      ...resumeData,
      resumeJson: JSON.stringify(resumeObj),
      name: form.getValues("resumeTitle") ?? "New Resume",
    };
    updateResume(reqObject);
    if (exp) {
      handlePrint(null, () => divRef.current);
    }
  }

  return (
    <div>
      <h1 className="text-2xl p-4">Resume Builder</h1>
      <div className="flex gap-4 flex-wrap min-h-[100vh]">
        <div className="w-[30rem] border border-slate-400 rounded-lg p-6">
          <ResumeController form={form} />
          <div className="flex flex-row justify-end gap-4">
            <Button onClick={() => onSubmit(false)}>Save</Button>
            <Button onClick={() => onSubmit(true)}>Export</Button>
          </div>
        </div>
        <div className="w-7/12 border border-slate-400 rounded-lg p-6 flex-1">
          <BasicTemplate
            divRef={divRef as React.RefObject<HTMLDivElement>}
            form={form}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeView;
