



import Reply from "./Reply";

type Props = {
  message: string;
};

export default function Comment(props: Props) {

  return (
    <div className="flex flex-col w-[80%]  p-4 mb-4 font-Abel">
      <div className="w-full flex flex-col justify-start">
        <span className="p-1 font-bold">user's name</span>
        <span className="p-1">{props.message}</span>
      </div>

      
      <Reply />

 
    </div>
  );
}
