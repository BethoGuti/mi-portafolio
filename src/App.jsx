import { useState } from "react";
import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";

function App() {
  const [focus, setFocus] = useState({
    about: false,
    projects: false,
  });

  return (
    <div className="bg-gray-900">
      <Nav focus={focus} />
      <Header />
      <AboutMe setFocus={setFocus} />
      <Projects setFocus={setFocus} />
    </div>
  );
}

export default App;
