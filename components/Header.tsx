import React from 'react'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from '@heroicons/react/solid'
import { useRouter } from 'next/router'

const Header = () => {
  const { data: session, status } = useSession()
  console.log('🚀 ~ file: Header.tsx ~ line 14 ~ Header ~ status', status)
  const router = useRouter()
  console.log('🚀 ~ file: Header.tsx ~ line 13 ~ Header ~ session', session)
  return (
    <div className="sticky top-0 z-[1000] flex h-[72px] items-center bg-[#040714] px-10 md:px-12 ">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
        alt="logoDisney"
        onClick={() => router.push('/')}
      />
      {session && (
        <div className="ml-10 hidden items-center space-x-6 md:flex">
          <a className="header-link group">
            <HomeIcon className="h-4" />
            <span className="span">Home</span>
          </a>
          <a className="header-link group">
            <SearchIcon className="h-4" />
            <span className="span">Search</span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a className="header-link group">
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            <img src="/images/movie-icon.svg" alt="" className="h-5" />
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            <img src="/images/series-icon.svg" alt="" className="h-5" />
            <span className="span">Series</span>
          </a>
        </div>
      )}
      {!session ? (
        <button
          onClick={() => signIn()}
          className="ml-auto rounded border px-4 py-1.5 font-medium uppercase tracking-wide transition duration-200 hover:bg-white hover:text-black"
        >
          Login
        </button>
      ) : (
        <img
          // src={session?.user?.image}
          src="https://lh3.googleusercontent.com/a-/AOh14GhdmUE-sGiXRk2ERwQwE2gv9_lmr92UAeJOwpI48pA=s96-c"
          alt="user image"
          className="ml-auto h-12 w-12 cursor-pointer rounded-full object-cover"
          onClick={() => signOut()}
        />
      )}
    </div>
  )
}

export default Header
