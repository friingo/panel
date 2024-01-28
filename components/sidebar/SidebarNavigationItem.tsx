import { ComponentType } from 'react';
import { useRouter } from 'next/router';
import { cn } from '@/utils/StyleUtils';

type SidebarNavigationItemProps = {
	name: string;
	link: string;
	icon: ComponentType<{ className: string }>;
	locked?: boolean;
};

function SidebarNavigationItem({ name, link, icon: IconComponent, locked }: SidebarNavigationItemProps) {
	const router = useRouter();

	if(router.route === link) {
		return (
			<button className='w-52 h-14 bg-gradient-to-r rounded-3xl from-sky-300 dark:from-sky-400 to-purple-300 dark:to-purple-400 flex flex-row items-center cursor-pointer focus-visible:ring-sky-600 dark:focus-visible:ring-sky-300 focus-visible:ring-4 outline-none'>
				<IconComponent className='m-4 w-8 h-8 text-3xl text-white dark:text-black' />
				<span className='text-white dark:text-black text-xl font-semibold'>{name}</span>
			</button>
		);
	}

	const navigate = locked ? () => {
		// TODO: Show modal for upgrading organization
		// eslint-disable-next-line no-alert
		alert('need to upgrade, change this to modal/notification');
	} : () => {
		router.push(link);
	}

	return (
		<button className={cn('relative  flex flex-row items-center cursor-pointer transition-colors duration-100 focus-visible:ring-sky-600 dark:focus-visible:ring-sky-300 focus-visible:ring-4 outline-none group', locked ? 'w-48 h-12 rounded-[18px]' : 'w-52 h-14 rounded-3xl bg-black dark:bg-white bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-5 dark:hover:bg-opacity-10')} onClick={navigate}>
			<IconComponent className={cn('m-4 w-8 h-8 text-3xl text-black dark:text-white text-opacity-25 dark:text-opacity-25 z-10', locked ? 'text-white dark:text-black text-opacity-100' : '')} />
			<span className={cn('text-black dark:text-white text-opacity-25 dark:text-opacity-25 text-xl font-semibold z-10', locked ? 'text-white dark:text-black text-opacity-100' : '')}>{name}</span>
		</button>
	);
}

export default SidebarNavigationItem;
