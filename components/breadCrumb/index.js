export default function BreadCrumb({ params = [] }) {

    return (<div class="mr-24 xl:mr-52 font-normal text-xl mt-10">
        {params.map((item, index) => <p class={
            params.length == index + 1 ?
                'text-Normal inline-block cursor-pointer' :
                ' inline-block cursor-pointer'
        }>{item + (params.length == index + 1 ? "" : ' > ')}</p>)}
    </div>);

}