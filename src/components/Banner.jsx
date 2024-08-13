import bannerImage from '../assets/6644b34c91f57f8d40a4eaa94e3cb797 - Copy.png';
import bannerBackground from '../assets/Screenshot 2024-08-13 183450.png';

const Banner = () => {
  return (
    <div 
      className="main-containt flex items-center h-screen" 
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
    >
      <div className='flex w-full justify-center'>
        <div className="mt-6 w-2/3 space-y-4 ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Ratnakar Dashrath Yadav</h1>
          <h2 className='text-3xl'>I am a Frontend Developer</h2>
          <p className="mt-3 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rem itaque inventore perspiciatis, explicabo harum! 
            Aliquid, quia facere corrupti tempora debitis quis veritatis voluptate optio, cum aliquam tenetur cumque nihil.
          </p>
          <div className="icon-container flex space-x-6">
            <a className="bg-black hover:bg-white cursor-pointer p-2 w-10 h-10 rounded-full flex items-center justify-center" href="#">
              <i className="fa-brands fa-linkedin-in text-white hover:text-black"></i>
            </a> 
            <a className="bg-black hover:bg-white cursor-pointer p-2 w-10 h-10 rounded-full flex items-center justify-center" href="#">
              <i className="fa-brands fa-twitter text-white hover:text-black"></i>
            </a>
            <a className="bg-black hover:bg-white cursor-pointer p-2 w-10 h-10 rounded-full flex items-center justify-center" href="#">
              <i className="fa-brands fa-github text-white hover:text-black"></i>
            </a>
            <a className="bg-black hover:bg-white cursor-pointer p-2 w-10 h-10 rounded-full flex items-center justify-center" href="#">
              <i className="fa-brands fa-instagram text-white hover:text-black"></i>
            </a>
          </div>
          <a className="mt-6 inline-block shadow-lg rounded-full bg-yellow-300 px-5 py-3 text-black font-semibold" href="/contact">Contact me</a>
        </div>

        <div className="mt-6 w-full flex justify-center">
          <img 
            className="w-6/12 rounded-full shadow-inner bg-sky-200 p-6" 
            src={bannerImage} 
            alt="Ratnakar Dashrath Yadav" 
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
