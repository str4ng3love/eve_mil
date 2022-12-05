export default function Card() {
  return (
    <>
      <div className="rounded-md p-4 m-4 w-[300px] h-[200px] sm:w-[200px] sm:h-[300px] bg-black/80 flex flex-col justify-between shadow-backShadow transition-all ease duration-500 hover:bg-white hover:text-black hover:scale-110 hover:shadow-link">
        <h3 className="text-[1.25rem] font-bold">Biga Carda</h3>
        <p className="overflow-hidden font-bold  max-h-[150px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, totam?</p>
      </div>
    </>
  );
}
