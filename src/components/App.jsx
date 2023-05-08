import Header from './Header/Header'
import List from './List/List'
import Workspace from './Workspace/Workspace'
import { useState, useEffect } from 'react'
import { db } from '../db'
import AppContext from '../context'
import { useLiveQuery } from 'dexie-react-hooks'
import { DragDropContext } from '@hello-pangea/dnd'

export default function App() {
	const [title, setTitle] = useState('Your title here..')
	const [text, setText] = useState('Type here anything you want!')
	const [date, setDate] = useState(new Date().toLocaleString())
	const [isActive, setIsActive] = useState(false)
	const [status, setStatus] = useState('')
	const [searchText, setSearchText] = useState()

	useEffect(() => {
		const notesOrder = JSON.parse(localStorage.getItem('notesOrder'))
		if (!notesOrder) {
			localStorage.setItem('notesOrder', JSON.stringify([]))
		}
	}, [])

	async function addNote() {
		try {
			const id = await db.notes.add({
				title,
				text,
				date,
				isActive,
			})
			const notesOrder = JSON.parse(localStorage.getItem('notesOrder')) || []
			setStatus(`Note ${title} successfully added!`)
			setTitle('Note title')
			setText('Write here anything you want!')
			setDate(new Date().toLocaleString())
			await db.notes.where('id').notEqual(id).modify({ isActive: false })
			setIsActive(true)
			notesOrder.push(id)
			localStorage.setItem('notesOrder', JSON.stringify(notesOrder))
		} catch (error) {
			setStatus(`[${status}] Failed to add ${title}: ${error}`)
		}
	}

	function useNotes() {
		const notes = useLiveQuery(() => db.notes.toArray())
		return notes
	}
	const notes = useNotes()

	async function setActiveNote(id) {
		await db.notes.update(id, { isActive: true })
		await db.notes.where('id').notEqual(id).modify({ isActive: false })
	}

	function updateNote(id, newText) {
		db.notes.update(id, { text: newText })
	}

	function updateNoteTitle(id, newTitle) {
		db.notes.update(id, { title: newTitle })
	}

	function deleteNote(id) {
		id ? db.notes.delete(id) : console.log('select something :/')
		const notesOrder = JSON.parse(localStorage.getItem('notesOrder')) || []
		const filteredNotesOrder = notesOrder.filter((noteId) => noteId !== id)
		localStorage.setItem('notesOrder', JSON.stringify(filteredNotesOrder))
	}

	const onDragEnd = (result) => {
		const { destination, source, draggableId } = result

		if (!destination) {
			return
		} else if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return
		}

		// TODO
	}

	const contextValue = {
		addNote,
		setActiveNote,
		updateNote,
		updateNoteTitle,
		deleteNote,
		setSearchText,
	}

	return (
		<AppContext.Provider value={contextValue}>
			<div className='flex flex-col lg:flex-row'>
				<div className='flex flex-col'>
					<Header activeNote={notes?.find((note) => note.isActive === true)} />
					<DragDropContext onDragEnd={onDragEnd}>
						<List notes={notes} searchText={searchText} />
					</DragDropContext>
				</div>
				<Workspace activeNote={notes?.find((note) => note.isActive === true)} />
			</div>
		</AppContext.Provider>
	)
}
