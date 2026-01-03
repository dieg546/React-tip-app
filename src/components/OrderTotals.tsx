import { useMemo } from 'react'
import type {MenuItem,OrderItem} from '../types'
import { formatCurrency } from '../helpers'

type OrderContentProps={

    order: OrderItem[],
    tip: number,
    placeOrder: () => void

}

export default function OrderTotals({order,tip,placeOrder}: OrderContentProps) {

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
                onClick={() => placeOrder()}
            
            >
                Guardar Orden
            </button>

        
        </>
    )
}
