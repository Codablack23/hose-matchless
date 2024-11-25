
export default function Hero() {
  return (
    <div className="main-container">

      <div className="flex flex-col-reverse md:flex-row gap-20 items-start">
        <div>
        <div className="md:text-[50px] text-[36px]"><span className="font-extrabold">Empowering <br /> Talent</span> and <br /><span className="font-extrabold">Innovating<br /> Entertainment<br /> Globally</span></div>
        <div className="flex flex-col items-start">
          <button className="btn1 overlay">Join Our Creator Network</button>
          <button className="btn2 overlay">Explore Our Services</button>
        </div>
        </div>
        <img className="hero" src="src/assets/img/hero-img.png" alt="hero-img" />
      </div>

     

    </div>
    
  )
}
