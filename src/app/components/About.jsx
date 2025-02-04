import icon from "../assets/icon.svg";
import Image from "next/image";

export default function About() {
	return (
		<section className="min-h-block bg-base-dark text-base-white">
			<div className="md:max-w-7xl mx-auto  min-h-block grid md:grid-cols-2 grid-cols-1 place-items-center p-4">
				<Image
					className="md:m-8 aspect-video size-96"
					src={icon}
					alt=""
				/>
				<div className="md:order-1 order-first">
					<h2 className="md:text-6xl text-4xl mb-4 md:mb-12 font-bold text-center uppercase">
						About me
					</h2>
					<p className="leading-6.5">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Dolorum pariatur sequi maiores dignissimos
						temporibus obcaecati veritatis vero, cupiditate quasi
						qui repellat eaque excepturi ducimus laudantium.
						Voluptatibus illum nemo ipsum beatae!
					</p>
					<p className="leading-6.5">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Dolorum pariatur sequi maiores dignissimos
						temporibus obcaecati veritatis vero, cupiditate quasi
						qui repellat eaque excepturi ducimus laudantium.
						Voluptatibus illum nemo ipsum beatae!
					</p>
				</div>
			</div>
		</section>
	);
}
