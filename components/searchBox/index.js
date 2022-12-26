

export default function SearchBox(props) {

    return (



        <div class="w-2/3 flex justify-end items-center relative shadow-active  rounded-lg focus:border-none active:border-none ">
            <input
                {...props}
                placeholder="جستجو کنید ..."
                class="rounded-lg p-4 w-full active:border-none focus:border-none"
            />
            <img src="/searchIcon/search.png" class="absolute mr-2 w-10" />
        </div>
    )
}