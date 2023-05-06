export default function ListItem({
	noteTitle,
	noteTime,
	noteText,
	noteActive,
}) {
	return (
		<button className='mx-4 my-2 rounded-xl bg-slate-100 p-4 px-8 text-left text-slate-800 transition-all dark:bg-[#4338ca]/60 dark:text-slate-50'>
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
