"use client"
import {useState} from 'react'
import Button, { BType } from '../ui/Button';
interface Props {
    message:string;
    cancelFn: (e:React.PointerEvent<HTMLElement>)=> void;
}

export default function EditComment({cancelFn,message}:Props){
    const [editedComment, setEditedComment] = useState()
    return(
        <>
            <div className="absolute top-0 left-[-50%] translate-x-[50%] w-full h-[100%] backdrop-blur-sm">
                <div className='flex flex-col justify-center items-center w-full h-full bg-black/80 shadow-backShadow'>
                    <div className='w-fit h-fit p-4 border-white border-solid border-2'>
                        {message}
                    </div>
                    <div>
                        <Button text='cancel' type={BType.erase} handleClick={cancelFn}/>
                    </div>
                </div>
            </div>
        </>
    )
}