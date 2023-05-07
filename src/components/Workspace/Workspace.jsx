import { useContext } from 'react'
import AppContext from '../../context'

export default function Workspace({activeNote}) {
	const {updateNote} = useContext(AppContext)

	return (
		<aside className='h-screen w-full transition-all'>
			{activeNote ? (
				<div className='flex h-full flex-col gap-2 overflow-y-auto rounded-t-2xl bg-gray-200 p-2 dark:bg-[#4338ca]/60 md:rounded-l-2xl md:rounded-tr-none'>
					<button
						title='edit title'
						className='w-full overflow-hidden rounded-t-2xl bg-white p-4  text-lg font-bold text-slate-800 dark:bg-[#1c1c1c] dark:text-slate-50'
					>
						{activeNote.title}
					</button>
					<textarea
						className='h-full w-full resize-none rounded-b-2xl p-8 font-mono text-2xl text-slate-800 outline-none dark:bg-[#1c1c1c] dark:text-slate-50'
						value={activeNote.text}
						onChange={(e) => {
							updateNote(activeNote.id, e.target.value)
						}}
						type='text'
					/>
				</div>
			) : (
				<div className='flex h-full flex-col gap-2 overflow-y-auto rounded-t-2xl bg-gray-200 p-2 dark:bg-[#4338ca]/60 md:rounded-l-2xl md:rounded-tr-none'></div>
			)}
		</aside>
	)
}
