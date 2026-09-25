export default function ErrorMsg({ code, title, info, children }) {
	return (
		<div className="flex-1 flex flex-col gap-4 p-4 items-center border-2 border-secondary rounded-sm">
			<div className="flex-1 flex flex-col gap-2 p-4 items-center">
				<h1 className="font-secondary font-bold text-4xl text-primary">{ code }</h1>
				<h2 className="font-secondary font-bold text-xl text-secondary text-center">{ title }</h2>
				<p className="text-center">{ info }</p>
			</div>
			{ children }
		</div>
	)
}