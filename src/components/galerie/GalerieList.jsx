import ButtonPrimary from "../common/ButtonPrimary";
import Card from "../common/Card";
import ErrorMsg from "../common/ErrorMsg";

export default function GalerieList({ assets, pageNum, setPageNum, limit, total }) {
	
	const maxPages = limit > 0 ? Math.ceil(total / limit) : 0
	
	return (
		<div className="flex flex-col gap-4">
			{assets.length > 0
				?	<>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
						{assets.map(asset => (
							<Card
								key={ asset.id }
								img={ asset.img }
								title={ asset.title }
								teaser={ asset.description }
							/>
						))}
					</div>
					{pageNum < maxPages - 1 &&
						<div className="flex justify-center">
							<ButtonPrimary
								onClick={() => setPageNum(prev => (prev + 1) < maxPages ? prev + 1 : prev )}
								disabled={ pageNum >= maxPages - 1 }
							>
								Mehr laden
							</ButtonPrimary>
						</div>
					}
				</>
				: <ErrorMsg
					code="404"
					title="Beute nicht gefunden!"
					info="Versuch’s mit anderen Suchbegriffen!"
				/>
			}
		</div>
	)
}