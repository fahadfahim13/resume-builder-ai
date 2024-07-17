import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FieldValues, Form, FormProvider, useForm, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";

const introductionForms = [
  {name: 'fullName', title: 'Full Name', placeholder: 'i.e. John Doe' },
  {name: 'title', title: 'Professional Title', placeholder: 'i.e. Software Engineer | Programmer | Coder' },
  {name: 'address', title: 'Address', placeholder: 'i.e. Dhaka, Bangladesh' },
  {name: 'phone', title: 'Phone', placeholder: 'i.e. +123456' },
  {name: 'email', title: 'Email', placeholder: 'i.e. johndoe@gmail.com' },
]

const ResumeController = (props: { form: UseFormReturn<FieldValues, any, any>; onSubmit: (values: any) => void; }) => {
  const {form, onSubmit} = props;
  const [aboutMe, setAboutMe] = useState({
    fullName: '',
    title: '',
    address: '',
    phone: '',
    email: ''
  });
  const dispatch = useDispatch();


  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
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
                      <Input placeholder={f.placeholder} {...field} onChange={(e) => setAboutMe((prev) => ({...prev, [f.name]: e.target.value}))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              ))}
              <Button onClick={() => {
                console.log(form.getValues());
              }}>Submit</Button>
            </Form>
            </FormProvider>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ResumeController;
