import { getAllAutomations, getAutomationInfo } from "@/actions/automations";
import { useQuery } from "@tanstack/react-query";

export function useQueryAutomations(){
    return useQuery({
        queryKey : ["user-automations"],
        queryFn : getAllAutomations
    })
}


export function useQueryAutomation(id : string){
    return useQuery({
        queryKey : ["automation-info"],
        queryFn : () => getAutomationInfo(id)
    })
}