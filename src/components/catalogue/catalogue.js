import { useState } from "react"
import { Transition } from '@headlessui/react';
import Link from "next/link";


import TagList from '@/components/taglist'
import QuickWins from '@/components/quickwins'
import YoutubeViewer from "@/components/videoPlayer/youtubeViewer";
import SpotLighting from "@/app/theScience/spotLighting/page";
import SpotLightingProtocol from "../protocols/spotLightingProtocol";

const Catalogue = ({selectedView, setSelectedView, catalogueVisible, triggerViewActivation}) => {
    
    const [featured] = useState([
        { name: 'The Hard Reset', img: 'burntOutEmoji.png', desc: 'Sometimes in life we just need a reset. We have all been there, life is out of control and we are just burnt out...'},
        { name: 'Increase Alertness and Attention', img: 'AlertAndAttentiveEmoji.png', desc: 'Stay attentive and alert for longer'},
        { name: 'Cramming Session', img: 'studyingEmoji.png', desc: 'For when we need that extra boost to Cram a little harder - whether you are a student, interviewing for a job, have an upcoming test or need to perform specifically hard... '},
      ])
    
    const [content] = useState([
        { name: 'Increase Focus', img: 'icebathemoji.png', desc: 'Stay on track and be more engaged in any task and in life. Improve Clarity of Mind', tags: ['Motivation', 'Energy'] },
        { name: 'Suppliments and Stacks', img: 'suppliments.png', desc: '-', tags: ['Suppliments and Stacks', 'Motivation'] },
        { name: 'Boost Your Energy', img: 'energyEmoji.png', desc: 'Sometimes we just want a little more fuel in the day to keep our fire going', tags: ['Energy', 'Motivation'] },
        { name: 'Improve Your Mood', img: 'happyEmoji.png', desc: 'Stay on track and be more engaged in any task and in life. Improve Clarity of Mind', tags: ['Energy', 'Focus'] },
        { name: 'Master Your Mind', img: 'focusedEmoji.png', desc: 'Stay on track and be more engaged in any task and in life. Improve Clarity of Mind', tags: ['Mastery: Permanent Change', 'Focus'] },
        { name: 'Improve Brain Health', img: 'brainWorkout.png', desc: 'Boost mental performance, improve cognitive function, promote learning and memory', tags: ['Foods', 'Focus'] },
        { name: 'Reduce Anxiety', img: 'anxietyEmoji.png', desc: 'Relieve symptoms of depression and stress', tags: ['Foods', 'Focus'] },
        {name: 'Quick: Dopamine Boost', img: 'dopamineBoost.png', desc: 'Get a quick dopamine boost', tags: ['Suppliments and Stacks', 'Motivation'] },
        { name: 'Burn More Fat', img: 'burningFatEmoji.png', desc: 'Increase metabolism and burn more calories and help with weight loss and fatloss', tags: ['Suppliments and Stacks', 'Motivation'] },
        { name: 'Boost your Immune System', img: 'immuneSystemEmoji.png', desc: '-', tags: ['Suppliments and Stacks', 'Motivation'] },
        { name: 'Get Better at Sex', img: 'sexualHealthEmoji.png', desc: '-', tags: ['Suppliments and Stacks', 'Motivation'] },
        { name: 'Recover from a Workout', img: 'recovery.png', desc: 'Increase circulation and relieve muscle soreness', tags: ['Suppliments and Stacks', 'Motivation'] },
        { name: 'Improve Performance', img: 'performance.png', desc: '-', tags: ['Suppliments and Stacks', 'Motivation'] },
        { name: 'Fix Your Gut', img: 'guthealth.png', desc: '-', tags: ['Suppliments and Stacks', 'Motivation'] },
        { name: 'Prevent Burnout', img: 'preventBurnOut.png', desc: '-', tags: ['Suppliments and Stacks', 'Motivation'] },
        { name: 'Fix Your Diet', img: 'healthyFood.png', desc: '-', tags: ['Suppliments and Stacks', 'Motivation'] },
    ])

    const [ scienceChapterData ] = useState([
        { chapter: 'Chapter 1', name: 'dopamineMindSet', episodeId: 'Huberman39', desc: 'Dopamine Mindset & Drive', videoURL: 'QmOF0crdyRU', tags: ['Motivation', 'Energy'] },
        { chapter: 'Chapter 2', name: 'assessAndImproveFitness', episodeId: 'Huberman-', desc: 'How to assess and Improve All Aspects of Your Fitness', videoURL: '', tags: ['Fitness'] },
        { chapter: 'Chapter 3', name: 'strengthAndMuscle', episodeId: 'Huberman-', desc: 'Optimal Protocols to Build Strength and Grow Muscles', videoURL: '', tags: ['Fitness', 'Muscle', 'Strength'] },
        { chapter: 'Chapter 4', name: 'enduranceAndLoseFat', episodeId: 'Huberman-', desc: 'How to Build Physical Endurance and Lose Fat', videoURL: '', tags: ['Fitness', 'Cardiovascular', 'Endurance', 'FatLoss'] },
        { chapter: 'Chapter 5', name: 'fitnessAndLongevity', episodeId: 'Huberman-', desc: 'Optimize training Program for Fitness and Longevity', videoURL: '', tags: ['Fitness', 'Longevity'] },
        { chapter: 'Chapter 6', name: 'performance', episodeId: 'Huberman-', desc: 'Maximize Recovery to Achieve Fitness and Performance Goals', videoURL: '', tags: ['Fitness', 'Sleep', 'Recovery'] },
        { chapter: 'Chapter 7', name: 'nutritionAndSupplimentationForFitness', episodeId: 'Huberman-', desc: 'Optimal Nutrition and Supplementation for Fitness', videoURL: '', tags: ['Fitness', 'Nutrition', 'Supplimentation'] },
        { chapter: 'Chapter 8', name: 'spotlighting', episodeId: '-', desc: 'How to spotligh', videoURL: '', videoURL2: '', tags: ['focus'] },
    ])
    
    const [ selectedTag, setSelectedTag] = useState(null)
    const [ selectedId, setSelectedId] = useState(null)
    const [ toolsOpen, setToolsOpen ] = useState(false)
    const [ scienceOpen, setScienceOpen ] = useState(false)
    const [ selectedChapter, setSelectedChapter ] = useState()
    const [ selectedChapterURL, setSelectedChapterURL ] = useState()
    const [ selectedChapterData, setSelectedChapterData ] = useState()

    const handleTagClick = (tag) => {
        tag === selectedTag 
            ? setSelectedTag(null)
            : setSelectedTag(tag)
    }

    const filteredContent = selectedTag
        ? content.filter((item) => item.tags.includes(selectedTag))
        : content

    const openTools = (chapter) => {
        setToolsOpen(true)
        setSelectedChapter(chapter)
    }

    const closeTools = () => {
        setSelectedChapter(null)
        setToolsOpen(false)
    }

    const openScience = (chapter) => {
        setScienceOpen(true)
        setSelectedChapter(chapter)
        //extracting the relevant data for the chapter from data object
        const chapterData = scienceChapterData.find((item)=> item.name === chapter)
        setSelectedChapterData(chapterData)
        //setting the video url for the chapter
        setSelectedChapterURL(chapterData.videoURL)
    }

    const closeScience = () => {
        setSelectedChapter(null)
        setScienceOpen(false)
    }   

    return(
        <div className={`${selectedChapter ? 'p-2' : 'p-10'} min-h-screen`}>
            <Transition
            show={toolsOpen}
            enter="transistion ease-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transistion ease-in duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            >
            <div className='fixed sm:relative sm:flex sm:place-content-center sm:pt-10 top-0 min-h-screen bg-opacity-10 bg-gradient-to-br from-bito-white to-nft-glow z-40 rounded-lg '>
                <div className='cursor-pointer pt-6 pl-6 ' onClick={()=> closeTools()}>
                X close 
                </div>
                <div
                className="p-4">
                    {selectedChapter === 'spotlighting' 
                        ? <SpotLightingProtocol />
                        : <div>
                        <div>Thank you for visiting. We are activiely dissecting this episode to create simplified toolkits for you. Please check back in a few days and we should have it up.</div>
                        <div>In the mean time Watch the podcast directly below!</div>
                        <div className="flex place-content-center pt-10">
                            {selectedChapterData &&
                            <YoutubeViewer chapter={selectedChapterData.chapter} videoURL={selectedChapterURL}/>}
                        </div>
                        <div className='text-center'>
                            Also please checkout another protocol such as: 
                            <Link href="http://localhost:3000/theScience/spotLighting/protocol">
                                <div className="text-blue-500 hover:underline text-xl">Spotlighting</div>
                            </Link>
                        </div>
                        <div className="text-sm md:text-base text-purple-300 text-center mb-4 md:mb-8">
                            We're just getting started and always adding exciting new features. If you run into any issues, just reach out to us
                        </div>
                        <div className='place-content-center text-center pb-10'>
                            Please Signup to stay in the loop and get access to exclusive features: 
                            <Link href="http://localhost:3000/signup">
                                <div className="text-blue-500 hover:underline text-xl">SignUp</div>
                            </Link>
                        </div>
                    </div>
                    }
                </div>
            </div>
            </Transition>
            <Transition
            show={scienceOpen}
            enter="transistion ease-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transistion ease-in duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            >
            <div className='flex flex-col place-items-center text-center h-screen w-full bg-white z-40 '>
                <div className='cursor-pointer pl-10 pt-10' onClick={()=> closeScience()}>
                X close
                </div>
                <div
                className="h-full w-full">
                    {selectedChapter === 'spotlighting' ?
                        <div className=''>
                            <SpotLighting />
                        </div>
                        : <div>
                            <div>Thank you for visiting. We are activiely dissecting this episode to create simplified toolkits for you. Please check back in a few days and we should have it up.</div>
                            <div>In the mean time Watch the podcast directly below!</div>
                            <div className="flex place-content-center pt-10">
                                {selectedChapterData &&
                                <YoutubeViewer chapter={selectedChapterData.chapter} videoURL={selectedChapterURL}/>}
                            </div>
                            <div className='text-center'>
                                Also please checkout another protocol such as: 
                                <Link href="http://localhost:3000/theScience/spotLighting/protocol">
                                    <div className="text-blue-500 hover:underline text-xl">Spotlighting</div>
                                </Link>
                            </div>
                            <div className="text-sm md:text-base text-purple-300 text-center mb-4 md:mb-8">
                                We're just getting started and always adding exciting new features. If you run into any issues, just reach out to us
                            </div>
                            <div className='place-content-center text-center pb-10'>
                                Please Signup to stay in the loop and get access to exclusive features: 
                                <Link href="http://localhost:3000/signup">
                                    <div className="text-blue-500 hover:underline text-xl">SignUp</div>
                                </Link>
                            </div>
                        </div>
                    }                    
                </div>
            </div>
            </Transition>
            {catalogueVisible && !selectedId && !selectedChapter &&   
                <div className='sm:mt-20 text-sm lg:text-base rounded-xl max-w-sm sm:max-w-3xl mx-auto bg-gradient-to-br from-nft-orange to-nft-orange-light py-3 my-10'>
                    <div className='text-center  font-extrabold text-black'>
                        Browse:
                    </div>
                    <div className='m-2 flex-col font-extrabold place-content-center text-center'>
                        <div className='flex flex-row place-content-center'>
                            <div className={`p-2 px-4 rounded-xl m-2 ${selectedView === 'Researcher' ? 'bg-white text-black': 'bg-black text-white hover:bg-white hover:text-black cursor-pointer' } `} onClick={()=> triggerViewActivation('Researcher')}>
                                The Science
                            </div>
                            <div className={`p-2 px-4 rounded-xl m-2 ${selectedView === 'Outcomes' ? ' bg-white text-black': 'bg-black text-white hover:bg-white hover:text-black cursor-pointer' } `} onClick={()=> triggerViewActivation('Outcomes')}>
                                Specific Outcomes
                            </div>
                            {/*
                            <div className={`p-2 px-4 rounded-xl m-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer`} onClick={()=> setSelectedId('quickwins')}>
                                when you only have 1 min
                            </div>
                            
                            <div className={`p-2 px-4 rounded-xl m-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer`} onClick={()=> triggerViewActivation('Tools')}>
                                when you only have 15 mins
                            </div>
                            */}
                        </div>
                    </div>
                </div>
                }
                {
                    selectedView === 'Researcher' && !selectedChapter && 
                    <div className='grid grid-cols-1 gap-3'>
                        <div className='border-2 rounded-lg border-blue-500 grid grid-cols-1 sm:grid-cols-3 bg-white sm:max-h-64 overflow-hidden'>
                            <div key={'spotlighting'} className="rounded-lg col-span-1 h-64 overflow-hidden">
                                    <img src={`/images/spotLighting.png`} alt={'hubermanDopamineMindsetAndDrive'} className="w-96 -mt-12 sm:-mt-24 sm:-mb-24" />
                            </div>
                            <div className='bg-white col-span-2 my-auto'>
                                <div className="">
                                    <div className='text-center font-extrabold px-4 pt-6 sm:pt-2'>
                                    30 Seconds to Unwavering Focus: Spotlighting
                                    </div>
                                    <div className='p-6 sm:p-2 text-sm'>
                                    What do elite athletes and students in China have in common? They're using the power of 'Spotlighting' to improve focus and concentration. Want to try it for yourself? Head over to theyouuproject.com/spotlighting to access the tool for free.
                                    </div>
                                    <div className='flex place-content-center mb-2'>
                                        <div className='p-4 mx-2 bg-blue-100 text-black cursor-pointer hover:bg-blue-300 rounded-md' onClick={() => openScience('spotlighting')}>
                                            Learn the Science
                                        </div>
                                        <div className='p-4 mx-2 bg-blue-700 text-white font-extrabold cursor-pointer hover:bg-blue-900 rounded-md' onClick={() => openTools('spotlighting')}>
                                            View the Tools
                                        </div>
                                    </div>
                                </div>
                            </div>                  
                        </div>
                        <div className='border-2 rounded-lg border-blue-500 grid grid-cols-3 bg-black'>
                            <div key={'dopamineMindsetDrive'} className="rounded-lg col-span-1 my-auto">
                                    <img src={`/episode/dopamineMindsetDrive.jpg`} alt={'hubermanDopamineMindsetAndDrive'} className="" />
                            </div>
                            <div className='bg-white col-span-2'>
                                <div className='font-extrabold px-4 pt-2'>
                                HubermanLab #39 - Dopamine Mindset & Drive: Control your Dopamine for Motivation, Focus and Satisfaction
                                </div>
                                <div className='p-2 text-sm px-4'>
                                Are you tired of feeling unmotivated, unfocused and unsatisfied? Well, don't worry, we've got you covered! We've taken Dr. Andrew Huberman's advice and condensed eveything into easy to understand protocols that will have you feeling like a productivity powerhouse in no time!
                                </div>
                                <div className='flex place-content-center mb-2'>
                                    <div className='p-4 mx-2 bg-blue-100 text-black cursor-pointer hover:bg-blue-300 rounded-md' onClick={() => openScience('dopamineMindSet')}>
                                        Learn the Science
                                    </div>
                                    <div className='p-4 mx-2 bg-blue-700 text-white font-extrabold cursor-pointer hover:bg-blue-900 rounded-md' onClick={() => openTools('dopamineMindSet')}>
                                        View the Tools
                                    </div>
                                </div>
                            </div>                  
                        </div>
                    </div>
                }
                { selectedView === 'Outcomes' && !selectedChapter && 
                    !selectedId &&
                    <>
                        <div className="bg-onyx-black bg-opacity-30 rounded-xl text-white grid grid-cols-1 place-items-center">
                            <div className="p-5">
                                <div>Thank you for visiting TheYouuProject.</div> 
                                <div>We are activiely working on building out the protocols below.</div>
                                <div>They are not complete yet, however we wanted to leave them up here so you could see what is in store for the platform in the near future</div>
                                <div> Check out out first tool completed so far is SpotLighting:</div>
                            </div>                            
                            <div className=' w-96 text-black border-2 rounded-lg border-blue-500 grid grid-cols-1 bg-white overflow-hidden'>
                                <div key={'dopamineMindsetDrive'} className="rounded-lg col-span-1 overflow-hidden">
                                        <img src={`/images/spotLighting.png`} alt={'hubermanDopamineMindsetAndDrive'} className="w-96 -mt-12 sm:-mt-24 sm:-mb-24" />
                                </div>
                                <div className='bg-white col-span-2 my-auto'>
                                    <div className="">
                                        <div className='text-center font-extrabold px-4 pt-6 sm:pt-2'>
                                        30 Seconds to Unwavering Focus: Spotlighting
                                        </div>
                                        <div className='p-6 sm:p-2 text-sm'>
                                        What do elite athletes and students in China have in common? They're using the power of 'Spotlighting' to improve focus and concentration. Want to try it for yourself? Head over to theyouuproject.com/spotlighting to access the tool for free.
                                        </div>
                                        <div className='flex place-content-center mb-2'>
                                            <div className='p-4 mx-2 bg-blue-100 text-black cursor-pointer hover:bg-blue-300 rounded-md' onClick={() => openScience('spotlighting')}>
                                                Learn the Science
                                            </div>
                                            <div className='p-4 mx-2 bg-blue-700 text-white font-extrabold cursor-pointer hover:bg-blue-900 rounded-md' onClick={() => openTools('spotlighting')}>
                                                View the Tools
                                            </div>
                                        </div>
                                    </div>
                                </div>                  
                            </div>
                            <div>
                                <div className="pt-5 text-left">We will be releasing new tools at least every 2 days.</div>
                                <div className="text-sm md:text-base text-purple-300 mb-4 md:mb-8">
                                    We're just getting started and always adding exciting new features. 
                                    If you run into any issues, just reach out to us
                                </div>
                                <div className='place-content-center text-center pb-4'>
                                    Please Signup to stay in the loop, get notified on new releases, and join the movement towards health and well being!
                                    <Link href="http://localhost:3000/signup">
                                        <div className="text-blue-500 hover:underline text-xl">SignUp</div>
                                    </Link>
                                </div>
                                <div>
                                    Feel free to browse what is in store in the near future below!
                                </div>
                            </div>                            
                        </div>
                        <div className='text-center text-white py-4 font-extrabold text-xl'> Lets jump straight into it: </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-2 text-lg">    
                            <div className="text-black py-4 px-6 rounded-3xl border-none bg-gradient-to-r from-youu-light-green to-youu-dark-green hover:from-youu-sky-pink hover:to-youu-sky-blue hover:font-extrabold cursor-pointer" onClick={() => { setSelectedId('quickwins'); }}>
                            <div>
                                <div className='font-bold'>Speed Run</div>
                                <div>These protocols take less than 1 min and will have you feeling amazing!</div>
                            </div>
                            </div>
                            <div className="text-black py-4 px-6 rounded-3xl border-none bg-gradient-to-r from-youu-sky-blue to-youu-sky-pink hover:to-youu-deep-red hover:from-youu-light-pink hover:font-extrabold cursor-pointer" onClick={() => { setSelectedId('quickwins'); }}>
                            <div>
                                <div className='font-bold'>Quick Minutes</div>
                                <div>15 minues is all you need for lasting changes with these protocols</div>
                            </div>
                            </div>
                            <div className="text-black py-4 px-6 rounded-3xl border-none bg-gradient-to-r from-youu-deep-red to-youu-light-pink hover:from-youu-light-green hover:to-youu-dark-green hover:font-extrabold cursor-pointer" onClick={() => { setSelectedId('quickwins'); }}>
                            <div>
                                <div className='font-bold'>Life Goals</div>
                                <div>Lets make permanent Changes</div>
                            </div>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {featured.map((item, index) => (
                            <div>
                                <div key={index} className="rounded-lg shadow">
                                <img src={`/images/${item.img}`} alt={item.name} className="w-full h-auto mt-4 rounded-lg" />
                                </div>
                                <div className='p-2 text-white text-sm'>
                                <div className='font-bold'>{item.name}</div>
                                <div className='font-thin'>{item.desc}</div>
                                </div>
                            </div>
                            ))}
                        </div>

                        <div className='text-center text-white py-4 font-extrabold text-xl'> Start here if you have something specific you want to work on: </div>
                        <TagList
                            tags={['Suppliments and Stacks', 'Foods', 'Focus', 'Motivation', 'Energy', 'Mastery: Permanent Change']}
                            onTagClick={handleTagClick}
                        />            
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {filteredContent.map((item, index) => (
                                <div>
                                    <div key={index} className="rounded-lg shadow">
                                    <img src={`/images/${item.img}`} alt={item.name} className="w-full h-auto mt-4 rounded-lg" />
                                    </div>
                                    <div className='p-2 text-white'>
                                    <div className='font-bold'>{item.name}</div>
                                    <div className='font-thin'>{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                }
                {
                selectedId === 'quickwins' && !selectedChapter && 
                    <QuickWins  setSelectedId={setSelectedId}/>
                }      
                
            </div>        
    )
}

export default Catalogue