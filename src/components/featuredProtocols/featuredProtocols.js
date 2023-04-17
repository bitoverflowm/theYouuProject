
import { useState, useEffect } from "react"
import Link from "next/link"
import useIsClient from "@/lib/useIsClient"
import InfiniteScroll from "react-infinite-scroll-component"

import MovingVideoCard from "../UI/Cards/movingVideoCard"
import VideoComponent from "../mediaAssets/videoComponent"

const FeaturedProtocols = ({protocolCatalogueData, mediaCatalogueData, fetchData, hasMore, filter}) => {
    const isClient = useIsClient()
    const [ filteredProtocols, setFilteredProtocols ] = useState([])
    const [ filteredMedia, setFilteredMedia ] = useState([])
    
    /*const [protocols] = useState([
        { id: 0, label: 'cold', video: 'Ice.m4v', desc: 'Find a Cold Plunge Near You', link: '/coldHotFinder', saves: 100, shareLink: '', shares: 15, tags: ['Focus']},
        { id: 1, label: 'cold', video: 'Fire.m4v', desc: 'Find a Cold Plunge Near You', link: '/coldHotFinder', saves: 100, shareLink: '', shares: 15, tags: ['Focus', 'Motivation']},
        { id: 2, label: 'cold', video: 'NaturalFIre.m4v', desc: 'Find a Cold Plunge Near You', link: '/coldHotFinder', saves: 100, shareLink: '', shares: 15, tags: ['Focus', 'Motivation', 'Health', 'Anxiety', 'Prevent Burnout']}
        //{ id: 'hot', video: '/videos/small/hot1.mp4'}
    ])*/
    
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
          setFilteredProtocols(protocols)}
          let media = mediaCatalogueData.filter((d) => !filter || (filter && d.attributes.includes(filter)))
          setFilteredMedia(media)
        }          
   }, [protocolCatalogueData, mediaCatalogueData, filter])

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
                <div className="flex flex-wrap gap-6">
                    {
                        protocolCatalogueData.map((p) => {
                            return(
                              
                                  <div className="w-full max-w-md mx-auto" key={p._id}>
                                    <div className="cursor-pointer">
                                        <Link href={p.protocolLink}>
                                            <div className="rounded-lg">
                                                {isClient && <VideoComponent videoKey={p.video} />}
                                            </div>
                                            <div className="bg-bito-grey">
                                                {p.description}
                                            </div>
                                        </Link>
                                        <div className="flex bg-bito-grey">
                                            {p.totalSaves} {p.totalShares}
                                        </div>
                                    </div>
                                  </div>
                                )
                        })
                    }
                    {
                        mediaCatalogueData.map((m) => {
                            return(                              
                                  <div className="w-full max-w-md mx-auto" key={m._id}>
                                    <div className="cursor-pointer">
                                        <Link href={m.articleLink}>
                                            <div className="rounded-lg">
                                                {isClient && <VideoComponent videoKey={m.video} media={true} />}
                                            </div>
                                            <div className="bg-bito-grey">
                                                {m.description}
                                            </div>
                                        </Link>
                                        <div className="flex bg-bito-grey">
                                            {m.totalSaves} {m.totalShares}
                                        </div>
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
