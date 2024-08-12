"use client";

import { createDocument } from "@/lib/actions/room.actions";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "./Loader";

const AddDocumentBtn =  ({ userId, email }: AddDocumentBtnProps) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const addDocumentHandler = async () => {
    setLoading(true);
    try {
      const room = await createDocument({ userId, email });

      if (room) {
        router.push(`/documents/${room.id}`);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

  };

  return (
    <Button
      type="submit"
      onClick={addDocumentHandler}
      className="gradient-blue flex gap-1 shadow-md"
    >
      <p className="hidden sm:block">
        {loading ? (
          <Loader>Creating a blank document </Loader>
        ) : (
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/add.svg"
              alt="add"
              width={24}
              height={24}
            />
            <span>Start a blank document</span>
          </div>
        )}
      </p>
    </Button>
  );
};

export default AddDocumentBtn;
