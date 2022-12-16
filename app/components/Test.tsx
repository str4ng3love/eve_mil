'use client'
import Button ,{BType} from "./ui/Button"
import { useSession } from "next-auth/react"

export default function Test(){

    const session = useSession()

    const test = () => {
        console.log(session.data?.user)
    }
    return (
<>  
<div>

        <Button text="test" type={BType.button} handleClick={test} />
</div>
</>
    )
}