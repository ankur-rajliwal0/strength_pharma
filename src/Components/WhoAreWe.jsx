import React from 'react'
import img from "../Assets/images/11428894.png"

function WhoAreWe() {
  return (
    <section className=''>
      <div className="container my-[250px]">
        <h1 className='text-[55px] font-jost font-bold'>Who Are We</h1>
        <div className="flex flex-wrap flex-row mx-[-12px] items-cente ">
            <div className="w-6/12 px-3 max-lg:w-full">
            <h3 className='text-[32px] font-popins'>Whether you're caring for Animal</h3>
            <p className='font-popins text-slate-500'> At <strong>Strength Pharma</strong>, we’re more than just a veterinary pharmacy—we’re animal lovers, pet parents, and advocates for better care. Founded with the mission to make trusted, affordable medications accessible for every pet, we partner with veterinarians and suppliers to ensure your animals get the highest standard of pharmaceutical support.</p>
            </div>
            <div className="w-6/12 px-3 max-lg:w-full"><img src={img} alt="" className='rounded-2xl max-w-[650px] mt-[-70px] max-lg:max-w-[350px] max-lg:mt-[25px]' /></div>
        </div>
        
      </div>
    </section>
  )
}

export default WhoAreWe
