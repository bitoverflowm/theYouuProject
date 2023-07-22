
import { useState, useEffect } from "react"
import Link from "next/link"
import useIsClient from "@/lib/useIsClient"
import InfiniteScroll from "react-infinite-scroll-component"
import { Transition } from "@headlessui/react"

import MovingVideoCard from "../UI/Cards/movingVideoCard"
import VideoComponent from "../mediaAssets/videoComponent"

const FeaturedProtocols = ({protocolCatalogueData, mediaCatalogueData, fetchData, hasMore, filter}) => {
    const isClient = useIsClient()
    const [ filteredProtocols, setFilteredProtocols ] = useState([])
    const [ filteredMedia, setFilteredMedia ] = useState([])
    const [ protocolDiscVisible, setProtocolDiscVisbile ] = useState(protocolCatalogueData.map(() => false))
    const [ mediaDiscVisible, setMediaDiscVisbile ] = useState(mediaCatalogueData.map(() => false))
    
    useEffect(() => {
      if(protocolCatalogueData || mediaCatalogueData){
        if(filter === 'All'){
          console.log('protocol data: ', protocolCatalogueData)
          setFilteredProtocols(protocolCatalogueData)
          console.log('media data: ', mediaCatalogueData)
          setFilteredMedia(mediaCatalogueData)
        }
        else{
          let protocols = protocolCatalogueData.filter((d) => !filter || (filter && d.attributes.includes(filter)))
          setFilteredProtocols(protocols)
          let media = mediaCatalogueData.filter((d) => !filter || (filter && d.attributes.includes(filter)))
          setFilteredMedia(media)
          }
        }          
   }, [protocolCatalogueData, mediaCatalogueData, filter])

   const toggleProtocolDiscVisibility = (index) => {
    setProtocolDiscVisbile((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const toggleMediaDiscVisibility = (index) => {
    setMediaDiscVisbile((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

    return (
      <div>
        {(filteredProtocols || filteredMedia) && (filteredProtocols.length > 0 || filteredMedia.length > 0) &&
          <InfiniteScroll
              dataLength={protocolCatalogueData.length + mediaCatalogueData.length}
              next={fetchData}
              hasMore={hasMore}
              loader={<h4 className="animate-pulse">Loading...</h4>}
              endMessage={
                  <p>Yay! You have seen it all</p>
              }
              >
                <div className="grid grid-cols-5 gap-6">
                    {
                        protocolCatalogueData.map((p, index) => {
                            return(                              
                                  <div className="w-full max-w-md mx-auto" key={p._id} onMouseEnter={() => toggleProtocolDiscVisibility(index)} onMouseLeave={() => toggleProtocolDiscVisibility(index)}>
                                    <div className="cursor-pointer">
                                        <Link href={p.protocolLink}>
                                            <div className="">
                                                {isClient && <VideoComponent videoKey={p.video} />}
                                            </div>
                                        </Link>
                                        <div className="flex text-xs p-1">
                                          🤍 {p.totalSaves} 🚀 ({p.totalShares})  · 👀 {p.totalViews}
                                        </div>
                                        <div className="font-black text-sm px-1">
                                          {p.title}
                                        </div>
                                        <Transition
                                          show={protocolDiscVisible[index] ? protocolDiscVisible[index] : false}
                                          enter="transition ease-out duration-300 transform"
                                          enterFrom='-translate-y-full'
                                          enterTo='translate-y-0'
                                          leave='trantion ease-in duration-300 transform'
                                          leaveFrom='translate-y-0'
                                          leaveTo='-translate-y-full'>
                                            <div className="text-xs">
                                              {p.description}
                                            </div>
                                        </Transition>                                        
                                    </div>
                                  </div>
                                )
                        })
                    }
                    {
                        mediaCatalogueData.map((m, index) => {
                            return(                              
                                  <div className="w-full max-w-md mx-auto" key={m._id} onMouseEnter={() => toggleMediaDiscVisibility(index)} onMouseLeave={() => toggleMediaDiscVisibility(index)}>
                                    <div className="cursor-pointer">
                                        <Link href={m.articleLink}>
                                            <div className="">
                                                {isClient && <VideoComponent videoKey={m.video} media={true} />}
                                            </div>
                                        </Link>
                                        <div className="flex text-xs p-1">
                                          🤍 {m.totalSaves} 🚀 ({m.totalShares})  · 👀 {m.totalViews}
                                        </div>
                                        <div className="font-black text-sm px-1">
                                          {m.title}
                                        </div>
                                        <Transition
                                          show={mediaDiscVisible[index] ? mediaDiscVisible[index] : false}
                                          enter="transition ease-out duration-300 transform"
                                          enterFrom='-translate-y-full'
                                          enterTo='translate-y-0'
                                          leave='trantion ease-in duration-300 transform'
                                          leaveFrom='translate-y-0'
                                          leaveTo='-translate-y-full'>
                                            <div className="text-xs">
                                              {m.description}
                                            </div>
                                        </Transition>  
                                    </div>
                                  </div>
                                )
                        })
                    }
                </div>
            </InfiniteScroll>
          }
        </div>
        

        /*
        <div className='grid grid-cols-4 gap-2'>
            <div className='cursor-pointer'>
              <div className='rounded-t-lg'>
                <MovingVideoCard videoUrl={videos[0].video} />
              </div>
              <div className='bg-onyx-black text-white rounded-b-lg p-2 px-6 text-center'>
                Find a Cold Plunge Near You
              </div>
            </div>
            <div className='rounded-xl border-2 border-white'>
              <div className='rounded-t-lg'>
                <img src='/images/AlertAndAttentiveEmoji.png' className='w-64 h-40 mx-auto rounded-t-lg'/>
              </div>
              <div className='bg-onyx-black text-white rounded-b-lg p-2 px-6 text-center'>
                Find Hot Therapy Near You
              </div>
            </div>
            <div className='rounded-xl border-2 border-white'>
              <div className='rounded-t-lg'>
                <img src='/images/AlertAndAttentiveEmoji.png' className='w-64 h-40 mx-auto rounded-t-lg'/>
              </div>
              <div className='bg-onyx-black text-white rounded-b-lg p-2 px-6 text-center'>
                Get All Your Micro Nutrients in One Go
              </div>
            </div>
            <div className='rounded-xl border-2 border-white'>
              <div className='rounded-t-lg'>
                <img src='/images/AlertAndAttentiveEmoji.png' className='w-64 h-40 mx-auto rounded-t-lg'/>
              </div>
              <div className='bg-onyx-black text-white rounded-b-lg p-2 px-6 text-center'>
                Use Spotlighting to Get Focused
              </div>
            </div>
            <div className='rounded-xl border-2 border-white'>
              <div className='rounded-t-lg'>
                <img src='/images/AlertAndAttentiveEmoji.png' className='w-64 h-40 mx-auto rounded-t-lg'/>
              </div>
              <div className='bg-onyx-black text-white rounded-b-lg p-2 px-6 text-center'>
                List Your Cold Plunge make $
              </div>
            </div>
            <div className='rounded-xl border-2 border-white'>
              <div className='rounded-t-lg'>
                <img src='/images/AlertAndAttentiveEmoji.png' className='w-64 h-40 mx-auto rounded-t-lg'/>
              </div>
              <div className='bg-onyx-black text-white rounded-b-lg p-2 px-6 text-center'>
                Build the Perfect Workout for your Goals
              </div>
            </div>
            <div className='rounded-xl border-2 border-white'>
              <div className='rounded-t-lg'>
                <img src='/images/AlertAndAttentiveEmoji.png' className='w-64 h-40 mx-auto rounded-t-lg'/>
              </div>
              <div className='bg-onyx-black text-white rounded-b-lg p-2 px-6 text-center'>
                The Suppliment Stack To Hit Ulitmate Focus
              </div>
            </div>
            <div className='rounded-xl border-2 border-white'>
              <div className='rounded-t-lg'>
                <img src='/images/AlertAndAttentiveEmoji.png' className='w-64 h-40 mx-auto rounded-t-lg'/>
              </div>
              <div className='bg-onyx-black text-white rounded-b-lg p-2 px-6 text-center'>
                Suppliment Stack For Ultimate Motivation
              </div>
            </div>
          </div>*/
    )
}

export default FeaturedProtocols
