import useAutoRefresh from "../../../hooks/useAutoRefresh"
import useTicker from "../../../hooks/useTicker"
import ErrorMsg from "../../common/ErrorMsg"
import Loader from "../../common/Loader"
import LiveCircle from "./LiveCircle"
import TickerList from "./TickerList"

export default function LiveTicker() {
	
	const { tickers, loading, error, load } = useTicker()
	useAutoRefresh(load, 30000)
	
	return (
		<section className="p-4 flex flex-col gap-4 bg-background-mid shadow-[3px_3px_0_0] shadow-background-dark rounded-sm md:w-1/3">
			<div className="flex gap-4 items-center pb-2 border-b border-primary/20">
				<LiveCircle />
				<h1 className="font-secondary text-primary text-2xl">Live Ticker</h1>
			</div>
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