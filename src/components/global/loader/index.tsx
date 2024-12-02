import { cn } from "@/lib/utils"
import { Spinner } from "./Spinner"

type Props = {
    state : boolean,
    className? : string,
    children : React.ReactNode,
    color? : string

}

export default function Loader({children,state,color,className} : Props){
    return state ? (
    <div className={cn(className)}>
        <Spinner color={color} />
    </div>
) : (
    children
)}