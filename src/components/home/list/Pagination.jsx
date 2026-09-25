import { useContext } from "react"
import Button from "../../common/Button"
import ButtonPrimary from "../../common/ButtonPrimary"
import ListContext from "../../../context/ListContext"

export default function Pagination({ pageNum, setPageNum, totalItems }) {
	
	const { limitValue } = useContext(ListContext)
	const maxPages = limitValue > 0 ? Math.ceil(totalItems / limitValue) : 0
	const pages = []
	
	function addPage(value) {
		if (value > 0 && value <= maxPages && !pages.includes(value)) { pages.push(value) }
	}

	addPage(1)
	addPage(maxPages)
	addPage(pageNum)
	addPage(pageNum + 1)
	addPage(pageNum + 2)
	pages.sort()
	
	return (
		<div className="flex gap-4 justify-center">
			{ pages.length > 0 &&
			<>
				<ButtonPrimary
					onClick={() => setPageNum((prev) => prev - 1 >= 0 ? prev - 1 : prev) }
					disabled={ pageNum <= 0 }
				>
					Vor
				</ButtonPrimary>
				<ul className="flex gap-2 items-center">
					{pages.map((page, index) => {
						
						const next = index < pages.length - 1 ? pages[index + 1] : index
						const nextDots = page + 1 < next

						return (
							<div key={ page } className="flex gap-2 items-center">
								<Button  
									className={`${pageNum + 1 === page ? "bg-background-dark text-background text-shadow-2xs" : "hover:bg-background-dark hover:text-background hover:text-shadow-2xs"} py-2 px-4 shadow-[1px_1px_0_0] shadow-background-dark rounded-sm transition duration-300`}
									onClick={() => setPageNum(page - 1)}
								>
									<li>
										{ page }
									</li>
								</Button>
								{nextDots && <span>...</span>}
							</div>
						)
					})}
				</ul>
				<ButtonPrimary
					onClick={() => setPageNum((prev) => prev + 1 <= maxPages - 1 ? prev + 1 : prev) }
					disabled={ pageNum >= maxPages - 1 }
				>
					Nächste
				</ButtonPrimary>
			</>
			}
		</div>
	)
}