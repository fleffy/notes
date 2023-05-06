import Searchbar from './Searchbar'
import Buttons from './Buttons'
import logo from '../../assets/logo.svg'
import { DarkModeToggler } from '../DarkMode/DarkModeToggler'

export default function Header() {
	return (
		<nav className='flex flex-col items-center justify-between gap-3 p-6 md:flex-row'>
			<div className='flex flex-col items-center gap-3 md:flex-row'>
				<div className='flex cursor-default items-center pr-10 text-2xl font-bold text-[#4338ca] transition-all hover:scale-105 dark:text-white'>
					<img src={logo} alt='logo' className='pr-2' />
					Notes
				</div>
				<div className='pl-0 md:pl-3'>
					<Buttons />
				</div>
			</div>
			<Searchbar />
			<DarkModeToggler />
		</nav>
	)
}
