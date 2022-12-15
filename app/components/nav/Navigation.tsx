"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import NavLink from "./NavLink";
import NavMenu from "./NavMenu";
import { MdLogin, MdLogout } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import NavMenuItem from "./NavMenuItem";
import SpinnerMini from "../ui/SpinnerMini";

export default function Navigation() {
  const session = useSession();
  return (
    <>
      <nav className="sticky top-0 z-10 w-[100%] bg-black h-[6rem] flex items-center justify-center">
        <ul className="z-30 w-[100%] md:w-[75%] flex justify-evenly items-center">
          <NavLink description="WARZONE" destination="/" />
          <NavLink description="GUIDES" destination="/guides" />
          {session.status === "authenticated" ? (
            <NavMenu description="menu">
              <NavMenuItem description="Numero Uno" destination="#" />
              <NavMenuItem description="Numero Due" destination="#" />
              <NavMenuItem description="Numero Tercio" destination="#" />

              <NavMenuItem
                description="Logout"
                ico={<MdLogout size="2em" />}
                handleClick={(e) => signOut()}
              />
            </NavMenu>
          ) : (
            <></>
          )}
          {session.status === "unauthenticated" ? (
            <NavMenu
              handleClick={(e) => signIn()}
              description="Log In "
              ico={<MdLogin size="2em" />}
            ></NavMenu>
          ) : (
            <></>
          )}
          {session.status === "loading" ? <SpinnerMini /> : <></>}
        </ul>
      </nav>
    </>
  );
}
