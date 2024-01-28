import { cn } from "@/utils/StyleUtils";
import { titleCase } from "@/utils/StringUtils";

type SidebarOrganizationProps = {
	name: string;
	plan: 'free' | 'pro' | 'enterprise';
};

function SidebarOrganization({ name, plan }: SidebarOrganizationProps) {
	const planColor = (plan === 'free')
		? 'bg-black dark:bg-white from-none to-none bg-opacity-10 dark:bg-opacity-10 text-black dark:text-white'
		: (plan === 'pro')
			? 'from-sky-300 dark:from-sky-400 to-purple-300 dark:to-purple-400 text-white bg-gradient-to-r'
			: 'from-rose-300 dark:from-rose-400 to-purple-300 dark:to-purple-400 text-white bg-gradient-to-r';

	return (
		<div className='w-64 h-16 flex justify-center items-center'>
			<button className='w-52 h-16 bg-black dark:bg-white bg-opacity-5 dark:bg-opacity-10 rounded-3xl flex flex-row items-center hover:bg-opacity-10 dark:hover:bg-opacity-20 transition-colors duration-100 cursor-pointer focus-visible:ring-sky-600 dark:focus-visible:ring-sky-300 focus-visible:ring-4 outline-none'>
				<div className={cn('w-10 h-10 m-2 rounded-full flex items-center justify-center', planColor)}>
					<span className='text-base font-bold'>{name.substring(0, 2).toUpperCase()}</span>
				</div>
				<div className='flex flex-col items-start'>
					<span className='text-xl font-semibold text-black dark:text-white'>{name}</span>
					<span className='text-black dark:text-white text-opacity-50 dark:text-opacity-50'>{`${titleCase(plan)} Plan`}</span>
				</div>
			</button>
		</div>
	);
}

export default SidebarOrganization;
