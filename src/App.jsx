import gsap from "gsap";
import {Navbar, Welcome} from "#components/index.js";
//import { ScrollTrigger } from "gsap/all";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const App = () => {

  return (
    <main>
        <Navbar />
        <Welcome />
    </main>
  )
}

export default App
