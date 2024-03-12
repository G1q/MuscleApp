/* eslint-disable react/prop-types */
const PlaceholderAvatar = ({ className }) => {
	const imageURL = 'https://placehold.co/200x200'

	return (
		<img
			src={imageURL}
			alt="avatar placeholder"
			className={className}
		/>
	)
}

export default PlaceholderAvatar
