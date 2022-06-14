import React from "react";

const Header = () => {
  return (
    <div className="header-wrapper w-full h-20 bg-img-header flex justify-center">
      <div className="header h-full flex justify-between lg:px-16 lg:left-1/2 header-md:w-header-sm">
        <div className="logo h-full flex items-center">
          <img
            src="https://spng.pngfind.com/pngs/s/115-1153198_twitter-facebook-logo-grey-png-transparent-png.png"
            alt=""
            className="h-3/4 object-cover"
          />
        </div>
        <div className="navbar h-full flex self-center items-center">
          <div className="navbar-items pl-24 flex items-center ">
            {["Get started", "Services", "Support"].map((item) => {
              return (
                <div className="text-white font-normal text-base">{item}</div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
