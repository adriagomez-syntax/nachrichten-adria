import { FaShareAlt } from "react-icons/fa";
import MediaButtons from "./MediaButtons";

export default function SharePost() {
	return (
		<div className="flex gap-4 justify-between p-4 bg-background-mid shadow-[3px_3px_0_0] shadow-background-dark rounded-sm text-background">
			<div className="flex gap-1 items-center">
				<FaShareAlt />
				<p className="uppercase font-light text-xs">Diesen Fund teilen:</p>
			</div>
			<MediaButtons />
		</div>
	)
}