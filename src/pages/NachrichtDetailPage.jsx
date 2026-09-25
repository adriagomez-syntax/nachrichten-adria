import { Link, useParams } from "react-router";
import Main from "../components/common/Main";
import useNachricht from "../hooks/useNachricht";
import Loader from "../components/common/Loader";
import ErrorMsg from "../components/common/ErrorMsg";
import PostSection from "../components/details/PostSection";
import { FaArrowLeft } from "react-icons/fa";
import ButtonPrimary from "../components/common/ButtonPrimary";

export default function NachrichtDetailPage() {
	
	const params = useParams()
	const postId = params.id
	const { loadedData, loading, errorMsg } = useNachricht(postId)
	
	return (
		<Main className="flex flex-col gap-4 md:mx-[15vw]">
			<Link to="/">
				<ButtonPrimary className="flex gap-2 items-center">
					<FaArrowLeft />
					<p>Zur Startseite</p>
				</ButtonPrimary>
			</Link>
			{loading
				? <Loader />
				: errorMsg
					? <ErrorMsg
						code={ errorMsg }
						title="Game Over! Ein Fehler ist aufgetreten"
						info="Drück ‘Start’ und versuch’s später nochmal!"
					/>
					: loadedData && <PostSection {...loadedData} />
			}
		</Main>
	)
}