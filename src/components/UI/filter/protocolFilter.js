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
                <div className={getFilterButtonClass('GutHealth')}
                    onClick={()=> triggerBrowseFilter('GutHealth')}>
                👅 Gut Health
                </div>
                <div className={getFilterButtonClass('Anxiety')}
                    onClick={()=> triggerBrowseFilter('Anxiety')}>
                🧛 Anxiety
                </div>
                <div className={getFilterButtonClass('PreventBurnout')}
                    onClick={()=> triggerBrowseFilter('PreventBurnout')}>
                🧟 Prevent Burnout
                </div>
                <div className={getFilterButtonClass('HormonesForMen')}
                    onClick={()=> triggerBrowseFilter('HormonesForMen')}>
                🦍 Hormones for Men
                </div>
                <div className={getFilterButtonClass('HormonesForWomen')}
                    onClick={()=> triggerBrowseFilter('HormonesForWomen')}>
                🌸 Hormones for Women
                </div>
                <div className={getFilterButtonClass('HairLoss')}
                    onClick={()=> triggerBrowseFilter('HairLoss')}>
                💈 Hair loss
                </div>
                <div className={getFilterButtonClass('StudyingForExams')}
                    onClick={()=> triggerBrowseFilter('StudyingForExams')}>
                🎓 Studying for Exams
                </div>
                <div className={getFilterButtonClass('CombatADHD')}
                    onClick={()=> triggerBrowseFilter('CombatADHD')}>
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