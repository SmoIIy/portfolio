import Image from "next/image";
import Button from "./Button";

export default function Project({ src, title, body, anchor }) {
	return (
		<article className="text-base-dark w-80 w md:w-96 rounded-2xl overflow-hidden shadow-xl">
			{/* <Image
				src="https://picsum.photos/400/400"
				alt="image"
				width={400}
				height={400}
			/> */}
			<img src="https://picsum.photos/400/400" alt="" />
			<div className="p-4">
				<h3 className="text-center text-3xl font-medium">{title}</h3>
				<p className="font-light p-2 mb-4">{body}</p>
				<Button
					className="mx-auto mb-12"
					anchor={anchor}
					body="Visit Project"
				/>
			</div>
		</article>
	);
}
