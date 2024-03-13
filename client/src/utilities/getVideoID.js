// https://www.youtube.com/watch?v=YT6qn6HVQyE

export const getVideoIDFromYoutubeURL = (url) => {
	return url.replace('https://www.youtube.com/watch?v=', '')
}
