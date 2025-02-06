import TabCard from "./TabCard";
import Timeline from "./Timeline";

export default function Skills() {
	return (
		<section className="min-h-block bg-base-dark md:p-10 p-2">
			<div className="md:max-w-7xl mx-auto  min-h-block grid md:grid-cols-2 grid-cols-1 place-items-center p-4 md:p-0 ">
				<h2 className="md:col-span-2 mb-6">Skills and Experience</h2>
				<TabCard />

				<Timeline />
			</div>
		</section>
	);
}
