import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type PageWrapperProps = HTMLAttributes<HTMLElement>;

export default function PageWrapper({
  children,
  className,
  ...props
}: PageWrapperProps) {
  return (
    <main
      className={cn("relative flex w-full flex-1 flex-col", className)}
      {...props}
    >
      {children}
    </main>
  );
}
