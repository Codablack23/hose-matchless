
export default function Team() {
  return (
    
    <div className="md:mt-[500px] mt-20 md:mx-[80px] mx-6">
        <h1 className="md:text-[40px] py-6 text-[32px] font-extrabold">Meet the Team</h1>

    <div className="md:flex md:flex-row items-center gap-10 py-24 px-10 md:mt-2 rounded-xl bg-[#002D62]">
      <div className="text-[#ffff] text-[20px]">    
          <p>C-Simon is a creative force in entertainment and digital tech, driving innovation at Hose Matchless Global LTD</p>
          
          <div className="flex mt-10 gap-4 items-center max-sm:w-[56px]">
            <img className="team" src="src/assets/svg/tiktok.svg" alt="tiktok" />
            <img className="team" src="src/assets/svg/ig.svg" alt="ig" />
            <img className="team" src="src/assets/svg/x.svg" alt="x" />
            <p className="max-sm:text-[14px]">Creator Network <a href="#">[Join Here]</a></p>
          </div>

      
      </div>

      <img className="max-sm:mt-8" src="src/assets/img/team-img.png" alt="team-img" />
      
    </div>

          <div className="flex items-center justify-end mt-4 gap-4">
              <div className="w-[82px] h-[89px] px-7 py-7 rounded-full bg-[#002D62]">
                <img src="src/assets/svg/arrow-left.svg" alt="arrow-left" />
              </div>
              <div className="w-[82px] h-[89px] px-7 py-7  rounded-full bg-[#002D62]">
                <img src="src/assets/svg/arrow-right.svg" alt="arrow-right" />
              </div>
          </div>
    
    </div>
  )
}
