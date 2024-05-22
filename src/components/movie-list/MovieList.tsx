import { Grid, Paper } from '@mui/material'
import { MovieDataType } from '../../assets/data'
import MovieCard from '../movie-card/MovieCard'

interface MovieListProps {
	recommendedList: MovieDataType[]
}

function MovieList({ recommendedList }: MovieListProps) {
	return (
		<Grid
			container
			spacing={3}
		>
			{recommendedList.map((item) => (
				<Grid
					item
					key={item.id}
					xs={12}
					sm={6}
					md={4}
					lg={3}
					xl={2}
					sx={{
						width: '300px',
					}}
				>
					<Paper
						elevation={0}
						sx={{ backgroundColor: 'transparent' }}
					>
						<MovieCard movie={item} />
					</Paper>
				</Grid>
			))}
		</Grid>
	)
}
export default MovieList
