import { cn } from "@/helpers/cn";
type NavBarListItemProps = React.ComponentProps<"li">;

export const NavBarListItem = ({ children, className, ...props }: NavBarListItemProps) => {
    return (
      <li className={cn("my-2 rounded-lg bg-transparent p-2 hover:bg-slate-800 flex gap-2 items-center cursor-pointer hover:text-slate-100",  `${className}`)} {...props}>
        {children}
      </li>
    );
  };
  