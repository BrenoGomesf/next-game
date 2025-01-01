import { cn } from "@/helpers/cn";

export type FormButtonProps = React.ComponentProps<'button'> & {
    label?: string | null | undefined;
    action?: () => void
}

export default function FormButton({label, action, className, children, ...props}: FormButtonProps) {
    return(
        <form action={action} className="flex gap-2 items-center rounded-lg p-2 w-full">
            <button {...props} type="submit" className={cn('block', className)}>
                {label || children}
            </button>
        </form>
    )
}