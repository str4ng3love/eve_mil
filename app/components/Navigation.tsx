import NavLink from "./NavLink"

export default function Navigation(){
    return(
        <>
            <nav className="w-[100%] h-[6rem] bg-red-400 flex justify-center">
                <ul className="w-[100%] md:w-[75%] p-[0.3rem] bg-white flex justify-evenly  items-center">
                 <NavLink description="placeholder 1" destination="#" />
                 <NavLink description="placeholder 2" destination="#" />
                </ul>
            </nav>
        </>
    )
}