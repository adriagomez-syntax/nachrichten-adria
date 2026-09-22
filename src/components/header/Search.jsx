import { FaSearch } from "react-icons/fa";
import Input from "../common/Input";
import ButtonPrimary from "../common/ButtonPrimary";
import { useState } from "react";

export default function Search() {
	
	const [searchValue, setSearchValue] = useState("")
	
	return (
		<div className="flex gap-2">
			<Input 
				value={ searchValue }
				onChange={ setSearchValue }
				icon={ FaSearch } 
			/>
			<ButtonPrimary>
				Los
			</ButtonPrimary>
		</div>
	)
}