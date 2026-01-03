import { formatCurrency } from "../helpers"
import type { MenuItem, OrderItem } from "../types"

type OrderContentProps={

    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void

}

export default function OrderContents({order, removeItem}: OrderContentProps) {
  return (
    <>

        <div>
            <h2 className=' font-black text-4xl'>Consumo</h2>

            <div className=" space-y-3 mt-5">

                {order.length===0 ?  
                
                    <p>No hay un pingo</p>    

                : 
                
                    (
                        order.map(item=>(
                            <div 
                                className=" flex flex-row justify-between border-t border-gray-300 py-3 items-center last-of-type:border-b"
                                key={item.id}
                            >

                                <div>
                                    <p className=" text-lg">
                                        {item.name} - {formatCurrency(item.price)}
                                    </p>

                                    <p className=" font-black">
                                        Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                                    </p>
                                </div>

                                

                                <button className=" bg-red-600 h-8 w-8 rounded-full text-white font-black"
                                    onClick={()=> removeItem(item.id)}
                                >
                                    X
                                </button>


                            </div>
                        ))
                    )
                
                }

            </div>

        </div>

    
    </>
  )
}
