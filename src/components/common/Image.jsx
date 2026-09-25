export default function Image({ src = "", alt = "", className = "" }) {
	return (
		<div className={`${className} rounded-sm overflow-hidden`}>
			<img 
				className="hover:transform hover:scale-105"
				src={`${src}?w=1200&fm=jpg&q=100`}
				srcSet={`
					${src}?w=500&fm=webp&q=50 500w,
					${src}?w=800&fm=webp&q=80 800w,
					${src}?w=1200&fm=jpg&q=100 1200w
				`}
				sizes="(max-width: 767px) 100vw, 1200px"
				alt={ alt }
			/>
		</div>
	)
}