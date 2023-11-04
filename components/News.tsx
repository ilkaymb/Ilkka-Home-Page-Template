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
        <h1
          style={{
            color: "white",
            fontSize: 44,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Haberler
        </h1>
        <div className="grid grid-cols-1 w-full gap-5  md:grid-cols-2 md:grid-rows-1 lg:grid-cols-4 lg:grid-rows-2 ">
          {/* Large Box (Left) */}
          <div className=" col-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-2 flex  flex-col text-sm ">
            <Image
              src={NewsImage1}
              alt="news image"
              objectFit="cover"
              className="lg:h-big-news-lg md:h-big-news-md"
            />{" "}
            <div className="mt-4">
              <h3 className="font-medium text-gray-300 mb-2 text-limit1 ">
                Haber 1
              </h3>

              <p className="text-limit2 w-full text-gray-400  mb-4 whitespace-normal leading-relaxed ">
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

          {/* Right Top 1 (Left) */}
          <div className=" col-span-1 md:col-span-1  text-sm md:h-full">
            <Image
              src={NewsImage2}
              alt="news image"
              className=" lg:h-small-news-lg md:h-small-news-md"
              objectFit="cover"
            />{" "}
            <div className="mt-4">
              <h3 className="font-medium text-gray-300 mb-2 text-limit1 ">
                Haber 2
              </h3>

              <p className="text-limit2 w-full text-gray-400  mb-4 whitespace-normal leading-relaxed ">
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

          {/* Right Top 2 (Right) */}
          <div className=" col-span-1 md:col-span-1 flex  flex-col text-sm md:h-full ">
            <Image
              src={NewsImage3}
              alt="news image"
              objectFit="cover"
              className=" lg:h-small-news-lg md:h-small-news-md"
            />
            <div className="mt-4">
              <h3 className="font-medium text-gray-300 mb-2 text-limit1 ">
                Haber 3
              </h3>

              <p className="text-limit2 w-full text-gray-400  mb-4 whitespace-normal leading-relaxed ">
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

          {/* Right Bottom 1 (Left) */}
          <div className=" col-span-1 md:col-span-1 lg:col-start-3 flex flex-col text-sm md:h-full ">
            <Image
              src={NewsImage4}
              alt="news image "
              objectFit="cover"
              className=" lg:h-small-news-lg md:h-small-news-md"
            />{" "}
            <div className="mt-4">
              <h3 className="font-medium text-gray-300 mb-2 text-limit1 ">
                Haber 4
              </h3>

              <p className="text-limit2 w-full text-gray-400  mb-4 whitespace-normal leading-relaxed ">
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

          {/* Right Bottom 2 (Right) */}
          <div className=" col-span-1 md:col-span-1 lg:col-start-4 flex flex-col text-sm md:h-full ">
            <Image
              src={NewsImage5}
              alt="news image"
              objectFit="cover"
              className=" lg:h-small-news-lg md:h-small-news-md"
            />{" "}
            <div className="mt-4">
              <h3 className="font-medium text-gray-300 mb-2 text-limit1 ">
                Haber 5
              </h3>

              <p className="text-limit2 w-full text-gray-400  mb-4 whitespace-normal leading-relaxed ">
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
