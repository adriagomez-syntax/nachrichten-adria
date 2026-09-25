import { useContext } from "react"
import ListContext from "../../../context/ListContext"
import Button from "../../common/Button"
import hashtagList from "../../../assets/hashtagsList.json" with { type: "json" }

export default function HashtagFilter() {
	
	const { hashtagValue, setHashtagValue } = useContext(ListContext)
	const hashtagButtonClass = "flex items-center p-2 rounded-sm hover:bg-background-dark hover:text-background transition duration-300"
	const hashtagSelectedClass = "bg-background-dark text-background"
	const hashtagNotSelectedClass = "border border-primary"

	return (
		<div className="flex gap-2 justify-between">
			<h2 className="hidden md:flex">Hashtag-Filter:</h2>
			<ul className="flex gap-1 text-xs overflow-scroll">
				<Button onClick={() => setHashtagValue("")}>
					<li className={`${hashtagValue === "" ? hashtagSelectedClass : hashtagNotSelectedClass} ${hashtagButtonClass}`}>
						Alles
					</li>
				</Button>
				{hashtagList.map(hashtag => (
					<Button key={ hashtag } onClick={() => setHashtagValue(hashtag)}>
						<li className={`${hashtagValue === hashtag ? hashtagSelectedClass : hashtagNotSelectedClass} ${hashtagButtonClass}`}>
							{`#${hashtag}`}
						</li>
					</Button>
				))}
			</ul>
		</div>
	)
}