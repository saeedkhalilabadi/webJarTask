import React, { useState } from 'react'

import Image from 'next/image'
import { Inter } from '@next/font/google'
//import '../styles/output.css'
const inter = Inter({ subsets: ['latin'] })
import Header from '../components/header'
import Categories from '../components/categories';
import { dehydrate, QueryClient, useQuery } from "react-query";
import PostCard from '../components/postCard'
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
      <div class="flex flex-row">
        <div class="basis-1/4">


          <Categories data={fillters} onChange={setFillters} />
        </div>
        <div class="basis-3/4">


          {data?.map(post => <PostCard post={post} />
          )}
        </div>

      </div>
    </div>
  )
}
