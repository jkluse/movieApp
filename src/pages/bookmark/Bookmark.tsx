import { useContext, useState } from 'react'
import { MovieDataType } from '../../assets/data'
import { MovieContext } from '../../context/movieContext'
import Layout from '../../layout/Layout'
import {
	Box,
	InputAdornment,
	InputBase,
	Paper,
	Typography,
} from '@mui/material'
import MovieList from '../../components/movie-list/MovieList'
import SearchIcon from '../../assets/icons/icon-search.svg'

function Bookmark() {
	const [search, setSearch] = useState('')
	const [searchList, setSearchList] = useState<MovieDataType[]>([])
	const { state } = useContext(MovieContext)
	const { movies } = state
  const bookmarkedMovies = movies.filter(mov => mov.isBookmarked)

	function handleSearch(e: { target: { value: string } }) {
		const searchVal = e.target.value
		setSearch(searchVal)
		const filteredList = movies.filter((movie) =>
			movie.title.toLowerCase().includes(searchVal.toLowerCase())
		)
		console.log('filtered', filteredList)
		setSearchList(filteredList)
	}

	return (
		<Layout>
			<Box>
				<Paper
					sx={{
						display: 'flex',
						alignItems: 'center',
						borderRadius: 'default',
						p: 1,
						backgroundColor: '#10141f',
						border: 'none',
					}}
				>
					<InputBase
						placeholder="Search for movies or TV series"
						sx={{
							ml: 1,
							flex: 1,
							color: 'white',
							border: 'none',
						}}
						value={search}
						onChange={handleSearch}
						startAdornment={
							<InputAdornment position="start">
								<img
									src={SearchIcon}
									alt="search icon"
									width={20}
									height={20}
								/>
							</InputAdornment>
						}
					/>
				</Paper>
			</Box>
			<Box
				py={2}
				px={4}
			>
				{search === '' ? (
					<Box width="100%">
						<Typography
							variant="h5"
							component="h1"
							my={6}
							fontWeight={400}
						>
							Bookmarks
						</Typography>

						<MovieList recommendedList={search === '' ? bookmarkedMovies : searchList} />
					</Box>
				) : (
					<Box width={'100%'}>
						<Typography>
							Found {searchList.length} results for {search}
						</Typography>
						<MovieList recommendedList={searchList} />
					</Box>
				)}
			</Box>
		</Layout>
	)
}
export default Bookmark
