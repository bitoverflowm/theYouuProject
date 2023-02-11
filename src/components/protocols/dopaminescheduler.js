

const DopamineScheduler = ({ setSelectedId }) => {
    /*

How to:
only sometimes celebrate wins
pick dopaminergic activities you often pursue using the Tool 3: Dopamine tracker
Code will randomize the layering of activities and celebrations, just do what the app says 
App will calculate when you are probably going to be peaking
This is called Intermittent Reward Timing (RIRT)

Effects:
triggers intermittent release of dopamine
combats dpamine reward prediction error

Meta Categories:
Increase Motivation
Enhance Task Engagement
Promote Learning and Memory
Simulate neuroplasticity
Improve performance on the tasks that matter
    
    */
    

  return (
    <div className="place-content-center flex flex-col">
      <div onClick={() => setSelectedId(null)}>Go back</div>
      <div>Quick Wins</div>
    </div>
  )
}

export default DopamineScheduler;