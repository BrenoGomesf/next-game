import {
  HomeIcon,
  GamePadIcon,
  FaceHappyIcon,
  RouteIcon,
} from "@/app/components/icons";
import { cn } from "@/helpers/cn";
import React from "react";

type NavBarProps = React.ComponentProps<"nav">;
type NavBarListProps = React.ComponentProps<"ul">;
type NavBarListItemProps = React.ComponentProps<"li">;

const NavBarList = ({ children, className, ...props }:  NavBarListProps) => {
  return (
    <ul className={cn("my-4 border-t border-indigo-400/20 hover:border-indigo-400/40",  `${className}`)} {...props}>
      {children}
    </ul>
  );
};
const NavBarListItem = ({ children, className, ...props }: NavBarListItemProps) => {
  return (
    <li className={cn("my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 flex gap-2 items-center cursor-pointer hover:text-slate-100",  `${className}`)} {...props}>
      {children}
    </li>
  );
};

export const NavBar = ({ className, ...props}: NavBarProps) => {
  return (
    <nav className={cn("flex flex-col bg-slate-900 border-r border-indigo-400/20 h-screen hover:border-indigo-400/20 w-72 p-2 text-slate-300",  `${className}`)} {...props}>
      <div className="flex my-4 justify-center items-center w-full">
        <img src="/assets/logo.png" alt="logo breno" className="w-auto h-36" />
      </div>
        <NavBarList className="flex-grow">
            <NavBarListItem>
                <HomeIcon className="w-4 h-4" />Home
            </NavBarListItem>
            <NavBarListItem>
                <GamePadIcon className="w-4 h-4" /> Games
            </NavBarListItem>
            <NavBarListItem>
                <FaceHappyIcon className="w-4 h-4" /> Top 10
            </NavBarListItem>
            <NavBarListItem>
                <RouteIcon className="w-4 h-4" /> Games
            </NavBarListItem>
        </NavBarList>
        <NavBarList>
            <NavBarListItem><FaceHappyIcon className="w-4 h-4" />User</NavBarListItem>
        </NavBarList>
    </nav>
  );
};
