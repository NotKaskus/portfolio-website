<<<<<<< HEAD
import { cn } from '@/lib/utils';
=======
import { cn } from "@/lib/utils"
>>>>>>> source/main

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
<<<<<<< HEAD
      className={cn('animate-pulse rounded-md bg-primary/10', className)}
      {...props}
    />
  );
}

export { Skeleton };
=======
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
>>>>>>> source/main
