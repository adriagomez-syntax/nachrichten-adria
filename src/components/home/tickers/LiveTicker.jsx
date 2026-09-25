import useTicker from "../../../hooks/useTicker"
import ErrorMsg from "../../common/ErrorMsg"
import Loader from "../../common/Loader"
import TickerList from "./TickerList"

export default function LiveTicker() {
	
	const { tickers, loading, error } = useTicker() 
	
	return (
		<section className="p-4 flex flex-col gap-4 bg-background-mid shadow-[3px_3px_0_0] shadow-background-dark rounded-sm md:w-1/3">
			<h1 className="pb-2 font-secondary text-primary text-2xl border-b border-primary/20">■ Eilmeldungen & Ticker</h1>
			<div>
				{ loading
					? <Loader />
					: error
						? <ErrorMsg
							code={error.status}
							title="Game Over! Ein Fehler ist aufgetreten"
							info={ error.message }
						/>
						: tickers && <TickerList tickers={ tickers } />
				}
			</div>
		</section>
	)
}