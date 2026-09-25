import { useState } from "react";
import Main from "../components/common/Main";
import useGallerie from "../hooks/useGallerie";
import Loader from "../components/common/Loader";
import ErrorMsg from "../components/common/ErrorMsg";
import GalerieList from "../components/galerie/GalerieList";
import limitIntervals from "../assets/limitIntervals.json" with { type: "json" }
import Input from "../components/common/Input";
import { FaSearch } from "react-icons/fa";
import Select from "../components/common/Select";
import { useDebounce } from "../hooks/useDebounce";

export default function GaleriePage() {
	
	const [query, setQuery] = useState("")
	const searchValue = useDebounce(query)
	const [pageNum, setPageNum] = useState(0)
	const [limit, setLimit] = useState(limitIntervals[0])
	const { assetsLoaded, total, loading, error } = useGallerie(searchValue, limit, pageNum * limit)
	
	return (
		<Main className="flex flex-col gap-4">
			<h1 className="font-bold text-primary text-3xl">Galerie</h1>
			<h2 className="text-secondary"> Erkunde historische Screenshots, Boxarts, Arcade-Flyer und seltene Handheld-Aufnahmen aus vier Dekaden Videospielgeschichte. </h2>
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
			{loading
				? <Loader />
				: error
					? <ErrorMsg
						code={error.status}
						title="Game Over! Ein Fehler ist aufgetreten"
						info={ error.message }
					/>
					: assetsLoaded && <GalerieList assets={ assetsLoaded } pageNum={ pageNum } setPageNum={ setPageNum } limit={ limit } total={ total } />
			}
		</Main>
	)
}