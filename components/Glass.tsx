import { JSX } from "react";
import { cn } from "@/utils/StyleUtils";

type GlassProps = {
	children: JSX.Element | JSX.Element[] | undefined;
	className?: string;
}

export default function Glass({ children, className }: GlassProps) {
	return (
		<div className={cn('bg-white bg-opacity-25 shadow-md backdrop-blur-sm rounded-xl border-2 border-solid border-white border-opacity-20', className)}>
			{children}
		</div>
	);
}
