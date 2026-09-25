import Main from "../components/common/Main";
import FilterSection from "../components/home/filter/FilterSection";
import ListSection from "../components/home/list/ListSection";

export default function HomePage() {
	return (
		<Main className="flex flex-col gap-6">
			<FilterSection />
			<ListSection />
		</Main>
	)
}