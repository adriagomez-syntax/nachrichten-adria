import { Link } from "react-router";
import Image from "./Image";
import { formatDate } from "../../assets/utils";

export default function Card({ title, teaser, hashtags = [], path, img, date, className = "" }) {
	return (
		<div className={`${className} flex flex-col gap-2 p-4 border border-background-mid shadow-md shadow-background-dark rounded-lg`}>
			{ img &&
				<Image 
					src={ img }
					alt={ title } 
				/>
			}
			{hashtags && hashtags.length > 0 &&
				<ul className="flex gap-2 text-2xs text-secondary font-secondary overflow-hidden">
					{hashtags.map((hashtag, index) => (
						<li key={ index }>
							#{ hashtag }
						</li>
					))}
				</ul>
			}
			<h1 className="font-bold text-primary text-2xl">{ title }</h1>
			{date && <span className="text-2xs text-secondary">{ formatDate(date) }</span>}
			<p>{ teaser }</p>
			{path &&
				<Link to={ path }>
					<p className="font-secondary text-secondary text-xs hover:underline">Weiterlesen...</p>
				</Link>
			}
		</div>
	)
}