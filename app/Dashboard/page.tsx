"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import ResumeInput from "./components/ResumeInput";
import TemplateSelector from "./components/TemplateSelector";
import { PlusIcon } from "lucide-react";

const Dashboard = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [userInput, setUserInput] = useState("");

  const goNext = () => {
    api?.scrollNext(true);
  };

  const goBack = () => {
    api?.scrollPrev(true);
  };


  return (
    <div className="container w-full">
      <div className="flex justify-between">
        <h1 className="text-2xl">Dashboard</h1>
        <Dialog>
          <DialogTrigger className="bg-slate-900 text-white px-4 py-2 rounded-lg">Create New</DialogTrigger>
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
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
      <div className="pt-12">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
