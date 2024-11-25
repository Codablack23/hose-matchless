
export default function Nav() {
  return (
    <div>
      
      <div className="bg-[#002D62] py-8 w-full">

          <div className="flex items-center gap-56 md:ml-20 ml-8">

              <div className="logo flex flex-row">
                <img className="menu md:hidden mr-5" src="src/assets/svg/menu.svg" alt="menu" />
                  <img className="logo" src="src/assets/svg/hose-logo.svg" alt="logo" />
                  <img className="logo-name md:pl-4 pl-2" src="src/assets/img/logo-name.png" alt="logo-name" />
              </div>

              <div className="links gap-20">
                <a href="#"><p>Home</p></a>
                <a href="#"><p>About Us</p></a>
                <a href="#"><p>Services</p></a>
                <a href="#"><p>Events</p></a>
                <a href="#"><p>Contact Us</p></a>
              </div>
          </div>
      </div>
    </div>
  )
}
