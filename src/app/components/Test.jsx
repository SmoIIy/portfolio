import * as motion from "motion/react-client";

export default function Gestures() {
	return (
		<motion.div
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.8 }}
			style={box}
			className="bg-amber-500"
		/>
	);
}

/**
 * ==============   Styles   ================
 */

const box = {
	width: 100,
	height: 100,
	borderRadius: 5,
};
