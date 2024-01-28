import SidebarBottomNavigation from "./SidebarBottomNavigation";
import SidebarLogo from "./SidebarLogo";
import SidebarNavigation from "./SidebarNavigation";
import SidebarOrganization from "./SidebarOrganization";
import SidebarProNavigation from "./SidebarProNavigation";

import { cn } from "@/utils/StyleUtils";

type SidebarProps = {
	font: string;
};

const plan: 'free' | 'pro' | 'enterprise' = 'free';
const name = 'Personal';

function Sidebar({ font }: SidebarProps) {
	return (
		<div className={cn('z-10 h-screen w-64 bg-white dark:bg-black absolute left-0 top-0 flex flex-col overflow-scroll scrollbar-hidden', font)}>
			<SidebarLogo />
			<SidebarOrganization name={name} plan={plan} />
			<div className='flex-[0.2]'></div>
			<SidebarNavigation />
			<SidebarProNavigation plan={plan} />
			<div className='flex-1'></div>
			<SidebarBottomNavigation />
		</div>
	);
}

export default Sidebar;
