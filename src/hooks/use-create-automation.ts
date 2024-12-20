

import { createAutomations, updateAutomationName } from "@/actions/automations";
import { useMutationData } from "./use-mutation-data";
import { useRef, useState,useEffect } from "react";

export  function useCreateAutomation(id? : string) {
  const { mutate, isPending } = useMutationData(
    ["create-automation"],
    () => createAutomations(id),
    "user-automations"
  );

  return {
    mutate,
    isPending,
  };
}

export function useEditionAutomation(automationId : string){
  const[edit,setEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const enableEdit = () => setEdit(true);
  const disableEdit = () => setEdit(false);

  const { isPending, mutate } = useMutationData(
    ["update-automation"],
    (data : {
      name : string
    }) => updateAutomationName(automationId,{
      name : data.name,
    }),
    'automation-info',
    disableEdit
  )

  useEffect(() => {
    function handleClickOutside(this: Document, event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node | null)
      ) {
        if (inputRef.current.value !== '') {
          mutate({ name: inputRef.current.value })
        } else {
          disableEdit()
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return {
    edit,
    enableEdit,
    disableEdit,
    inputRef,
    isPending,
  }
}
