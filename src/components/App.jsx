import Header from './Header/Header'
import List from './List/List'
import Workspace from './Workspace/Workspace'
import { useState } from 'react'
import { db } from '../db'
import AppContext from '../context'
import { useLiveQuery } from 'dexie-react-hooks'

export default function App() {
	const [title, setTitle] = useState('Note title')
	const [text, setText] = useState('Write here anything you want!')
	const [date, setDate] = useState(new Date().toLocaleString())
	const [isActive, setIsActive] = useState(false)
	const [status, setStatus] = useState('')

	async function addNote() {
		try {
			const id = await db.notes.add({
				title,
				text,
				date,
				isActive,
			})
			setStatus(`Note ${title} successfully added!`)
			setTitle('Note title')
			setText('Write here anything you want!')
			setDate(new Date().toLocaleString())
			await db.notes.where('id').notEqual(id).modify({ isActive: false })
			setIsActive(true)
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
		await db.notes.where('id').notEqual(id).modify({ isActive: false })
		await db.notes.update(id, { isActive: true })
	}

	function updateNote(id, newText) {
		db.notes.update(id, { text: newText })
	}

	function updateNoteTitle(id, newTitle) {
		db.notes.update(id, { title: newTitle })
	}

	function deleteNote(id) {
		id ? db.notes.delete(id) : console.log('select something :/')
	}

	const contextValue = {
		addNote,
		setActiveNote,
		updateNote,
		updateNoteTitle,
		deleteNote,
	}

	return (
		<AppContext.Provider value={contextValue}>
			<div className='flex flex-col md:flex-row'>
				<div className='flex flex-col'>
					<Header activeNote={notes?.find((note) => note.isActive === true)} />
					<List notes={notes} />
				</div>
				<Workspace activeNote={notes?.find((note) => note.isActive === true)} />
			</div>
		</AppContext.Provider>
	)
}
