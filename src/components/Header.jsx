import { useState } from "react";

const Header =() =>{
  const [brandName, setBrandName] = useState("Ratnakar Dashrath Yadav");
 const[menulinks, setmenulinks]= useState([
    {
    title:"Home",
    link:"/home",
    id:1,
 },
 {
    title:"About",
    link:"/About",
    id:2,
 },
 {
    title:"skills",
    link:"/skills",
    id:3,
 },
 {
    title:"projects",
    link:"/projects",
    id:4,
    
 },
 {
    title:"portfolio",
    link:"/portfolio",
    id:5,
 },
 
]);
const [actionButton, setActionButton] = useState({
    title:"download resume",
    link:'/hire-me',
})
    return (
        <>
        <div  className="backdrop-blur-sm bg-white/30 sticky top-0 z-10 h-20 border main flex justify-between items-center px-16 bg-sky-200  ">
        <div>{/* brand logo*/}
            <h1 className="text-3xl font-bold"> {brandName}</h1>
        </div>

        <div className="space-x-6">{/* menu links*/}
      {
        menulinks.map((link) =>(
            <a key={link.id} href={link.link} className="hover:text-orange-600"> 
            {link.title}</a>
        ))
      /* <a href="/home" className="hover:text-blue-800">
      home
      </a>
      <a href="/about"  className="hover:text-blue-800">
      about</a>
      
      <a href="/skills"  className="hover:text-blue-800">
    skills</a>

    <a href="/portfolio"  className="hover:text-blue-800">
    portfolio</a>
    <a href="/contactus"  className="hover:text-blue-800">
    Contact</a> */}
        </div>
        
        <div>{/* buttons*/}
          <a href={actionButton.link} className="hover:bg-white hover:text-black bg-black text-white shadow rounded-full px-3 py-2 text-1xl">
           {actionButton.title} </a>  
        </div>



        </div>
        </>
    );
};
export default Header;