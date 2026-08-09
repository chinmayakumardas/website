import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-[calc(100%-2rem)] sm:w-[90%] md:w-[85%] lg:w-[75%] ",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

