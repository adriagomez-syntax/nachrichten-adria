import { FaShareAlt } from "react-icons/fa";
import MediaButtons from "./MediaButtons";
import HashtagsDetails from "./HashtagsDetails";

export default function PostSection({ title, teaser, body, hashtags, img, date }) {
	return (
		<section className="flex flex-col gap-4">
			<HashtagsDetails hashtags={hashtags} />
			<h1 className="font-bold text-primary text-3xl">{title}</h1>
			<div className="flex justify-end p-2 bg-background-mid rounded-sm text-background text-2xs">
				<p>{date}</p>
			</div>
			<div className="border-8 border-background-dark shadow-[3px_3px_0_0] shadow-background-dark rounded-sm overflow-hidden">
				<img 
					className="hover:transform hover:scale-105"
					src={`${img}?w=1200&fm=jpg&q=100`}
					srcSet={`
						${img}?w=500&fm=webp&q=50 500w,
						${img}?w=800&fm=webp&q=80 800w,
						${img}?w=1200&fm=jpg&q=100 1200w
					`}
					sizes="(max-width: 767px) 100vw, 1200px"
					alt={ title }
				/>
			</div>
			<div className="p-4 bg-background-mid/20 shadow-[3px_3px_0_0] shadow-background-dark">
				{ teaser }
			</div>
			<p className="my-4">{body}</p>
			<div className="flex gap-4 justify-between p-4 bg-background-mid shadow-[3px_3px_0_0] shadow-background-dark rounded-sm text-background">
				<div className="flex gap-1 items-center">
					<FaShareAlt />
					<p className="uppercase font-light text-xs">Diesen Fund teilen:</p>
				</div>
				<MediaButtons />
			</div>
		</section>
	)
}