export default function Searchbar() {
	return (
		<form className='flex items-center gap-3'>
			<svg width='20' height='20' viewBox='0 0 20 20'>
				<path
					d='M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z'
					stroke='currentColor'
					fill='none'
				></path>
			</svg>
			<input
				className='h-[27px] w-[252px] rounded-full bg-transparent p-2 py-4 outline-none transition-all focus:outline-offset-2 focus:outline-[#7a62f6]'
				aria-autocomplete='both'
				autocomplete='off'
				autocorrect='off'
				autocapitalize='off'
				enterkeyhint='search'
				spellcheck='false'
				placeholder='Search notes'
				maxlength='64'
				type='search'
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
