import React from 'react'
import FeatureCard from '../feature-card'
import { MdOutlineLocalShipping, MdMoreTime } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";


export default function OurServices() {

    const services = [
        {
            title: "Free Shipping",
            subTitle: "For all order over $99",
            Icon: MdOutlineLocalShipping
        },
        {
            title: "Delivery on Time",
            subTitle: "Definition and measurement",
            Icon: MdMoreTime
        },
        {
            title: "Secure Payment",
            subTitle: "100% secure payment",
            Icon: RiSecurePaymentLine
        }
    ]

    return (
        <div className=' bg-gray-100'>
            <div className="container mx-auto md:px-12 px-4 py-16 ">
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-8 space-y-8 lg:space-y-0'>

                {services.map((service, index) => (
                    <FeatureCard key={index} card={service} />
                ))}
                </div>

            </div>
        </div>

    )
}
