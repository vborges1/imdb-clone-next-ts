import Results from "@/components/Results"
import { searchMovie } from "@/shared/interfaces/search.interface"

const API_KEY = process.env.API_KEY

export default async function SearchPage({ params }: searchMovie) {
    const searchTerm: string = params.searchTerm
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=pt-BR&include_adult=false`)
    
    if (!res.ok) {
        throw new Error(`Não foi possível consultar`)
    }

    const data = await res.json()
    const results = data.results

    return (
        <div>
            {results && results.length === 0 && (
                <h1 className="text-center pt-6">Sem resultados para sua pesquisa</h1>
            )}

            {results && <Results results={results} />}
        </div>
    )
}
