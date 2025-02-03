import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
	return (
		<div className="min-h-screen font-poppins">
			<Header />
			<Hero />
		</div>
	);
}
