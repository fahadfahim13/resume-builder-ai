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

const ResumeView = () => {
  const { resumeId } = useParams();

  const {
    data: resumeData,
    isSuccess: resumeDataSuccess,
    isError: resumeDataEror,
    isLoading: resumeDataLoading,
  } = useGetDetailsResumeQuery(resumeId.toString());

  const form = useForm();

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
        <div className="min-w-80 border border-slate-400 rounded-lg p-6">
          <ResumeController form={form} onSubmit={onSubmit} />
          <Button
            onClick={() => {
              handlePrint(null, () => divRef.current);
            }}
          >
            Export
          </Button>
        </div>
        <div className="border border-slate-400 rounded-lg p-6 flex-1">
          <BasicTemplate divRef={divRef as React.RefObject<HTMLDivElement>} />
        </div>
      </div>
    </div>
  );
};

export default ResumeView;
