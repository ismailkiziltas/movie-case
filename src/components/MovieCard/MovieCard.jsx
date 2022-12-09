import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CardActionArea, Button } from "@mui/material";
import { Box } from "@mui/system";
import { MovieInfo } from "./MovieCard.styled";
import { MainContext, useContext } from "../../hooks/Context";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const MovieCard = ({ movie }) => {
  const { movies, setMovies } = useContext(MainContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal(id) {
    setMovies(movies?.filter((movie) => movie?.id !== id));
  }

  function closeModal() {
    setIsOpen(false);
  }

  const movieInfos = [
    {
      title: "Language",
      key: movie?.original_language,
    },
    {
      title: "Release Date",
      key: movie?.release_date,
    },
    {
      title: "Media Type",
      key: movie?.media_type,
    },
  ];

  return (
    <Card id="movie-card" sx={{ maxWidth: 398, position: "relative" }}>
      <CardActionArea sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          height="300"
          image={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          alt="movie img"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {movie?.name
              ? movie?.name?.substring(0, 30)
              : movie?.title?.substring(0, 30)}
            <br />
            <Box sx={{ color: "#447bfc" }}>
              <StarIcon /> {parseFloat(movie?.vote_average).toFixed(1)}
              <span style={{ color: "#000", fontSize: "1.2rem" }}>/10</span>
            </Box>
          </Typography>
          {movieInfos?.map((item, idx) => (
            <Typography
              key={idx}
              variant="body2"
              color="text.secondary"
              sx={{
                maxHeight: 100,
                overflow: "hidden",
                paddingBottom: "0.3rem",
              }}
            >
              <MovieInfo>{item?.title}:</MovieInfo>
              {item?.key}
            </Typography>
          ))}

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ maxHeight: 70, overflow: "hidden" }}
          >
            {movie?.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button
        variant="contained"
        color="error"
        sx={{
          position: "absolute",
          top: 2,
          right: 2,
          padding: 0,
          minWidth: "40px",
        }}
        onClick={() => openModal()}
      >
        <DeleteForeverIcon />
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ color: "#000" }}
        >
          Filmi silmek istediğinize emin misiniz ?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => afterOpenModal(movie?.id)}
        >
          Evet
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ marginLeft: 2 }}
          onClick={() => closeModal()}
        >
          Hayır
        </Button>
      </Modal>
    </Card>
  );
};

export default MovieCard;
