import React, { useEffect, useState } from "react";
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
import {
  experienceForms,
  experienceFields,
  ExperienceType,
} from "../utils/FormItems";
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
import { DeleteIcon, TrashIcon } from "lucide-react";

const ExperienceController = (props: {
  form: UseFormReturn<FieldValues, any, any>;
  companies: any[];
  formValue: string;
  tabTitle: string;
  showdescription: boolean;
}) => {
  const { form, companies, formValue, tabTitle, showdescription } = props;
  const [experiences, setExperiences] = useState(experienceFields);

  useEffect(() => {
    let newValue = {
      name: formValue,
      values:
        form
          .getValues(formValue)
          .map((cmp: any) => experienceForms(formValue)) ??
        companies.map(() => experienceForms(formValue)),
    };
    setExperiences((prev) => [prev[0], newValue]);
  }, [form.getValues(formValue).length]);

  const handleAddNewCompany = () => {
    let newValue = {
      name: formValue,
      values: [
        ...(form
          .getValues(formValue)
          .map((cmp: any) => experienceForms(formValue)) ??
          companies.map(() => experienceForms(formValue))),
        experienceForms(formValue),
      ],
    };
    setExperiences((prev) => [prev[0], newValue]);
  };

  const removeExperience = (id: number) => {
    let newValue = experiences[1].values.splice(id, 1);
    setExperiences((prev) => [
      prev[0],
      {
        ...prev[1],
        values: newValue,
      },
    ]);
  };

  return (
    <>
      <AccordionTrigger>{tabTitle}</AccordionTrigger>
      <AccordionContent>
        <FormProvider {...form}>
          <Form {...form} className="w-full p-4">
            {/* <div> */}
            {experiences[1].values.map((ex, idx) => (
              <div>
                {ex.map((f: ExperienceType) => (
                  <FormField
                    control={form.control}
                    name={`${formValue}.${idx}.${f?.name}` ?? ""}
                    render={({ field }) => (
                      <FormItem className="mt-2">
                        <FormLabel>{f.title}</FormLabel>
                        <FormControl>
                          {f.name !== "description" ? (
                            <Input
                              placeholder={f.placeholder}
                              {...form.register(
                                `${formValue}.${idx}.${f?.name}`,
                              )}
                              className="w-full"
                            />
                          ) : showdescription ? (
                            <EditorProvider>
                              <Editor
                                className="w-[10px] resize"
                                value={form.getValues(
                                  `${formValue}.${idx}.${f?.name}`,
                                )}
                                // {...form.register(`${formValue}.${idx}.${f?.name}`)}
                                onChange={(e) =>
                                  form.setValue(
                                    `${formValue}.${idx}.${f?.name}`,
                                    e.target.value,
                                  )
                                }
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
                          ) : (
                            <></>
                          )}
                        </FormControl>
                      </FormItem>
                    )}
                  />
                ))}
                {ex.length > 0 && (
                  <div className="flex p-4 my-2 justify-between w-full flex-row-reverse">
                    <Button
                      onClick={() => removeExperience(idx)}
                      variant={"destructive"}
                    >
                      {" "}
                      <TrashIcon />{" "}
                    </Button>
                  </div>
                )}
              </div>
            ))}

            <Button
              variant={"secondary"}
              className="mt-4 border border-black"
              onClick={handleAddNewCompany}
            >
              + Add New
            </Button>
          </Form>
        </FormProvider>
      </AccordionContent>
    </>
  );
};

export default ExperienceController;
