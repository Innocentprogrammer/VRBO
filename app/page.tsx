
"use client";

import Image from 'next/image';
import useRegisterModal from './hooks/useRegisterModal';
import { useRouter } from 'next/navigation';



 const Home=()=> {

  const exclusives = [
    { src: "/images/image-1.jpeg", title: "Manali" },
    { src: "/images/image-2.jpeg", title: "Goa" },
    { src: "/images/image-3.jpeg", title: "Nainital" },
    { src: "/images/image-4.jpeg", title: "Somnath Temple" },
    { src: "/images/image-5.jpeg", title: "Golden Temple" },
    { src: "/images/image-6.jpeg", title: "Lotus Temple" },
    { src: "/images/image-7.jpeg", title: "Hawa Mahal" },
    { src: "/images/image-8.jpeg", title: "Tamil Nadu" },
    // Add more items as needed
  ];

  const trending = [
    { src: "/images/hyderabad.png", title: "Hyderabad" },
    { src: "/images/gujarat.jpeg", title: "Gujarat" },
    { src: "/images/jaga.png", title: "Odissa" },
    { src: "/images/new-delhi.png", title: "New Delhi" },
  ];

  const stories = [
    { src: "/images/story-1.png", description: "Popular Indian Cities under budget of just ₹10,000" },
    { src: "/images/story-2.png", description: "Traveled more than 100 cities in India in less than a year" },
    { src: "/images/story-3.png", description: "Best experience you get while travelling to Lakshadweep" },
  ];

  const router=useRouter();
  const registerModal = useRegisterModal();
  

  const handleHomePageClick = () => {
    router.push("/landing"); // Replace with your home/landing page route
  };


  return (
    <div>
      
      {/* Header section */}
        <header className="parallax min-h-screen w-full bg-[url('/images/banner.png')] relative">
        <div className='absolute inset-0 bg-black bg-opacity-50'>
          <div className="text-center py-[14%]">
            <h1 className="text-4xl md:text-6xl font-semibold text-white">Welcome <br />to <br />AI-Powered Vacation Rental By Owners</h1>
            <p className="mt-4 text-lg md:text-xl text-white">
              Discover your perfect accommodation with the power of AI.
            </p>
            <div className='mt-6'>
            {/* <button
              className="px-8 py-3 rounded-md bg-[#ff5361] text-white"
              onClick={session ? handleHomePageClick : registerModal.onOpen}
            >
              {currentUser ? "Landing Page" : "Get Started"}
            </button> */}
               <button className="px-8 py-3 rounded-md bg-[#ff5361] text-white" onClick={()=>router.push("landing")}>
                Get Started
              </button>
            </div>
        </div>
        </div>
      </header>



      <main className="px-32 mt-8">

        {/* Exclusives */}
        <section>
            <h2 className="text-4xl font-bold text-gray-800 my-5">Exclusives</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {exclusives.map((item, index) => (
              <div key={index} className="relative">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="rounded-lg w-96 h-40"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white  ">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>        
        </section>

        {/* Trending Places */}
        <section className='mt-8'>
            <h2 className="text-4xl font-bold text-gray-800 my-5">Trending Places</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {trending.map((place, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={place.src}
                    alt={place.title}
                    width={300}
                    height={200}
                    className="rounded-lg w-full"
                  />
                  <h3 className="mt-2 font-bold">{place.title}</h3>
                </div>
              ))}
            </div>
        </section>

        {/* Stories */}
        <section className='mt-8'>
          <h2 className="text-4xl font-bold text-gray-800 my-5">Travellers Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {stories.map((story, index) => (
              <div key={index} className="relative text-center">
                <Image
                  src={story.src}
                  alt={story.description}
                  width={500}
                  height={200}
                  className="rounded-lg"
                />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg">{story.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Earning */}
        <section className="mt-12 bg-gradient-to-r from-[#3f2321] to-transparent rounded-lg py-10 px-7 text-white">
          <h3 className="text-4xl font-semibold">Sharing <br /> Is Earning Now</h3>
          <p className="text-lg my-3">Great opportunity to make money by <br />sharing your extra space.</p>
          <a href="#" className="bg-[#ff5361] px-6 py-3 rounded-md">Know More</a>
        </section>
        <a href="#" className="block bg-[#ff5361] text-white mx-auto my-10 px-6 py-3 rounded-lg text-lg w-full max-w-[350px] text-center">Subscribe to our Newsletter</a>

            
        {/* Features Section */}
        <section className="mt-8">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow rounded">
                <h3 className="text-xl font-semibold">AI Recommendations</h3>
                <p className="mt-4 text-gray-600">Find accommodations tailored to your preferences.</p>
              </div>
              <div className="p-6 bg-white shadow rounded">
                <h3 className="text-xl font-semibold">Wide Range</h3>
                <p className="mt-4 text-gray-600">Access thousands of properties worldwide.</p>
              </div>
              <div className="p-6 bg-white shadow rounded">
                <h3 className="text-xl font-semibold">Easy Booking</h3>
                <p className="mt-4 text-gray-600">Book seamlessly with our user-friendly interface.</p>
              </div>
            </div>
          </div>
        </section>


        {/* About VRBO */}
        <section className='mt-8'>
            <h1 className='text-4xl font-bold text-gray-800 my-5'>Discover what VRBO is all about</h1>
            <p className='text-gray-900 text-justify '>Vrbo connects homeowners with families and vacationers looking for something more than a hotel for their trip. The Vrbo community offers families an array of rental property types such as cabins,  lake rentals,  beach houses, and more. Discover properties in destinations that everyone dreams of visiting. All it takes is a quick Vrbo property search to securely book your next cabin, or house anywhere in the world. If you're traveling with a large group, you can find rental homes on Vrbo that give you the space and comfort you need without sacrificing the amenities that matter most, all within your budget.</p>
        </section>

        </main>


        <footer className="text-center py-10">
        <div className="flex justify-center space-x-5">
          <a href="#" className="text-gray-500 text-2xl"><i className='bx bxl-facebook'></i></a>
          <a href="#" className="text-gray-500 text-2xl"><i className='bx bxl-youtube'></i></a>
          <a href="#" className="text-gray-500 text-2xl"><i className='bx bxl-twitter'></i></a>
          <a href="#" className="text-gray-500 text-2xl"><i className='bx bxl-linkedin'></i></a>
          <a href="#" className="text-gray-500 text-2xl"><i className='bx bxl-instagram'></i></a>
        </div>
        <hr className="my-5 border-gray-300" />
        <p className="text-gray-500">Copyright &copy; 2024, VRBO(VACATION RENTAL BY OWNERS)</p>
      </footer>

    </div>
  );
}

export default Home