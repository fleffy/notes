import ListItem from './ListItem'

export default function List({ notes }) {
	return (
		<div className='flex flex-col pb-5 md:pb-0'>
			{notes?.map((note) => (
				<ListItem noteTitle={note.title} noteTime={note.date} key={note.id} />
			))}
		</div>
	)
}
