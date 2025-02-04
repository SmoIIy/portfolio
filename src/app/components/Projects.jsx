import Project from "./Project";

export default function Projects() {
	return (
		<section className="min-h-block bg-base-white md:p-10 p-2">
			<h2 className="uppercase md:text-6xl text-4xl font-bold text-center md:mb-12 mt-4">
				My Projects
			</h2>
			<div className="md:max-w-7xl mx-auto  min-h-block grid md:grid-cols-3 grid-cols-1 place-items-center p-4 md:p-0 text-center gap-4">
				<Project
					anchor="#"
					title="Project 1"
					body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis commodi ipsum recusandae officia architecto laudantium vitae ducimus maxime, nostrum non dolor excepturi expedita eveniet aspernatur, mollitia fuga quasi quae hic!"
				/>
				<Project
					anchor="#"
					title="Project 1"
					body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis commodi ipsum recusandae officia architecto laudantium vitae ducimus maxime, nostrum non dolor excepturi expedita eveniet aspernatur, mollitia fuga quasi quae hic!"
				/>
				<Project
					anchor="#"
					title="Project 1"
					body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis commodi ipsum recusandae officia architecto laudantium vitae ducimus maxime, nostrum non dolor excepturi expedita eveniet aspernatur, mollitia fuga quasi quae hic!"
				/>
			</div>
		</section>
	);
}
