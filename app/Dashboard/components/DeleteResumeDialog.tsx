import React from "react";
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
import { Trash2Icon } from "lucide-react";

const DeleteResumeDialog = (props: {
  res: any;
  onDeleteResume: (id: string) => void;
  isDeleteLoading: boolean | null;
}) => {
  const { res, onDeleteResume, isDeleteLoading } = props;
  return (
    <Dialog>
      <DialogTrigger>
        <button className="btn btn-error btn-sm text-white text-sm">
          {" "}
          <Trash2Icon />{" "}
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Do you want to delete {res.name} ?
        </DialogDescription>
        <DialogFooter>
          <button
            className="btn btn-error btn-sm text-white text-sm"
            onClick={() => {
              onDeleteResume(res._id);
            }}
          >
            {isDeleteLoading ? (
              <span className="loading loading-spinner text-white loading-sm"></span>
            ) : (
              "Delete"
            )}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteResumeDialog;
