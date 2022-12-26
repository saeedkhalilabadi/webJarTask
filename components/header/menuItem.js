


export default function MenuItems(props) {
    return (<div    {...props} class="text-xl font-normal mr-16 xl:mr-24  cursor-pointer" >
        {props.data.title}
    </div>)

}