import { Link } from "react-router";
import LinkAnim from "../common/LinkAnim";

export default function Logo() {
	return (
		<LinkAnim className="flex">
			<Link to="/">
				<img src="/logo.svg" className="object-contain" />
			</Link>
		</LinkAnim>
	)
}