
import { ButtonLight, ButtonOrginal } from '../button/index.js';
import { AiOutlineMenu } from 'react-icons/ai';
import MenuItem from './menuItem.js';
import Login from '../login/index.js';

export default function Header({ data = [], onChange = () => { } }) {
    const menuItems = [{ title: 'خانه', link: "" }, { title: 'محصولات', link: "" }, { title: 'خدمات', link: "وبلاگ" }, { title: '', link: "" }]

    return (<div class="relative h-32 bg-yellow-300 shadow-md flex flex-row content-center items-center">

        <div class="hidden md:flex text-2xl text-lime-500 mr-24 xl:mr-52 ">
            {"</>"}
        </div>
        <div class="hidden md:flex flex-row content-center items-center mr-16">
            {menuItems.map(item => <MenuItem data={item} class={"basis-1/" + menuItems.length + 'content-center items-center'}
                onClick={() => onChange(item)} />)}
        </div>
        <div class="flex flex-row content-center items-center mr-16 md:hidden ">
            <AiOutlineMenu class="text-3xl cursor-pointer"></AiOutlineMenu>
        </div>

        <div class="absolute left-2 md:left-24 xl:left-52 w-40 ">
            <Login />
        </div>



    </div>)

}