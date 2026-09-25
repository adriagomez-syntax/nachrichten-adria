import { useContext } from "react"
import limitIntervals from "../../../assets/limitIntervals.json" with { type: "json" }
import Select from "../../common/Select"
import ListContext from "../../../context/ListContext"

export default function LimitFilter() {
	
	const { limitValue, setLimitValue } = useContext(ListContext)
	
	return (
		<div className="flex gap-2 items-center">
			<span className="hidden md:flex font-secondary uppercase text-xs">Artikel pro Seite: </span>
			<Select value={ limitValue } onChange={ (event) => setLimitValue(event.target.value) }>
				{limitIntervals.map(limit => (
					<option key={ limit } value={ limit }>{`${limit} pro Seite`}</option>
				))}
			</Select>
		</div>
	)
}