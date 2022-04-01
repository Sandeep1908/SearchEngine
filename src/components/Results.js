import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useResultContext } from './context/ResultContextProvider'
import  Loading  from './Loading'
import ActionAreaCard from '../MaterialUI/Card/Card'
const Results = () => {
    const {results,isLoading,getResults,searchTerm}=useResultContext();
    const location=useLocation();
      
    useEffect(()=>{
      if(searchTerm){
        if(location.pathname==='/videos'){
          getResults(`/search/q=${searchTerm} video`);
        }
        else{

          getResults(`${location.pathname}/q=${searchTerm}&num=100`)
        }
      }
    },[searchTerm,location.pathname])

    if(isLoading)return <Loading/>
    
    switch(location.pathname){
      
      case '/search':
        return(
          
        
            <div className='md:w-10/12 flex flex-wrap justify-between break-words space-y-6 sm:px-56'>
          
            {results?.map((curr,index)=>
             (
              <div key={index} className=" md:w-4/5 w-full">
                {console.log(curr)}
                <a href={curr.link} target="_blank" rel="noreferrer">
                  <p className='text-sm'>{curr.link}</p>
                  <p className='text-lg  hover:underline dark:text-blue-300 text-blue-700'>{curr.title}</p>
                </a>
                <p>{curr.description}</p>
              </div>
             )
            )}
           </div>

        )
       
        case '/image':
          return(
            <div className="flex flex-wrap justify-center items-center">
              
              {results?.map(({image,link:{href,title}},index)=>(
                
                <a className="sm:p-3 p-5" href={href} key={index} target="_blank" rel="noreferrer">
                  <img src={image?.src} alt={title} loading='lazy' />
                  <p className='w-36 break-words text-sm mt-2'>
                    {title}
                  </p>
                  
                </a>
              ))}
            </div>
          )

          case '/news':
            return(
              <div className='flex flex-wrap justify-between space-y-6 sm:px-56 items-center'>
                {results?.map(({links,id,source,title},index)=>
                 (
                  <div key={index} className="md:w-2/5 w-full">
                    <a href={links?.[0].href} target="_blank" rel="noreferrer" className='hover:underline'>
                      <p className='text-lg dark:text-blue-300 text-blue-700'>{title}
                      {title}
                      </p>
                      </a>

                    <div className='flex gap-4'>
                      <a href="source?.href" target='_blank' rel='noreferrer' className='hover:underline'>
                        {source?.href}
                      </a>

                  
                    </div>
                     
                    
                  </div>
                 )
                )}
              </div>
            )

            case '/videos':
              return(
                <div className='flex flex-wrap'>
                  {results.map((video,index)=>(
                    <div key={index} className='p-2'>
                  {video?.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links?.[0].href} controls width="335px" height="200px"/>}
                      </div>
                  ))}
                </div>
              )
    }
}
export default Results