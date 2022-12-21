import React, { useState } from 'react'

import Image from 'next/image'
import { Inter } from '@next/font/google'
//import '../styles/output.css'
const inter = Inter({ subsets: ['latin'] })
import Header from '../components/header'
import Categories from '../components/categories';
import { dehydrate, QueryClient, useQuery } from "react-query";
import * as api from './api/api';


async function getPosts() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("posts", api.getPosts);
  return {
    props: {
      posts: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const [fillters, setFillters] = useState([]);
  const { data, isError } = useQuery(
    "posts",
    api.getPosts
  );


  console.log(data)
  return (
    <div className='bg-white'>
      <Header data={fillters} onChange={(e) => console.log(e)} />

      <Categories data={fillters} onChange={setFillters} />

      {data?.map(post => <div>

        <img
          src={post?.introImageUrl?.host + post?.introImageUrl?.path}
          layout="fill"
          objectFit="contain"
          alt={''}
        />
        <div>
          {post.title}
        </div>
        <section>
          {`${post.body}`}

        </section>
      </div>
      )}

    </div>
  )
}
