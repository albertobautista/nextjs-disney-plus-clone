import React from 'react'
import ShowThumbnail from './ShowThumbnail'

const ShowsCollection = ({ results, title }: any) => {
  return (
    <div className="my-8 mx-auto flex max-w-[1400px] flex-col space-y-2 px-8">
      <h2 className="font-semibold">{title}</h2>
      <div className="-m-2 flex space-x-6 overflow-y-hidden overflow-x-scroll p-2 scrollbar-hide">
        {results.results.map((result: any) => (
          <ShowThumbnail key={result.id} result={result} />
        ))}
      </div>
    </div>
  )
}

export default ShowsCollection
