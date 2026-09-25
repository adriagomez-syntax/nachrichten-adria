export default function HashtagsDetails({ hashtags }) {
	return (
		<ul className="flex gap-2 text-2xs text-secondary font-secondary overflow-hidden">
			{hashtags.map((hashtag, index) => (
				<li key={ index }>
					#{ hashtag }
				</li>
			))}
		</ul>
	)
}