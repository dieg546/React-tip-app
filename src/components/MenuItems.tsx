import type { MenuItem } from "../types"

type ItemMenuProps={

    item: MenuItem

}

export const MenuItems = ({item}:ItemMenuProps) => {
  return (
    <>

        <button className=" border-2 border-teal-500 p-5 flex justify-between w-full hover:bg-teal-200">

            <h1 >{item.name}</h1>
            <p className=" font-black" >${item.price}</p>

        </button>

        
    
    </>
  )
}
