import {
	Box,
	InputAdornment,
	InputBase,
	Paper,
	Typography,
} from '@mui/material'
import SearchIcon from '../../assets/icons/icon-search.svg'
import Layout from '../../layout/Layout'
import { SetStateAction, useContext, useState } from 'react'
import MovieTrendList from '../../components/movie-list/MovieTrendList'
import MovieList from '../../components/movie-list/MovieList'
import { MovieDataType } from '../../assets/data'
import { MovieContext } from '../../context/movieContext'

function Home() {
	const [search, setSearch] = useState('')
	const [searchList, setSearchList] = useState<MovieDataType[]>([])
	const { state} = useContext(MovieContext)
	const { movies } = state
	const trendingList = movies.filter((mov) => mov.isTrending)
	const recommendedList = movies.filter((mov) => !mov.isTrending)

	function handleSearch(e: { target: { value: SetStateAction<string> } }) {
		setSearch(e.target.value)
		const filteredList = movies.filter((movie) =>
			movie.title.toLowerCase().includes(search.toLowerCase())
		)
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
						<Box width="100%">
							<Typography
								variant="h5"
								component="h1"
								my={6}
								fontWeight={400}
							>
								Trending
							</Typography>
							<MovieTrendList trendingList={trendingList} />
						</Box>
						<Box width="100%">
							<Typography
								variant="h5"
								component="h1"
								my={6}
								fontWeight={400}
							>
								Recommended For You
							</Typography>
							<MovieList recommendedList={recommendedList} />
						</Box>
					</Box>
				) : (
					<Box width={'100%'}>
						<Typography>Found {searchList.length} results for {search}</Typography>
            <MovieList recommendedList={searchList}/>
					</Box>
				)}
			</Box>
		</Layout>
	)
}
export default Home
