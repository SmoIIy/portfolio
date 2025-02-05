import Project from "./Project";
import echo from "@/app/assets/Screenshot_1311.png";
import hug from "@/app/assets/Screenshot_1310.png";
import per from "@/app/assets/Screenshot_1312.png";

export default function Projects() {
	return (
		<section className="min-h-block bg-base-white md:p-10 p-2">
			<h2 className="uppercase md:text-6xl text-4xl font-bold text-center md:mb-12 mt-4">
				My Projects
			</h2>
			<div className="md:max-w-7xl mx-auto  min-h-block grid lg:grid-cols-3 grid-cols-1 place-items-center p-4 md:p-0 text-center gap-4">
				<Project
					anchor="https://hugbageri.dk/"
					title="Hugbageri.dk"
					body="Developing and doing UX Design on a redesign for Hugbageri.dk. A gluten-free bakery, focusing on the love and care for baking. Created with Wordpress and woocommerce"
					src={hug}
					icon={wordpress()}
					st="true"
				/>
				<Project
					anchor="https://echogardiner.dk/"
					title="Echo Gardiner"
					body="Designing and developing a portfolio and showcase site for a small business that does curtains and interior design. Designed in Figma and developed in Astro.js"
					src={echo}
					icon={astro()}
					st="true"
				/>
				<Project
					anchor="https://afsluttendeeksamen.vercel.app/"
					title="Dj Per"
					body="Designing and developing a portfolio site for a DJ, aswell as creating a bookingsystem for managing customers. Designed in Figma, and developed with React and Next.js Final Exam project."
					src={per}
					icon={react()}
				/>
			</div>
		</section>
	);
}

function wordpress() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			color={"#3858E9"}
			fill={"none"}
		>
			<path
				d="M2 6H3M3 6L7.457 17.4921C8.10731 19.1689 8.43246 20.0073 8.9816 20C9.53074 19.9926 9.83482 19.1459 10.443 17.4524L10.5 17.2935M3 6H6.5M6.5 6H7.457M6.5 6L10.5 17.2935M10.5 17.2935L12.816 11"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10 6H11M11 6L15.457 17.4921C16.1073 19.1689 16.4325 20.0073 16.9816 20C17.5307 19.9926 17.8348 19.1459 18.443 17.4524L18.5 17.2935M11 6H14.5M14.5 6H15.457M14.5 6L18.5 17.2935M18.5 17.2935L20.5288 11.644M20.5288 11.644L21.5377 9.23491C21.9415 8.12432 22.0835 6.93739 21.9529 5.76443C21.7963 4.35795 21.1576 3 19.5012 3C17.9632 3 17.2101 4.72272 18.1898 5.89363C19.7701 7.78249 21.1719 9.87537 20.5288 11.644Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function react() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			color={"#5CD3F7"}
			fill={"none"}
		>
			<path
				d="M8.00001 12C8.00001 6.47715 9.79087 2 12 2C14.2091 2 16 6.47715 16 12C16 17.5228 14.2091 22 12 22C9.79087 22 8.00001 17.5228 8.00001 12Z"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M9.97531 8.61921C14.8173 5.85779 19.649 5.17014 20.7673 7.08331C21.8855 8.99648 18.8667 12.786 14.0247 15.5474C9.18271 18.3088 4.35098 18.9965 3.23277 17.0833C2.11455 15.1701 5.13329 11.3806 9.97531 8.61921Z"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M14.0247 8.61921C18.8667 11.3806 21.8855 15.1701 20.7673 17.0833C19.649 18.9965 14.8173 18.3088 9.97531 15.5474C5.13329 12.786 2.11455 8.99648 3.23277 7.08331C4.35098 5.17014 9.18271 5.85779 14.0247 8.61921Z"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
		</svg>
	);
}

function astro() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			color={"#f55536"}
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			width="24"
			height="24"
			strokeWidth="2"
		>
			<path
				d="M14.972 3.483c.163 .196 .247 .46 .413 .987l3.64 11.53a15.5 15.5 0 0 0 -4.352 -1.42l-2.37 -7.723a.31 .31 0 0 0 -.296 -.213a.31 .31 0 0 0 -.295 .214l-2.342 7.718a15.5 15.5 0 0 0 -4.37 1.422l3.657 -11.53c.168 -.527 .251 -.79 .415 -.986c.144 -.172 .331 -.306 .544 -.388c.242 -.094 .527 -.094 1.099 -.094h2.612c.572 0 .858 0 1.1 .094c.213 .082 .4 .217 .545 .39"
				stroke="black"
			></path>
			<path d="M9 18c0 1.5 2 3 3 4c1 -1 3 -3 3 -4q -3 1.5 -6 0"></path>
		</svg>
	);
}
