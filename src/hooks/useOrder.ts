import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

function useOrder(){

    const [order,setOrder] = useState<OrderItem[]>([]);

    const addItem = (item:MenuItem) =>{

        const ItemExists = order.find(element=>element.id === item.id)

        if(ItemExists){

            const updateOrder = order.map(orderItem=>orderItem.id=== item.id ? 
                {...orderItem,quantity: orderItem.quantity + 1}:
                orderItem
            )

            setOrder(updateOrder)

        }else{

            const newItem : OrderItem = {...item, quantity:1} 
            setOrder([...order,newItem])
        }

        

    }

    return {

        addItem,
        order

    }

}

export default useOrder;