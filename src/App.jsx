import {
	Header,
	ProfileInfo,
	LinksList,
} from './components'

function App() {
	return (
		<>
			<Header />
			<main className='w-[91%] max-w-2xl m-2.5'>
				<ProfileInfo />
				<LinksList />
			</main>
		</>
	)
}

export default App