import bannerImage from '../assets/6644b34c91f57f8d40a4eaa94e3cb797 - Copy.png'
import bannerBackground from '../assets/pattern-background-mobile.svg'
const Banner=()=>{
    return(
      <div  style={
        {backgroundImage:`url(${bannerBackground})`,
        backgroundSize:"cover",
       }   
       }  className="main-containt flex items-center" >
     
        <div className='mt-6 w-full flex h-screen justify-center'>
<div className="mt-6 w-2/3 space-y-2 ms-10">
<h3 className="mt-6 text-3xl font-semibold ">Hi, I am</h3>
<h1 className="mt-6 text-5xl  font-bold   ">Ratnakar Dashrath Yadav</h1>
<h2 className=' text-3xl'>I am frontend developer</h2>
<p className="mt-3 ">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Sunt rem itaque inventore perspiciatis,explicabo harum! 
     Aliquid, quia facere corrupti tempora debitis quis veritatis voluptate optio,
     cum aliquam tenetur cumque nihil.
</p>
<div className="icon-container    space-x-6">
    <a className="bg-black hover:bg-white   cursor-pointer px-4 py-2 w-6 h-6 rounded-full " href="#"><i class="fa-brands hover:text-black text-white fa-linkedin-in"></i>
    </a> 
    <a className="bg-black hover:bg-white  cursor-pointer px-4 py-2 w-6 h-6 rounded-full " href="#"><i class="fa-brands hover:text-black text-white fa-twitter"></i>
    </a>
    <a className="bg-black hover:bg-white  cursor-pointer px-4 py-2 w-6  h-6 rounded-full " href="#"><i class="fa-brands hover:text-black text-white fa-github"></i>
    </a>
<a className="bg-black hover:bg-white  cursor-pointer px-4 py-2 w-6 h-6 rounded-full " href="#"><i class="fa-brands hover:text-black text-white fa-instagram"></i>
</a>
</div>
<br />
<a className="mt-18 shadow-lg rounded-full bg-yellow-300 px-3 py-2" href="/contact"> Contact me</a>
<h1 className=" ">
     

</h1>
</div>

        </div>

   <div className=" mt-6 w-full flex h-screen justify-center ">
    {/* image */}
    <img className=" size-6/12 rounded-full shadow-inner bg-sky-200   px-5 py-6   "  src={bannerImage} />
    </div>
             
         </div>
    );
};
export default Banner;