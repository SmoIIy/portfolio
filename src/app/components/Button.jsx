"use client";

import cn from "classnames";
import { motion } from "motion/react";

export default function Button({ anchor, body, className, target, icon }) {
	return (
		<motion.div
			className={cn(className, "max-w-max")}
			tabIndex={-1}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
		>
			<a
				className={cn(
					className,
					"bg-main-base hover:bg-main-hover transition-colors duration-200 py-1.5 px-5 rounded-sm text-base-white "
				)}
				href={anchor}
				{...(target === "true"
					? { target: "_blank", rel: "noopener" }
					: {})}
			>
				{body}
				{icon && <IconArrow />}
			</a>
		</motion.div>
	);
}

function IconArrow() {
	return (
		<svg
			className="w-3 h-3 ms-1 mb-0.5 rtl:rotate-180 inline"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 14 10"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M1 5h12m0 0L9 1m4 4L9 9"
			/>
		</svg>
	);
}
