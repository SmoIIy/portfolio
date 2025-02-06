"use client";

import { useState } from "react";

function Card({ children, className }) {
	return (
		<div className={`bg-white shadow-lg rounded-2xl p-4 ${className}`}>
			{children}
		</div>
	);
}

function CardContent({ children, className }) {
	return (
		<div className={`p-4 border rounded-lg bg-gray-100 ${className}`}>
			{children}
		</div>
	);
}

function Button({ children, onClick, className }) {
	return (
		<button
			onClick={onClick}
			className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${className}`}
		>
			{children}
		</button>
	);
}

function TabCard() {
	const [activeTab, setActiveTab] = useState(0);
	const tabs = ["Tab 1", "Tab 2", "Tab 3"];
	const content = [
		"This is the content for Tab 1.",
		"Here is some content for Tab 2.",
		"Content for Tab 3 goes here.",
	];

	return (
		<Card className="w-full max-w-md p-4">
			<div className="flex space-x-2 mb-4">
				{tabs.map((tab, index) => (
					<Button
						key={index}
						onClick={() => setActiveTab(index)}
						className={
							activeTab === index
								? "bg-blue-500 text-white"
								: "bg-gray-200"
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

export default TabCard;
