export default function Button({ anchor, body }) {
	return (
		<a
			className="bg-main-base hover:bg-main-hover
     transition-colors duration-200 py-1.5 px-5 rounded-sm text-base-white"
			href={anchor}
		>
			{body}
		</a>
	);
}
