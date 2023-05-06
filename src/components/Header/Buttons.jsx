import { BiPlus, BiTrash, BiPencil } from 'react-icons/bi'

export default function Buttons() {
	return (
		<div className='flex gap-3'>
			<button className='rounded-lg border-[1px] p-3 transition-all hover:bg-[#4338ca] hover:text-white'>
				<BiPlus />
			</button>
			<button className='rounded-lg border-[1px] p-3 transition-all hover:bg-[#4338ca] hover:text-white'>
				<BiTrash />
			</button>
			<button className='rounded-lg border-[1px] p-3 transition-all hover:bg-[#4338ca] hover:text-white'>
				<BiPencil />
			</button>
		</div>
	)
}
