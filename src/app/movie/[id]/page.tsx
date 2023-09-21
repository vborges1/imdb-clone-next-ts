import { searchMovie } from "@/shared/interfaces/search.interface"
import { IResult } from "@/shared/interfaces/result.interface"
import Image from "next/image"

const API_KEY = process.env.API_KEY

 async function getMovie(movieId: string) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
    return await res.json()
}

export default async function MoviePage({ params }: searchMovie) {
    const movie: IResult = await getMovie(params.id)
    
    return (
        <div className="w-full">
            <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
                {
                    (movie.backdrop_path || movie.poster_path) ? 
                        <Image 
                            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} 
                            width={500}
                            height={300}
                            alt={`${movie.title ?? movie.name}`} 
                            className="rounded-lg"
                            placeholder="blur"
                            blurDataURL="/loading.svg"
                            style={
                                { maxWidth: '100%', height: '100%' }
                            }
                        /> : 'Imagem não encontrada'
                }
                <div className="p-2">
                    <h2 className="text-lg mb-3 font-bold">{movie.title ?? movie.name}</h2>
                    <p className="text-lg mb-3">
                        <span className="font-semibold mr-1">Visão geral:</span>
                        {movie.overview}
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold mr-1">Data de lançamento:</span>
                        {movie.release_date ?? movie.first_air_date}
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold mr-1">Avaliação:</span>
                        {movie.vote_count ?? 0}
                    </p>
                </div>
            </div>
            
        </div>
    )
}
