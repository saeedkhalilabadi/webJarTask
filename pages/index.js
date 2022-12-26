import React, { useState } from 'react'

import Image from 'next/image'
import { Inter } from '@next/font/google'
//import '../styles/output.css'
const inter = Inter({ subsets: ['latin'] })
import Header from '../components/header'
import Categories from '../components/categories';
import { dehydrate, QueryClient, useQuery } from "react-query";
import PostCard from '../components/postCard';
import SearchBox from '../components/searchBox';
import BreadCrumb from '../components/breadCrumb';
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
  const [searchText, setSearchText] = useState('');
  const { data, isError } = useQuery(
    "posts",
    api.getPosts
  );



  return (
    <div className='bg-white'>
      <Header data={fillters} onChange={(e) => console.log(e)} />
      <BreadCrumb params={['خانه', 'وبلاگ']} />
      <div class=" flex justify-center font-extrabold text-3xl  mt-20">
        وبلاگ
      </div>
      <div class=" flex justify-center mt-16">

        <SearchBox onChange={(e) => setSearchText(e.target.value)} />
      </div>

      <div class="justify-center md:flex md:flex-row mt-16">
        <div class="sm:w-full hidden xl:flex xl:basis-1/4 justify-center xs:mx-16 ">
          <Categories data={fillters} onChange={setFillters} />
        </div>
        <div class="xl:basis-3/4 xl:mx-0 md:basis-1/1 justify-center mx-16 ">
          {data?.filter(item =>
            searchText == '' ||
            item.title.match(new RegExp(searchText.trim())) ||
            item.body.match(new RegExp(searchText.trim()))
          ).map(post => <PostCard post={post} />
          )}
        </div>

      </div>
    </div>
  )
}
