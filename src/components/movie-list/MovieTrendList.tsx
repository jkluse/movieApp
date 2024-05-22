import { Box, Grid, Paper } from '@mui/material'
import { MovieDataType } from '../../assets/data'
import MovieTrendCard from '../movie-card/MovieTrendCard'

interface MovieTrendListProps {
	trendingList: MovieDataType[]
}

function MovieTrendList({ trendingList }: MovieTrendListProps) {
	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
			{trendingList.map((movie) => (
				<Grid
					item
					key={movie.id}
					sx={{ width: '300px', flexShrink: 0 }}
				>
					<Paper
						elevation={0}
						sx={{ backgroundColor: 'transparent' }}
					>
						<MovieTrendCard movie={movie} />
					</Paper>
				</Grid>
			))}
		</Box>
	)
}
export default MovieTrendList
