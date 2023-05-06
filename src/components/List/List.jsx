import ListItem from './ListItem'

export default function List() {
	return (
		<div className='flex flex-col pb-5 md:pb-0'>
			<ListItem
				noteTitle='fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
				noteTime='5/6/2023'
			/>
			<ListItem
				noteTitle='Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.'
				noteTime='5/6/2023'
			/>
		</div>
	)
}
