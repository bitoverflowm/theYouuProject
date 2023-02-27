import { useState } from "react"
import { Transition } from '@headlessui/react';


import TagList from '@/components/taglist'
import QuickWins from '@/components/quickwins'
import YoutubeViewer from "@/components/videoPlayer/youtubeViewer";

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
        <div className="p-10">
            <Transition
            show={toolsOpen}
            enter="transistion ease-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transistion ease-in duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            >
            <div className='absolute h-screen w-full bg-white z-40'>
                <div className='cursor-pointer' onClick={()=> closeTools()}>
                close 
                </div>
                <div
                className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-lg overflow-y-auto">
                    {selectedChapter}
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
            <div className='absolute h-screen w-full bg-white z-40'>
                <div className='cursor-pointer' onClick={()=> closeScience()}>
                close
                </div>
                <div
                className="w-full max-w-md">
                    {selectedChapter}
                    <div>Watch the Huberman podcast directly below!</div>
                    {selectedChapterData &&
                        <YoutubeViewer chapter={selectedChapterData.chapter} videoURL={selectedChapterURL}/>}
                </div>
            </div>
            </Transition>
            {catalogueVisible && !selectedId &&    
                <div className='sm:mt-20 text-sm lg:text-base rounded-xl max-w-sm sm:max-w-3xl mx-auto bg-gradient-to-br from-nft-orange to-nft-orange-light py-3 my-10'>
                    <div className='text-center  font-extrabold text-black'>
                        Browse Tools By:
                    </div>
                    <div className='m-2 flex-col font-extrabold place-content-center text-center'>
                        <div className='grid grid-cols-2 sm:flex sm:flex-row place-content-center'>
                            <div className={`p-2 px-4 rounded-xl m-2 ${selectedView === 'Researcher' ? 'bg-white text-black': 'bg-black text-white hover:bg-white hover:text-black cursor-pointer' } `} onClick={()=> triggerViewActivation('Researcher')}>
                                The Science
                            </div>
                            <div className={`p-2 px-4 rounded-xl m-2 ${selectedView === 'Outcomes' ? ' bg-white text-black': 'bg-black text-white hover:bg-white hover:text-black cursor-pointer' } `} onClick={()=> triggerViewActivation('Outcomes')}>
                                Specific Outcomes
                            </div>
                            <div className={`p-2 px-4 rounded-xl m-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer`} onClick={()=> setSelectedId('quickwins')}>
                                when you only have 1 min
                            </div>
                            <div className={`p-2 px-4 rounded-xl m-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer`} onClick={()=> triggerViewActivation('Tools')}>
                                when you only have 15 mins
                            </div>
                        </div>
                    </div>
                </div>
                }
                {
                    selectedView === 'Researcher' &&
                    <div className='grid grid-cols-1'>
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
                { selectedView === 'Outcomes' &&
                    !selectedId &&
                    <>
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
                selectedId === 'quickwins' &&
                    <QuickWins  setSelectedId={setSelectedId}/>
                }      
                
            </div>        
    )
}

export default Catalogue