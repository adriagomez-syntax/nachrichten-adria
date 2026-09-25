import { Link, useParams } from "react-router";
import Main from "../components/common/Main";
import Loader from "../components/common/Loader";
import ErrorMsg from "../components/common/ErrorMsg";
import PostSection from "../components/details/PostSection";
import { FaArrowLeft } from "react-icons/fa";
import ButtonPrimary from "../components/common/ButtonPrimary";
//import useNachricht from "../hooks/useNachricht";
import useNachrichtSDK from "../hooks/useNachrichtSDK";

export default function NachrichtDetailPage() {
	
	const params = useParams()
	const postId = params.id
	//const { loadedData, loading, errorMsg } = useNachricht(postId)
	const { loadedData, loading, error } = useNachrichtSDK(postId)
	
	return (
		<Main className="flex flex-col gap-4">
			<Link to="/">
				<ButtonPrimary className="flex gap-2 items-center">
					<FaArrowLeft />
					<p>Zur Startseite</p>
				</ButtonPrimary>
			</Link>
			{loading
				? <Loader />
				: error
					? <ErrorMsg
						code={error.status}
						title="Game Over! Ein Fehler ist aufgetreten"
						info={ error.message }
					/>
					: loadedData && <PostSection {...loadedData} />
			}
		</Main>
	)
}