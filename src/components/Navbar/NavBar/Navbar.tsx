import {
  HomeIcon,
  GamePadIcon,
  FaceHappyIcon,
  RouteIcon,
} from "@/components/icons";
import { cn } from "@/helpers/cn";
import React from "react";
import { NavBarProps } from "./types";
import { NavBarList } from "./NavBarList";
import { NavBarListItemLink } from "./NavBarListItemLink";
import { NavBarListItemButton } from "./NavBarListItemButton";
import Image from "next/image";


export const NavBar = ({ className, ...props}: NavBarProps) => {
  return (
    <nav className={cn("fixed top-0 left-0  flex flex-col bg-slate-900 border-r border-indigo-400/20 h-screen hover:border-indigo-400/20 w-72 p-2 text-slate-300",  `${className}`)} {...props}>
      <div className="flex my-4 justify-center items-center w-full">
        <Image src="/assets/logo.png" alt="logo breno" className="w-auto h-36" width={120} height={32}/>
      </div>
        <NavBarList className="flex-grow">
            <NavBarListItemLink href={"/"}>
                <HomeIcon className="w-4 h-4" />Home
            </NavBarListItemLink>
            <NavBarListItemLink  href={"/games"}>
                <GamePadIcon className="w-4 h-4" /> Games
            </NavBarListItemLink>
            <NavBarListItemLink  href={"/top-10"}>
                <FaceHappyIcon className="w-4 h-4" /> Top 10
            </NavBarListItemLink>
            <NavBarListItemLink  href={"/walkthoughs"}>
                <RouteIcon className="w-4 h-4" /> Walkthoughs
            </NavBarListItemLink>
            <NavBarListItemButton >
              <RouteIcon className="w-4 h-4" /> Walkthoughs
            </NavBarListItemButton>
        </NavBarList>
        <NavBarList>
            <NavBarListItemLink  href={"/user"}><FaceHappyIcon className="w-4 h-4" />User</NavBarListItemLink>
        </NavBarList>
    </nav>
  );
};
