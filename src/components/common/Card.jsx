import { Link } from "react-router";

export default function Card({ title, teaser, img, hashtags = [], path = "#", className = "" }) {
	return (
		<div className={`${className} flex flex-col gap-2 p-4 border border-background-mid shadow-md shadow-background-dark rounded-lg`}>
			{ img &&
				<img src={ img } alt={ title } />
			}
			<ul className="flex gap-2 text-2xs text-secondary font-secondary">
				{hashtags.map((hashtag, index) => (
					<li key={ index }>
						#{ hashtag }
					</li>
				))}
			</ul>
			<h1 className="text-primary text-2xl">{ title }</h1>
			<p>{ teaser }</p>
			<Link to={ path }>
				<p className="font-secondary text-secondary text-xs hover:underline">Weiterlesen...</p>
			</Link>
		</div>
	)
}