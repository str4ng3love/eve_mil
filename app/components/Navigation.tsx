import NavLink from "./NavLink";
import NavMenu from "./NavMenu";
import { AiOutlineUser } from 'react-icons/ai'
import NavMenuItem from "./NavMenuItem";

export default function Navigation() {
  return (
    <>
      <nav className="sticky top-0 z-10 w-[100%] bg-black h-[6rem] flex items-center justify-center">
        <ul className="z-30 w-[100%] md:w-[75%] flex justify-evenly items-center">
          <NavLink description="WARZONE" destination="/" />
          <NavLink description="GUIDES" destination="/guides" />
          <NavMenu description="menu" destination="#">
            <NavMenuItem description="Numero Uno" destination="#" />
            <NavMenuItem description="Numero Due" destination="#" />
            <NavMenuItem description="Numero Tercio" destination="#" />
            <NavMenuItem description="Numero Quatro" destination="#" />
          </NavMenu>
        </ul>
      </nav>
    </>
  );
}
