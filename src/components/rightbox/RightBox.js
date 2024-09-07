import React, { useState } from "react";
import SixSquare from "../SixSqure";
import { SlQuestion } from "react-icons/sl";
import "../../index.css"; 
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import AddImageButton from "../buttons/AddImageButton";
import GalleryButton from "../buttons/GalleryBitton";

const RightBox = () => {
  const [activeTab, setActiveTab] = useState("About Me");
  const [activeTabGal, setActiveTabGal] = useState("gallery");
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleTabGalClick = (tab) => {
    setActiveTabGal(tab);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setGalleryImages([...galleryImages, ...newImages]);
  };

  const scrollRight = () => {
    if (currentIndex < galleryImages.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex flex-shrink m-2.5 flex-col w-[500px] h-[500px] justify-between">
      <div className="flex flex-row gap-2 h-[47%] bg-[#363C43] rounded-[27px] shadow-custom-bottom-left">
        <div className="flex flex-col ml-[5px] mt-[25px] mb-[50px] justify-between w-[15px] bg-[#363C43] h-[40%]">
          <SlQuestion className="text-gray-600" />
          <SixSquare />
        </div>

        <div className="flex flex-col w-[90%] mt-[20px] mb-[20px]">
          <div className="flex space-x-4 justify-between rounded-4xl shadow-custom-inset pl-[10px] pr-[10px] bg-[#171717]">
          {["About Me", "Experiences", "Recommended"].map((tab) => (
    <button
      key={tab}
      className={`tab-button 
        ${activeTab === tab
          ? "nav-button nav-button-active"
          : "nav-button"
        }`}
      onClick={() => handleTabClick(tab)}
      aria-selected={activeTab === tab}
      role="tab"
    >
      {tab}
    </button>
  ))}
          </div>
          <div className="tab-content text-[15px] text-[#969696] mt-[10px] w-[100%] font-Plus Jakarta Sans overflow-y-auto overflow-x-hidden whitespace-normal break-words custom-scrollbar">
            {activeTab === "About Me" && (
              // fake data
              <div>
              I am a passionate software developer with a deep love for solving complex problems through code. With over five years of experience in full-stack development, I specialize in creating seamless user experiences and scalable backend systems. My journey began with a curiosity about how technology shapes our world, which quickly evolved into a career in programming. I have a strong background in JavaScript, Node.js, and React, with a particular focus on building efficient, high-performance web applications.
              </div>
            )}
            {activeTab === "Experiences" && <div>Throughout my career, I have worked on a wide range of projects that span various industries. From e-commerce platforms to data-driven applications, I’ve honed my skills in full-stack development, delivering high-quality solutions to clients and users alike. One of my most notable projects involved building a fully integrated e-commerce platform using the MERN stack (MongoDB, Express, React, and Node.js), where I led a team of developers to deliver a robust, scalable solution within a tight deadline.</div>}
            {activeTab === "Recommended" && <div>I’ve had the privilege of working with outstanding professionals who have had a profound impact on my career. One of my colleagues, Jane Doe, who worked with me on a major SaaS platform, praised my ability to translate complex requirements into elegant, efficient solutions. "Their attention to detail and ability to deliver high-quality code under pressure is unparalleled," she said. John Smith, a senior project manager I collaborated with on a large-scale API integration project, also spoke highly of my work ethic. "They have a knack for identifying potential roadblocks early and proposing innovative solutions that save time and resources. </div>}
          </div>
        </div>
      </div>

      {/* Horizontal line */}
      <div className="my-2 flex justify-center">
        <span
          className="w-[400px] h-[2px] bg-gray-500"
          style={{
            boxShadow: "0px 4px 4px 0px #00000054",
            background:
              "linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
          }}
        ></span>
      </div>

      {/* Bottom Section (Gallery) */}
      <div className="flex flex-row gap-2 h-[47%] bg-[#363C43] rounded-[27px] shadow-custom-bottom-left">
        <div className="flex flex-col ml-[5px] mt-[25px] mb-[50px] justify-between w-[15px] bg-[#363C43] h-[40%]">
          <SlQuestion className="text-gray-600" />
          <SixSquare />
        </div>

        <div className="flex flex-col w-[90%] mt-[20px] mb-[20px]">
          <div className="flex flex-row justify-btween items-center pl-[0px] pr-[0px]">
            {/* <div className="flex w-[80%] ml-[0] justify-between">
              {['gallery', '+ Add Image'].map((tab) => (
                <button
                  key={tab}
                  className={`tab-button mx-1 my-1 w-[100px] h-[35px] font-poppins rounded-lg text-[10px] 
                  ${activeTabGal === tab ? 'bg-[#171717] text-[#FFFFFF] custom-shadow-2' :  'bg-[#363C43] text-[#FFFFFF] custom-shadow-1'}`}
                  onClick={() => handleTabGalClick(tab)}
                  aria-selected={activeTabGal === tab}
                  role="tab"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div> */}

            <div className="flex w-[80%] ml-[0] justify-between">
              <GalleryButton
                active={activeTabGal === "gallery"}
                onClick={() => handleTabGalClick("gallery")}
              />
              <AddImageButton
                active={activeTabGal === "+ Add Image"}
                onClick={() => handleTabGalClick("+ Add Image")}
              />
            </div>

            {/* Always visible arrow buttons */}
            <div className="flex pl-[25px]">
              <button
                onClick={scrollLeft}
                className={`flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#171717] text-white  ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentIndex === 0}
                style={{ boxShadow: "-5px -3px 30px -10px #96BEE7" }}
              >
                <FiArrowLeft />
              </button>

              <button
                onClick={scrollRight}
                className={`flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#171717] text-white ml-2 ${
                  currentIndex >= galleryImages.length - 3
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={currentIndex >= galleryImages.length - 3}
                style={{ boxShadow: "-5px -3px 30px -10px #96BEE7" }}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>

          <div className="tab-content text-[15px] text-[#969696] mt-[30px] w-[100%] font-Plus Jakarta Sans overflow-y-auto overflow-x-hidden whitespace-normal break-words custom-scrollbar">
            {activeTabGal === "gallery" && galleryImages.length > 0 && (
              <div className="flex overflow-hidden w-full justify-center">
                {galleryImages
                  .slice(currentIndex, currentIndex + 3)
                  .map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="Gallery"
                      className="w-[120px] h-[120px] mx-1 object-cover rounded-lg"
                    />
                  ))}
              </div>
            )}
            {activeTabGal === "+ Add Image" && (
              <div className="mt-[10px]">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="text-white"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBox;
