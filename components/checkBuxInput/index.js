export default function CheckBuxInput({ onChange = () => { }, value = false }) {


    return (
        <input type='checkbox'
            checked={value}
            onChange={(e) => onChange(e.target.checked)}
            class={value ? "h-8 w-8 text-lime-500 bg-none" : "h-8 w-8"} />)

}