import { cn } from "@/lib/utils"
import { ReactNode } from "react"


const Maxwidth = ({className, children}:{
    className?:string
    children?:ReactNode
}) => {
  return (
    <div className={cn("mx-auto max-w-screen-xl px-5 md:px-20 h-full w-full",className)}>
        {children}
    </div>
  )
}

export default Maxwidth