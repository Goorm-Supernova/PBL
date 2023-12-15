const originals = [
  "./images/original_img1.jpg",
  "./images/original_img2.jpg",
  "./images/original_img3.avif",
  "./images/original_img4.jpg",
  "./images/original_img5.jpg",
  "./images/original_img6.jpg",
  "./images/original_img7.jpg",
];

const trends = [
  "./images/trend_img2.jpg",
  "./images/trend_img3.jpg",
  "./images/trend_img4.jpg",
  "./images/trend_img5.jpg",
  "./images/trend_img6.jpg",
  "./images/trend_img7.jpg",
];

function addMovies(movies, type) {
  const movieList = document.querySelector(`.${type}-list`);
  movies.forEach((src) => {
    const li = document.createElement("li");
    li.setAttribute("class", "movie-list");

    const img = document.createElement("img");
    img.src = src;
    li.appendChild(img);

    movieList.appendChild(li);
  });
}

addMovies(originals, "original");
addMovies(trends, "trend");
