import Main from "../components/common/Main";
import FilterSection from "../components/home/filter/FilterSection";
import ListSection from "../components/home/list/ListSection";
import LiveTicker from "../components/home/tickers/LiveTicker";

export default function HomePage() {
	return (
		<Main className="flex flex-col gap-6">
			<FilterSection />
			<div className="flex flex-col gap-6 md:flex-row md:justify-between">
				<ListSection />
				<LiveTicker />
			</div>
		</Main>
	)
}