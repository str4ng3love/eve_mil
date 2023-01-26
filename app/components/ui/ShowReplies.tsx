"use client"
import {useState} from 'react'
import {IoMdArrowDroprightCircle} from 'react-icons/io'
interface Props{
    getRepliesFn?: (e: React.PointerEvent<HTMLDivElement>) => void
    repAmount?: number;
}

export default function ShowReplies({getRepliesFn}:Props){
    const [showReplies, setShowReplies] = useState(false)
    return(
        <div>

        <div onClick={(e)=> {setShowReplies(!showReplies)}} className='font-bold cursor-pointer w-fit p-2 rounded-md hover:bg-stone-900 active:bg-stone-600 text-blue-500 flex items-center whitespace-pre-wrap'>
        <span> replies </span>
        { showReplies ? 
            <span className='transition-transform rotate-0'><IoMdArrowDroprightCircle/></span> :
            <span className='transition-transform rotate-90'><IoMdArrowDroprightCircle/></span>
        }
        
        </div>
    </div>

    )
}