import React from "react";



const ProtocolFilter = ({getFilterButtonClass, triggerBrowseFilter}) => {
    return(
        <div>
            <div>
                Pick something you would like to improve:
            </div>
            <div className='flex flex-wrap gap-1 place-content-center py-1 sm:py-5'>
                <div className={getFilterButtonClass('Focus')}
                    onClick={()=> triggerBrowseFilter('Focus')}>
                🧠 Focus
                </div>
                <div className={getFilterButtonClass('Motivation')}
                    onClick={()=> triggerBrowseFilter('Motivation')}>
                🔥 Motivation
                </div>
                <div className={getFilterButtonClass('Strength')}
                    onClick={()=> triggerBrowseFilter('Strength')}>
                🏋🏿 Strength
                </div>
                <div className={getFilterButtonClass('Gut Health')}
                    onClick={()=> triggerBrowseFilter('Gut Health')}>
                👅 Gut Health
                </div>
                <div className={getFilterButtonClass('Anxiety')}
                    onClick={()=> triggerBrowseFilter('Anxiety')}>
                🧛 Anxiety
                </div>
                <div className={getFilterButtonClass('Prevent Burnout')}
                    onClick={()=> triggerBrowseFilter('Prevent Burnout')}>
                🧟 Prevent Burnout
                </div>
                <div className={getFilterButtonClass('Hormones For Men')}
                    onClick={()=> triggerBrowseFilter('Hormones For Men')}>
                🦍 Hormones for Men
                </div>
                <div className={getFilterButtonClass('Hormones For Women')}
                    onClick={()=> triggerBrowseFilter('Hormones For Women')}>
                🌸 Hormones for Women
                </div>
                <div className={getFilterButtonClass('Hair Loss')}
                    onClick={()=> triggerBrowseFilter('Hair Loss')}>
                💈 Hair loss
                </div>
                <div className={getFilterButtonClass('Studying For Exams')}
                    onClick={()=> triggerBrowseFilter('Studying For Exams')}>
                🎓 Studying for Exams
                </div>
                <div className={getFilterButtonClass('Combat ADHD')}
                    onClick={()=> triggerBrowseFilter('Combat ADHD')}>
                🤹🏾 Combat ADHD
                </div>
                <div className={getFilterButtonClass('All')}
                    onClick={()=> triggerBrowseFilter('All')}>
                👀 Browse Everything
                </div>
            </div>
        </div>
    )

}

export default ProtocolFilter