import Image from "next/image";
import Button from "./Button";

export default function Project({ src, title, body, anchor, icon, st }) {
	return (
		<article className="text-base-dark w-76 xl:w-96 rounded-2xl overflow-hidden shadow-xl">
			<Image
				src={src}
				alt="image"
				width={400}
				height={400}
				className="h-60 xl:size-96 object-cover"
			/>
			{/* <img src="https://picsum.photos/400/400" alt="" /> */}
			<div className="md:p-4 p-2">
				<div>
					<h3 className="text-center text-3xl font-medium">
						{title}
					</h3>
					<div className="absolute -translate-y-8">{icon}</div>
				</div>
				<p className="lg:min-h-40 font-normal p-2 mb-4 opacity-80">
					{body}
				</p>
				{st && (
					<div className="bg-main-base bg-op group w-6 rounded-full absolute">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="white"
							strokeLinecap="round"
							strokeLinejoin="round"
							width="24"
							height="24"
							strokeWidth="2"
							className=""
						>
							<path d="M12 19v.01"></path>
							<path d="M12 15v-10"></path>
						</svg>
						<p className="text-sm  text-base-white scale-0 group-hover:scale-85 absolute transition w-44 p-4 ease-in rounded-xl text-left bg-main-base -translate-x-18 -translate-y-28">
							In collaboration with Supertusch CPH
						</p>
					</div>
				)}

				<Button
					className="mx-auto mb-4"
					anchor={anchor}
					body="Visit Project &#8599;"
					target="true"
				/>
			</div>
		</article>
	);
}
