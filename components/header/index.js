
import MenuItem from './menuItem.js';

export default function Header({ data = [], onChange = () => { } }) {
    const menuItems = [{ title: 'خانه', link: "" }, { title: 'محصولات', link: "" }, { title: 'خدمات', link: "وبلاگ" }, { title: '', link: "" }]

    return (<div     class="h-32 bg-yellow-300 shadow-md flex flex-row content-center items-center">

        <div class="text-2xl text-lime-500 mr-52">
            {"</>"}
        </div>
        <div class="flex flex-row content-center items-center mr-16">
            {menuItems.map(item => <MenuItem data={item} class={"basis-1/" + menuItems.length + ' content-center items-center'}
                onClick={() => onChange(item)} />)}
        </div>

        <div class="absolute left-52">ورود</div>



    </div>)

}