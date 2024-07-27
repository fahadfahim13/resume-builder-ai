"use client";
import React, { useEffect, useRef } from "react";
import { RootState } from "@/lib/redux/store";
import { useSelector } from "react-redux";
import BasicTemplate from "@/components/Custom/Basic";
import { Button } from "@/components/ui/button";
import { useReactToPrint } from "react-to-print";
import ResumeController from "@/components/Custom/ResumeController";
import { useForm } from "react-hook-form";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useGetDetailsResumeQuery } from "@/lib/redux/APIs/resume";
import { useSession } from "next-auth/react";

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

  const form = useForm({
    defaultValues: {
      fullName:
        JSON.parse(resumeData?.resumeJson ?? "{}")?.introduction?.header ?? "",
      title:
        JSON.parse(resumeData?.resumeJson ?? "{}")?.introduction?.subHeader ??
        "",
      address:
        JSON.parse(resumeData?.resumeJson ?? "{}")?.introduction?.header3 ?? "",
      phone:
        JSON.parse(resumeData?.resumeJson ?? "{}")?.introduction
          ?.smallDescription?.phone ?? "",
      email:
        JSON.parse(resumeData?.resumeJson ?? "{}")?.introduction
          ?.smallDescription?.email ?? "",
      companies: [],
      projects: [],
    },
  });

  useEffect(() => {
    if (
      resumeData &&
      !resumeDataEror &&
      !resumeDataLoading &&
      resumeDataSuccess
    ) {
      const obj = JSON.parse(JSON.parse(resumeData?.resumeJson));
      console.log(obj);
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
      console.log({ companies });
      form.setValue("fullName", obj?.introduction?.header ?? "");
      form.setValue("title", obj?.introduction?.subHeader ?? "");
      form.setValue("address", obj?.introduction?.header3 ?? "");
      form.setValue("phone", obj?.introduction?.smallDescription?.phone ?? "");
      form.setValue("email", obj?.introduction?.smallDescription?.email ?? "");
      form.setValue("companies", companies);
      form.setValue("projects", projects);
    }
  }, [resumeDataEror, resumeDataLoading, resumeDataSuccess, resumeData]);

  function onSubmit(values: any) {
    console.log(values);
  }

  const divRef = useRef<HTMLElement>(null);

  const handlePrint = useReactToPrint({
    documentTitle: "Print This Resume",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    pageStyle: "padding: 16",
    removeAfterPrint: true,
  });

  return (
    <div>
      <h1 className="text-2xl p-4">Resume Builder</h1>
      <div className="flex gap-4 flex-wrap min-h-[100vh]">
        <div className="w-[30rem] border border-slate-400 rounded-lg p-6">
          <ResumeController form={form} onSubmit={onSubmit} />
          <Button
            onClick={() => {
              handlePrint(null, () => divRef.current);
            }}
          >
            Export
          </Button>
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
