import { getAllAutomations, getAutomationInfo } from "@/actions/automations";
import { onUserInfo } from "@/actions/user";
import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function prefetch(
  client: QueryClient,
  action: QueryFunction,
  key: string
) {
  return await client.prefetchQuery({
    queryKey: [key],
    queryFn: action,
    staleTime: 60000,
  });
}

export async function PrefetchUserProfile(client: QueryClient) {
  return await prefetch(client, onUserInfo, "user-profile");
}

export async function PrefetchUserAutomations(client: QueryClient) {
  return await prefetch(client, getAllAutomations, "user-automations");
}


export async function PrefetchUserAutomation( client : QueryClient,automationId : string){
  return await prefetch(client,() => getAutomationInfo(automationId),("automation-info"))
} 