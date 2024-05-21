import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import Error from './pages/error/Error'
import Movie from './pages/movie/Movie'
import TVSeries from './pages/tv-series/TVSeries'
import Bookmark from './pages/bookmark/Bookmark'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <Error />,
	},
	{
		path: '/movies',
		element: <Movie />,
		errorElement: <Error />,
	},
	{
		path: '/tv-series',
		element: <TVSeries />,
		errorElement: <Error />,
	},
	{
		path: '/bookmarks',
		element: <Bookmark />,
		errorElement: <Error />,
	},
])
