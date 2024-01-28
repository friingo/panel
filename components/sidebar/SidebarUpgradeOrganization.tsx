import { BiGlobe, BiSolidLockOpenAlt, BiSolidServer } from "react-icons/bi";
import SidebarNavigationItem from "./SidebarNavigationItem";

function SidebarUpgradeOrganization() {
	return (
		<div className='w-52 h-64 flex flex-col items-center justify-center'>
			<div className='w-52 h-64 bg-gradient-to-b from-pink-300 dark:from-pink-400 to-purple-300 dark:to-purple-400 rounded-3xl flex flex-col justify-center items-center cursor-pointer p-2'>
				<span className='text-white dark:text-black text-xl font-bold'>Upgrade</span>
				<span className='text-white dark:text-black text-xl font-bold'>Organization</span>
				<div className='flex-1'></div>
				<button className='bg-white dark:bg-black w-48 rounded-[18px] h-12 focus-visible:ring-sky-600 dark:focus-visible:ring-sky-300 focus-visible:ring-4 outline-none'>
					<span className='text-black dark:text-white text-xl font-bold'>View Plans</span>
				</button>
				<div className='w-48 flex flex-col items-center gap-2 mt-4 border-4 border-white rounded-[18px]'>
					<BiSolidLockOpenAlt className='text-white w-6 h-6 absolute -translate-y-[1.125rem]'/>
					<SidebarNavigationItem name='Network' link='/network' icon={BiGlobe} locked />
					<SidebarNavigationItem name='Nodes' link='/nodes' icon={BiSolidServer} locked />
				</div>
			</div>
		</div>
	);
}

export default SidebarUpgradeOrganization;
