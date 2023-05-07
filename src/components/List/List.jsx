import ListItem from './ListItem'

import { useContext } from 'react'
import AppContext from '../../context'

export default function List({ notes }) {
	const contextValue = useContext(AppContext)
	return (
		<AppContext.Provider value={contextValue}>
			<div className='flex max-h-[87vh] flex-col overflow-y-auto pb-5 md:pb-0'>
				{notes?.map((note) => (
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
