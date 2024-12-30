import { cn } from "@/lib/utils";

export default function Container({
 children,
 className,
}: {
 children: React.ReactNode;
 className?: string;
}) {
 return (
  <div className={cn('max-w-[1232px] px-4 mx-auto', className)}>{children}</div>
 );
}
