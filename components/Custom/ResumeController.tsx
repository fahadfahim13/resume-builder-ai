import React, { useState } from "react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { useDispatch } from "react-redux";
import AboutMeController from "./controllers/AboutMeController";
import ExperienceController from "./controllers/ExperienceController";
import { Button } from "../ui/button";

const ResumeController = (props: {
  form: UseFormReturn<any, any, undefined>;
}) => {
  const { form } = props;
  const dispatch = useDispatch();

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
            companies={form.getValues("companies")}
            formValue={"companies"}
            tabTitle={"Professional Experience"}
            showdescription={true}
          />
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="border border-black dark:border-white rounded-lg px-2 my-2"
        >
          <ExperienceController
            form={form}
            companies={form.getValues("projects")}
            formValue={"projects"}
            tabTitle={"Projects"}
            showdescription={true}
          />
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="border border-black dark:border-white rounded-lg px-2 my-2"
        >
          <ExperienceController
            form={form}
            companies={form.getValues("education")}
            formValue={"education"}
            tabTitle={"Education"}
            showdescription={false}
          />
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="border border-black dark:border-white rounded-lg px-2 my-2"
        >
          <ExperienceController
            form={form}
            companies={form.getValues("achievements")}
            formValue={"achievements"}
            tabTitle={"Achievements"}
            showdescription={false}
          />
        </AccordionItem>
        <AccordionItem
          value="item-6"
          className="border border-black dark:border-white rounded-lg px-2 my-2"
        >
          <ExperienceController
            form={form}
            companies={form.getValues("skills")}
            formValue={"skills"}
            tabTitle={"Skills"}
            showdescription={false}
          />
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ResumeController;
