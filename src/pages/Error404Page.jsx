import { FaArrowLeft } from "react-icons/fa";
import ButtonPrimary from "../components/common/ButtonPrimary";
import Main from "../components/common/Main";
import { Link } from "react-router";
import ErrorMsg from "../components/common/ErrorMsg";

export default function Error404Page() {
	return (
		<Main className="md:mx-[20vw] flex justify-center items-center">
			<ErrorMsg 
				code="404" 
				title="Level nicht gefunden!"
				info="Dieses Modul ist wohl im falschen Slot gelandet. Der angeforderte Bildschirm existiert nicht in unserem Archiv."
			>
				<Link to="/">
					<ButtonPrimary className="flex gap-2 items-center h-9">
						<FaArrowLeft />
						<p>Zurück zur Startseite</p>
					</ButtonPrimary>
				</Link>
			</ErrorMsg>
		</Main>
	)
}