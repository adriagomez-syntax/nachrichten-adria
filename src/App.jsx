import { Route, Routes } from "react-router";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { routes } from "./assets/routes"

export default function App() {
	return (
		<>
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
		</>
	)
}
