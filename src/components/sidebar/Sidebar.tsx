import { Link, useLocation } from 'react-router-dom'
import BookmarkIcon from '../../assets/icons/icon-nav-bookmark.svg'
import HomeIcon from '../../assets/icons/icon-nav-home.svg'
import MovieIcon from '../../assets/icons/icon-nav-movies.svg'
import TvSeriesIcon from '../../assets/icons/icon-nav-tv-series.svg'
import { Box, Hidden, Typography } from '@mui/material'

const navLinks = [
	{
		name: 'Home',
		icon: HomeIcon,
		link: '/',
	},
	{
		name: 'Movies',
		icon: MovieIcon,
		link: '/movies',
	},
	{
		name: 'TV Series',
		icon: TvSeriesIcon,
		link: '/tv-series',
	},
	{
		name: 'Bookmarks',
		icon: BookmarkIcon,
		link: '/bookmarks',
	},
]

function Sidebar() {
	const { pathname } = useLocation()

	return (
		<Box
			sx={{
				backgroundColor: '#161d2f',
				padding: 2,
				borderRadius: 2,
				display: 'flex',
				flexDirection: {
					xs: 'row',
					lg: 'column',
				},
				alignItems: 'center',
				justifyContent: 'space-between',
				width: { xs: '100%', lg: 200 },
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: {
						xs: 'row',
						lg: 'column',
					},
					gap: 5,
					alignItems: {
						xs: 'center',
						lg: 'start',
					},
					width: '100%',
				}}
			>
				<Hidden>
					<Typography
						variant="h5"
						component="h1"
						fontWeight={400}
						fontSize={18}
					>
						Movie App
					</Typography>
				</Hidden>
				<Box
					sx={{
						py: {
							xs: '0px',
							lg: '16px',
						},
						display: 'flex',
						flexDirection: {
							xs: 'row',
							lg: 'column',
						},
						gap: 4,
					}}
				>
					{navLinks.map((item) => {
						return (
							<Link
								key={item.name}
								to={item.link}
								style={{ textDecoration: 'none' }}
							>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										gap: 2,
										color: 'white',
										textDecoration: 'none',
									}}
								>
									<img
										src={item.icon}
										alt={item.name}
										style={{
											width: '18px',
											filter: `${
												pathname === item.link
													? 'brightness(0) saturate(100%) invert(48%) sepia(20%) saturate(6403%) hue-rotate(234deg) brightness(96%) contrast(93%)'
													: 'invert(84%)'
											}`,
										}}

									/>
									<Hidden mdDown>
										<Typography>{item.name}</Typography>
									</Hidden>
								</Box>
							</Link>
						)
					})}
				</Box>
			</Box>
		</Box>
	)
}
export default Sidebar
