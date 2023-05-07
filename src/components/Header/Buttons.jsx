import { useContext } from 'react'
import AppContext from '../../context'
import { BiPlus, BiTrash, BiPencil } from 'react-icons/bi'

export default function Buttons({ activeNote }) {
	const { addNote } = useContext(AppContext)
	return (
		<div className='flex gap-3'>
			<button className='rounded-lg border-[1px] p-3 transition-all hover:bg-[#4338ca] hover:text-white'>
				<BiPlus onClick={() => addNote()} />
			</button>
			<button className='rounded-lg border-[1px] p-3 transition-all hover:bg-[#4338ca] hover:text-white' onClick={() => console.log(activeNote.id, 'deleted')}>
				<BiTrash />
			</button>
			<button className='rounded-lg border-[1px] p-3 transition-all hover:bg-[#4338ca] hover:text-white'>
				<BiPencil />
			</button>
		</div>
	)
}
