import {
  HomeIcon,
  GamePadIcon,
  FaceHappyIcon,
  RouteIcon,
} from "@/app/components/icons";

const NavBarList = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <ul className={`my-4 border-t border-indigo-400/20 hover:border-indigo-400/40 ${className}`}>
      {children}
    </ul>
  );
};
const NavBarListItem = ({ children, className  }: { children: React.ReactNode , className?: string }) => {
  return (
    <li className={`my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 flex gap-2 items-center cursor-pointer hover:text-slate-100 ${className}`}>
      {children}
    </li>
  );
};
//flex-grow border-t border-indigo-400/20 hover:border-indigo-400/40
export const NavBar = () => {
  return (
    <nav className="flex flex-col bg-slate-900 border-r border-indigo-400/20 h-screen hover:border-indigo-400/20 w-72 p-2 text-slate-300">
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
