const movies = [
    {
      id: "1",
      title: "Oceans 8",
      category: "Comedy",
      likes: 4,
      dislikes: 1,
      poster_url : "https://image.tmdb.org/t/p/w500/MvYpKlpFukTivnlBhizGbkAe3v.jpg",
    },
    {
      id: "2",
      title: "Midnight Sun",
      category: "Comedy",
      likes: 2,
      dislikes: 0,
      poster_url : "https://image.tmdb.org/t/p/w500/vPG2zEKPXhovPW9S91SRnwr5JM1.jpg",
    },
    {
      id: "3",
      title: "Les indestructibles 2",
      category: "Animation",
      likes: 3,
      dislikes: 1,
      poster_url : "https://image.tmdb.org/t/p/w500/evA4aMkr3qEuNPWvCaJdqluureb.jpg",
    },
    {
      id: "4",
      title: "Sans un bruit",
      category: "Thriller",
      likes: 6,
      dislikes: 6,
      poster_url : "https://www.themoviedb.org/t/p/w500/wWU8ZJd8HYQJkA9WN3ZiKscb4CO.jpg",
    },
    {
      id: "5",
      title: "Creed II",
      category: "Drame",
      likes: 16,
      dislikes: 2,
      poster_url : "https://image.tmdb.org/t/p/w500/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg",
    },
    {
      id: "6",
      title: "Pulp Fiction",
      category: "Thriller",
      likes: 11,
      dislikes: 3,
      poster_url : "https://image.tmdb.org/t/p/w500/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    },
    {
      id: "7",
      title: "Pulp Fiction",
      category: "Thriller",
      likes: 12333,
      dislikes: 32,
      poster_url : "https://image.tmdb.org/t/p/w500/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    },
    {
      id: "8",
      title: "Seven",
      category: "Thriller",
      likes: 2,
      dislikes: 1,
      poster_url : "https://image.tmdb.org/t/p/w500/8GXri7UnwE7dVNfUAZVDn7Z8UBZ.jpg",
    },
    {
      id: "9",
      title: "Inception",
      category: "Thriller",
      likes: 2,
      dislikes: 1,
      poster_url : "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    },
    {
      id: "10",
      title: "Gone Girl",
      category: "Thriller",
      likes: 22,
      dislikes: 12,
      poster_url : "https://image.tmdb.org/t/p/w500/x9ezMgOtDPqHatHDvxEG0ILb6Ie.jpg",
    },
  ];
  
  export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 500, movies));