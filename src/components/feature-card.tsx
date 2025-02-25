import React from 'react'
 
type Card = {
    title:string,
    subTitle:string,
    Icon: React.ElementType;
}

export default function FeatureCard({card}:{card:Card}) {
  return (
    <div className="bg-white shadow-lg p-6 flex flex-col items-center space-y-4  hover:scale-105 hover:transition-all ">
    {/* <MdOutlineLocalShipping className="text-blue-500 text-4xl" /> */}
     <card.Icon className="text-blue-500 text-4xl fill-primary" />
    <h2 className="font-semibold text-xl mt-6">{card.title}</h2>
    <h3 className="text-gray-600 mt-4">{card.subTitle}</h3> 
  </div>
  )
}
