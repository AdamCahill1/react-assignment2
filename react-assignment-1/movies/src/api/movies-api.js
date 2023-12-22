export const getMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/movies', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
};

export const getUpComingMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/upcoming', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
};

export const getNowPlaying = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/nowPlaying', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
};

export const getTopRated = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/topRated', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
};

export const searchMovies = async (search) => {
    const response = await fetch(
        `http://localhost:8080/api/movies/tmdb/searchMovies?search=${encodeURIComponent(search)}`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        },
        method: 'GET'
    }
    )
    return response.json();
};

export const getMovieImages = async ({ queryKey }) => {
    const [, { id }] = queryKey;
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/movieImages/${id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      },
      method: 'GET'
    });
    return response.json();
};

export const getMovie = async ({ queryKey }) => {
    const [, { id }] = queryKey;
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/movie/${id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      },
      method: 'GET'
    });
    return response.json();
};

export const getMovieReviews = async (id) => {
    const response = await fetch(
        `http://localhost:8080/api/movies/tmdb/reviews?id=${encodeURIComponent(id)}`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        },
        method: 'GET'
    }
    )
    return response.json();
};

export const getWatchProviders = async (id) => {
    const response = await fetch(
        `http://localhost:8080/api/movies/tmdb/watchProviders?id=${encodeURIComponent(id)}`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        },
        method: 'GET'
    }
    )
    return response.json();
};

export const getMovieTrailers = async (id) => {
    const response = await fetch(
        `http://localhost:8080/api/movies/tmdb/trailer?id=${encodeURIComponent(id)}`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        },
        method: 'GET'
    }
    )
    return response.json();
};


export const getGenres = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/genres', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
};

export const getFavourites = async () => {
  const response = await fetch(
    'http://localhost:8080/api/favourites', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    },
    method: 'get',
  }
  )
  return response.json();
};

export const addToFavourite = async (id, title) => {
  const response = await fetch('http://localhost:8080/api/favourites', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ id: id, title: title })
  });
  return response.json();
};

export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};