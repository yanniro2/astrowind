import React from "react";
import newsData from "../../data/newsData.json";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
type NewsItem = {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  details: string;
  imgUrl: string;
  newsLink: string;
  socialMedia: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
};

const NewsPage: React.FC = () => {
  return (
    <div className="w-screen h-max lg:py-[3rem] bg-white p-5 ">
      <div className="container mx-auto">
        <div className="text-center gap-5 my-[4rem]">
          <h3 className="h3"> Latest news</h3>
          <h1 className="h1">Stay Informed with Our Latest Updates</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 h-max ">
          {newsData.map((news: NewsItem) => (
            <div
              key={news.id}
              className="border-primary border rounded-xl  w-full h-full cursor-pointer hover:shadow-xl overflow-hidden">
              <div>
                {/* <img src={news.imgUrl} alt={news.title} /> */}
                <img
                  src="/assets/img/home/gallery/img-1.jpg"
                  alt="img"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="p-5  flex flex-col">
                <div className="font-poppins font-medium text-gray-400">
                  {news.date}
                </div>
                <h3 className="h3">{news.title}</h3>
                <h4 className="text-gray-400">{news.subtitle}</h4>

                <p className="pt-[3rem] text-sm text-dark">{news.details}</p>
                <a
                  href={news.newsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary">
                  Read More
                </a>
              </div>
              <div className="p-5 flex items-center gap-5 ">
                {/* Add social media icons or links as needed */}
                <a
                  href={news.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icons-1">
                  <FaFacebookF />
                </a>
                <a
                  href={news.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icons-1">
                  <FaTwitter />
                </a>
                <a
                  href={news.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icons-1">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
