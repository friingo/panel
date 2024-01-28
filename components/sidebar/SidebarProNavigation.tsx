import { BiGlobe, BiSolidServer } from "react-icons/bi";
import SidebarNavigationItem from "./SidebarNavigationItem";
import SidebarUpgradeOrganization from "./SidebarUpgradeOrganization";

type SidebarProNavigationProps = {
	plan: 'free' | 'pro' | 'enterprise';
};

export default function SidebarProNavigation({ plan }: SidebarProNavigationProps) {
	if(plan === 'free') {
		return (
			<>
				<div className='flex-[0.2]'></div>
				<div className='w-64 flex flex-col items-center gap-2 my-2'>
					<SidebarUpgradeOrganization />
					{/*<SidebarNavigationItem name='Network' link='/network' icon={BiGlobe} locked />*/}
					{/*<SidebarNavigationItem name='Nodes' link='/nodes' icon={BiSolidServer} locked />*/}
				</div>
			</>
		);
	}

	return (
		<div className='w-64 flex flex-col items-center gap-2 my-2'>
			<SidebarNavigationItem name='Network' link='/network' icon={BiGlobe} />
			<SidebarNavigationItem name='Nodes' link='/nodes' icon={BiSolidServer} />
		</div>
	);
}
