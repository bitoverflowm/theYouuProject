"use client"

import React, { useEffect, useRef, useState } from 'react'


const ScrollTag = () => {
    const scrollRef = useRef(null)
    const [isAutoScrolling, setIsAutoScrolling] = useState(true)
    const [scrollDirection, setScrollDirection] = useState(1)

    const autoScroll = () => {
        if(scrollRef.current && isAutoScrolling){
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current

            if(scrollLeft + clientWidth >= scrollWidth && scrollDirection !== -1){
                setScrollDirection(-1)
            }
            else if(scrollLeft === 0 && scrollDirection !== 1 ){
                setScrollDirection(1)
            }
            
            scrollRef.current.scrollLeft += scrollDirection
        
        }
    }

    /*const handleScroll = () => {
        setIsAutoScrolling(false)
        clearTimeout(scrollRef.current.autoScrollTimeout)
        scrollRef.current.autoScrollTimeout = setTimeout(()=>{
            setIsAutoScrolling(true)
        }, 3000)
    };*/

    useEffect(() => {
        scrollRef.current.autoScrollTimeout = setInterval(autoScroll, 20)
        return () => {
            scrollRef && scrollRef.current && scrollRef.current.autoScrollTimeout &&
                clearInterval(scrollRef.current.autoScrollTimeout)
        };
    }, [isAutoScrolling, scrollDirection]);

    return (
        <div
            ref={scrollRef}
            //onScroll={handleScroll}
            className='flex overflow-x-auto hide-scroll-bar text-sm gap-2 h-8 no-scrollbar text-youu-reseda-green font-regular font-body'
        >
            <div className='whitespace-nowrap bg-white rounded-md px-2 py-2'>Huberman Lab Protocols</div>
            <div className='whitespace-nowrap bg-white rounded-md px-2 py-2'>Tools For Mental Health</div>
            <div className='whitespace-nowrap bg-white rounded-md px-2 py-2'>Micro Nutrients</div>
            <div className='whitespace-nowrap bg-white rounded-md px-2 py-2'>Hormones</div>
            <div className='whitespace-nowrap bg-white rounded-md px-2 py-2'>Sleep Health</div>
            <div className='whitespace-nowrap bg-white rounded-md px-2 py-2'>Focus</div>
            <div className='whitespace-nowrap bg-white rounded-md px-2 py-2'>Testosterone</div>
          </div>
    )
}

export default ScrollTag