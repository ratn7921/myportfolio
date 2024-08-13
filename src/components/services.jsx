import { useState } from "react";

const Services = () => {
  const [data, setData] = useState([
    {
      id: '1',
      title: 'Web Development',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Itaque, dolores ut, provident error voluptas reprehenderit nisi ipsa repudiandae commodi maiores exercitationem! 
        Similique debitis maiores impedit earum consectetur, 
        dolorum necessitatibus error?`,
      actionButton: {
        title: "Read more...",
        link: "/readmore",
      },
    },
    {
      id: '2',
      title: 'Java Development',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Itaque, dolores ut, provident error voluptas reprehenderit nisi ipsa repudiandae commodi maiores exercitationem! 
        Similique debitis maiores impedit earum consectetur, 
        dolorum necessitatibus error?`,
      actionButton: {
        title: "Read more...",
        link: "/readmore",
      },
    },
    {
      id: '3',
      title: 'AI & ML Development',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Itaque, dolores ut, provident error voluptas reprehenderit nisi ipsa repudiandae commodi maiores exercitationem! 
        Similique debitis maiores impedit earum consectetur, 
        dolorum necessitatibus error?`,
      actionButton: {
        title: "Read more...",
        link: "/readmore",
      },
    },
  ]);

  return (
    <>
      <div className=" main-container py-16">
        <h1 className="text-5xl font-light text-center">Services</h1>
      </div>
      <div className=" services-container space-x-5 px-6 flex mt-12 pb-12">
        {data.map((service) => (
          <div key={service.id} className="service space-y-4 bg-sky-200 text-center p-5">
            <h1 className=" text-4xl font-light">{service.title}</h1>
            <p>{service.description}</p>
            <button className=" rounded-full shadow-lg bg-yellow-200 px-3 py-2">
              {service.actionButton.title}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
