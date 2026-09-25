import { FaSearch } from "react-icons/fa";
import Input from "../common/Input";
import Select from "../common/Select";
import limitIntervals from "../../assets/limitIntervals.json" with { type: "json" }

export default function FilterGalerie({ query, setQuery, limit, setLimit }) {
	return (
		<div className="flex gap-2 justify-between p-4 bg-background-mid shadow-[3px_3px_0_0] shadow-background-dark rounded-sm">
			<Input 
				className="flex-1"
				icon={ FaSearch }
				value={ query }
				onChange={ setQuery }
			/>
			<div className="flex gap-2 items-center">
				<span className="hidden md:flex font-secondary uppercase text-xs">Bilden pro Seite: </span>
				<Select value={ limit } onChange={ (event) => setLimit(event.target.value) }>
					{limitIntervals.map(limit => (
						<option key={ limit } value={ limit }>{`${limit} pro Seite`}</option>
					))}
				</Select>
			</div>
		</div>
	)
}