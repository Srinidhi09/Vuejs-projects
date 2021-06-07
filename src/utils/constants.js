export const apiKey = "18e276e3";
export const imdbIds = ['tt0454921', 'tt5753856', 'tt0111161', 'tt0944947', 'tt0386676', 'tt0398286', 'tt2294629', 'tt0903747'];
/**
 * 
 * @param {string} id | Pass imdbID 
 * @returns Object of movie
 */
export const getMovieUrl = (id) => `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`;

/**
 * 
 * @param {string} id | Pass imdbID
 * @param {string} h | Pass height of the poster
 * @returns Object of movie
 */
export const getPosterUrl = (id, h) => `http://img.omdbapi.com/?i=${id}&apikey=${apiKey}&h=${h}`;