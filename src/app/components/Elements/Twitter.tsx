const Twitter = ({ url }: { url: string }) => {
	return (
		<a href={url} className="inline-flex items-center rounded-full px-4 py-4 mr-4 hover:bg-gray-600">
			<svg
				width="34px"
				height="34px"
				viewBox="0 0 18 18"
				xmlns="http://www.w3.org/2000/svg"
				stroke="transparent"
				className="fill-white"
			>
				<path d="M12.8761 3H14.9451L10.4251 8.16609L15.7425 15.196H11.579L8.31797 10.9324L4.58662 15.196H2.51644L7.35104 9.67026L2.25 3H6.51922L9.46689 6.89708L12.8761 3ZM12.15 13.9576H13.2964L5.89628 4.17332H4.66605L12.15 13.9576Z"></path>
			</svg>
		</a>
	);
};

export default Twitter;
