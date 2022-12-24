export default function Author({ data = "" }) {


    return (<div class="flex justify-center">

        <img class="ml-3 w-5 h-5" src='/postCardIcons/author.png'></img>
        <p class="text-sm font-light">
            {data}
        </p>
    </div>)

}