import useTicker from "../../../hooks/useTicker"
import ErrorMsg from "../../common/ErrorMsg"
import Loader from "../../common/Loader"
import TickerList from "./TickerList"

export default function LiveTicker() {
	
	const { tickers, loading, errorMsg } = useTicker() 
	
	return (
		<section className="p-4 flex flex-col gap-4 bg-background-mid rounded-sm">
			<h1 className="pb-2 font-secondary text-primary text-2xl border-b border-primary/20">■ Eilmeldungen & Ticker</h1>
			<div>
				{ loading
					? <Loader />
					: errorMsg
						? <ErrorMsg
							code="500"
							title="Game Over! Ein Fehler ist aufgetreten"
							info={ errorMsg }
						/>
						: <TickerList tickers={ tickers } />
				}
			</div>
		</section>
	)
}