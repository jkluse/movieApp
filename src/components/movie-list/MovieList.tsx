import { Grid, Paper } from "@mui/material";
import { MovieDataType } from "../../assets/data"
import MovieCard from "../movie-card/MovieCard";

interface MovieListProps {
  recommendedList: MovieDataType[];
}

function MovieList({recommendedList}: MovieListProps) {
  console.log("Rec list", recommendedList)
  return (
    <Grid container spacing={2}>
    {recommendedList.map((item) => (
      <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
        <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
          <MovieCard movie={item} />
        </Paper>
      </Grid>
    ))}
  </Grid>
  )
}
export default MovieList
