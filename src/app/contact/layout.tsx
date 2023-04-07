import { ReactElement } from "react";

export default function ContactLayout({children}:{children:React.ReactNode}){
    return(
        <div>
            Contact Layout 
            <div>{children}</div>
        </div>
    )
}