import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
	return (
		<div className="min-h-screen font-poppins">
			<Header />
			<Hero />
			<About />
		</div>
	);
}
