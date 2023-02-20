import { Navbar, Home, About, Pagination } from './Components/components';

function App() {
  return (
    <div className="App w-[100vw]">
      <Pagination />
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App
