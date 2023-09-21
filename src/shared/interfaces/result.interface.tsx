export interface IResult {
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
    origin_country: string[],
    success?: boolean
}