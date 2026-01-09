import { useMemo } from 'react'
import type {OrderItem} from '../types'
import { formatCurrency } from '../helpers'
import type { OrderActions } from '../reducers/order-reducer'

type OrderContentProps={

    order: OrderItem[],
    tip: number,
    dispatch: React.Dispatch<OrderActions>

}

export default function OrderTotals({order,tip,dispatch}: OrderContentProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price *item.quantity),0)
    ,[order])

    const subtotalAmountTip = useMemo(() => subtotalAmount * tip //Permite facilitar los calculos useMemo
    ,[tip,order])

    const totalAmount = useMemo(() => subtotalAmount+subtotalAmountTip,[tip,order])

    return (
        <>

            <div className=' space-y-3'>

                <h2
                    className='font-black text-2xl'
                >
                    Totales y Propina: 
                </h2>

                <p>
                    Subtotal a pagar: 
                    <span className=' font-bold'> {formatCurrency(subtotalAmount)}</span>
                    
                </p>

                <p>
                    Propina: 
                    <span className=' font-bold'> {formatCurrency(subtotalAmountTip)}</span>
                    
                </p>

                <p>
                    Total a pagar: 
                    <span className=' font-bold'> {formatCurrency(totalAmount)}</span>
                    
                </p>

            </div>

            <button
                className=' w-full bg-black uppercase p-3 text-white font-bold
                disabled:opacity-15'
                disabled={totalAmount===0}
                onClick={() => dispatch({type:'place-order'})}
            
            >
                Guardar Orden
            </button>

        
        </>
    )
}
