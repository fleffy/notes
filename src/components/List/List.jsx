import ListItem from './ListItem'
import { useContext } from 'react'
import AppContext from '../../context'
import { Draggable, Droppable } from '@hello-pangea/dnd'

export default function List({ notes, searchText }) {
	const contextValue = useContext(AppContext)

	const filteredNotes = searchText
		? notes.filter((note) =>
				note.title.toLowerCase().includes(searchText.toLowerCase())
		  )
		: notes

	return (
		<AppContext.Provider value={contextValue}>
			<Droppable droppableId='droppableArea'>
				{(provided) => (
					<div
						{...provided.droppableProps}
						ref={provided.innerRef}
						className='flex max-h-[87vh] flex-col overflow-y-auto pb-5 animate-in fade-in-5 duration-2000 lg:pb-0'
					>
						{filteredNotes?.map((note) => {
							const index = notes.indexOf(note)
							return (
								<Draggable
									draggableId={`${note.id}`}
									index={index}
									key={note.id}
								>
									{(provided) => (
										<div
											{...provided.dragHandleProps}
											{...provided.draggableProps}
											ref={provided.innerRef}
										>
											<ListItem
												noteTitle={note.title}
												noteText={note.text}
												noteTime={note.date}
												noteActive={note.isActive}
												noteId={note.id}
												key={note.id}
											/>
										</div>
									)}
								</Draggable>
							)
						})}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</AppContext.Provider>
	)
}
