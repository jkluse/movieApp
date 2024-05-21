import { useContext } from 'react'
import { MovieDataType } from '../../assets/data'
import { MovieContext } from '../../context/movieContext'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import MovieIcon from '../../assets/icons/icon-category-movie.svg'
import TvSeriesIcon from '../../assets/icons/icon-category-tv.svg'
import BookmarkIcon from '../icons/bookmark-icon'
import BookmarkEmptyIcon from '../icons/bookmark-empy-icon'

interface MovieCardProp {
	movie: MovieDataType
}
function MovieCard({ movie }: MovieCardProp) {
	const { dispatch } = useContext(MovieContext)

	function handleToggleBookmark(movieId: string) {
		dispatch({ type: 'TOGGLE BOOKMARK', id: movieId })
	}
	return (
		<Card
			variant="outlined"
			sx={{
				backgroundColor: 'transparent',
				color: '#E0E0E)',
				my: 3,
				border: 'none',
			}}
		>
			<CardContent sx={{ p: 0, position: 'relative' }}>
				<Grid
					container
					spacing={1}
				>
					<Grid item>
						<img
							src={movie.thumbnail.regular.large}
							alt=""
							style={{ width: '400px', height: '180px', borderRadius: '8px' }}
						/>
					</Grid>
					<Grid
						item
						xs={8}
					>
						<Grid
							container
							spacing={1}
							alignItems={'center'}
						>
							<Grid item>
								<Typography
									fontSize={10}
									color="#E0E0E0"
									aria-label="year of movie"
								>
									{movie.year}
								</Typography>
							</Grid>
							<Grid item>
								<Box
									sx={{
										width: '4px',
										height: '4px',
										background: '#BDBDBD',
										borderRadius: '50%',
									}}
								/>
							</Grid>
							<Grid item>
								<img
									src={movie.category === 'Movies' ? MovieIcon : TvSeriesIcon}
									alt=""
									width={16}
									height={16}
								/>
							</Grid>
							<Grid item>
								<Typography
									fontSize={10}
									color={'#E0E0E0'}
									aria-label="movie category"
								>
									{movie.category}
								</Typography>
							</Grid>
							<Grid item>
								<Box
									sx={{
										width: '4px',
										height: '4px',
										background: '#BDBDBD',
										borderRadius: '50%',
									}}
								/>
							</Grid>
							<Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="movie rating"
                >
                  {movie.rating}
                </Typography>
              </Grid>

						</Grid>
            <Typography aria-label="movie rating" padding={0} color="#E0E0E0">
              {movie.title}
            </Typography>
					</Grid>
          <Box
					sx={{
						position: 'absolute',
						top: 0,
            left: 0,
						right: 0,
						display: 'flex',
						justifyContent: 'flex-end',
						padding: '16px',
					}}
				>
					<Box
						sx={{
							p: '1rem',
							backgroundColor: '#000',
							borderRadius: '100%',
							cursor: 'pointer',
							'&: hover': { opacity: 0.8 },
						}}
            onClick={()=>handleToggleBookmark(movie.id)}
					>
            {movie.isBookmarked ? (
              <BookmarkIcon fill={"#E0E0E0"} />
            ) : (
              <BookmarkEmptyIcon />
            )}
          </Box>
				</Box>
				</Grid>
			</CardContent>
		</Card>
	)
}
export default MovieCard
