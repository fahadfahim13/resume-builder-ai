import React, { useState } from "react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { useDispatch } from "react-redux";
import AboutMeController from "./controllers/AboutMeController";
import ExperienceController from "./controllers/ExperienceController";

const ResumeController = (props: {
  form: UseFormReturn<FieldValues, any, any>;
  onSubmit: (values: any) => void;
}) => {
  const { form, onSubmit } = props;
  const [aboutMe, setAboutMe] = useState({
    fullName: "",
    title: "",
    address: "",
    phone: "",
    email: "",
  });
  const dispatch = useDispatch();
  const [html, setHtml] = useState("");

  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="border border-black dark:border-white rounded-lg px-2 my-2"
        >
          <AboutMeController form={form} />
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="border border-black dark:border-white rounded-lg px-2 my-2"
        >
          <ExperienceController
            form={form}
            html={html}
            onDescriptionChange={(val: string) => setHtml(val)}
          />
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ResumeController;
