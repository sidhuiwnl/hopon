import Sidebar from "@/components/global/sidebar"

type Props = {
    children : React.ReactNode
    params : { slug : string }
}

export default function Layout({children,params} : Props){
    return(
        <div className="p-3">
            <Sidebar slug={params.slug} />
        </div>
    )
}