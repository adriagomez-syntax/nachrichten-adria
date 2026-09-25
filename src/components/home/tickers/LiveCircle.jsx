export default function LiveCircle() {
	return (
		<div className="flex items-center gap-2">
			<span className="relative flex size-3">
				<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background-dark opacity-75"></span>
				<span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
			</span>
		</div>
	)
}