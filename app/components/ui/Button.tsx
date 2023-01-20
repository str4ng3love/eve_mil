

export enum BType {
  submit,
  button,
  erase,
}

type Props = {
  type: BType;
  text: string;
  url?: string;
  handleClick?: (
    event: React.PointerEvent<HTMLButtonElement>
  ) => void;
};

export default function Button({ type, text, url, handleClick }: Props) {
  return (
    <>
      {type === 0 ? (
        <button
          type={`submit`}
          className="h-fit p-4 m-4 uppercase font-bold font-Abel transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-black hover:shadow-link w-fit rounded-md bg-black/80 text-white "
        >
          {text}
        </button>
      ) : (
        <></>
      )}
      {type === 1 ? (
        <button
          onClick={handleClick}
          
          className="h-fit p-4 m-4 uppercase font-bold font-Abel transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-black hover:shadow-link w-fit rounded-md bg-black/80 text-white "
          type={"button"}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
      {type === 2 ? (
        <button
          onClick={handleClick}
          className="p-2 m-2 uppercase font-bold font-Abel transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-black hover:shadow-link min-w-[2.5rem] h-10 rounded-md bg-red-600 text-white "
          type={"button"}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
