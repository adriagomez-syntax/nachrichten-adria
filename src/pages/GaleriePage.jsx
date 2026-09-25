import { useState } from "react";
import Main from "../components/common/Main";
import useGallerie from "../hooks/useGallerie";
import Loader from "../components/common/Loader";
import ErrorMsg from "../components/common/ErrorMsg";
import GalerieList from "../components/galerie/GalerieList";
import limitIntervals from "../assets/limitIntervals.json" with { type: "json" }
import { useDebounce } from "../hooks/useDebounce";
import FilterGalerie from "../components/galerie/FilterGalerie";
import useLocalStorage from "../hooks/useLocalStorage";

export default function GaleriePage() {
	
	const [query, setQuery] = useState("")
	const searchValue = useDebounce(query)
	const [pageNum, setPageNum] = useState(0)
	const [limit, setLimit] = useLocalStorage("limitGalerie", limitIntervals[0])
	const { assetsLoaded, total, loading, error } = useGallerie(searchValue, limit, pageNum * limit)
	
	return (
		<Main className="flex flex-col gap-4">
			<h1 className="font-bold text-primary text-3xl">Galerie</h1>
			<h2 className="text-secondary"> Erkunde historische Screenshots, Boxarts, Arcade-Flyer und seltene Handheld-Aufnahmen aus vier Dekaden Videospielgeschichte. </h2>
			<FilterGalerie query={ query } setQuery={ setQuery } limit={ limit } setLimit={ setLimit }  />
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