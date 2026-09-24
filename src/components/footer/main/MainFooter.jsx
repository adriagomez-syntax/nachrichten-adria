import HeroFooter from "./HeroFooter";
import LinksFooter from "./LinksFooter";

export default function MainFooter() {
	return (
		<section className="w-full md:w-2/3 flex-1 flex justify-center md:justify-between gap-32">
			<HeroFooter />
			<LinksFooter />
		</section>
	)
}