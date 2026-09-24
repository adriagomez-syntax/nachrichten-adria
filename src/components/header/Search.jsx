import { FaSearch } from "react-icons/fa";
import Input from "../common/Input";
import ButtonPrimary from "../common/ButtonPrimary";
import { useContext, useState } from "react";
import ListContext from "../../context/ListContext";

export default function Search({ className = "" }) {
	
	const { setSearchValue } = useContext(ListContext)
	const [ query, setQuery] = useState("")

	function onSubmit(event) {
		event.preventDefault()

		setSearchValue(query)
	}

	return (
		<form onSubmit={ onSubmit } className={`${className} min-w-0 flex gap-2`}>
			<Input 
				className="w-full"
				value={ query }
				onChange={ setQuery }
				icon={ FaSearch } 
			/>
			<ButtonPrimary type="submit">
				Los
			</ButtonPrimary>
		</form>
	)
}