export default function Workspace() {
	return (
		<aside className='h-screen w-full transition-all'>
			<div className='flex h-full flex-col gap-3 overflow-y-auto rounded-t-2xl bg-gray-200 p-2 dark:bg-[#4338ca]/60 md:rounded-l-2xl md:rounded-tr-none'>
				<button
					title='edit title'
					className='w-full overflow-hidden rounded-t-2xl bg-white p-4  text-lg font-bold text-slate-800 dark:bg-[#1c1c1c] dark:text-slate-50'
				>
					Note Title
				</button>
				<textarea
					className='h-full w-full rounded-b-2xl p-8 font-mono text-2xl text-slate-800 outline-none dark:bg-[#1c1c1c] dark:text-slate-50'
					type='text'
				/>
			</div>
		</aside>
	)
}