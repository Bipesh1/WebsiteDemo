import React from 'react'
import ShopNow from '../shop-now'

export default function ShopnowSection() {

    const cards = [
        {
            text: 'Up To 20% Off',
            heading: 'Singing Bowl',
            buttonTitle: 'Shop Now',
            imageSrc: 'shopnow1.webp'
        },
        {
            text: 'Hemp Oil',
            heading: 'Hemp Products',
            buttonTitle: 'Shop Now',
            imageSrc: 'shopnow3.avif'
        },
        {
            text: 'Bronze Store',
            heading: 'Tibetian Singing Bowl',
            buttonTitle: 'Shop Now',
            imageSrc: 'shopnow2.avif'
        },
       
    ]

    return (
        <div >
            <div className='container mx-auto  md:px-12 px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-6 '>
                {cards.map((card, index) => (
                    <ShopNow key={index} shopnow={card} />
                ))}
            </div>
        </div>


    )
}
