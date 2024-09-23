const ProjectCard1 = (isActive) => {
  return (
    <>
      <div
        className={`w-full flex flex-col sm:flex-row justify-center items-center gap-4 my-12 flex-wrap`}
      >    {/* Work/Projects 4 cards main div starts here........... */}
       
      
        <div
          className={`rounded-lg cursor-pointer group
          bg-[url('/public/asset_38.png')] bg-no-repeat bg-cover bg-center w-[274px] h-[285px] overflow-hidden`}>
 
          <div
             className={`w-full h-full bg-gradient-to-t from-[#000000c2] flex items-end justify-center`} >
                                            
            <div className={`w-[82%] flex justify-between
              group-hover:-translate-y-2 duration-500
               items-center px-4 py-3 rounded-md bg-white mb-5`} >
           
              <div>
        
                <h3
                  className={`font-semibold font-pop ${
                    isActive ? "text-gray-950" : "text-gray-950"
                  }`}
                >
                  Frontend project
                </h3>
         
                <p className={`text-[14px] font-semibold text-gray-600`}>
                  Web Design
                </p>

              </div>

              <div

                className={`shrink-0 w-[37px] h-[37px] flex justify-center group-hover:bg-[#7be618] duration-500
                 shadow-[2px_2px_0_black]
                  items-center rounded-full border-[1px] border-black`} >
             
                <img
                  className="w-5"
                  src="asset_34.png"
                  alt="send-logo"
                /> 
                
              </div>
            </div>
          </div>
        </div>


          {/* 2nd Project starts here........... */}

        <div
          className={`rounded-lg cursor-pointer group
          bg-[url('/public/asset_39.png')] bg-no-repeat bg-cover bg-center w-[274px] h-[285px] overflow-hidden`}>
 
          <div
             className={`w-full h-full bg-gradient-to-t from-[#000000c2] flex items-end justify-center`} >
                                            
            <div className={`w-[82%] flex justify-between
              group-hover:-translate-y-2 duration-500
               items-center px-4 py-3 rounded-md bg-white mb-5`} >
           
              <div>
        
                <h3
                  className={`font-semibold font-pop ${
                    isActive ? "text-gray-950" : "text-gray-950"
                  }`}
                >
                  Geo based app
                </h3>
         
                <p className={`text-[14px] font-semibold text-gray-600`}>
                  mobile app
                </p>

              </div>

              <div

                className={`shrink-0 w-[37px] h-[37px] flex justify-center group-hover:bg-[#7be618] duration-500
                 shadow-[2px_2px_0_black]
                  items-center rounded-full border-[1px] border-black`} >
             
                <img
                  className="w-5"
                  src="asset_34.png"
                  alt="send-logo"
                /> 
                
              </div>
            </div>
          </div>
        </div>


                      {/* 3rd Project starts here........... */} 

        <div
          className={`rounded-lg cursor-pointer group
          bg-[url('/public/asset_40.png')] bg-no-repeat bg-cover bg-center w-[274px] h-[285px] overflow-hidden`}>
 
          <div
             className={`w-full h-full bg-gradient-to-t from-[#000000c2] flex items-end justify-center`} >
                                            
            <div className={`w-[82%] flex justify-between
              group-hover:-translate-y-2 duration-500
               items-center px-4 py-3 rounded-md bg-white mb-5`} >
           
              <div>
        
                <h3
                  className={`font-semibold font-pop ${
                    isActive ? "text-gray-950" : "text-gray-950"
                  }`}
                >
                  Photography site
                </h3>
         
                <p className={`text-[14px] font-semibold text-gray-600`}>
                  Web Design
                </p>

              </div>

              <div

                className={`shrink-0 w-[37px] h-[37px] flex justify-center group-hover:bg-[#7be618] duration-500
                 shadow-[2px_2px_0_black]
                  items-center rounded-full border-[1px] border-black`} >
             
                <img
                  className="w-5"
                  src="asset_34.png"
                  alt="send-logo"
                /> 
                
              </div>
            </div>
          </div>
        </div>


                   {/* 4th Project starts here........... */}

        <div
          className={`rounded-lg cursor-pointer group
          bg-[url('/public/asset_41.png')] bg-no-repeat bg-cover bg-center w-[274px] h-[285px] overflow-hidden`}>
 
          <div
             className={`w-full h-full bg-gradient-to-t from-[#000000c2] flex items-end justify-center`} >
                                            
            <div className={`w-[82%] flex justify-between
              group-hover:-translate-y-2 duration-500
               items-center px-4 py-3 rounded-md bg-white mb-5`} >
           
              <div>
        
                <h3
                  className={`font-semibold font-pop ${
                    isActive ? "text-gray-950" : "text-gray-950"
                  }`}
                >
                  UI/UX designing
                </h3>
         
                <p className={`text-[14px] font-semibold text-gray-600`}>
                  UI/UX Design
                </p>

              </div>

              <div

                className={`shrink-0 w-[37px] h-[37px] flex justify-center group-hover:bg-[#7be618] duration-500
                 shadow-[2px_2px_0_black]
                  items-center rounded-full border-[1px] border-black`} >
             
                <img
                  className="w-5"
                  src="asset_34.png"
                  alt="send-logo"
                /> 
                
              </div>
            </div>
          </div>
        </div>


      </div> {/* Work/Projects 4 cards main div ends here........... */}

    </>
  );
};

export default ProjectCard1;
