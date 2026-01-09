import type { MenuItem } from "../types"
import type { OrderActions } from "../reducers/order-reducer"

type ItemMenuProps={

  item: MenuItem,
  dispatch: React.Dispatch<OrderActions>

} 

export const MenuItems = ({item,dispatch}:ItemMenuProps) => {
  return (
    <>

        <button className=" border-2 border-teal-500 p-5 flex justify-between w-full hover:bg-teal-200"
          onClick={()=>dispatch({type: 'add-item',payload:{item}})}
        >

            <h1 >{item.name}</h1>
            <p className=" font-black" >${item.price}</p>

        </button>

    </>
  )
}
