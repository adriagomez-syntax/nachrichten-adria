import Select from "../../common/Select";
import sortList from "../../../assets/sortList.json" with { type: "json" }
import { useContext } from "react";
import ListContext from "../../../context/ListContext";

export default function SortFilter() {
	
	const { sortValue, setSortValue } = useContext(ListContext)
	
	return (
		<div className="flex gap-2 items-center">
			<span className="hidden md:flex font-secondary uppercase text-xs">Sortierung: </span>
			<Select value={ sortValue } onChange={ (event) => setSortValue(event.target.value) }>
				{sortList.map(sortType => (
					<option key={ sortType.name } value={ sortType.sort }>{ sortType.name }</option>
				))}
			</Select>
		</div>
	)
}