import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Projects from "./components/Projects";

export default function Home() {
	return (
		<div className="min-h-screen font-poppins">
			<Header />
			<Hero />
			<About />
			<Projects />

			<Header />
		</div>
	);
}
