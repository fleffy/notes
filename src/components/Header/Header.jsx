import Searchbar from './Searchbar'
import logo from '../../assets/logo.svg'
import { DarkModeToggler } from '../DarkMode/DarkModeToggler'

export default function Header() {
	return (
		<nav className='flex items-center justify-between p-6 px-[1.5rem] xl:px-[7.5rem]'>
			<div className='flex cursor-default items-center text-2xl font-bold text-[#4338ca] transition-all hover:scale-105 dark:text-white'>
				<img src={logo} alt='logo' className='pr-2' />
				Notes
			</div>
			<Searchbar />
			<DarkModeToggler />
		</nav>
	)
}
