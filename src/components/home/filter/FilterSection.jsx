import HashtagFilter from "./HashtagFilter"
import LimitFilter from "./LimitFilter"
import SortFilter from "./SortFilter"

export default function FilterHome() {

	return (
		<section className="flex flex-col gap-4 p-4 bg-background-mid shadow-[3px_3px_0_0] shadow-background-dark rounded-sm">
			<HashtagFilter />
			<div className="flex gap-4 justify-between items-center">
				<SortFilter />
				<LimitFilter />
			</div>
		</section>
	)
}