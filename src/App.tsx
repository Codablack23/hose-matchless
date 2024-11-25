import './App.css'
import { Nav, Hero, Intro, About, Services, Events, } from './components/index.ts';

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Intro />
      <About />
      <Services />
      <Events />
      {/* <Team />
      <Contact />
      <Footer /> */}
    </>
  )
}

export default App
