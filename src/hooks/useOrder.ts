import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

function useOrder(){

    const [order,setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

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

    const removeItem = (id: MenuItem['id']) =>{

        setOrder(order.filter(item => id !== item.id))

    }

    const placeOrder = () =>{

        setOrder([])
        setTip(0)

    }

    return {

        addItem,
        order,
        tip,
        setTip,
        removeItem,
        placeOrder

    }

}

export default useOrder;