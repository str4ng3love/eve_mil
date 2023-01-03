'use client';
import Button, { BType } from '../components/ui/Button';
import CoolHeading, { TAlign } from '../components/headings/CoolHeading';
import { useEffect} from 'react';
import { useRouter } from 'next/navigation';


export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
const router = useRouter()
  return (
    <div className=' mt-40 w-full flex justify-center items-center'>
        <div className=' p-4 rounded-md flex justify-center items-center flex-col bg-rose-500'>
      <CoolHeading text='Something went wrong!'/>
      <Button type={BType.button} text='Go back' handleClick={()=>{router.back()}}></Button>
        </div>
    </div>
  );
}
