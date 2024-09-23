import { useEffect, useRef, useState } from 'react'

import './App.css'

import ProjectCard1 from './components/ProjectCard1';


function App() {

  const [isActive, setIsActive] = useState(false);

  const mobileUlRef = useRef(null);


  const darkModeToggle = () => {

    const currentStatus = !isActive;

    localStorage.setItem('isActive', JSON.stringify(currentStatus));
    setIsActive(currentStatus)
  };

  const storedStatus =  JSON.parse(localStorage.getItem('isActive')) || '';

  useEffect(() => {
    setIsActive(storedStatus)
  }, [ storedStatus ] );

  const openMenu = () => {

    return mobileUlRef.current.style.transform = 'translateX(-256px)'
    
  };
  const closeMenu = () => {

    return mobileUlRef.current.style.transform = 'translateX(256px)'
    
  };


  return (
    <>
      
      <header className={`w-full px-6 fixed top-0 z-50 ${isActive ? 'bg-[#0f172a] text-white shadow-[0_0_7px_#cecdcdd5]' : 'bg-white text-black shadow-[0_0_25px_#cecdcdd8]'}`}>
        <nav className='flex justify-between items-center max-w-[1250px] mx-auto h-[80px] py-4'>
          <a href="#home"><h1 className='text-3xl font-bold'>Sambhu<span className='text-purple-500'>~</span></h1></a>

          <ul className='hidden md:flex gap-4 items-center'>
            <li className={`py-1 px-3 rounded-full border-transparent ${isActive ? 'border-[2px] hover:border-white' : 'border-[0.5px] hover:border-gray-500'}`}><a href="#home">Home</a></li>

            <li className={`py-1 px-3 rounded-full border-transparent ${isActive ? 'border-[2px] hover:border-white' : 'border-[0.5px] hover:border-gray-500'}`}><a href="#About">About me</a></li>

            <li className={`py-1 px-3 rounded-full border-transparent ${isActive ? 'border-[2px] hover:border-white' : 'border-[0.5px] hover:border-gray-500'}`}><a href="#service">Services</a></li>

            <li className={`py-1 px-3 rounded-full border-transparent ${isActive ? 'border-[2px] hover:border-white' : 'border-[0.5px] hover:border-gray-500'}`}><a href="#work">My Work</a></li>

            <li className={`py-1 px-3 rounded-full border-transparent ${isActive ? 'border-[2px] hover:border-white' : 'border-[0.5px] hover:border-gray-500'}`}><a href="#contact">Contact</a></li>

          </ul>

          <div className='flex gap-6 items-center'>
            <button onClick={darkModeToggle}>
            <img className={`w-6 ${isActive ? 'hidden' : 'block'}`} src="moon.png" alt="" />
            <img className={`w-6 ${isActive ? 'block' : 'hidden'}`} src="sun.png" alt="" />

              
            </button>

            <a className={`hidden md:flex py-3 px-5 ${isActive ? 'border-[2px] border-white' : 'border-[0.5px] border-gray-500'} rounded-full`} href="#contact">Contact &nbsp; 

            <img className={`h-4 pt-1 ${isActive ? 'hidden' : 'block'}`} src="asset_5.png" alt="" />
            <img className={`h-4 pt-1 ${isActive ? 'block' : 'hidden'}`} src="asset_6.png" alt="" />
            
            </a>

            <div className={`cursor-pointer`} onClick={openMenu}>

            <img className={`w-6 cursor-pointer md:hidden ${isActive ? 'hidden' : 'block'}`} src="dark_menu.png" alt="light-menu" />

            <img className={`w-6 cursor-pointer md:hidden ${isActive ? 'block' : 'hidden'}`} src="light_menu.png" alt="dark-menu" />

            </div>
            
          </div>

          {/* Mobile Nav bar list items ............. */}

          <ul className={`md:hidden w-64 fixed top-0 bottom-0 right-[-256px] duration-300 pt-16 pl-12 flex flex-col gap-8 ${isActive ? 'bg-[#310c53]' : 'bg-rose-100'}`} ref={mobileUlRef}>

            <div className={`cursor-pointer`} onClick={closeMenu}>
              <img className={`w-6 absolute top-6 right-6 ${isActive ? 'block' : 'hidden'}`} src="light_close.png" alt="dark-close" />


              <img className={`w-6 absolute top-6 right-6 ${isActive ? 'hidden' : 'block'}`} src="dark_close.png" alt="dark-close" />

            </div>


            <li onClick={closeMenu}><a href="#home">Home</a></li>
            <li onClick={closeMenu}><a href="#About">About me</a></li>
            <li onClick={closeMenu}><a href="#service">Services</a></li>
            <li onClick={closeMenu}><a href="#work">My Work</a></li>
            <li onClick={closeMenu}><a href="#contact">Contact</a></li>
      
          </ul>



        </nav>

      </header>

      <main className={`w-full 
        ${isActive ? 'bg-[#11001f] text-white' : 'bg-gradient-to-r from-[#f5edf5] to-[#ececfd]'}`}>

      

      <div className='max-w-[1150px] mx-auto'> {/* container starts here.......*/}

        {/* Hero Section starts here........... */}

       <div id='home' className={`pt-[120px] flex justify-center
        flex-col items-center lg:h-screen pb-[70px]`}>
        

        <img className={`w-36 rounded-full`} src="Picsart_profile_dp.jpg" alt="profile" />
        <h2 className={`my-4 text-xl font-pop`}>Hi! I&apos;m Sambhunath Jana 👋🏻</h2>

        <h1 className={`xl:text-6xl lg:text-5xl md:text-4xl text-[28px] font-merri max-w-[750px] text-center xl:leading-[1.3] leading-[1.3] px-4`}>frontend web developer based in India.</h1>

        <p className={`max-w-[750px] text-center my-4 px-6 ${isActive ? 'text-white' : 'text-gray-600'}`}>I am a frontend developer from Surat, India, with 2 years of internship experience across multiple companies. I am dedicated to continuously learning and enhancing my skills.</p>

        <div className={`flex flex-col md:flex-row md:gap-6 gap-2`}>

        <a href="#contact" className={`bg-gradient-to-r from-blue-500 to-purple-600 py-3 px-5 rounded-md mt-4`}>
          <div className={`flex items-center gap-2 text-white`}>
            <p className={`text-white`}>Contact me</p>
            <i className="fa-solid fa-arrow-right-long pt-1"></i>
          </div>
        </a>


        <a href="resume.pdf" className={`py-3 px-5 rounded-md mt-4 bg-white text-black ${isActive ? 'border-none' : 'border-[0.5px] border-gray-600'}`}>
          <div className={`flex items-center gap-2`}>
            <p className={``}>My resume</p>
            <i className="fa-solid fa-download"></i>
          </div>
        </a>

        </div>

       </div>

       {/* About me Section starts here........... */}

       <div id='About' className={`w-full py-10 scroll-mt-[80px] lg:h-screen`}>

        <h3 className={`text-center`}>Introduction</h3>
        <h2 className={`text-center my-4 text-4xl font-merri`}>About me</h2>

        <div className={`flex flex-col lg:flex-row w-full mt-16 lg:items-start items-center lg:gap-20 md:gap-14 gap-10 xl:px-0 px-8`}>

          <div className={`lg:w-[30%] md:w-[40%] w-[75%] relative md:mb-0 sm:mb-20 mb-5`}>

            <img className={`w-full rounded-2xl`} src="picts_log_dp.png" alt="long-dp" />

            <div className={`w-1/2 aspect-square rounded-full bg-white absolute lg:-mt-[7rem] lg:-right-[2.5rem]
            shadow-[0_0_12px_#80008055]  md:-mt-[7rem] md:-right-[3.5rem] sm:-mt-[10rem] sm:-right-[4.5rem] 
            -mt-[6rem] -right-[2.5rem]` }>

              <img className={`w-full animate-spin-slow`} src="round_text.png" alt="round-text" />

              <img className={`w-[25%] aspect-square -mt-[63%] absolute right-[38%]`} src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/man-technologist-light-skin-tone.png" alt="laptop-logo" />

            </div>

          </div>


          <div className={`flex-1 xl:px-0 lg:px-0 md:px-20`}>

            <p className={`font-pop leading-[2.5] p-0 mt-[20px] lg:m-0 text-[14px] ${isActive ? 'text-white' : 'text-gray-600'}`}>I am a fresher Frontend Developer with over a decade of experience in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>

            <div className={`flex flex-col md:flex-row my-10 gap-8`}> {/* 3 cards main div.........   */}

              

              <div className={`cursor-pointer hover:-translate-y-1 duration-500 py-8 px-4 rounded-xl flex-1 
              ${isActive ? 'border-[1px] border-gray-50 hover:bg-[#200e30] hover:shadow-[4px_4px_0_white]' : 'border-[0.5px] border-gray-400 hover:bg-rose-50 hover:shadow-[4px_4px_0_black]'}`}>

                <img className={`w-7 shrink-0 ${isActive ? 'block' : 'hidden'}`} src="light_code.png" alt="dark-mode" />
                <img className={`w-7 shrink-0 ${isActive ? 'hidden' : 'block'}`} src="dark_code.png" alt="light-mode" />

                <h3 className={`text-lg font-semibold my-5 ${isActive ? 'text-white' : 'text-black'}`}>Languages</h3>

                <p className={`text-[15px] ${isActive ? 'text-gray-400' : 'text-gray-700'}`}>HTML, CSS, JavaScript React Js, Next Js</p>

              </div>
              

              <div className={`cursor-pointer hover:-translate-y-1 duration-500 py-8 px-4 rounded-xl flex-1 
              ${isActive ? 'border-[1px] border-gray-50 hover:bg-[#200e30] hover:shadow-[4px_4px_0_white]' : 'border-[0.5px] border-gray-400 hover:bg-rose-50 hover:shadow-[4px_4px_0_black]'}`}>

                <img className={`w-7 shrink-0 ${isActive ? 'block' : 'hidden'}`} src="light_education.png" alt="dark-mode" />
                <img className={`w-7 shrink-0 ${isActive ? 'hidden' : 'block'}`} src="dark_education.png" alt="light-mode" />

                <h3 className={`text-lg font-semibold my-5 ${isActive ? 'text-white' : 'text-black'}`}>Education</h3>

                <p className={`text-[15px] ${isActive ? 'text-gray-400' : 'text-gray-700'}`}>Master in Computer Application</p>

              </div>
              

              <div className={`cursor-pointer hover:-translate-y-1 duration-500 py-8 px-4 rounded-xl flex-1 
              ${isActive ? 'border-[1px] border-gray-50 hover:bg-[#200e30] hover:shadow-[4px_4px_0_white]' : 'border-[0.5px] border-gray-400 hover:bg-rose-50 hover:shadow-[4px_4px_0_black]'}`}>

                <img className={`w-7 shrink-0 ${isActive ? 'block' : 'hidden'}`} src="light_work.png" alt="dark-mode" />
                <img className={`w-7 shrink-0 ${isActive ? 'hidden' : 'block'}`} src="dark_work.png" alt="light-mode" />

                <h3 className={`text-lg font-semibold my-5 ${isActive ? 'text-white' : 'text-black'}`}>Projects</h3>

                <p className={`text-[15px] ${isActive ? 'text-gray-400' : 'text-gray-700'}`}>Built more than 5 projects</p>

              </div>

            </div>

            <p className={`text-gray-500 font-merri text-[14px]`}>Tools i use</p>

         

            <div className={`mt-9 flex gap-4 items-center`}>    {/* Tools main div starts here..... */}

              

              <div className={`p-3 w-fit rounded-lg hover:-translate-y-1 duration-500 cursor-pointer ${isActive ? 'border-[1px] border-gray-50 ' : 'border-[0.5px] border-gray-400'}`}>
                <img className={`w-7`} src="vscode.png" alt="vs-code-logo" />
              </div>


              <div className={`p-3 w-fit rounded-lg hover:-translate-y-1 duration-500 cursor-pointer ${isActive ? 'border-[1px] border-gray-50 ' : 'border-[0.5px] border-gray-400'}`}>
                <img className={`w-7`} src="asset_25.png" alt="vs-code-logo" />
              </div>


              <div className={`p-3 w-fit rounded-lg hover:-translate-y-1 duration-500 cursor-pointer ${isActive ? 'border-[1px] border-gray-50 ' : 'border-[0.5px] border-gray-400'}`}>
                <img className={`w-7`} src="mongo.png" alt="vs-code-logo" />
              </div>


              <div className={`p-3 w-fit rounded-lg hover:-translate-y-1 duration-500 cursor-pointer ${isActive ? 'border-[1px] border-gray-50 ' : 'border-[0.5px] border-gray-400'}`}>
                <img className={`w-7`} src="asset_27.png" alt="vs-code-logo" />
              </div>


              <div className={`p-3 w-fit rounded-lg hover:-translate-y-1 duration-500 cursor-pointer ${isActive ? 'border-[1px] border-gray-50 ' : 'border-[0.5px] border-gray-400'}`}>
                <img className={`w-7`} src="git.png" alt="vs-code-logo" />
              </div>

           

            </div>    {/* Tools main div ends here.......*/}
          </div>

        </div>

       </div>

       {/* Services Section starts here........... */}

       <div id='service' className={`w-full py-10 scroll-mt-[80px]`}>

       <h3 className={`text-center mt-[40px]`}>What i offer</h3>

       <h2 className={`text-center my-4 text-4xl font-merri`}>My services</h2>

       <p className={`text-center max-w-[650px] mx-auto leading-[1.8] px-6`}>I am a frontend developer from Surat, India with 2 years of experience in multiple companies.</p>

         <div className={`my-12 flex flex-col items-center justify-center sm:flex-row gap-4 flex-wrap`}> {/*4 services cards main div starts here ....... */}



          <div className={`py-12 px-8 border-[0.5px] rounded-lg cursor-pointer duration-500 w-[274px]
          hover:-translate-y-1
          ${isActive ? 'border-white hover:bg-[#281341] hover:shadow-[4px_4px_0_white]' : 'border-gray-400 hover:bg-rose-50 hover:shadow-[4px_4px_0_black]'}`}>

            <img className={`w-10`} src="asset_29.png" alt="web-logo" />

            <h3 className={`mt-4 text-[18px] font-semibold ${isActive ? 'text-gray-200' : 'text-gray-600'}`}>Web design</h3>

            <p className={`my-4 text-[14px] font-semibold ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>Web development is the process of building, programming...</p>

            <p className={`text-[14px] font-semibold`}>Read more &nbsp;<i className="fa-solid fa-arrow-right-long text-gray-500"></i></p>

          </div>


          <div className={`py-12 px-8 border-[0.5px] rounded-lg cursor-pointer duration-500 w-[274px]
          hover:-translate-y-1
          ${isActive ? 'border-white hover:bg-[#281341] hover:shadow-[4px_4px_0_white]' : 'border-gray-400 hover:bg-rose-50 hover:shadow-[4px_4px_0_black]'}`}>

            <img className={`w-10`} src="asset_31.png" alt="web-logo" />

            <h3 className={`mt-4 text-[18px] font-semibold ${isActive ? 'text-gray-200' : 'text-gray-600'}`}>Mobile app</h3>

            <p className={`my-4 text-[14px] font-semibold ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>Web development is the process of building, programming...</p>

            <p className={`text-[14px] font-semibold`}>Read more &nbsp;<i className="fa-solid fa-arrow-right-long text-gray-500"></i></p>

          </div>


          <div className={`py-12 px-8 border-[0.5px] rounded-lg cursor-pointer duration-500 w-[274px]
          hover:-translate-y-1
          ${isActive ? 'border-white hover:bg-[#281341] hover:shadow-[4px_4px_0_white]' : 'border-gray-400 hover:bg-rose-50 hover:shadow-[4px_4px_0_black]'}`}>

            <img className={`w-10`} src="asset_32.png" alt="web-logo" />

            <h3 className={`mt-4 text-[18px] font-semibold ${isActive ? 'text-gray-200' : 'text-gray-600'}`}>UI/ UX design</h3>

            <p className={`my-4 text-[14px] font-semibold ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>Web development is the process of building, programming...</p>

            <p className={`text-[14px] font-semibold`}>Read more &nbsp;<i className="fa-solid fa-arrow-right-long text-gray-500"></i></p>

          </div>


          <div className={`py-12 px-8 border-[0.5px] rounded-lg cursor-pointer duration-500 w-[274px]
          hover:-translate-y-1
          ${isActive ? 'border-white hover:bg-[#281341] hover:shadow-[4px_4px_0_white]' : 'border-gray-400 hover:bg-rose-50 hover:shadow-[4px_4px_0_black]'}`}>

            <img className={`w-10`} src="asset_33.png" alt="web-logo" />

            <h3 className={`mt-4 text-[18px] font-semibold ${isActive ? 'text-gray-200' : 'text-gray-600'}`}>Graphics design</h3>

             <p className={`my-4 text-[14px] font-semibold ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>Web development is the process of building, programming...</p>

             <p className={`text-[14px] font-semibold`}>Read more &nbsp;<i className="fa-solid fa-arrow-right-long text-gray-500"></i></p>

            </div>

         </div> {/*   4 services cards main div ends here ....... */}

       </div>

       {/* Work/Projects Section starts here........... */}

        <div id='work' className={`w-full py-10 scroll-mt-[80px] lg:h-screen`}>

          <h3 className={`text-center mt-[40px] font-pop ${isActive ? 'text-gray-300' : ''}`}>My portfolio</h3>

          <h2 className={`text-center my-4 text-4xl font-merri`}>My latest work</h2>

          <p className={`text-center max-w-[650px] mx-auto leading-[1.8] px-6`}>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>

          <ProjectCard1 isActive={isActive}></ProjectCard1>

          <div className='text-center'>

            <a className={`py-3 px-6 mt-4 rounded-md inline-block hover:shadow-[0_0_12px_#800080bd] ${isActive ? 'border-[1px] border-white' : 'border-[0.5px] border-gray-600'}`} href="">Show more <i className="fa-solid fa-arrow-right-long text-gray-400"></i></a>

          </div>

        </div>

        {/* Contact Section starts here........... */}

        <div id='contact' className={`w-full py-10 scroll-mt-[80px] lg:h-screen`}>

        <h3 className={`text-center mt-[40px] font-pop ${isActive ? 'text-gray-300' : ''}`}>Connect with me</h3>

        <h2 className={`text-center my-4 text-4xl font-merri`}>Get in touch</h2>

        <p className={`text-center max-w-[650px] mx-auto leading-[1.8] px-6`}>I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>

        <div className={`flex flex-col md:flex-row justify-center items-center gap-4 my-10`}>
          <input className={`w-[320px] py-3 outline-none
          ${isActive ? 'bg-[#240b36] border-[0.5px] border-white' : 'bg-white border-[0.5px] border-gray-400'}
          pl-4 rounded-md`} type="text" placeholder='Enter your name' required/>

          <input className={`w-[320px] py-3 outline-none
           ${isActive ? 'bg-[#240b36] border-[0.5px] border-white' : 'bg-white border-[0.5px] border-gray-400'}
          pl-4 rounded-md`} type="email" name="email" id="email" placeholder='Enter your name' required />
        </div>

        <div className={`flex justify-center`}>

        <textarea cols={10} rows={6} className={`md:w-[656px] md:h-[240px] w-[320px] outline-none p-6 rounded-md
        ${isActive ? 'bg-[#240b36] border-[0.5px] border-white' : 'bg-white border-[0.5px] border-gray-400'}
        `} 
        name="text-input" id="text-area" placeholder='Enter your message'></textarea>

        </div>

        <div className='text-center'>

            <a className={`py-3 px-6 mt-8 rounded-md inline-block
              ${isActive ? 'border-[1px] border-white hover:bg-purple-950' : 'bg-gray-900 text-white hover:bg-black'}`} href="">Submit now <i className="fa-solid fa-arrow-right-long text-gray-400"></i></a>

          </div>
        </div>

        {/* footer section starts here...... */}

        <footer className={`mt-[70px] w-full md:px-8`}>
          <div className={`text-center w-full`}>
          <a className='inline-block' href="#home"><h1 className='text-4xl font-bold'>Sambhu<span className='text-purple-500'>~</span></h1></a>
          </div>

          <div className={`flex justify-center items-center gap-2 my-4 mb-10`}>
            <img className={`w-6 ${isActive ? 'hidden' : 'block'}`} src="dark_msg.png" alt="message-light" />
            <img className={`w-6 ${isActive ? 'block' : 'hidden'}`} src="light_msg.png" alt="message-light" />

            <p className={`font-pop`}>sambhunathjana27@gmail.com</p>
          </div>

          <div className={`border-t-[1px] gap-6 md:w-full w-[80%] mx-auto
           ${isActive ? 'border-white' : 'border-gray-500'}
             mt-5 flex flex-col md:flex-row justify-between items-center py-8 `}>

            <p className={`text-[16px] text-center leading-[2] ${isActive ? 'text-gray-300' : 'text-gray-600 '} font-semibold`}>© 2024 Sambhunath Jana. All rights reserved.</p>


            <ul className={`flex items-center justify-center gap-8`}>
              <li><a href="">GitHub</a></li>
              <li><a href="">LinkedIn</a></li>
              <li><a href="">Twitter</a></li>
            </ul>


          </div>




        </footer>
       </div>
      </main>
    </>
  )
}

export default App


      



