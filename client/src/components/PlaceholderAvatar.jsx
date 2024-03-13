/* eslint-disable react/prop-types */
const PlaceholderAvatar = ({ className }) => {
	const imageURL = 'https://placehold.co/600x300'

	return (
		<img
			src={imageURL}
			alt="avatar placeholder"
			className={className}
		/>
	)
}

export default PlaceholderAvatar
