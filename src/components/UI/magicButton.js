
//create standard function based conponent called madgicButton

const MagicButton = ({submitHandler, label}) => {

//return a button with the text passed in as a prop

    return (
        <button className="border-gradient before:transition-animation relative inline-flex items-center rounded-lg border-2 border-solid border-transparent px-4 py-2 text-base font-medium text-white before:absolute before:-inset-4 before:z-[-1] before:rounded-lg before:bg-gradient-to-r before:from-dark before:via-secondary before:to-tertiary before:opacity-0 before:blur-sm hover:z-0 hover:before:opacity-75 hover:before:blur-xl focus:outline-none focus:ring-offset-white focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-75" onClick={() => submitHandler()}><span>{label}</span>  </button>
    )
}

//export the component
export default MagicButton

