import Button from "../common/Button"
import { mediaShare } from "../../assets/mediaShare";

export default function MediaButtons() {
	return (
		<div className="flex gap-2">
			{mediaShare.map(media => {
				
				const Icon = media.icon
				
				return (
					<Button 
						key={ media.name }
						className="p-2 bg-background shadow-[1px_1px_0_0] shadow-background-dark text-text rounded-sm hover:bg-background-dark hover:text-background transition duration-300"
						onClick={ media.func }
					>
						<Icon />
					</Button>
				)
			})}
		</div>
	)
}