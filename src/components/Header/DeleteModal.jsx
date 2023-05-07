import { useContext, useEffect } from 'react'
import AppContext from '../../context'

export default function DeleteModal({ activeNote }) {
	const { deleteNote, setOpenModal } = useContext(AppContext)

	useEffect(() => {
		const handleKeyPress = (e) => {
			if (e.key === 'Enter' || e.key === 'Delete') {
				setOpenModal(false)
				e.preventDefault()
				deleteNote(activeNote.id)
			} else if (e.keyCode === 27) {
				setOpenModal(false)
			}
		}

		window.addEventListener('keydown', handleKeyPress)

		return () => {
			window.removeEventListener('keydown', handleKeyPress)
		}
	}, [activeNote, deleteNote, setOpenModal])

	return (
		<div>
			<div className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center p-3 transition-all animate-in fade-in-5 slide-in-from-top-8 duration-1000 md:p-0'>
				<div className='rounded-xl bg-slate-50 p-8 shadow-lg'>
					<h2 className='mb-4 text-lg font-semibold text-slate-800'>
						Are you sure you want to delete this note?
					</h2>
					<div className='flex justify-center gap-3'>
						<button
							className='rounded-lg bg-[#4338ca] px-4 py-2 text-slate-50 transition-all hover:bg-[#e53935]'
							onClick={
								activeNote
									? () => {
											deleteNote(activeNote.id)
											setOpenModal(false)
									  }
									: () => console.log('select something :/')
							}
						>
							Delete
						</button>
						<button
							className='rounded-lg bg-gray-300 px-4 py-2 text-gray-700 transition-all hover:bg-gray-400'
							onClick={() => setOpenModal(false)}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
			<div className='fixed left-0 top-0 z-10 h-full w-full bg-black opacity-60 animate-in fade-in-5 duration-1000'></div>
		</div>
	)
}
