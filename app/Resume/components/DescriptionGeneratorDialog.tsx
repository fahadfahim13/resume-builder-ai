import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useGenerateDescriptionMutation } from "@/lib/redux/APIs/resume";
import { useSession } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import { FieldValues, UseFormReturn } from "react-hook-form";

const DescriptionGeneratorDialog = (props: {
  form: UseFormReturn<FieldValues, any, any>;
  formValue: string;
}) => {
  const { form, formValue } = props;
  const { data: session } = useSession();
  const [userInput, setUserInput] = useState("");
  const [open, setOpen] = useState(false);

  const [generateDescription, { data, isSuccess, isLoading, isError }] =
    useGenerateDescriptionMutation();

  useEffect(() => {
    if (data && !isError && !isLoading && isSuccess) {
      setUserInput("");
      form.setValue(formValue, data.description);
      setOpen(false);
    }
    if (isError && !isLoading) {
      toast({
        title: "Somethin wrong happened",
        variant: "destructive",
      });
    }
  }, [data, isSuccess, isLoading, isError]);

  const generateDesc = () => {
    if (session?.user?.email && userInput !== "") {
      generateDescription({
        userInput: userInput,
        userEmail: session.user.email,
      });
    }
  };

  return (
    <div>
      <div className="drawer drawer-end">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          checked={open}
        />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-sm text-white text-sm bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
            onClick={() => setOpen(true)}
          >
            Generate with AI
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-96 p-4 flex flex-col gap-4">
            {/* Sidebar content here */}
            <li className="pr-4">
              <h2 className="break-words text-2xl bg-white">
                Generate Description
              </h2>
            </li>
            <li className="pr-4">
              <Textarea
                placeholder="Tell us about your experience.."
                id="message"
                onChange={(e) => setUserInput(e.target.value)}
              />
            </li>
            <li className="flex flex-row-reverse pr-4">
              <button
                className="btn btn-accent btn-sm text-white"
                onClick={generateDesc}
                disabled={userInput === "" || isLoading}
              >
                {isLoading ? (
                  <span className="loading loading-spinner text-white loading-sm"></span>
                ) : (
                  "Generate"
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DescriptionGeneratorDialog;
