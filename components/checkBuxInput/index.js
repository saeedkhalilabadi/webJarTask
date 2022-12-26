export default function CheckBuxInput({ onChange = () => { }, value = false }) {

    return (<div class="p-4">
        <div class="flex items-center mr-4 mb-2">
            <input type="checkbox" id="A3-yes" name="A3-confirmation" checked={true} class="opacity-0 absolute h-8 w-8" />

            <div class="bg-white border-2 rounded-md border-black w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
            </div>


        </div>
    </div>)
    return (
        <input type='checkbox'
            checked={value}
            onChange={(e) => onChange(e.target.checked)}
            class={value ? "h-8 w-8 text-Normal accent-white border border-Normal bg-Normal" : "h-8 w-8"} />)

}