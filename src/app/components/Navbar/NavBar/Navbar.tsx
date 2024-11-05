import { HomeIcon, GamePadIcon, FaceHappyIcon, RouteIcon } from "@/app/components/icons"

export const NavBar = () => {
    return(
        <nav className="flex flex-col gap-4 bg-slate-900 border-r border-indigo-400/40 h-screen hover:border-indigo-400/80 w-72 p-2 text-slate-300">
            <div><img src="/assets/logo.png" alt="logo breno"  className="max-w-full p-2 h-"/></div>
            <ul className="flex-grow my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
                <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 flex gap-2 items-center cursor-pointer hover:text-slate-100">
                    <HomeIcon className="w-4 h-4"/>Home
                </li>
                <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 flex gap-2 items-center cursor-pointer hover:text-slate-100">
                  <GamePadIcon className="w-4 h-4"/> Games
                  </li>
                <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 flex gap-2 items-center cursor-pointer hover:text-slate-100">
                <FaceHappyIcon className="w-4 h-4"/> Top 10
                    </li>
                <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 flex gap-2 items-center cursor-pointer hover:text-slate-100">
                <RouteIcon className="w-4 h-4"/> Games  Walkthroughs
                    </li>
            </ul>
            <ul className="my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
                <li className="my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 flex gap-2 items-center cursor-pointer hover:text-slate-100">User</li>
            </ul>
        </nav>
    )
}