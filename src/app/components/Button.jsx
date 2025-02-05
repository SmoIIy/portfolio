"use client";

import cn from "classnames";
import { motion } from "motion/react";

export default function Button({ anchor, body, className, target }) {
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
				{body}{" "}
			</a>
		</motion.div>
	);
}
