import { Route, Routes } from "react-router";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { routes } from "./assets/routes"
import { useState } from "react";
import ListContext from "./context/ListContext"
import sortList from "./assets/sortList.json" with { type: "json" }
import limitIntervals from "./assets/limitIntervals.json" with { type: "json" }
import useLocalStorage from "./hooks/useLocalStorage"

export default function App() {
	
	const [searchValue, setSearchValue] = useState("")
	const [hashtagValue, setHashtagValue] = useState("")
	const [sortValue, setSortValue] = useLocalStorage("sort", sortList[0].sort)
	const [limitValue, setLimitValue] = useLocalStorage("limit", limitIntervals[0])
	
	return (
		<div className="min-h-screen h-full flex flex-col font-primary bg-background text-text text-sm">
			<ListContext value={{ searchValue, setSearchValue, hashtagValue, setHashtagValue, sortValue, setSortValue, limitValue, setLimitValue }}>
				<Header />
				<Routes>
					{routes.map(route => {
						const Element = route.element
						return (
							<Route path={ route.path } element={ <Element /> } />
						)
					})}
				</Routes>
				<Footer />
			</ListContext>
		</div>
	)
}
