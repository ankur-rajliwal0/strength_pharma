import react from "react"
import meetingImg from "../Assets/images/schedule meeting.jpg"
function ScheduleMetting() {
    return (

        <section className="bg-[#076347]  ">
            <div className="container">
                <div className="flex flex-wrap flex-row mx-[-12px] py-[200px] max-lg:my-[60px] items-center">
                    <div className="w-6/12 px-3 max-lg:w-full">
                        <h3 className="text-white font-bold text-[55px] font-popins max-w-[560px] max-lg:text-[35px]">Let's connect! Choose a time that works best for you. </h3>
                        <a
                            href="https://wa.me/+918222963063?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20meeting%20with%20Strength%20Pharma%20Vets."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="relative text-black px-5 py-3 rounded-[30px_0px] hover:scale-105 transition-all duration-300 hover:bg-[#C6F4E8] font-popins text-[20px] text-center max-w-[660px] bg-[#E1FFF6] max-lg:my-4 max-lg:px-3 max-lg:py-1">
                                Schedule A Meeting
                            </button>
                        </a>

                    </div>
                    <div className="w-6/12 px-3 max-lg:w-full"><img src={meetingImg} alt="" className="rounded-xl w-[650px]" /></div>
                </div>

            </div>
        </section>

    )
}

export default ScheduleMetting