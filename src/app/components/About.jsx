export default function About() {
	return (
		<section className="min-h-block bg-base-dark text-base-white">
			<div className="md:max-w-7xl mx-auto  min-h-block grid md:grid-cols-2 grid-cols-1 place-items-cente p-4">
				<img
					className="md:m-8"
					src="https://picsum.photos/400/600"
					alt=""
				/>
				<div className="order-first">
					<h2 className="md:text-6xl text-4xl mb-4 md:mb-12 font-bold  text-center uppercase">
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
