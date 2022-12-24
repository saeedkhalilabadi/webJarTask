export default function CommenCount({ data = "" }) {


    return (<div class="flex justify-center">
        <img class="ml-3 w-5 h-5" src="/postCardIcons/comment.png"></img>
        <p class="text-sm font-light">

        {data + ' نظر '}
        </p>

    </div>)

}