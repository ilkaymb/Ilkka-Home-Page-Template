import Image from "next/image";
import React from "react";
import NewsImage1 from "@/images/News/news-image1.png";
import NewsImage2 from "@/images/News/news-image2.png";
import NewsImage3 from "@/images/News/news-image3.png";
import NewsImage4 from "@/images/News/news-image4.png";
import NewsImage5 from "@/images/News/news-image5.png";

const GridComponent = () => {
  return (
    <div className="  w-full py-10">
      <div className="container  mx-auto px-5">
        <h1 className="mb-5"
          style={{
            color: "white",
            fontSize: 44,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Haberler
        </h1>
        <div className="grid grid-cols-1 w-full gap-4  md:grid-cols-2 md:grid-rows-1 lg:grid-cols-6 lg:grid-rows-2 ">
        
          <div className=" col-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-2 flex  flex-col text-sm ">
            <Image
              src={NewsImage1}
              alt="news image"
              objectFit="cover"
              className="lg:h-big-news-lg md:h-big-news-md object-cover"
            />{" "}
            <div className="mt-3 flex flex-col gap-2 ">
              <h3 className="font-bold text-xl text-white mb-2 text-limit1 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia
              </h3><hr className=" border-gray-500"/>

              <p className="text-limit2 w-full text-gray-400 text-lg  whitespace-normal leading-relaxed ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid.
              </p>
            </div>
          </div>

         
          <div className=" col-span-1 md:col-span-2  text-sm md:h-full">
            <Image
              src={NewsImage2}
              alt="news image"
              className=" lg:h-small-news-lg md:h-small-news-md object-cover"
              objectFit="cover"
            />{" "}
            <div className="mt-3 flex flex-col gap-2 ">
              <h3 className="font-bold text-gray-300 mb-2 text-limit1 text-xl ">
              Lorem ipsum dolor 
              </h3><hr className=" border-gray-500"/>

              <p className="text-limit2 w-full text-gray-400 text-lg   whitespace-normal leading-relaxed ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid.
              </p>
            </div>
          </div>

         
          <div className=" col-span-1 md:col-span-2 flex  flex-col text-sm md:h-full ">
            <Image
              src={NewsImage3}
              alt="news image"
              objectFit="cover"
              className=" lg:h-small-news-lg md:h-small-news-md object-cover"
            />
            <div className="mt-3 flex flex-col gap-2 ">
              <h3 className="font-bold text-gray-300 mb-2 text-limit1 text-xl ">
              Lorem ipsum dolor sit amet
              </h3><hr className=" border-gray-500"/>
              <p className="text-limit2 w-full text-gray-400 text-lg  whitespace-normal leading-relaxed ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid.
              </p>
            </div>
          </div>

        
          <div className=" col-span-1 md:col-span-2 lg:col-start-3 flex flex-col text-sm md:h-full ">
            <Image
              src={NewsImage4}
              alt="news image "
              objectFit="cover"
              className=" lg:h-small-news-lg md:h-small-news-md object-cover"
            />{" "}
            <div className="mt-3 flex flex-col gap-2 ">
              <h3 className="font-bold text-gray-300 text-xl mb-2 text-limit1 ">
              Lorem ipsum
              </h3><hr className=" border-gray-500"/>

              <p className="text-limit2 w-full text-gray-400 text-lg   whitespace-normal leading-relaxed ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid.
              </p>
            </div>
          </div>

       
          <div className=" col-span-1 md:col-span-2 lg:col-start-5 flex flex-col text-sm md:h-full ">
            <Image
              src={NewsImage5}
              alt="news image"
              objectFit="cover"
              className=" lg:h-small-news-lg md:h-small-news-md  object-cover"
            />{" "}
            <div className="mt-3 flex flex-col gap-2 ">
              <h3 className="font-bold text-gray-300 text-xl mb-2 text-limit1 ">
              Lorem ipsum dolor sit
              </h3><hr className=" border-gray-500"/>

              <p className="text-limit2 w-full text-gray-400 text-lg  whitespace-normal leading-relaxed ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default GridComponent;
