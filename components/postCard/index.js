
import Author from "./author"
import CreateAt from "./createAt"
import CommenCount from "./commentCount"
export default function PostCard({ post }) {

    return (
        <div class='flex  rounded-xl mt-24'>
            <div class="basis-1/4 ml-16">


                <img
                    class="min-w-72 min-h-72 w-72 h-72 rounded-r-xl"
                    src={post?.introImageUrl?.host + post?.introImageUrl?.path}
                    layout="fill"
                    objectFit="contain"
                    alt={''}
                />
            </div>
            <div class='basis-1/2 ml-16'>

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
            <div class="basis-1/4 flex flex-wrap-reverse justify-center ">
                <button>بیشتر</button>
            </div>
        </div>
    )

}