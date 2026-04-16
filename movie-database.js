
const movies = [
    { id: 1, title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi", director: "Nolan" },
    { id: 2, title: "Dark Knight", year: 2008, rating: 9.0, genre: "Action", director: "Nolan" },
    { id: 3, title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi", director: "Nolan" },
    { id: 4, title: "Gladiator", year: 2000, rating: 8.5, genre: "Action", director: "Scott" },
    { id: 5, title: "Avatar", year: 2009, rating: 7.8, genre: "Sci-Fi", director: "Cameron" }
];

// 1. GET ALL TITLES
function getTitles() {
    const titles = movies.map(m => m.title);
    console.log("All Titles:", titles);
    return titles;
}

// 2. HIGH-RATED MOVIES (>8.5)
function getHighRated() {
    const highRated = movies.filter(m => m.rating > 8.5);
    console.log("High Rated:", highRated);
    return highRated;
}

// 3. NOLAN MOVIES
function getNolan() {
    const nolan = movies.filter(m => m.director === "Nolan");
    console.log("Nolan's Movies:", nolan);
    return nolan;
}

// 4. AVERAGE RATING
function getAvgRating() {
    const avg = movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;
    console.log("Average Rating:", avg.toFixed(2));
    return avg;
}

// 5. MOVIES BY GENRE
function getByGenre(genre) {
    const result = movies.filter(m => m.genre === genre);
    console.log(`${genre} Movies:`, result);
    return result;
}

// 6. SORTED BY YEAR (NEWEST FIRST)
function sortByYear() {
    const sorted = movies.sort((a, b) => b.year - a.year);
    console.log("Sorted by Year:", sorted);
    return sorted;
}

console.log("========== MOVIE DATABASE ==========");
getTitles();
getHighRated();
getNolan();
getAvgRating();
getByGenre("Sci-Fi");
sortByYear();
