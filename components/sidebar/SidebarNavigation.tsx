import { BiSolidComponent, BiSolidFolder, BiSolidNetworkChart, BiSolidPieChartAlt2 } from "react-icons/bi";
import SidebarNavigationItem from "./SidebarNavigationItem";

function SidebarNavigation() {
	return (
		<div className='w-64 flex flex-col items-center gap-2 my-2'>
			<SidebarNavigationItem name='Dashboard' link='/dashboard' icon={BiSolidPieChartAlt2} />
			<SidebarNavigationItem name='Servers' link='/servers' icon={BiSolidComponent} />
			<SidebarNavigationItem name='Workflows' link='/workflows' icon={BiSolidNetworkChart} />
			<SidebarNavigationItem name='File Manager' link='/file-manager' icon={BiSolidFolder} />
		</div>
	);
}

export default SidebarNavigation;
