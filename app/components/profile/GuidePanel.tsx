


export default function GuidePanel(){
    return(
        <div className="capitalize border-solid border-2 border-white/80 p-4 flex justify-between">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-start w-full ">
            <span className="p-2 rounded-md">name{"string"}</span>
            <span className="p-2 rounded-md">
              likes {"number"}
            </span>
            <span className="p-2 rounded-md">
              dislikes {"number"}
            </span>
            <span className="p-2 rounded-md">
              comments {"number"}
            </span>
          </div>
          <div className="p-2 flex justify-between items-center">
            <span className="p-1">edit</span>
            <span className="p-1">delete</span>
          </div>
        </div>
      </div>
    )
}