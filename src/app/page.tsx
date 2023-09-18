import Results from "@/components/Results";

const API_KEY = process.env.API_KEY

export default async function Home({ searchParams }: any ) {
  const genre = searchParams.genre || "fetchTrending"
  const res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'}?api_key=${API_KEY}&language=pt-BR&page=1`, 
    { next: { revalidate: 10000 }}
  )
  
  if (!res.ok) {
    throw new Error(`Não foi possível consultar`);
  }

  const data = await res.json()

  const results = data.results;
  
  return (
    <main>
      <Results results={results} />
    </main>
  )
}
