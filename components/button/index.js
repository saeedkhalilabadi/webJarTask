



export const ButtonOrginal = (props) => {
    return (<button {...props}
        class="w-full h-10 xl:h-14 text-white rounded-xl bg-Normal 
        hover:bg-normal hover:shadow-hoverBtnLigth  
        active:bg-presed 
        disabled:bg-disable 
        focus:border-2-fcuse"
    />)

}

export const ButtonLight = (props) => {
    return (<button {...props}
        class="w-full h-10 xl:h-14 text-Normal rounded-xl bg-white shadow-none border-solid border-Normal border
         hover:bg-white hover:shadow-hoverBtnLigth
           active:bg-ligthBtnPresed active:shadow-presedBtnLigth active:rounded-xl
            disabled:bg-disable 
            focus:border-2-fcuse"

    />)

}
