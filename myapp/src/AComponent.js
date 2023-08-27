import React from 'react'
import BComponent from './BComponent'
import DataContext from './DataContext'

const AComponent = () => {
    const Vashihatnama="mera grand children ko kuch bhi nhi milega"
  return (
   <DataContext.Provider value={Vashihatnama}>
   <div>AComponent
   <BComponent/>
   </div>
   </DataContext.Provider>
    
  )
}

export default AComponent
