
const SignupForm = ({ errorMessage, onSubmit }) => {
    return(
        <div>
            <form onSubmit={onSubmit} className="grid place-items-center">
                <div className="flex border-white border-2 rounded-full pl-2 mt-3 w-80 sm:w-96">
                    <input className="flex-auto focus:outline-none bg-transparent pl-2" type="email" name="email" required placeholder="Email"/>
                    <button className="text-center rounded-r-3xl border-2 bg-purple-700 text-xs sm:text-md font-bold p-2 text-white sm:w-24" type="submit">Sign Up/In</button>
                </div>
                {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
        </div>
    )
}

export default SignupForm;