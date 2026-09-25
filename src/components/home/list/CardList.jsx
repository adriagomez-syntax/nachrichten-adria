import Card from "../../common/Card";
import ErrorMsg from "../../common/ErrorMsg";
import Pagination from "./Pagination";

export default function CardList({ nachrichten, pageNum, setPageNum, totalItems }) {

	return (
		<div className="flex-1 flex flex-col gap-8">
			<div className="flex flex-col gap-4">
				<h1 className="font-secondary text-primary text-2xl">■ Neueste Beiträge</h1>
				{nachrichten && nachrichten.length > 0
					? nachrichten.map(nachricht => (
						<Card key={ nachricht.id }
							title={ nachricht.title } 
							teaser={ nachricht.teaser }
							hashtags={ nachricht.hashtags }
							path={`/nachricht/${nachricht.id}`}
						/>
					))
					: <ErrorMsg
						code="404"
						title="Beute nicht gefunden!"
						info="Versuch’s mit anderen Suchbegriffen!"
					/>
				}
			</div>
			<Pagination pageNum={ pageNum } setPageNum={ setPageNum } totalItems={ totalItems } />
		</div>
	)
}