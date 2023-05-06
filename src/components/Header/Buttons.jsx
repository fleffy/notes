import { BiPlus, BiTrash, BiPencil } from 'react-icons/bi'

export default function Buttons() {
	return (
		<div className='flex gap-3'>
			<button className='rounded-lg border-[1px] p-3'>
				<BiPlus />
			</button>
			<button className='rounded-lg border-[1px] p-3'>
				<BiTrash />
			</button>
			<button className='rounded-lg border-[1px] p-3'>
				<BiPencil />
			</button>
		</div>
	)
}
