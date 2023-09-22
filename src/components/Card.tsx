import { IResult } from "@/shared/interfaces/result.interface"
import Image from "next/image"
import Link from "next/link"
import { FiThumbsUp } from 'react-icons/fi'

export default function Card({ result }: { result: IResult }) {
    const date = new Date(result.release_date ?? result.first_air_date);
    
    return (
        <div key={result.id} className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
            <Link href={`/movie/${result.id}`}>
                <Image 
                    src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} 
                    width={500}
                    height={300}
                    alt={`${result.title ?? result.name}`} 
                    className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
                    placeholder="blur"
                    blurDataURL="/loading.svg"
                    style={
                        { maxWidth: '100%', height: 'auto' }
                    }
                />
                <div className="p-2">
                    <p className="line-clamp-2 text-md">{result.overview}</p>
                    <h2 className="truncate text-lg font-bold">{result.title ?? result.name}</h2>
                    <p className="flex items-center">
                        {date.toLocaleDateString()}
                        <FiThumbsUp className="h-5 mr-1 ml-3" /> 
                        {result.vote_count}
                    </p>
                </div>
            </Link>
        </div>
    )
}
