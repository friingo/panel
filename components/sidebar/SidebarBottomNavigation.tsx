import { BiSolidCog } from "react-icons/bi";
import SidebarNavigationItem from "./SidebarNavigationItem";

function SidebarBottomNavigation() {
	return (
		<div className='w-64 h-14 flex flex-col items-center mb-4'>
			<SidebarNavigationItem name='Settings' link='/settings' icon={BiSolidCog} />
		</div>
	);
}

export default SidebarBottomNavigation;
