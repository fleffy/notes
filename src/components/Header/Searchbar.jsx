import { useContext, useState } from 'react'
import AppContext from '../../context'

export default function Searchbar() {
	const [searchText] = useState()
	const { setSearchText } = useContext(AppContext)
	return (
		<form className='flex w-full items-center gap-3 rounded-lg bg-slate-200/40 px-4 py-1 transition-all animate-in fade-in-5 slide-in-from-right-4 duration-1000 dark:bg-[#282828]'>
			<svg width='20' height='20' viewBox='0 0 20 20'>
				<path
					d='M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z'
					stroke='currentColor'
					fill='none'
				></path>
			</svg>
			<input
				className='h-[27px] w-max rounded-full bg-transparent p-2 py-4 outline-none transition-all'
				aria-autocomplete='both'
				maxLength='64'
				placeholder='Seacrh Note..'
				type='search'
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
			/>
			<button type='reset' title='Clear the query' hidden>
				<svg width='20' height='20' viewBox='0 0 20 20'>
					<path
						d='M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z'
						stroke='currentColor'
						fill='none'
					></path>
				</svg>
			</button>
		</form>
	)
}
