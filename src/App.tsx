import { useState } from 'react'
import { menuItems } from './data/db'
import { MenuItems } from './components/MenuItems'
import useOrder from './hooks/useOrder'
import OrderContents from './components/OrderContents'

function App() {
  // const [count, setCount] = useState(0)

  const {addItem,order} = useOrder()

  return (
    <>

      <header className=' p-5 bg-teal-500'>
        <h1 className=' text-2xl font-bold text-center'>Calculadora de Propinas Easy</h1>
      </header>

      <main className=' max-w-7xl mx-auto grid md:grid-cols-2 py-20'>

        <div>
          <h2 className=' font-black text-2xl'>Menu</h2>

          <div className=' space-y-5 p-3 mt-10'>

            {menuItems.map(item=>
              <MenuItems

                key={item.id}
                item={item}
                addItem={addItem}

              />
            )}

          </div>
          
        </div>

        <div className=' border border-dashed border-slate-300 p-5 rounded-lg space-y-10'>
          <OrderContents
            order={order}
            
          />
          

        </div>

        

        

      </main>
      {/* <h1 className=" text-2xl font-bold">Hola mundito</h1> */}
    </>
  )
}

export default App
