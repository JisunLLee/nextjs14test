import Link from 'next/link';
import { resolve } from 'path';

export const metadata = {
  title: 'HOME',
};

export const API_URL = 'http://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}
export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
