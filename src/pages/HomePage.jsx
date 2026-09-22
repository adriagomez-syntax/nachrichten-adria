import Card from "../components/common/Card";
import Main from "../components/common/Main";
import useNachrichten from "../hooks/useNachrichten";

export default function HomePage() {
	
	const { nachrichten, loading, errorMsg } = useNachrichten();
	
	return (
		<Main className="flex flex-col gap-6">
			<h1 className="font-secondary text-primary text-2xl">Neueste Beiträge</h1>
			{loading
				? <p>Lädt...</p>
				: errorMsg
					? <p>{ errorMsg }</p>
					: nachrichten &&
						nachrichten.map(nachricht => (
							<Card key={ nachricht.id }
								title={ nachricht.title } 
								teaser={ nachricht.teaser } 
								img={ nachricht.img }
								hashtags={ nachricht.hashtags }
								path={`/nachricht/${nachricht.id}`}
							/>
						))
			}
		</Main>
	)
}