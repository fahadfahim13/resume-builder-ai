"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import {
  useDeleteResumeMutation,
  useGetAllResumeMutation,
} from "@/lib/redux/APIs/resume";
import { useRouter } from "next/navigation";
import { Edit2Icon } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import EmptyDashboard from "./components/EmptyDashboard";
import CreateResumeCarousel from "./components/CreateResumeCarousel";
import DeleteResumeDialog from "./components/DeleteResumeDialog";

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

  const [
    deleteResume,
    {
      data: deleteResumeData,
      isSuccess: isDeleteSuccess,
      isLoading: isDeleteLoading,
      isError: isDeleteError,
    },
  ] = useDeleteResumeMutation();

  useEffect(() => {
    if (
      deleteResumeData &&
      !isDeleteLoading &&
      !isDeleteError &&
      isDeleteSuccess
    ) {
      toast({
        title: "Successfully Deleted Resume",
        description: "Your Resume has been deleted successfully!!",
        style: {
          backgroundColor: "green",
          color: "white",
        },
      });
      getAllResume({
        userEmail: userData?.user?.email,
      });
      router.refresh();
    }
    if (!isDeleteLoading && isDeleteError && !isDeleteSuccess) {
      toast({
        title: "Couldn't Delete Resume",
        description: "Something wrong happened!!",
        variant: "destructive",
      });
    }
  }, [deleteResumeData, isDeleteSuccess, isDeleteError, isDeleteLoading]);

  useEffect(() => {
    if (status === "authenticated" && userData.user?.email && !allResumes) {
      getAllResume({
        userEmail: userData.user?.email,
      });
    }
  }, [userData, status, allResumes]);

  return (
    <div className="container w-full mt-4 px-1">
      <div className="flex justify-between">
        <h1 className="text-2xl">Dashboard</h1>
        <CreateResumeCarousel
          triggerElement={
            <p className="bg-slate-900 text-white px-4 py-2 rounded-lg">
              Create New
            </p>
          }
        />
      </div>
      <div className="pt-8 w-full">
        <div className="flex align-middle gap-4 flex-wrap">
          {allResumes &&
          allResumeSuccess &&
          !allResumeError &&
          !allResumeLoading &&
          allResumes.length > 0 ? (
            allResumes.map((res: any) => (
              <div className="card bg-base-100 w-[26rem] shadow-xl cursor-pointer">
                <div className="card-body flex flex-row justify-between break-words">
                  <h2 className="card-title w-2/3 break-words">{res.name}</h2>
                  <div className="flex flex-row justify-center align-middle gap-2 min-w-1/4">
                    <button
                      className="btn btn-accent btn-sm text-white text-sm"
                      onClick={() => {
                        router.push(`/Resume/${res._id}`);
                      }}
                    >
                      {" "}
                      <Edit2Icon />{" "}
                    </button>
                    <DeleteResumeDialog
                      res={res}
                      onDeleteResume={deleteResume}
                      isDeleteLoading={isDeleteLoading}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : allResumeLoading ? (
            <div className="w-full min-h-full flex flex-row justify-center items-center">
              <span className="loading loading-spinner text-teal-500 loading-xl"></span>
            </div>
          ) : (
            <EmptyDashboard />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
