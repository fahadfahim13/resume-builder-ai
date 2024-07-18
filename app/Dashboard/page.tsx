"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import ResumeInput from "./components/ResumeInput";
import TemplateSelector from "./components/TemplateSelector";
import { useSession } from "next-auth/react";
import { useGetAllResumeMutation } from "@/lib/redux/APIs/resume";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { status, data: userData } = useSession({
    required: true,
  });
  const router = useRouter();

  const [
    getAllResume,
    {
      data: allResumes,
      isSuccess: allResumeSuccess,
      isLoading: allResumeLoading,
      isError: allResumeError,
    },
  ] = useGetAllResumeMutation();

  const [api, setApi] = useState<CarouselApi>();
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    if (status === "authenticated" && userData.user?.email) {
      getAllResume({
        userEmail: userData.user?.email,
      });
    }
  }, [userData, status]);

  const goNext = () => {
    api?.scrollNext(true);
  };

  const goBack = () => {
    api?.scrollPrev(true);
  };

  return (
    <div className="container w-full mt-4">
      <div className="flex justify-between">
        <h1 className="text-2xl">Dashboard</h1>
        <Dialog>
          <DialogTrigger className="bg-slate-900 text-white px-4 py-2 rounded-lg">
            Create New
          </DialogTrigger>
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
      </div>
      <div className="pt-12">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          {allResumes &&
            allResumeSuccess &&
            !allResumeError &&
            !allResumeLoading &&
            allResumes.map((res: any) => (
              <Card
                className="cursor-pointer"
                onClick={() => {
                  router.push(`/Resume/${res._id}`);
                }}
              >
                <CardHeader>
                  <CardTitle>{res.name}</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                {/* <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
