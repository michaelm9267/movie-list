/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movie_list').del()
  await knex('movie_list').insert([
    {title: "Oppenheimer", releaseDate: 2023, genre: "Biography, Drama, History", cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."], summary: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.", poster: "https://www.themoviedb.org/movie/872585-oppenheimer/images/posters"},
    {title: "Spider-Man: Across the Spider-Verse", releaseDate: 2023, genre: "Animation, Action, Adventure", cast: ["Shameik Moore", "Hailee Steinfeld", "Brian Tyree Henry", "Luna Lauren Velez"], summary: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.", poster: "https://www.themoviedb.org/movie/569094-spider-man-across-the-spider-verse/images/posters"},
    {title: "Mission: Impossible - Dead Reckoning Part One", releaseDate: 2023, genre: "Action, Adventure, Thriller", cast: ["Tom Cruise", "Hayley Atwell", "Ving Rhames", "Simon Pegg"], summary: "Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands.", poster: "https://www.themoviedb.org/movie/575264-mission-impossible-dead-reckoning-part-one/images/posters"},
    {title: "John Wick: Chapter 4", releaseDate: 2023, genre: "Action, Crime, Thriller", cast: ["Keanu Reeves", "Laurence Fishburne", "George Georgiou", "Lance Reddick"], summary: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.", poster: "https://www.themoviedb.org/movie/603692-john-wick-chapter-4/images/posters"}
  ]);
};