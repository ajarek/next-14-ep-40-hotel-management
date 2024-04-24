import React from 'react'

const Booking = ({searchParams}: {searchParams: any}) => {
  const {firstDate, secondaryDate, adults, children, price} = searchParams
  const first = new Date(firstDate)
  const second = new Date(secondaryDate)
  const period = (second.getTime() - first.getTime()) / (1000 * 60 * 60 * 24)

  return (
    <div>
      <p> Booking {period} days</p>
      <p>Adults {adults}</p>
      <p>Children {children}</p>
      <p>Price {price*period}$</p>
     
      </div>
  )
}

export default Booking