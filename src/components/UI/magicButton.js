
//create standard function based conponent called madgicButton

const MagicButton = ({submitHandler, arg, label, color}) => {

//return a button with the text passed in as a prop

    return (
        <div className="">
        {color === 'green' &&
            <button className="text-xs sm:text-base border-gradient-green before:transition-animation relative inline-flex items-center rounded-lg border-2 border-solid border-transparent px-4 py-2 font-medium text-black before:absolute before:-inset-4 before:z-[-1] before:rounded-lg before:bg-gradient-to-r before:from-youu-dark-green before:via-youu-light-green before:to-youu-sky-pink before:opacity-0 before:blur-sm hover:z-0 hover:before:opacity-75 hover:before:blur-xl focus:outline-none focus:ring-offset-white focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-75" onClick={() => arg ? submitHandler(arg) : submitHandler()}><span>{label}</span>  </button>}

        {color === 'pink' &&
            <button className="text-xs sm:text-base border-gradient-green before:transition-animation relative inline-flex items-center rounded-lg border-2 border-solid border-transparent px-4 py-2 font-medium text-black before:absolute before:-inset-4 before:z-[-1] before:rounded-lg before:bg-gradient-to-r before:from-youu-light-pink before:via-youu-deep-red before:to-youu-sky-pink before:opacity-0 before:blur-sm hover:z-0 hover:before:opacity-75 hover:before:blur-xl focus:outline-none focus:ring-offset-white focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-75" onClick={() => arg ? submitHandler(arg) : submitHandler()}><span>{label}</span>  </button>}

        {!color &&
            <button className="text-xs sm:text-base border-gradient before:transition-animation relative inline-flex items-center rounded-lg border-2 border-solid border-transparent px-4 py-2 font-medium text-white before:absolute before:-inset-4 before:z-[-1] before:rounded-lg before:bg-gradient-to-r before:from-dark before:via-secondary before:to-tertiary before:opacity-0 before:blur-sm hover:z-0 hover:before:opacity-75 hover:before:blur-xl focus:outline-none focus:ring-offset-white focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-75" onClick={() => arg ? submitHandler(arg) : submitHandler()}><span>{label}</span>  </button>}
        </div>
    )
}

//export the component
export default MagicButton

