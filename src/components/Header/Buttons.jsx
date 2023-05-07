import { useContext, useState } from 'react'
import AppContext from '../../context'
import { BiPlus, BiTrash } from 'react-icons/bi'
import DeleteModal from './DeleteModal'

export default function Buttons({ activeNote }) {
	const { addNote, deleteNote } = useContext(AppContext)
	const [openModal, setOpenModal] = useState(false)

	const contextButtons = {
		deleteNote,
		setOpenModal,
	}

	return (
		<div>
			<div className='flex gap-3'>
				<button
					className='rounded-lg border-[1px] p-3 transition-all animate-in fade-in-5
					slide-in-from-top-8 duration-1000 hover:bg-[#4338ca] hover:text-white'
					onClick={() => addNote()}
				>
					<BiPlus />
				</button>
				<button
					className='rounded-lg border-[1px] p-3 transition-all animate-in fade-in-5 slide-in-from-bottom-8 duration-1000 hover:bg-[#4338ca] hover:text-white'
					onClick={
						activeNote
							? () => setOpenModal(true)
							: () => console.log('select something :/')
					}
				>
					<BiTrash />
				</button>
			</div>
			{openModal ? (
				<AppContext.Provider value={contextButtons}>
					<DeleteModal activeNote={activeNote} />
				</AppContext.Provider>
			) : (
				<></>
			)}
		</div>
	)
}
