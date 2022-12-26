
import Author from "./author"
import CreateAt from "./createAt"
import CommenCount from "./commentCount"
import { ButtonOrginal } from "../button"
import LoadingIcon from "../loadingIcon"
export default function PostCard({ post }) {

    return (
        <div class='md:flex rounded-xl mt-24 xs:mx-16'>
            <div class="w-full md:w-72 md:h-72 md:ml-16 ">


                <img
                    class="w-full  md:min-w-72 md:min-h-72 md:w-72 md:h-72 rounded-t-xl  md:rounded-r-xl md:rounded-tl-none "
                    src={post?.introImageUrl?.host + post?.introImageUrl?.path}
                    layout="fill"
                    objectFit="contain"
                    alt={''}
                />
            </div>
            <div class='w-full md:basis-3/6 md:ml-16 '>

                <div class="justify-self-start font-medium text-lg mt-9">
                    {post.title}
                </div>
                <section class="mt-10 max-h-24 leading-8 text-base overflow-hidden">
                    {post.body}

                </section>
                <div class="flex justify-evenly mt-11">
                    <CreateAt class='flex-auto' data={post.createdAt} />
                    <CommenCount class="flex-auto" data={post.commentCount} />
                    <Author class="flex-auto" data={post.author} />

                </div>
            </div>
            <div class="w-full mt-16 md:basis-1/6 flex flex-wrap-reverse justify-center md:w-44  ">
                <ButtonOrginal>
                    <div class="flex justify-center">
                        بیشتر
                    </div>
                </ButtonOrginal>
            </div>
        </div>
    )

}