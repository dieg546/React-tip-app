import type { MenuItem } from "../types"
import useOrder from "../hooks/useOrder"

type ItemMenuProps={

    item: MenuItem,
    addItem: (item:MenuItem) => void

}

export const MenuItems = ({item,addItem}:ItemMenuProps) => {
  return (
    <>

        <button className=" border-2 border-teal-500 p-5 flex justify-between w-full hover:bg-teal-200"
          onClick={()=>addItem(item)}
        >

            <h1 >{item.name}</h1>
            <p className=" font-black" >${item.price}</p>

        </button>

    </>
  )
}
