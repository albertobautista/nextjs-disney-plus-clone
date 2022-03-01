import type { NextPage } from 'next'
import { getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import Brands from '../components/Brands'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MoviesCollection from '../components/MoviesCollection'
import ShowsCollection from '../components/ShowsCollection'
import Slider from '../components/Slider'

const Home: NextPage = ({
  popularMovies,
  popularShows,
  top_ratedMovies,
  top_ratedShows,
}: any) => {
  const { data: session, status } = useSession()
  return (
    <div>
      <Head>
        <title>
          Disney+ | The streaming home of Disney, Pixar, Marvel, Star Wars, Nat
          Geo and Star
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <main className="after:bg-home relative min-h-screen after:absolute after:inset-0 after:z-[-1] after:bg-cover after:bg-fixed after:bg-center after:bg-no-repeat">
          <Slider />
          <Brands />
          <MoviesCollection results={popularMovies} title="Popular Movies" />
          <ShowsCollection results={popularShows} title="Popular Shows" />
          <MoviesCollection
            results={top_ratedMovies}
            title="Top Rated Movies"
          />
          <ShowsCollection results={top_ratedShows} title="Top Rated Shows" />
        </main>
      )}
    </div>
  )
}

export default Home

export async function getServerSideProps(context: any) {
  const session = await getSession(context)

  const [
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
  ])

  const [popularMovies, popularShows, top_ratedMovies, top_ratedShows] =
    await Promise.all([
      popularMoviesRes.json(),
      popularShowsRes.json(),
      top_ratedMoviesRes.json(),
      top_ratedShowsRes.json(),
    ])
  console.log(
    '🚀 ~ file: index.tsx ~ line 61 ~ getServerSideProps ~ popularShows',
    popularShows
  )

  return {
    props: {
      session,
      popularMovies,
      popularShows,
      top_ratedMovies,
      top_ratedShows,
    },
  }
}