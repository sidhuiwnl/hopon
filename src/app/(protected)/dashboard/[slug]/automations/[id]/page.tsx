import Trigger from "@/components/global/automations/trigger";
import AutomationBreadCrumb from "@/components/global/bread-crumbs/automations";
import { Warning } from "@/icons/warning";
import { getAutomationInfo } from "@/actions/automations";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { PrefetchUserAutomation } from "@/react-query/prefetch";
import { HydrationBoundary } from "@tanstack/react-query";

type Props = {
  params: { id: string };
};

export async function generateMetdata({ params }: Props) {
  const info = await getAutomationInfo(params.id);
}

export default async function Page({ params }: Props) {
  const query = new QueryClient();
  await PrefetchUserAutomation(query, params.id);

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="flex flex-col items-center gap-y-20">
        <AutomationBreadCrumb id={params.id} />
        <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
          <div className="flex gap-x-2">
            <Warning />
            When...
          </div>
          <Trigger id={params.id} />
        </div>
      </div>
    </HydrationBoundary>
  );
}
