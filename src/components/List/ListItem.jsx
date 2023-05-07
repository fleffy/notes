import { useContext } from 'react'
import AppContext from '../../context'

export default function ListItem({
	noteTitle,
	noteTime,
	noteText,
	noteActive,
	noteId,
}) {
	const { setActiveNote } = useContext(AppContext)
	return (
		<button
			onClick={() => {
				setActiveNote(noteId)
			}}
			className={`${
				noteActive
					? `mx-4 my-2 scale-[0.98] rounded-xl bg-slate-100/75 p-4 px-8 text-left text-slate-500 shadow-sm transition-all hover:scale-[0.99] hover:bg-slate-200 dark:bg-[#4940ac]/60 dark:text-slate-50 dark:hover:bg-[#4338ca]`
					: `mx-4 my-2 rounded-xl bg-slate-100 p-4 px-8 text-left text-slate-800 shadow-sm transition-all hover:scale-[0.99] hover:bg-slate-200 dark:bg-[#4338ca]/60 dark:text-slate-50 dark:hover:bg-[#4940ac]`
			}`}
		>
			{noteTitle.length > 64 ? (
				<div className='flex max-w-lg items-center'>
					<h4 className='w-xl overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold'>
						{noteTitle}
					</h4>
				</div>
			) : (
				<div className='text-lg font-semibold'>{noteTitle}</div>
			)}
			<p className='text-sm opacity-75'>{noteTime}</p>
		</button>
	)
}
