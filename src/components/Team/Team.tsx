import { useState } from "react";

export default function Team() {
  const [slideIndex, setSlideIndex] = useState(0); // Start from the first slide

  const plusSlides = (n: number) => {
    setSlideIndex((prevIndex) => {
      const newIndex = (prevIndex + n + 4) % 4; // Ensure it wraps around correctly
      return newIndex;
    });
};


  return (
    
    <div className="md:mt-[500px] mt-20 md:mx-[80px] mx-6">
        <h1 className="md:text-[40px] py-6 text-[32px] font-extrabold">Meet the Team</h1>

    
    {/* <div className="slider-container" data-wow-delay="0.4s">

    
          <div className="slides fade md:flex md:flex-row items-center gap-10 py-24 px-10 md:mt-2 rounded-xl bg-[#002D62]">
            <div className="text-[#ffff] text-[20px]">    
                <p>C-Simon is a creative force in entertainment and digital tech, driving innovation at Hose Matchless Global LTD</p>
                
                <div className="flex mt-10 gap-2 items-center max-sm:w-[40px]">
                  <img className="team" src="/assets/svg/tiktok-white.svg" alt="tiktok" />
                  <img className="team" src="/assets/svg/ig-white.svg" alt="ig" />
                  <img className="team" src="/assets/svg/x-white.svg" alt="x" />
                  <p className="max-sm:text-[14px] w-96">Creator Network <a href="#">[Join Here]</a></p>
                </div>      
            
            </div>

                  <img className="max-sm:mt-8" src="/assets/img/team-img.png" alt="team-img" />
            
          </div>

          <div className="slides fade md:flex md:flex-row items-center gap-10 py-24 px-10 md:mt-2 rounded-xl bg-[#002D62]">
            <div className="text-[#ffff] text-[20px]">    
                <p>C-Simon is a creative force in entertainment and digital tech, driving innovation at Hose Matchless Global LTD</p>
                
                <div className="flex mt-10 gap-2 items-center max-sm:w-[40px]">
                  <img className="team" src="/assets/svg/tiktok-white.svg" alt="tiktok" />
                  <img className="team" src="/assets/svg/ig-white.svg" alt="ig" />
                  <img className="team" src="/assets/svg/x-white.svg" alt="x" />
                  <p className="max-sm:text-[14px] w-96">Creator Network <a href="#">[Join Here]</a></p>
                </div>      
            
            </div>

                  <img className="max-sm:mt-8" src="/assets/img/team-img.png" alt="team-img" />
            
          </div>

          <div className="slides fade md:flex md:flex-row items-center gap-10 py-24 px-10 md:mt-2 rounded-xl bg-[#002D62]">
            <div className="text-[#ffff] text-[20px]">    
                <p>C-Simon is a creative force in entertainment and digital tech, driving innovation at Hose Matchless Global LTD</p>
                
                <div className="flex mt-10 gap-2 items-center max-sm:w-[40px]">
                  <img className="team" src="/assets/svg/tiktok-white.svg" alt="tiktok" />
                  <img className="team" src="/assets/svg/ig-white.svg" alt="ig" />
                  <img className="team" src="/assets/svg/x-white.svg" alt="x" />
                  <p className="max-sm:text-[14px] w-96">Creator Network <a href="#">[Join Here]</a></p>
                </div>      
            
            </div>

                  <img className="max-sm:mt-8" src="/assets/img/team-img.png" alt="team-img" />
            
          </div>

          <div className="slides fade md:flex md:flex-row items-center gap-10 py-24 px-10 md:mt-2 rounded-xl bg-[#002D62]">
            <div className="text-[#ffff] text-[20px]">    
                <p>C-Simon is a creative force in entertainment and digital tech, driving innovation at Hose Matchless Global LTD</p>
                
                <div className="flex mt-10 gap-2 items-center max-sm:w-[40px]">
                  <img className="team" src="/assets/svg/tiktok-white.svg" alt="tiktok" />
                  <img className="team" src="/assets/svg/ig-white.svg" alt="ig" />
                  <img className="team" src="/assets/svg/x-white.svg" alt="x" />
                  <p className="max-sm:text-[14px] w-96">Creator Network <a href="#">[Join Here]</a></p>
                </div>      
            
            </div>

                  <img className="max-sm:mt-8" src="/assets/img/team-img.png" alt="team-img" />
            
          </div>


    </div> */}


    <div>

      <div className="">
        
        <div className={`mySlides fade ${slideIndex === 0 ? 'block' : 'hidden'} `}>
        <div className="md:flex md:flex-row items-center gap-10 py-24 px-10 md:mt-2 rounded-xl bg-[#002D62]">
            <div className="text-[#ffff] text-[20px]">    
                <p>C-Simon is a creative force in entertainment and digital tech, driving innovation at Hose Matchless Global LTD</p>
                
                <div className="flex mt-10 gap-2 items-center max-sm:w-[40px]">
                  <img className="team" src="/assets/svg/tiktok-white.svg" alt="tiktok" />
                  <img className="team" src="/assets/svg/ig-white.svg" alt="ig" />
                  <img className="team" src="/assets/svg/x-white.svg" alt="x" />
                  <p className="max-sm:text-[14px] ml-auto w-96">Creator Network <a href="#">[Join Here]</a></p>
                </div>      
            
            </div>

                  <img className="max-sm:mt-8" src="/assets/img/team-img1.png" alt="team-img" />
            
          </div>
        </div>


        <div className={`mySlides fade ${slideIndex === 1 ? 'block' : 'hidden'} `}>
        <div className="md:flex md:flex-row items-center gap-10 py-24 px-10 md:mt-2 rounded-xl bg-[#002D62]">
            <div className="text-[#ffff] text-[20px]">    
                <p>Teji_obw is a passionate TikTok Creator Network Manager dedicated to supporting UK-based creators. With a keen eye for trends and a focus on audience engagement, Teji helps influencers elevate their TikTok presence through tailored strategies and brand partnerships.
                </p>
                
                <div className="flex mt-10 gap-2 items-center max-sm:w-[40px]">
                  <img className="team" src="/assets/svg/tiktok-white.svg" alt="tiktok" />
                  <p className="max-sm:text-[14px] ml-auto w-96">Creator Network <a href="#">[Join Here]</a></p>
                </div>      
            
            </div>

                  <img className="max-sm:mt-8" src="/assets/img/team-img2.png" alt="team-img2" />
            
          </div>
        </div>


        <div className={`mySlides fade ${slideIndex === 2 ? 'block' : 'hidden'} `}>
        <div className="md:flex md:flex-row items-center gap-10 py-24 px-10 md:mt-2 rounded-xl bg-[#002D62]">
            <div className="text-[#ffff] text-[20px]">    
                <p>DigiCash is a skilled graphic designer and TikTok creator network manager for the US and Canada. With 6+ years of expertise, he connects creators and brands with impactful content.  
                </p>
                
                <div className="flex mt-10 gap-2 items-center max-sm:w-[40px]">
                  <img className="team" src="/assets/svg/tiktok-white.svg" alt="tiktok" />
                  <p className="max-sm:text-[14px] ml-auto w-96">Creator Network <a href="#">[Join Here]</a></p>
                </div>      
            
            </div>

                  <img className="max-sm:mt-8" src="/assets/img/team-img3.png" alt="team-img3" />
            
          </div>
        </div>


        <div className={`mySlides fade ${slideIndex === 3 ? 'block' : 'hidden'} `}>
        <div className="md:flex md:flex-row flex-col items-center gap-10 py-24 px-10 md:mt-2 rounded-xl bg-[#002D62]">
            <div className="text-[#ffff] text-[20px]">    
                <p>Baba Rex is dedicated, organized, and eager to learn. He communicates effectively in groups and one-on-one, listens well, embraces new ideas, and excels in solving social media challenges.  
                </p>
                
                <div className="flex mt-10 gap-2 items-center max-sm:w-[40px]">
                  <img className="team" src="/assets/svg/tiktok-white.svg" alt="tiktok" />
                  <p className="max-sm:text-[14px] ml-auto w-96">Creator Network <a href="#">[Join Here]</a></p>
                </div>      
            
            </div>

                  <img className="max-sm:mt-8" src="/assets/img/team-img4.png" alt="team-img4" />
            
          </div>
        </div>



        {/* Add more slides as needed */}
      </div>

     


    </div>


          
          
          <div className="flex items-center justify-end mt-4 gap-4">
              <div onClick={() => plusSlides(-1)} className="md:w-[82px] md:h-[89px] w-[49px] cursor-pointer h-[54px] p-3 md:p-7 rounded-full bg-[#002D62]">
                <img src="/assets/svg/arrow-left.svg" alt="arrow-left" />
              </div>
              <div onClick={() => plusSlides(1)} className="md:w-[82px] md:h-[89px] w-[49px] cursor-pointer h-[54px] p-3 md:p-7  rounded-full bg-[#002D62]">
                <img src="/assets/svg/arrow-right.svg" alt="arrow-right" />
              </div>
          </div>
    
    </div>
  )
}
