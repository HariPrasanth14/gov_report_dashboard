import banner from "../asstetTwo/BANNER.jpg";
import Carousel from "../assets/tw-utility/carousel";
import bannertwo from "../asstetTwo/BANNERTwo.jpg";
import { FaAngleDoubleDown, FaAngleDoubleRight, FaBook, FaCashRegister, FaEnvelope, FaPaypal, FaUser, FaWpforms } from "react-icons/fa";
import cloud from "../asstetTwo/cloud.png";

const Banner = () => {
  const slides = [
    { image: banner, title: 'Beautiful Nature', description: 'Explore the wonders of the natural world' },
    { image: bannertwo, title: 'Urban Adventure', description: 'Discover city life and architecture' },
    { image: banner, title: 'Mountain Peaks', description: 'Reach new heights and breathtaking views' },
    { image: bannertwo, title: 'Ocean Waves', description: 'Experience the power of the sea' },
    { image: banner, title: 'Desert Sunset', description: 'Witness the beauty of golden hours' }
  ];

  return (
    <div className="w-full">
      <div className="hidden lg:block">
      <div className="bg-gradient-to-r from-yellow-500 to-red-600 text-lg tracking-wider  font-extrabold w-60 py-3 fixed z-10 rounded-xl px-5 bottom-4 right-96 text-white  text-center shadow-lg" style={{textShadow:"2px 2px 0px black"}}>

        Try Govereport now
      </div>

      <div className="bg-gradient-to-r flex items-center from-yellow-500 to-red-600 text-lg tracking-wider  font-extrabold w-80 py-3 fixed z-10 rounded-xl px-5 bottom-4 right-5 text-white  text-center shadow-lg" style={{textShadow:"2px 2px 0px black"}}>
        <FaUser className="mr-3 text-2xl"/>
        Chat with GovReports
        <FaAngleDoubleDown  className="ml-3"/>
      </div>
      </div>
      <div className="w-full bg-gray-100">
        <Carousel slides={slides} />
      </div>

      <div className="flex  py-12 flex-col md:flex-row bg-gradient-to-t from-green-400 to-blue-400 text-white items-center justify-center gap-6 px-6 md:px-24">
        <div className="backdrop-blur-md p-6 md:p-10 rounded-2xl text-center font-bold text-2xl md:text-3xl w-full md:w-1/2 flex items-center justify-center tracking-wider" style={{ textShadow: "2px 2px 20px black" }}>
          GovReports is for Everyone, Regardless of Your Current Software Usage
        </div>
        <div className="relative backdrop-blur-md p-6 rounded-2xl w-full md:w-1/2 text-center">
          <img src={cloud} alt="Cloud Integration" className="h-72 mx-auto" />
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-lg font-medium">
            Easily Integrate & Simplify Your Reporting Process
          </p>
        </div>
      </div>






      <div className="px-6 py-24 flex flex-col md:flex-row items-center justify-center gap-6 ">
        <div className="p-6 rounded-lg text-center text-2xl md:text-3xl w-full md:w-1/2 transform hover:scale-105 transition duration-300">
          Business and/or GST Preparer
        </div>
        <div className=" rounded-lg text-center w-full md:w-1/2 transform hover:scale-105 transition duration-300">
          <ul className="text-left space-y-2 text-lg font-medium">
            {[
              "Create GST Report for eFiling if your system",
              "Ensure compliance with the latest tax regulations.",
              "Streamline the reporting process for businesses.",
              "Integrate seamlessly with existing accounting."
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <FaAngleDoubleRight className="text-blue-700 mr-2 text-2xl" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>






      <div className="flex flex-col items-center px-6 py-12 mb-12">
        <iframe
          className="rounded-3xl w-full max-w-md"
          height="240"
          src="https://www.youtube.com/embed/P3F-k5FvDkE"
          title="Complete GST Solution"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>









      <div className="flex flex-col md:flex-row px-6 py-24 items-center bg-gray-200  justify-center gap-6 p-6">
        <div className="w-full md:w-1/2 flex justify-center">
        <iframe width="400" height="220" className="rounded-2xl" src="https://www.youtube.com/embed/hGpSuNQkEFk" title="GST For India" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left p-4 space-y-4">
        <p className="text-lg text-justify mx-5 w-72 md:w-auto lg:mx-0 mr-20 font-medium text-gray-800">
        A web-based service application that connects business users' GST system with the GST Suvidha Provider (GSP) to create GST reports, reconcile data, and electronically file directly to GSTN.
          </p>
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold transition duration-300 hover:bg-blue-600 hover:text-white">
            Request for Demo
          </button>
        </div>
      </div>




      <div className="flex flex-col md:flex-row items-center px-6 py-20  gap-6 p-6">
        <div className="w-full md:w-1/2 h-80 text-justify text-xl bg-red-100 py-6 px-12 rounded-3xl  flex items-center  shadow-lg">
          No software installation or updates required. Avoid large-scale IT automation or new GST systems—GovReports simplifies compliance for you.
        </div>
        <div className="w-full md:w-1/2  py-5 px-12 rounded-3xl text-lg shadow-lg">
          
        <ul className="space-y-2">
  {[
    { icon: FaEnvelope, text: "Login", bg: "bg-gray-500 text-white" },
    { icon: FaCashRegister, text: "Upload GST details to review", bg: "bg-white text-black" },
    { icon: FaBook, text: "Reconcile", bg: "bg-gray-500 text-white" },
    { icon: FaPaypal, text: "Pay", bg: "bg-white text-black" },
    { icon: FaWpforms, text: "eFiling", bg: "bg-gray-500 text-white" }
  ].map(({ icon: Icon, text, bg }, index) => (
    <li key={index} className={`flex items-center  ${bg} p-2 rounded-lg`}>
      <Icon className="my-2 mx-3 text-2xl" /> {text}
    </li>
  ))}
</ul>


        </div>





      </div>

      <div className="flex flex-col md:flex-row items-center bg-gray-200  justify-center gap-6 px-6 py-20 ">
        <div className="w-full md:w-1/2 flex justify-center">
        <iframe width="400" className="rounded-2xl" height="220" src="https://www.youtube.com/embed/M_erT-dpB5o" title="GST For Practitioner" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className="w-full md:w-1/2 text-center p-4 md:text-left space-y-4">
          <p className="text-lg text-justify mx-5 w-72 md:w-auto lg:mx-0 mr-20 font-medium text-gray-800">
            GST Preparers can create, validate, and file GST reports for clients, even without software-generated reports. Built-in tools facilitate smooth reporting within your practice.
          </p>
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold transition duration-300 hover:bg-blue-600 hover:text-white">
            Request for Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
