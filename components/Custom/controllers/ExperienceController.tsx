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
import { experienceForms, introductionForms } from "../utils/FormItems";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Editor, {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  EditorProvider,
  HtmlButton,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { Button } from "@/components/ui/button";

const ExperienceController = (props: {
  form: UseFormReturn<FieldValues, any, any>;
  html: string;
  onDescriptionChange: (val: string) => void;
}) => {
  const { form, html, onDescriptionChange } = props;

  return (
    <>
      <AccordionTrigger>Professional Experience</AccordionTrigger>
      <AccordionContent>
        <FormProvider {...form}>
          <Form {...form} className="w-full p-4">
            {experienceForms.map((f) => (
              <FormField
                control={form.control}
                name={f.name}
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel>{f.title}</FormLabel>
                    <FormControl>
                      {f.name !== "description" ? (
                        <Input
                          placeholder={f.placeholder}
                          {...field}
                          className="w-full"
                          // onChange={(e) =>
                          //   setAboutMe((prev) => ({
                          //     ...prev,
                          //     [f.name]: e.target.value,
                          //   }))
                          // }
                        />
                      ) : (
                        <EditorProvider>
                          <Editor
                            value={html}
                            onChange={(e) =>
                              onDescriptionChange(e.target.value)
                            }
                            className="w-full"
                          >
                            <Toolbar>
                              <BtnUndo />
                              <BtnRedo />
                              <Separator />
                              <BtnBold />
                              <BtnItalic />
                              <BtnUnderline />
                              <BtnStrikeThrough />
                              <Separator />
                              <BtnNumberedList />
                              <BtnBulletList />
                              <Separator />
                              <BtnLink />
                              <BtnClearFormatting />
                              <HtmlButton />
                              <Separator />
                              <BtnStyles />
                            </Toolbar>
                          </Editor>
                        </EditorProvider>
                      )}
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}

            <Button variant={"secondary"} className="mt-4 border border-black">
              + Add New
            </Button>
          </Form>
        </FormProvider>
      </AccordionContent>
    </>
  );
};

export default ExperienceController;
