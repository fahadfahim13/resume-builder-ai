import React, { LegacyRef, useRef } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { Editor, EditorProvider } from "react-simple-wysiwyg";

const BasicTemplate = (props: {
  divRef: React.RefObject<HTMLDivElement>;
  form: UseFormReturn<any, any, undefined>;
}) => {
  const { divRef, form } = props;

  return (
    <div className="w-full" ref={divRef}>
      {/* Personal Details */}
      <div>
        <div className="flex flex-col justify-center align-middle text-center">
          <h1 className="text-3xl font-bold text-red-600">
            {form.watch("fullName") ?? "John Doe"}
          </h1>
          <h2 className="text-lg">
            {form.watch("title") ?? "Software Engineer | Programmer | Coder"}
          </h2>
          <h3 className="">{form.watch("address") ?? "Austin, TX, U.S.A."}</h3>
        </div>
        <div className="flex justify-between">
          <h4 className="text-sm grow">
            {form.watch("phone") ?? "+880123456789"}
          </h4>
          <h4 className="text-sm flex-none">
            {form.watch("email") ?? "fahadfahim13@gmail.com"}
          </h4>
        </div>
        <hr className="border-2 my-2" />
      </div>
      {/* Professional Experience */}
      <div>
        <div className="flex flex-col justify-center align-middle text-center mt-2">
          <h1 className="text-lg ">Professional Experience</h1>
        </div>
        <hr className="border my-2" />
        {form.watch("companies")?.length > 0 &&
          form.watch("companies").map((cmp: any, idx: number) => (
            <div>
              <div className="flex justify-between my-2">
                <div className="grow">
                  <h4 className="text-md font-bold">
                    {form.watch(`companies.${idx}.jobTitle`) ??
                      "Full Stack Software Engineer"}
                  </h4>
                  <h5>
                    {form.watch(`companies.${idx}.companyName`) ??
                      "Company Name"}
                  </h5>
                </div>
                <h4 className="text-sm flex-none">
                  {form.watch(`companies.${idx}.duration`) ??
                    "01 Jan, 2022 - 30 June, 2024"}
                </h4>
              </div>
              <div className="text-wrap font-light break-words text-sm">
                {/* dangerouslySetInnerHTML={{__html: cmp.description ?? ''}} */}
                <EditorProvider>
                  <Editor
                    className="w-[10px] resize border-0"
                    value={cmp.description ?? ""}
                    disabled
                  ></Editor>
                </EditorProvider>
              </div>
              <hr className="border my-2" />
            </div>
          ))}
      </div>
      {/* Education */}
      <div>
        <div className="flex flex-col justify-center align-middle text-center mt-2">
          <h1 className="text-lg ">Education</h1>
        </div>
        <hr className="border my-2" />
      </div>
      <div>
        <div className="flex justify-between my-2">
          <div className="grow">
            <h4 className="text-md font-bold">BUET</h4>
            <h5>B.Sc. in Computer Science and Engineering</h5>
          </div>
          <h4 className="text-sm flex-none">01 Jan, 2022 - 30 June, 2024</h4>
        </div>
        <div className="flex justify-between my-2">
          <div className="grow">
            <h4 className="text-md font-bold">Dhaka College</h4>
            <h5>H.S.C in Science</h5>
          </div>
          <h4 className="text-sm flex-none">01 Jan, 2022 - 30 June, 2024</h4>
        </div>
      </div>
      {/* Projects */}
      <div>
        <div className="flex flex-col justify-center align-middle text-center mt-2">
          <h1 className="text-lg ">Projects</h1>
        </div>
        <hr className="border my-2" />
        {form.watch("projects")?.length > 0 &&
          form.watch("projects").map((cmp: any, idx: number) => (
            <div>
              <div className="flex justify-between my-2">
                <div className="grow">
                  <h4 className="text-md font-bold">
                    {form.watch(`projects.${idx}.jobTitle`) ?? "Project Name"}
                  </h4>
                  <h5>
                    {form.watch(`projects.${idx}.companyName`) ??
                      "React, Node.js, Redux, AWS"}
                  </h5>
                </div>
                <h4 className="text-sm flex-none">
                  {form.watch(`projects.${idx}.duration`) ?? "Project URL"}
                </h4>
              </div>
              <div className="text-wrap font-light break-words text-sm">
                {/* dangerouslySetInnerHTML={{__html: cmp.description ?? ''}} */}
                <EditorProvider>
                  <Editor
                    className="w-[10px] resize border-0"
                    value={cmp.description ?? ""}
                    disabled
                  ></Editor>
                </EditorProvider>
              </div>
              <hr className="border my-2" />
            </div>
          ))}
      </div>
      {/* Achievements */}
      <div>
        <div className="flex flex-col justify-center align-middle text-center mt-2">
          <h1 className="text-lg ">Achievements</h1>
        </div>
        <hr className="border my-2 " />
      </div>
      <div>
        <div className="flex justify-between my-2">
          <div className="grow">
            <h4 className="text-md font-bold">BUET</h4>
            <h5>B.Sc. in Computer Science and Engineering</h5>
          </div>
          <h4 className="text-sm flex-none">01 Jan, 2022 - 30 June, 2024</h4>
        </div>
        <div className="flex justify-between my-2">
          <div className="grow">
            <h4 className="text-md font-bold">Dhaka College</h4>
            <h5>H.S.C in Science</h5>
          </div>
          <h4 className="text-sm flex-none">01 Jan, 2022 - 30 June, 2024</h4>
        </div>
      </div>
      {/* Skills */}
      <div>
        <div className="flex flex-col justify-center align-middle text-center mt-2">
          <h1 className="text-lg ">Skills</h1>
        </div>
        <hr className="border my-2 " />
      </div>
      <div>
        <div className="flex justify-between my-2">
          <div className="grow">
            <h4 className="text-md font-bold">BUET</h4>
            <h5>B.Sc. in Computer Science and Engineering</h5>
          </div>
          <h4 className="text-sm flex-none">01 Jan, 2022 - 30 June, 2024</h4>
        </div>
        <div className="flex justify-between my-2">
          <div className="grow">
            <h4 className="text-md font-bold">Dhaka College</h4>
            <h5>H.S.C in Science</h5>
          </div>
          <h4 className="text-sm flex-none">01 Jan, 2022 - 30 June, 2024</h4>
        </div>
      </div>
    </div>
  );
};

export default BasicTemplate;
