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
		<div className={`rounded-sm text-base-white p-4 min-h-40 ${className}`}>
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
function Skill() {
	return (
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
			distinctio recusandae ab aperiam deleniti voluptate ullam assumenda
			odio earum nostrum vitae iure, ipsam incidunt quisquam. Nostrum
			itaque molestias nulla esse?
		</p>
	);
}

export default function TabCard() {
	const [activeTab, setActiveTab] = useState(0);
	const tabs = ["Skills", "Languages and frameworks", "Tab 3"];
	const content = [
		<Skill />,
		"Here is some content for Tab 2.",
		"Content for Tab 3 goes here.",
	];

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
