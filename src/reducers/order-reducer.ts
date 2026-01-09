import type { MenuItem, OrderItem } from "../types";

export type OrderActions=
    {type: 'add-item', payload:{item:MenuItem}} |
    {type: 'remove-item', payload:{id:MenuItem['id']}} |
    {type: 'place-order'}|
    {type: 'add-tip', payload: {value:number}}

export type OrderState={

    order: OrderItem[],
    tip: number

}

export const initialState: OrderState = {

    order:[],
    tip: 0

}

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
)=>{

    if(action.type==='add-item'){

        const ItemExists = state.order.find(element=>element.id === action.payload.item.id)

        let updateOrder : OrderItem[] = []

        if(ItemExists){

            updateOrder = state.order.map(orderItem=>orderItem.id=== action.payload.item.id ? 
                {...orderItem,quantity: orderItem.quantity + 1}:
                orderItem
            )

            // setOrder(updateOrder)

        }else{

            const newItem: OrderItem = {...action.payload.item, quantity:1} 
            updateOrder = [...state.order,newItem]
        }

        return {
            ...state,
            order: updateOrder
        }

    }

    if(action.type==='remove-item'){

        const updatedOrder = state.order.filter(order => order.id !== action.payload.id)

        return {
            ...state,
            order: updatedOrder
        }

    }

    if(action.type ==='place-order'){
        
        console.log("Presionaste click :D")

        return {
            ...state,
            order: [],
            tip: 0
        }

    }

    if(action.type === 'add-tip'){

        const tip = action.payload.value

        return{
            ...state,
            tip: tip
        }

    }

    return state

}