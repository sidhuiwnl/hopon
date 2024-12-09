"use client";

import { Button } from "@/components/ui/button";
import Loader from "../loader";
import { AutomationDuoToneWhite } from "@/icons/automation-duo-tone-white";
import { useCreateAutomation } from "@/hooks/use-create-automation";
import { useMemo } from "react";
import { v4 } from "uuid";

export default function CreateAutomation() {

  const mutationId = useMemo(() => v4(),[]);
  console.log(mutationId)
  const { mutate, isPending } = useCreateAutomation(mutationId);


  return (
    <Button
      onClick={() => mutate({ name: "Untitled", id : mutationId, createdAt : new Date(), keyword : [] })}
      className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]"
    >
      <Loader state={isPending}>
        <AutomationDuoToneWhite />
        <p className="lg:inline hidden"> Create an Automation</p>
      </Loader>
    </Button>
  );
}
