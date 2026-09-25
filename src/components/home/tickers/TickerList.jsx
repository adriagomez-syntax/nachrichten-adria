export default function TickerList({ tickers }) {
	return (
		<ul className="flex flex-col gap-2">
			{tickers.map((ticker, index) => (
				<li key={ ticker.id } className={`${index < tickers.length - 1 && "pb-2 border-b border-primary/20"} flex flex-col gap-1`}>
					<div className="flex gap-2 justify-between items-center">
						<h2 className="uppercase text-primary text-xs">{ ticker.title }</h2>
						<span className="p-2 bg-background-dark text-background text-2xs rounded-sm">{ ticker.date }</span>
					</div>
					<p>{ ticker.text }</p>
				</li>
			))}
		</ul>
	)
}