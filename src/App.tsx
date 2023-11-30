import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BackTtButton from "./components/BackTtButton";
import ProjectsList from "./components/ProjectsList";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<a id="top" />
			<BackTtButton />
			<Header />
			<Hero />
			<AboutMe />
			<ProjectsList />
			<Footer />
		</>
	);
}

export default App;
