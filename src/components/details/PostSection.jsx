import Image from "../common/Image";
import HashtagsDetails from "./HashtagsDetails";
import SharePost from "./SharePost";
import { formatDate } from "../../assets/utils";

export default function PostSection({ title, teaser, body, hashtags, img, date }) {
	return (
		<section className="flex flex-col gap-4">
			<HashtagsDetails hashtags={hashtags} />
			<h1 className="font-bold text-primary text-3xl">{title}</h1>
			<div className="flex justify-between p-2 bg-background-mid rounded-sm text-background text-2xs">
				<p>Veröffentlicht am: </p>
				<p>{ formatDate(date) }</p>
			</div>
			<Image 
				className="border-8 border-background-dark shadow-[3px_3px_0_0] shadow-background-dark"
				src={ img }
				alt={ title }
			/>
			<div className="p-4 bg-background-mid/20 shadow-[3px_3px_0_0] shadow-background-dark">
				{ teaser }
			</div>
			<p className="my-4">{body}</p>
			<SharePost />
		</section>
	)
}