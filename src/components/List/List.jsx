import ListItem from './ListItem'

import { useContext } from 'react'
import AppContext from '../../context'

export default function List({ notes, searchText }) {
	const contextValue = useContext(AppContext)
	const filteredNotes = searchText
		? notes.filter((note) =>
				note.title.toLowerCase().includes(searchText.toLowerCase())
		  )
		: notes
	return (
		<AppContext.Provider value={contextValue}>
			<div className='flex max-h-[87vh] flex-col overflow-y-auto pb-5 animate-in fade-in-5 slide-in-from-bottom-4 duration-2000 lg:pb-0'>
				{filteredNotes?.map((note) => (
					<ListItem
						noteTitle={note.title}
						noteText={note.text}
						noteTime={note.date}
						noteActive={note.isActive}
						noteId={note.id}
						key={note.id}
					/>
				))}
			</div>
		</AppContext.Provider>
	)
}
