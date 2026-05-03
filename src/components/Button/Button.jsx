import React from 'react'

export default function Button({ name, bg = "bg-transparent" }) {
  return (
    <div
      className={`border border-[#EFA35A] px-[30px] py-[10px] text-white ${bg}`}
    >
      <p>{name}</p>
    </div>
  )
}
