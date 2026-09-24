import { Route, Routes } from "react-router";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { routes } from "./assets/routes"
import { useState } from "react";
import ListContext from "./context/ListContext"

export default function App() {
	
	const [searchValue, setSearchValue] = useState("")
	
	return (
		<div className="min-h-screen h-full flex flex-col font-primary bg-background text-text text-sm">
			<ListContext value={{ searchValue, setSearchValue }}>
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
