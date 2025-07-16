import React from 'react'
import Preg3 from "../Assets/images/Preg3Product.png"
import HerbelPower from "../Assets/images/HerbelPowerProduct.png"
const Products = [
    {
        id: 1,
        name: "Preg3",
        description: "A trusted supplement for reproductive health in livestock.",
        img: Preg3,
        price: "580 $"
    },
    {
        id: 2,
        name: "LivoVet",
        description: "Liver tonic that supports metabolic function in animals.",
        img: HerbelPower
    },
    //   {
    //     id: 3,
    //     name: "BioBoost",
    //     description: "Immune system enhancer for all types of domestic animals.",
    //     img: ""
    //   }
];

function OurBestProducts() {
    return (
        <section className='py-28'>
            <div className="container  ">
                <div className="">
                    <h2 className='text-5xl font-extrabold text-gray-800 mb-10 leading-tight'>Our Best Prodcuts</h2>
                    <div className='flex justify-between flex-wrap gap-8 ' >
                        {Products.map((item) => (
                            <div key={item.id} className="group border p-4 rounded hover:scale-105 transition-transform duration-300 easy-in-out hover:border-[grey] hover:shadow-xl mb-4 hover:bg-[#076347] hover:text-white ">
                                <h3 className="text-xl font-bold">{item.name}</h3>
                                {item.img && <img src={item.img} alt={item.name} className="mt-2 w-full rounded-xl" />}

                                <p className="group-hover:text-white text-gray-700 ">{item.description}</p>

                                <a href="https://www.amazon.in/Earthos-Indigo-Powder/dp/B0CBKRPFVR/ref=sr_1_2_sspa?crid=XYWPAWHU9BJJ&dib=eyJ2IjoiMSJ9.-LM-VrSJrERZNF4g6LMhP1G7BMJd_-5-iZgG0pm8NYe3XyzrXKtHr9Umx5Zilu0eF2zYpCyihzqqcGwbWAq1NLSKlEKmzmlgEogWtgCO-iq30EBakklQp2FGOGacqz0ipjbnLmYJ9cDnr3bUpuCVwYWVnasqAISHccf3W7PJ2JwwjYrljrRMMg5F31y_PhUFDgVc4dIjn6y7XYzdTf4Vo0W9JCLx7YBl7mMAO0MEqK72koGw5fYfhh9YbYMPMyVkaOE3UbLojP8Ln-u3KAMr_P3L0uY5824lKaccRKd6nT8.SBmqcFLiwNMwyNggix7oR-QzS8Ruzxow8feKvhoOr4s&dib_tag=se&keywords=herbal%2Bpowder&qid=1752657251&sprefix=herbel%2Bpowder%2Caps%2C254&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1">        <button
                                    className="bg-[#076347] text-white py-2 px-6 rounded-3xl group-hover:border-white group-hover:border border-[#076347]
             transition-all duration-300
             hover:bg-white hover:text-[#076347]"
                                >
                                    Purchase Now
                                </button></a>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurBestProducts
