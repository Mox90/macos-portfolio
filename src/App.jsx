import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import {Dock, Navbar, Welcome} from "#components/index.js";
import {
    Contact,
    Terminal,
    Safari,
    Resume,
    Finder,
    Text,
    Image,
} from "#windows/index.js";
//import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(Draggable);

const App = () => {

  return (
    <main>
        <Navbar />
        <Welcome />
        <Dock />

        <Terminal />
        <Safari />
        <Resume />
        <Finder />

        <Text />
        <Image />

        <Contact />
    </main>
  )
}

export default App
