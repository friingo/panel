import { Syne, Syne_Mono } from 'next/font/google';
import Sidebar from '@/components/sidebar/Sidebar';
import { cn } from '@/utils/StyleUtils';

const syne = Syne({ subsets: ['latin', 'latin-ext'], weight: 'variable' });
const syneMono = Syne_Mono({ subsets: ['latin', 'latin-ext'], weight: '400' });

export default function Dashboard() {
	return (
		<>
			<Sidebar font={syne.className} />
			<main className={cn('w-[100vw-16rem] h-screen friingo-bg from-sky-300 dark:from-sky-400 ring-pink-300 dark:ring-pink-400 to-rose-300 dark:to-rose-400 shadow-white dark:shadow-black select-none cursor-default', syne.className)}>
				<div className='w-full h-full flex flex-col'>

				</div>
			</main>
		</>
	);
}
