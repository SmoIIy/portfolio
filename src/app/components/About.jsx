import icon from "../assets/icon.svg";
import Image from "next/image";

export default function About() {
	return (
		<section className="min-h-block bg-base-dark text-base-white">
			<div className="md:max-w-7xl mx-auto  min-h-block grid md:grid-cols-2 grid-cols-1 place-items-center p-4">
				<Image
					className="md:m-8 aspect-video md:size-96 hidden md:block"
					src={icon}
					alt="Logo"
				/>
				<div className="md:order-1 order-first">
					<h2 className="md:text-6xl text-4xl mb-4 md:mb-12 font-bold text-center uppercase">
						About me
					</h2>
					<p className="leading-6.5">
						Hi! My name is Janus, i am 27 years old and i am a
						multimediadesigner/frontend developer. I pride myself in
						creating sleek, beautiful and easy to use solutions for
						customers and friends alike, and I believe that
						communication is the key to a successful product.
					</p>
					<Image
						className="md:m-8 aspect-video md:hidden mx-auto self-center"
						src={icon}
						alt=""
					/>
					<p className="leading-6.5">
						<br />I have always been interested in technology and
						learning how things work. This has made it easier for me
						to learn new things, whether it's a new framework,
						program, language or whatever it might be - i believe
						that i can figure it out. I also like creating small
						sites for fun, like quizzes or games. I like
						communicating and connecting with people, and i really
						enjoy meeting new people.
					</p>
				</div>
			</div>
		</section>
	);
}
