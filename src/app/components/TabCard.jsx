"use client";

import { useState } from "react";

function Card({ children, className }) {
	return (
		<div
			className={`bg-base-dark-lighter shadow-xl rounded-xl overflow-hidden ${className}`}
		>
			{children}
		</div>
	);
}

function CardContent({ children, className }) {
	return (
		<div className={`rounded-sm text-base-white p-2 min-h-40 ${className}`}>
			{children}
		</div>
	);
}

function Button({ children, onClick, className }) {
	return (
		<button
			onClick={onClick}
			className={`px-0 w-full py-2 text-sm font-medium cursor-pointer hover:bg-base-dark  transition-all duration-300 ${className}`}
		>
			{children}
		</button>
	);
}
function Skills() {
	return (
		<div className="flex w-full flex-wrap gap-2">
			<Skill skill="Web Development" />
			<Skill skill="UI Design" />
			<Skill skill="User Experience" />
			<Skill skill="Customer Communication" />
			<Skill skill="Photography" />
			<Skill skill="Branding" />
			<Skill skill="Photo Editing" />
			<Skill skill="Social Media" />
		</div>
	);
}
function Languages() {
	return (
		<div className="flex w-full flex-wrap gap-2">
			<Skill skill="Javascript" />
			<Skill className="basis-[120px]" skill="HTML" />
			<Skill className="basis-[100px]" skill="CSS" />
			<Skill className="basis-[100px]" skill="PHP" />
			<Skill className="basis-[100px]" skill="React" />
			<Skill className="basis-[150px]" skill="NextJS" />
			<Skill className="basis-[150px]" skill="TailwindCSS" />
			<Skill className="basis-[100px]" skill="Wordpress" />
			<Skill className="basis-[100px]" skill="Processing" />
			<Skill className="basis-[100px]" skill="Astro.js" />
			<Skill className="basis-[100px]" skill="REST API" />
			<Skill className="basis-[100px]" skill="Supabase" />
		</div>
	);
}
function Software() {
	return (
		<div className="flex w-full flex-wrap gap-2">
			<Skill skill="Javascript" />
			<Skill className="basis-[120px]" skill="Adobe Photoshop" />
			<Skill className="basis-[100px]" skill="Adobe Lightroom" />
			<Skill className="basis-[100px]" skill="Adobe Premier" />
			<Skill className="basis-[100px]" skill="Figma" />
			<Skill className="basis-[150px]" skill="Adobe Illustrator" />
			<Skill className="basis-[100px]" skill="Jira" />
			<Skill className="basis-[100px]" skill="Trello" />
		</div>
	);
}
function Skill({ skill, icon, className }) {
	return (
		<div
			className={`bg-base-dark p-2 rounded-sm grow min-w-max ${className}`}
		>
			<p>{skill}</p>
		</div>
	);
}

export default function TabCard() {
	const [activeTab, setActiveTab] = useState(0);
	const tabs = ["Skills", "Languages and frameworks", "Software"];
	const content = [<Skills />, <Languages />, <Software />];

	return (
		<Card className="w-full max-w-md mb-10">
			<div className="flex mb-4">
				{tabs.map((tab, index) => (
					<Button
						key={index}
						onClick={() => setActiveTab(index)}
						className={
							activeTab === index
								? "text-main-base border-b-2 "
								: "text-white border-b-2"
						}
					>
						{tab}
					</Button>
				))}
			</div>
			<CardContent>{content[activeTab]}</CardContent>
		</Card>
	);
}
