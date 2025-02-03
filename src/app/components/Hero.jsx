import Button from "./Button";
import Image from "next/image";
import Headshot from "../assets/headshot.jpg";

export default function Hero() {
	return (
		<section className="h-block bg-base-white">
			<div className="md:max-w-7xl mx-auto  min-h-block grid md:grid-cols-2 grid-cols-1 place-items-center">
				<div className="max-w-prose  md:h-96 pt-12">
					<h2 className="md:text-4xl text-base-dark opacity-50 font-medium">
						Janus Bardrum
					</h2>
					<h1 className="text-main-base md:text-6xl/18 text-3xl font-extrabold">
						Multimediadesigner & Frontend Developer
					</h1>
					<Button anchor="#" body="Test" />
				</div>
				<Image
					src={Headshot}
					alt="headshot"
					className="h-96 w-96 object-cover rounded-full shadow-2xl"
				/>
			</div>
		</section>
	);
}
