export default function CreateAt({ data = '' }) {


    return (<div class="flex justify-center">
        <img class="ml-3 w-5 h-5" src='/postCardIcons/date.png'></img>
        <p class="text-sm font-light">
            {data}

        </p>

    </div>);




}