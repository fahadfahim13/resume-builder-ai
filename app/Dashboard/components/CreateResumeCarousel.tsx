import React, { ReactElement, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import ResumeInput from "./ResumeInput";
import TemplateSelector from "./TemplateSelector";
import { useSession } from "next-auth/react";

const CreateResumeCarousel = (props: { triggerElement: React.ReactNode }) => {
  const { triggerElement } = props;
  const { status, data: userData } = useSession({
    required: true,
  });
  const [api, setApi] = useState<CarouselApi>();
  const [userInput, setUserInput] = useState("");
  const goNext = () => {
    api?.scrollNext(true);
  };

  const goBack = () => {
    api?.scrollPrev(true);
  };
  return (
    <Dialog>
      <DialogTrigger>{triggerElement}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Build Your Resume</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <Carousel setApi={setApi} onDrag={() => {}}>
            <CarouselContent>
              <CarouselItem>
                <ResumeInput
                  goNext={goNext}
                  setUserInput={setUserInput}
                  userInput={userInput}
                />
              </CarouselItem>
              <CarouselItem>
                <TemplateSelector
                  goBack={goBack}
                  api={api}
                  userInput={userInput}
                  user={userData?.user!}
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default CreateResumeCarousel;
