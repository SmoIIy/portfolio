"use client";

import lr from "@/app/assets/lr.svg";

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
			<Skill
				skill="Web Development"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<path
							d="M2.5 9H21.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinejoin="round"
						/>
						<path
							d="M7 6H7.00898"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M11 6H11.009"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9.11805 13.5C8.84339 13.1931 8.44425 13 8 13C7.17157 13 6.5 13.6716 6.5 14.5V15.5C6.5 16.3284 7.17157 17 8 17C8.44425 17 8.84339 16.8069 9.11805 16.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M15.5 13L17.5 17"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12.4922 13.5H12.5012M12.4922 16.5H12.5012"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
			/>
			<Skill
				skill="UI Design"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.8417 22 14 22.1163 14 21C14 20.391 13.6832 19.9212 13.3686 19.4544C12.9082 18.7715 12.4523 18.0953 13 17C13.6667 15.6667 14.7778 15.6667 16.4815 15.6667C17.3334 15.6667 18.3334 15.6667 19.5 15.5C21.601 15.1999 22 13.9084 22 12Z"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<path
							d="M7 15.002L7.00868 14.9996"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<circle
							cx="9.5"
							cy="8.5"
							r="1.5"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<circle
							cx="16.5"
							cy="9.5"
							r="1.5"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
					</svg>
				}
			/>
			<Skill
				skill="User Experience"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M7.5 19.5C7.5 18.5344 7.82853 17.5576 8.63092 17.0204C9.59321 16.3761 10.7524 16 12 16C13.2476 16 14.4068 16.3761 15.3691 17.0204C16.1715 17.5576 16.5 18.5344 16.5 19.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<circle
							cx="12"
							cy="11"
							r="2.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M17.5 11C18.6101 11 19.6415 11.3769 20.4974 12.0224C21.2229 12.5696 21.5 13.4951 21.5 14.4038V14.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<circle
							cx="17.5"
							cy="6.5"
							r="2"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M6.5 11C5.38987 11 4.35846 11.3769 3.50256 12.0224C2.77706 12.5696 2.5 13.4951 2.5 14.4038V14.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<circle
							cx="6.5"
							cy="6.5"
							r="2"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
			/>
			<Skill
				skill="Customer Communication"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M11.5 3.00371C10.9383 3.01207 10.3789 3.03453 9.8294 3.07106C5.64639 3.34912 2.31441 6.72836 2.04024 10.9707C1.98659 11.8009 1.98659 12.6607 2.04024 13.4909C2.1401 15.036 2.82343 16.4666 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1626 2.77401 21.495 2.91484 21.7351C3.05568 21.9752 3.37026 21.9829 3.99943 21.9982C5.24367 22.0285 6.08268 21.6757 6.74868 21.1846C7.1264 20.9061 7.31527 20.7668 7.44544 20.7508C7.5756 20.7348 7.83177 20.8403 8.34401 21.0513C8.8044 21.2409 9.33896 21.3579 9.8294 21.3905C11.2536 21.4852 12.7435 21.4854 14.1706 21.3905C18.3536 21.1125 21.6856 17.7332 21.9598 13.4909C22.0134 12.6607 22.0134 11.8009 21.9598 10.9707C21.9038 10.1048 21.7205 9.27492 21.4285 8.49998"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M14 5.99998C14 5.99998 15 5.99998 16 7.99998C16 7.99998 19.1765 2.99998 22 1.99998"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M11.9953 12.5H12.0043M15.9908 12.5H15.9998M7.99982 12.5H8.00879"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
			/>
			<Skill
				skill="Photography"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M7.00018 6.00055C5.77954 6.00421 5.10401 6.03341 4.54891 6.2664C3.77138 6.59275 3.13819 7.19558 2.76829 7.96165C2.46636 8.58693 2.41696 9.38805 2.31814 10.9903L2.1633 13.501C1.91757 17.4854 1.7947 19.4776 2.96387 20.7388C4.13303 22 6.10271 22 10.0421 22H13.9583C17.8977 22 19.8673 22 21.0365 20.7388C22.2057 19.4776 22.0828 17.4854 21.8371 13.501L21.6822 10.9903C21.5834 9.38805 21.534 8.58693 21.2321 7.96165C20.8622 7.19558 20.229 6.59275 19.4515 6.2664C18.8964 6.03341 18.2208 6.00421 17.0002 6.00055"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
						<path
							d="M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M15.5 14C15.5 15.933 13.933 17.5 12 17.5C10.067 17.5 8.5 15.933 8.5 14C8.5 12.067 10.067 10.5 12 10.5C13.933 10.5 15.5 12.067 15.5 14Z"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<path
							d="M11.9998 6H12.0088"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
			/>
			<Skill
				skill="Branding"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M2 12C2 7.52166 2 5.28249 3.39124 3.89124C4.78249 2.5 7.02166 2.5 11.5 2.5C15.9783 2.5 18.2175 2.5 19.6088 3.89124C21 5.28249 21 7.52166 21 12C21 16.4783 21 18.7175 19.6088 20.1088C18.2175 21.5 15.9783 21.5 11.5 21.5C7.02166 21.5 4.78249 21.5 3.39124 20.1088C2 18.7175 2 16.4783 2 12Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinejoin="round"
						/>
						<path
							d="M12.3638 7.72209L13.2437 9.49644C13.3637 9.74344 13.6837 9.98035 13.9536 10.0257L15.5485 10.2929C16.5684 10.4643 16.8083 11.2103 16.0734 11.9462L14.8335 13.1964C14.6236 13.4081 14.5086 13.8164 14.5736 14.1087L14.9285 15.6562C15.2085 16.8812 14.5636 17.355 13.4887 16.7148L11.9939 15.8226C11.7239 15.6613 11.2789 15.6613 11.004 15.8226L9.50913 16.7148C8.43925 17.355 7.78932 16.8761 8.06929 15.6562L8.42425 14.1087C8.48925 13.8164 8.37426 13.4081 8.16428 13.1964L6.92442 11.9462C6.1945 11.2103 6.42947 10.4643 7.44936 10.2929L9.04419 10.0257C9.30916 9.98035 9.62912 9.74344 9.74911 9.49644L10.629 7.72209C11.109 6.7593 11.8889 6.7593 12.3638 7.72209Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
			/>
			<Skill
				skill="Photo Editing"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M3.89089 20.8727L3 21L3.12727 20.1091C3.32086 18.754 3.41765 18.0764 3.71832 17.4751C4.01899 16.8738 4.50296 16.3898 5.47091 15.4218L16.9827 3.91009C17.4062 3.48654 17.618 3.27476 17.8464 3.16155C18.2811 2.94615 18.7914 2.94615 19.2261 3.16155C19.4546 3.27476 19.6663 3.48654 20.0899 3.91009C20.5135 4.33365 20.7252 4.54543 20.8385 4.77389C21.0539 5.20856 21.0539 5.71889 20.8385 6.15356C20.7252 6.38201 20.5135 6.59379 20.0899 7.01735L8.57816 18.5291C7.61022 19.497 7.12625 19.981 6.52491 20.2817C5.92357 20.5823 5.246 20.6791 3.89089 20.8727Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M6 15L9 18M8.5 12.5L11.5 15.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
			/>
			<Skill
				skill="Social Media"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M14 8.99988H18"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
						<path
							d="M14 12.4999H17"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
						<rect
							x="2"
							y="2.99988"
							width="20"
							height="18"
							rx="5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinejoin="round"
						/>
						<path
							d="M5 15.9999C6.20831 13.4188 10.7122 13.249 12 15.9999"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M10.5 8.99988C10.5 10.1044 9.60457 10.9999 8.5 10.9999C7.39543 10.9999 6.5 10.1044 6.5 8.99988C6.5 7.89531 7.39543 6.99988 8.5 6.99988C9.60457 6.99988 10.5 7.89531 10.5 8.99988Z"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
					</svg>
				}
			/>
		</div>
	);
}
function Languages() {
	return (
		<div className="flex w-full flex-wrap gap-2">
			<Skill
				skill="Javascript"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<path
							d="M11.7324 12V16C11.7324 17.1046 10.837 18 9.73244 18C8.99215 18 8.34581 17.5978 8 17"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
						<path
							d="M18.4668 13C18.121 12.4022 17.4747 12 16.7344 12H16.2344C15.4059 12 14.7344 12.6716 14.7344 13.5C14.7344 14.3284 15.4059 15 16.2344 15H17.2344C18.0628 15 18.7344 15.6716 18.7344 16.5C18.7344 17.3284 18.0628 18 17.2344 18H16.7344C15.9941 18 15.3477 17.5978 15.0019 17"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
					</svg>
				}
			/>
			<Skill
				className="basis-[120px]"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M16.7685 3H8.23147C6.06757 3 4.98562 3 4.39152 3.70888C3.79742 4.41777 3.9697 5.50319 4.31426 7.67402L5.68897 16.3351C5.98587 18.2056 6.416 18.7661 8.18181 19.4563L11.0756 20.5873C11.7796 20.8624 12.1316 21 12.5 21C12.8684 21 13.2204 20.8624 13.9244 20.5873L16.8182 19.4563C18.584 18.7661 19.0141 18.2056 19.311 16.3351L20.6857 7.67402C21.0303 5.50319 21.2026 4.41777 20.6085 3.70888C20.0144 3 18.9324 3 16.7685 3Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M15.5 8H10.5269C9.61889 8 9.43592 8.18899 9.51742 9.09276L9.69841 11.0998C9.76714 11.862 9.94159 12.0141 10.7079 12.0141H13.8631C14.788 12.0141 14.9719 12.2076 14.8706 13.1264L14.7013 14.6624C14.6333 15.2803 14.6139 15.3041 14.0195 15.5038L12.7852 15.9187C12.4624 16.0271 12.4565 16.0271 12.1337 15.9187L10.7602 15.4571C10.3907 15.3329 10.2668 15.1818 10.2007 14.8117"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
				skill="HTML"
			/>
			<Skill
				className="basis-[100px]"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width={24}
						height={24}
						viewBox="0 0 30 30"
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M25.428,3.333C25.238,3.121,24.967,3,24.683,3H5.317C5.033,3,4.762,3.121,4.572,3.333c-0.19,0.212-0.28,0.495-0.249,0.777 l2.202,19.823c0.044,0.403,0.329,0.74,0.719,0.851l7.48,2.137c0.09,0.026,0.183,0.039,0.275,0.039s0.185-0.013,0.275-0.039 l7.48-2.137c0.39-0.111,0.674-0.448,0.719-0.851L25.676,4.11C25.708,3.828,25.618,3.545,25.428,3.333z M20.516,13.074l-0.446,7.285 l-5.038,1.647l-5.038-1.647l-0.191-3.484h2.55l0.064,1.584l2.615,0.887l2.615-0.887l0.191-2.85h-5.612l-0.127-2.534h5.867 l0.191-2.534H9.356L9.165,8.006h11.67L20.516,13.074z"
						></path>
					</svg>
				}
				skill="CSS"
			/>
			<Skill
				className="basis-[100px]"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<path
							d="M5 12V10C5 9.72386 5.22386 9.5 5.5 9.5H6.75C7.44036 9.5 8 10.0596 8 10.75C8 11.4404 7.44036 12 6.75 12H5ZM5 12V14.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M16 12V10C16 9.72386 16.2239 9.5 16.5 9.5H17.75C18.4404 9.5 19 10.0596 19 10.75C19 11.4404 18.4404 12 17.75 12H16ZM16 12V14.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M10.5 9.5V12M10.5 14.5V12M13.5 9.5V12M13.5 14.5V12M10.5 12H13.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
				skill="PHP"
			/>
			<Skill
				className="basis-[100px]"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
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
				}
				skill="React"
			/>
			<Skill
				className="basis-[150px]"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
				skill="NextJS"
			/>
			<Skill
				className="basis-[150px]"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 128 128"
						width={24}
						height={24}
						color={"#ffffff"}
					>
						<path
							stroke="#ffffff"
							d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
							fill="#ffffff"
						/>
					</svg>
				}
				skill="TailwindCSS"
			/>
			<Skill
				className="basis-[100px]"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
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
				}
				skill="Wordpress"
			/>
			<Skill
				className="basis-[100px]"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M4 7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H15C17.8284 3 19.2426 3 20.1213 3.87868C21 4.75736 21 6.17157 21 9C21 11.8284 21 13.2426 20.1213 14.1213C19.2426 15 17.8284 15 15 15H4V7Z"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<path
							d="M4 21L4 8"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
						<path
							d="M16 7L17.2265 8.05719C17.7422 8.50163 18 8.72386 18 9C18 9.27614 17.7422 9.49836 17.2265 9.94281L16 11"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9 7L7.77346 8.05719C7.25782 8.50163 7 8.72386 7 9C7 9.27614 7.25782 9.49836 7.77346 9.94281L9 11"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M13.5 7L11.5 11"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
				skill="Processing"
			/>
			<Skill
				className="basis-[100px]"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						color={"#ffffff"}
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						width="24"
						height="24"
						strokeWidth="2"
					>
						<path
							d="M14.972 3.483c.163 .196 .247 .46 .413 .987l3.64 11.53a15.5 15.5 0 0 0 -4.352 -1.42l-2.37 -7.723a.31 .31 0 0 0 -.296 -.213a.31 .31 0 0 0 -.295 .214l-2.342 7.718a15.5 15.5 0 0 0 -4.37 1.422l3.657 -11.53c.168 -.527 .251 -.79 .415 -.986c.144 -.172 .331 -.306 .544 -.388c.242 -.094 .527 -.094 1.099 -.094h2.612c.572 0 .858 0 1.1 .094c.213 .082 .4 .217 .545 .39"
							stroke="#ffffff"
						></path>
						<path d="M9 18c0 1.5 2 3 3 4c1 -1 3 -3 3 -4q -3 1.5 -6 0"></path>
					</svg>
				}
				skill="Astro.js"
			/>
			<Skill
				className="basis-[100px]"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<ellipse
							cx="12"
							cy="5"
							rx="8"
							ry="3"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<path
							d="M7 10.842C7.60158 11.0229 8.27434 11.1718 9 11.282"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
						<path
							d="M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<path
							d="M7 17.842C7.60158 18.0229 8.27434 18.1718 9 18.282"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
						<path
							d="M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
					</svg>
				}
				skill="REST API"
			/>
			<Skill
				className="basis-[100px]"
				icon={
					<svg
						width={24}
						height={24}
						viewBox="0 0 109 113"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
							fill="url(#paint0_linear)"
						/>
						<path
							d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
							fill="url(#paint1_linear)"
							fill-opacity="0.2"
						/>
						<path
							d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
							fill="#ffffff"
						/>
						<defs>
							<linearGradient
								id="paint0_linear"
								x1="53.9738"
								y1="54.974"
								x2="94.1635"
								y2="71.8295"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#ffffff" />
								<stop offset="1" stop-color="#ffffff" />
							</linearGradient>
							<linearGradient
								id="paint1_linear"
								x1="36.1558"
								y1="30.578"
								x2="54.4844"
								y2="65.0806"
								gradientUnits="userSpaceOnUse"
							>
								<stop />
								<stop offset="1" stop-opacity="0" />
							</linearGradient>
						</defs>
					</svg>
				}
				skill="Supabase"
			/>
		</div>
	);
}
function Software() {
	return (
		<div className="flex w-full flex-wrap gap-2">
			<Skill
				className="basis-[120px]"
				skill="Adobe Photoshop"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinejoin="round"
						/>
						<path
							d="M6.5 16V12M6.5 12V9.125C6.5 9.00892 6.5 8.95087 6.50482 8.90198C6.55158 8.42721 6.92721 8.05158 7.40198 8.00482C7.45087 8 7.50892 8 7.625 8H9C10.1046 8 11 8.89543 11 10C11 11.1046 10.1046 12 9 12H6.5Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M17.4658 11.2225C17.2923 10.5267 16.4782 10 15.5 10C14.3954 10 13.5 10.6716 13.5 11.5C13.5 12.3284 14.3954 13 15.5 13C16.6046 13 17.5 13.6716 17.5 14.5C17.5 15.3284 16.6046 16 15.5 16C14.5183 16 13.7019 15.4696 13.5323 14.77"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
					</svg>
				}
			/>
			<Skill
				className="basis-[100px]"
				skill="Adobe Lightroom"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width={24}
						height={24}
						viewBox="0 0 48 48"
						color={"#ffffff"}
					>
						<path
							stroke="currentColor"
							strokeWidth="2"
							strokeLinejoin="round"
							d="M 13.5 6 C 9.3754991 6 6 9.3754991 6 13.5 L 6 34.5 C 6 38.624501 9.3754991 42 13.5 42 L 34.5 42 C 38.624501 42 42 38.624501 42 34.5 L 42 13.5 C 42 9.3754991 38.624501 6 34.5 6 L 13.5 6 z M 13.5 9 L 34.5 9 C 37.003499 9 39 10.996501 39 13.5 L 39 34.5 C 39 37.003499 37.003499 39 34.5 39 L 13.5 39 C 10.996501 39 9 37.003499 9 34.5 L 9 13.5 C 9 10.996501 10.996501 9 13.5 9 z M 16.476562 14.978516 A 1.50015 1.50015 0 0 0 15 16.5 L 15 31.5 A 1.50015 1.50015 0 0 0 16.5 33 L 23.5 33 A 1.50015 1.50015 0 1 0 23.5 30 L 18 30 L 18 16.5 A 1.50015 1.50015 0 0 0 16.476562 14.978516 z M 28.476562 20.978516 A 1.50015 1.50015 0 0 0 27 22.5 L 27 26.5 L 27 31.5 A 1.50015 1.50015 0 1 0 30 31.5 L 30 26.5 C 30 25.101774 31.101774 24 32.5 24 L 33.5 24 A 1.50015 1.50015 0 1 0 33.5 21 L 32.5 21 C 31.515166 21 30.63673 21.334646 29.833984 21.794922 A 1.50015 1.50015 0 0 0 28.476562 20.978516 z"
						></path>
					</svg>
				}
			/>
			<Skill
				className="basis-[100px]"
				skill="Adobe Premier"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinejoin="round"
						/>
						<path
							d="M7 16V12M7 12V8.57143C7 8.21809 7.23449 8 7.57143 8H9C10.1046 8 11 8.89543 11 10C11 11.1046 10.1046 12 9 12H7Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M14 10.5V12.5M14 12.5V16M14 12.5C14.561 11.752 15.0832 10.8199 16 10.5663C16.1547 10.5235 16.3207 10.5 16.5 10.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
			/>
			<Skill
				className="basis-[100px]"
				skill="Figma"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<circle
							cx="15"
							cy="12"
							r="3"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinejoin="round"
						/>
						<path
							d="M9 21C10.6569 21 12 19.6569 12 18V15H9C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinejoin="round"
						/>
						<path
							d="M12 9V15H9C7.34315 15 6 13.6569 6 12C6 10.3431 7.34315 9 9 9H12Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12 3V9H9C7.34315 9 6 7.65685 6 6C6 4.34315 7.34315 3 9 3H12Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12 3V9H15C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3H12Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
			/>
			<Skill
				className="basis-[150px]"
				skill="Adobe Illustrator"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinejoin="round"
						/>
						<path
							d="M13 16L12.1339 13.2M7 16L7.86614 13.2M7.86614 13.2L8.59031 10.8589C9.17989 8.95298 9.47468 8 10 8C10.5253 8 10.8201 8.95298 11.4097 10.8589L12.1339 13.2M7.86614 13.2H12.1339"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M16 16V11"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M16 8.5V8"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
			/>
			<Skill
				className="basis-[100px]"
				skill="Jira"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M9.00029 18H8.14381C6.28118 18 5.34987 18 5.06954 17.4356C4.78921 16.8713 5.37195 16.1695 6.53741 14.7659L8.3946 12.5293C7.21777 12.5293 6.62936 12.5293 6.34654 12.3092C6.07959 12.1015 5.93719 11.779 5.9667 11.449C5.99796 11.0995 6.40519 10.6892 7.21967 9.86865L9.51513 7.55599C8.56581 7.55599 8.09115 7.55599 7.84713 7.41507C7.45628 7.18937 7.26532 6.74247 7.37756 6.31617C7.44763 6.05 7.78408 5.72657 8.45699 5.07971L10.6296 2.99124C11.3177 2.32974 11.6618 1.99899 12.0883 2C12.5148 2.00101 12.8571 2.33339 13.5419 2.99813L15.6736 5.06754C16.3542 5.72818 16.6945 6.05851 16.7616 6.33134C16.8645 6.74982 16.6774 7.18482 16.2977 7.40951C16.0501 7.55599 15.5677 7.55599 14.6029 7.55599L16.5179 9.72481C17.3938 10.7168 17.8317 11.2128 17.7869 11.636C17.7636 11.8558 17.6651 12.0619 17.5071 12.2218C17.2029 12.5293 16.528 12.5293 15.1783 12.5293L17.1952 14.6725C18.5397 16.1011 19.2119 16.8155 18.9407 17.4077C18.6695 18 17.6701 18 15.6714 18H15.1783"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12 14V22"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
			/>
			<Skill
				className="basis-[100px]"
				skill="Trello"
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}
						height={24}
						color={"#ffffff"}
						fill={"none"}
					>
						<path
							d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinejoin="round"
						/>
						<path
							d="M6 8C6 7.05719 6 6.58579 6.29289 6.29289C6.58579 6 7.05719 6 8 6H8.5C9.44281 6 9.91421 6 10.2071 6.29289C10.5 6.58579 10.5 7.05719 10.5 8V15C10.5 15.9428 10.5 16.4142 10.2071 16.7071C9.91421 17 9.44281 17 8.5 17H8C7.05719 17 6.58579 17 6.29289 16.7071C6 16.4142 6 15.9428 6 15V8Z"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<path
							d="M13.5 8C13.5 7.05719 13.5 6.58579 13.7929 6.29289C14.0858 6 14.5572 6 15.5 6H16C16.9428 6 17.4142 6 17.7071 6.29289C18 6.58579 18 7.05719 18 8V10C18 10.9428 18 11.4142 17.7071 11.7071C17.4142 12 16.9428 12 16 12H15.5C14.5572 12 14.0858 12 13.7929 11.7071C13.5 11.4142 13.5 10.9428 13.5 10V8Z"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
					</svg>
				}
			/>
		</div>
	);
}
function Skill({ skill, icon, className }) {
	return (
		<div
			className={`bg-base-dark p-2 flex rounded-sm grow min-w-max ${className}`}
		>
			<div className="opacity-50">{icon}</div>
			<p className="ml-2">{skill}</p>
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
