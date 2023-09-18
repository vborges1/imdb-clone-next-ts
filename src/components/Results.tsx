export interface resultsInterface {
    adult: boolean,
    backdrop_path: string,
    id: string,
    title: string,
    name: string,
    original_language: string
    original_name: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: any[],
    popularity: any,
    first_air_date: any,
    release_date: any,
    vote_average: any,
    vote_count: number,
    origin_country: string[]
}

export default function Results({results}: any) {
  return (
    <div>
        {results.map((result: resultsInterface) => (<div id={result.id}>
            {result.title ?? result.name}
        </div>))}
    </div>
  )
}
