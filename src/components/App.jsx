import Header from './Header/Header'
import List from './List/List'
import Workspace from './Workspace/Workspace'

function App() {
	return (
		<div className='flex flex-col md:flex-row'>
			<div className='flex flex-col'>
				<Header />
				<List />
			</div>
			<Workspace />
		</div>
	)
}

export default App
