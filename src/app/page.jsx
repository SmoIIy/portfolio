import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Projects from "./components/Projects";
import Test from "./components/Test";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
	return (
		<div className="min-h-screen font-poppins">
			<Header />
			<Hero />
			<About />
			<Projects />
			<Skills />

			<Header />
		</div>
	);
}
