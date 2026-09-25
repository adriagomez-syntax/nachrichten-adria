import { useContext, useEffect, useState } from "react";
import ListContext from "../../../context/ListContext";
import CardList from "./CardList";
import Loader from "../../common/Loader";
import ErrorMsg from "../../common/ErrorMsg";
//import useNachrichten from "../../../hooks/useNachrichten"
import useNachrichtenSDK from "../../../hooks/useNachrichtenSDK";

export default function ListSection() {
	
	const [pageNum, setPageNum] = useState(0)
	const { searchValue, hashtagValue, sortValue, limitValue } = useContext(ListContext)
	//const { nachrichten, loading, errorMsg, total } = useNachrichten(searchValue, hashtagValue, sortValue, limitValue, pageNum * limitValue);
	const { nachrichten, loading, error, total } = useNachrichtenSDK(searchValue, hashtagValue, sortValue, limitValue, pageNum * limitValue);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setPageNum(prev => (prev !== 0 ? 0 : prev))

	}, [limitValue])

	return (
		<section className="flex-1 flex">
			{loading
				? <Loader className="min-h-40" />
				: error
					? <ErrorMsg 
						code={error.status}
						title="Game Over! Ein Fehler ist aufgetreten"
						info={ error.message }
					/>
					: <CardList nachrichten={ nachrichten } pageNum={ pageNum } setPageNum={ setPageNum } totalItems={ total } />
			}
		</section>
	)
}