import { HiSun, HiMoon } from 'react-icons/hi'
import { useDarkMode } from './useDarkMode'

export const DarkModeToggler = () => {
	const [isDarkMode, setIsDarkMode] = useDarkMode()
	return (
		<div>
			<button
				title='Change theme'
				onClick={setIsDarkMode}
				className='relative mt-3 flex h-[35px] w-[70px] items-center rounded-lg bg-[#4338ca] dark:bg-[#4338ca] md:mt-0'
			>
				<div className='absolute ml-2 flex h-[25px] w-[25px] items-center justify-center rounded-lg bg-white text-indigo-400 transition-all dark:ml-9 dark:text-yellow-400'>
					{isDarkMode ? <HiMoon /> : <HiSun />}
				</div>
			</button>
		</div>
	)
}
