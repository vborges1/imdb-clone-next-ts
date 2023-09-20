import Card from "./Card"
import { IResult } from "@/shared/interfaces/result.interface"

export default function Results({results}: any) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result: IResult) => (<div id={result.id}>
          <Card key={result.id} result={result} />
      </div>))}
    </div>
  )
}
