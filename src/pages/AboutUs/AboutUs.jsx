import React, { useState } from 'react'
import Section4Home from '../Home/Sections/Section4Home/Section4Home'
import NewsCard from '../News/NewsCard'
import { allCards } from '../News/nn'

export default function AboutUs() {
  const [openId, setOpenId] = useState(null)

  return (
    <div className="w-[92%] max-w-[1200px] m-auto mt-10">

      <Section4Home />
      <div className="flex flex-col gap-6 md:gap-8 mt-10">
        {allCards.map((card) => (
  <NewsCard
    key={card.id}
    card={card}
    isOpen={false}
    onToggle={() => {}}
  />
))}
      </div>

    </div>
  )
  
}
