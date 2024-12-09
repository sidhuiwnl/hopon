import Navbar from "@/components/global/navbar";
import Sidebar from "@/components/global/sidebar";
import { PrefetchUserProfile, PrefetchUserAutomations } from "@/react-query/prefetch";
import  { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"


type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

export default async function Layout({ children, params }: Props) {

  const query = new QueryClient();

  await PrefetchUserProfile(query);

  await PrefetchUserAutomations(query)

  return (
   <HydrationBoundary state={dehydrate(query)}>
      <div className="p-3">
        <Sidebar slug={params.slug} />
        <div
          className="lg:ml-[250px] 
        lg:pl-10 
        lg:py-5 
        flex 
        flex-col 
        overflow-auto"
        >
          <Navbar slug={params.slug} />
          {children}
        </div>
      </div>
    </HydrationBoundary> 
  );
}
