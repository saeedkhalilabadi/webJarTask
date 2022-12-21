
import CheckBuxInput from '../checkBuxInput/index';

export default function Categories({ data = [], onChange = () => { } }) {
    const categoriList = ['کامپیوتر', 'سیستم های اداری', 'سیستم های تجاری', 'سیستم های عمومی', 'سیستم های آموزشی']
    const handelChange = ({ status, value }) => {
        console.log(status, value)
        if (status) {
            onChange([...data, value]);
        } else {
            onChange(data.filter(item => item != value))
        }

    }


    return (<div class="shadow-md rounded-2xl w-96 p-1 m-5">
        <div class="justify-start mr-2.5 text-2xl font-bold mb-14 mt-7">دسته بندی</div>
        {categoriList.map(categori => <div class="flex mr-5 w-10/12 justify-between text-lg font-normal m-3.5">

            {categori}
            <CheckBuxInput value={data.includes(categori)} onChange={(e) => handelChange({ status: e, value: categori })} />
        </div>)}

    </div>)

}