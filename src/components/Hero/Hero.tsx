
export default function Hero() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="main-container">

      <div className="relative flex flex-col-reverse md:flex-row gap-20 items-start">
        <div>
          <div className="md:text-[50px] text-[36px]">
            <span className="font-extrabold">Empowering <br /> Talent</span> and <br />
            <span className="font-extrabold">Innovating<br /> Entertainment<br /> Globally</span>
          </div>
          <div className="flex flex-col items-start">
            <button className="btn1 overlay">Join Our Creator Network</button>
            <button className="btn2 overlay">Explore Our Services</button>
          </div>
        </div>

        <div className="slides slowFade">
          <img className="slide" src="/assets/img/hero-img1.png" alt="hero-img" />
          <img className="hero2" src="/assets/img/hero-img2.png" alt="hero-img" />
        </div>

      </div>

      <div 
        className="md:w-[82px] md:h-[89px] w-[49px] h-[54px] p-3 z-10 md:p-7 rounded-full sticky bg-[#002D62] cursor-pointer"
        onClick={scrollToTop}
        style={{ bottom: '20px', right: '80px', position: 'fixed' }} // Adjust the position as needed
      >
        <img src="/assets/svg/arrow-up.svg" alt="arrow-right" />
      </div>

    </div>
  );
}