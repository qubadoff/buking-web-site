import React from "react";
import backPhoto from "./../../../assets/backg.webp";

const Home = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[120vh] pt-[200px] text-white"
      style={{ 
        backgroundImage: `url(${backPhoto})` }} 
    >
      <div className="bg-black bg-opacity-50 absolute inset-0 z-0"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Xoş gəlmisiniz!</h1>
        <p className="text-lg max-w-xl mx-auto">
          Bu səhifə Tailwind CSS ilə yaradılıb və arxa planda şəkil yerləşir.
        </p>
      </div>
    </section>
  );
};

export default Home;
