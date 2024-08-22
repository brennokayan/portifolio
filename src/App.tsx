import { Navbar } from "./components/navBar";
import { AboutMe } from "./pages/about";
import { Contacts } from "./pages/contacts";
import { Home } from "./pages/home";
import { Projects } from "./pages/projects";
import { Skills } from "./pages/skills";


export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
}
