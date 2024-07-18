import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FieldValues,
  Form,
  FormProvider,
  UseFormReturn,
} from "react-hook-form";
import { introductionForms } from "../utils/FormItems";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const AboutMeController = (props: {
  form: UseFormReturn<FieldValues, any, any>;
}) => {
  const { form } = props;

  return (
    <>
      <AccordionTrigger>Introduction</AccordionTrigger>
      <AccordionContent>
        <FormProvider {...form}>
          <Form {...form} className="w-full p-4">
            {introductionForms.map((f) => (
              <FormField
                control={form.control}
                name={f.name}
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel>{f.title}</FormLabel>
                    <FormControl>
                      <Input placeholder={f.placeholder} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}
          </Form>
        </FormProvider>
      </AccordionContent>
    </>
  );
};

export default AboutMeController;
