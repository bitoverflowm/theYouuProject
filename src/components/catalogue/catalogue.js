import { useState } from "react"
import { Transition } from '@headlessui/react';


import TagList from '@/components/taglist'
import QuickWins from '@/components/quickwins'

const Catalogue = ({selectedView, setSelectedView}) => {
    const [featured, setFeatured] = useState([
        { name: 'The Hard Reset', img: 'burntOutEmoji.png', desc: 'Sometimes in life we just need a reset. We have all been there, life is out of control and we are just burnt out...'},
        { name: 'Increase Alertness and Attention', img: 'AlertAndAttentiveEmoji.png', desc: 'Stay attentive and alert for longer'},
        { name: 'Cramming Session', img: 'studyingEmoji.png', desc: 'For when we need that extra boost to Cram a little harder - whether you are a student, interviewing for a job, have an upcoming test or need to perform specifically hard... '},
      ])
    
    const [content, setContent] = useState([
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
    
    const [selectedTag, setSelectedTag] = useState(null)
    const [selectedId, setSelectedId] = useState(null)
    const [ toolsOpen, setToolsOpen ] = useState(false)
    const [ researchOpen, setResearchOpen ] = useState()
    const [ selectedChapter, setSelectedChapter ] = useState()

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


    return(
        <div>
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
                <div onClick={()=> closeTools()}>
                close
                </div>
                <div
                className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-lg overflow-y-auto">
                    {selectedChapter}
                </div>
            </div>
            </Transition> 
            <div className="mt-4 px-10 py-8 sm:py-16 bg-white rounded-lg shadow-xl sm:mx-0 sm:px-16 bg-clip-padding backgroup-filter bg-opacity-10 border border-none min-h-screen" style={{ minWidth: "90%" }}>
                <div className='text-white z-20 grid place-content-center'>
                    <div className='text-center text-xl font-extrabold'>
                    View Protocols by
                    </div>
                    <div className='flex m-2 font-extrabold'>
                    <div className={`p-2 border-2 rounded-xl m-2 ${selectedView === 'Researcher' ? 'bg-white text-black border-purple-500': 'border-white hover:bg-white hover:text-black hover:border-purple-500 cursor-pointer' } `} onClick={()=> setSelectedView('Researcher')}>
                        Researcher
                    </div>
                    <div className={`p-2 border-2 rounded-xl m-2 ${selectedView === 'Outcomes' ? 'bg-white text-black border-purple-500': 'border-white hover:bg-white hover:text-black hover:border-purple-500 cursor-pointer' } `} onClick={()=> setSelectedView('Outcomes')}>
                        Outcomes
                    </div>
                    <div className={`p-2 border-2 rounded-xl m-2 ${selectedView === 'Tools' ? 'bg-white text-black border-purple-500': 'border-white hover:bg-white hover:text-black hover:border-purple-500 cursor-pointer' } `} onClick={()=> setSelectedView('Tools')}>
                        Tools
                    </div>
                    </div>
                </div>
                {
                    selectedView === 'Researcher' &&
                    <div className='grid grid-cols-1'>
                    <div className='border-2 rounded-lg border-blue-500 grid grid-cols-3 bg-black'>
                        <div key={'dopamineMindsetDrive'} className="rounded-lg col-span-1 my-auto">
                                <img src={`/episode/dopamineMindsetDrive.jpg`} alt={'hubermanDopamineMindsetAndDrive'} className="" />
                        </div>
                        <div className='bg-white col-span-2'>
                            <div className='font-extrabold px-4 pt-2'>
                            Control Motivation, focus and satisfaction: #39 - Dopamine Mindset & Drive: Control your Dopamine for Motivation, Focus and Satisfaction
                            </div>
                            <div className='p-2 text-sm px-4'>
                            In this episode Dr. Huberman discusses the role of dopamine in motivation and drive. He suggests several tools that may help to manage dopamine levels and improve motivation. Dopamine is a neurotransmitter that plays a key role in the brain's reward and pleasure centers, and is involved in motivation and drive. He suggests that certain activities, such as setting goals, practicing gratitude, and exercising, can help to increase dopamine levels and improve motivation. Other tools that may help to manage dopamine levels and improve motivation include meditation, time management techniques, and using technology to track progress.
                            </div>
                            <div className='px-2 text-sm font-extrabold'>
                            @TheYouuProject we know its hard to internalize the science into your daily lives no matter how amazing the orator is. So we made your life easeir.
                            </div>
                            <div className='px-2 font-extrabold'>
                            We coded up the scientific tools and protocols into easy to follow gadgets for your every day life!
                            </div>
                            <div className='flex place-content-center mb-2'>
                            <div className='p-4 mx-2 bg-blue-100 text-black cursor-pointer hover:bg-blue-300 rounded-md'>
                                Check out the Science
                            </div>
                            <div className='p-4 mx-2 bg-blue-700 text-white font-extrabold cursor-pointer hover:bg-blue-900 rounded-md' onClick={() => openTools('dopamineMindSet')}>
                                Check out the tools 
                            </div>
                            </div>
                        </div>                  
                    </div>
                    </div>
                }
                { selectedView === 'Outcomes' &&
                    !selectedId &&
                    <>
                        <div className='text-center text-white py-4 font-extrabold text-xl'> Start here if you're pumped and just want to start: </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-2 text-lg">    
                            <div className="py-4 px-6 rounded-3xl border-none bg-gradient-to-r from-youu-light-green to-youu-dark-green hover:from-youu-sky-pink hover:to-youu-sky-blue hover:font-extrabold cursor-pointer" onClick={() => { setSelectedId('quickwins'); }}>
                            <div>
                                <div className='font-bold'>Quick Wins</div>
                                <div>Shart here if you only have 15 mins or less</div>
                            </div>
                            </div>
                            <div className="py-4 px-6 rounded-3xl border-none bg-gradient-to-r from-youu-sky-blue to-youu-sky-pink hover:to-youu-deep-red hover:from-youu-light-pink hover:font-extrabold cursor-pointer" onClick={() => { setSelectedId('quickwins'); }}>
                            <div>
                                <div className='font-bold'>Building Blocks</div>
                                <div>These take a little longer, but lead to more meaningful changes</div>
                            </div>
                            </div>
                            <div className="py-4 px-6 rounded-3xl border-none bg-gradient-to-r from-youu-deep-red to-youu-light-pink hover:from-youu-light-green hover:to-youu-dark-green hover:font-extrabold cursor-pointer" onClick={() => { setSelectedId('quickwins'); }}>
                            <div>
                                <div className='font-bold'>Life Goals</div>
                                <div>Lets make these changes permanent</div>
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
        </div>
    )
}

export default Catalogue