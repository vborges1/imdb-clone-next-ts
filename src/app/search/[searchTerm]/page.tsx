const API_KEY = process.env.API_KEY

export default async function SearchPage({ params }: any) {
    const searchTerm: string = params.searchTerm
    const res = await fetch(`https://api.themovidedb.org/3/search/movie?api_key=${'API_KEY'}&query=${searchTerm}&language=pt-BR&include_adult=false`)
    return (
        <div>page</div>
    )
}
