import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function NavbarLogo({ className }: { className?: React.ReactNode }) {
	return (
		<Avatar className={cn('flex items-center rounded-md', className)}>
      <AvatarImage src="/logo.jpg" alt="My cute avatar" />
      <AvatarFallback>KS</AvatarFallback>
    </Avatar>
	)
}