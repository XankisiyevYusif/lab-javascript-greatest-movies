// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(movie => movie.director);
  return [...new Set(directors)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  
  let totalScore = 0;
  for (const movie of moviesArray) {
    if (movie.score) {
      totalScore += Number(movie.score);
    }
  }
  
  return Math.round((totalScore / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
  if (dramaMovies.length === 0) return 0;
  
  let totalDramaScore = 0;
  for (const movie of dramaMovies) {
    if (movie.score) {
      totalDramaScore += movie.score;
    }
  }
  
  return Math.round((totalDramaScore / dramaMovies.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return a.title.localeCompare(b.title);
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return [...moviesArray]
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20)
    .map(movie => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    const hoursMatch = movie.duration.match(/(\d+)h/);
    const minutesMatch = movie.duration.match(/(\d+)min/);
    const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;
    return { ...movie, duration: hours * 60 + minutes };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const yearGroups = {};
  for (const movie of moviesArray) {
    if (!yearGroups[movie.year]) {
      yearGroups[movie.year] = [];
    }
    yearGroups[movie.year].push(movie.score);
  }

  let bestYear = null;
  let bestAvg = -1;

  for (const year in yearGroups) {
    const scores = yearGroups[year];
    
    let sum = 0;
    for (const score of scores) {
      sum += score;
    }
    const currentAvg = Math.round((sum / scores.length) * 100) / 100;
    const currentYear = Number(year);
 
    if (currentAvg > bestAvg) {
      bestAvg = currentAvg;
      bestYear = currentYear;
    } else if (currentAvg === bestAvg && currentYear < bestYear) {
      bestYear = currentYear;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}