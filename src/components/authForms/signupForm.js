
const SignupForm = ({ errorMessage, onSubmit }) => {
    return(
        <div>
            <form onSubmit={onSubmit} className="grid place-items-center">
                <div className="flex border-white border-2 rounded-full pl-2 py-1 mt-3 max-w-lg">
                    <input className="flex-auto focus:outline-none bg-transparent pl-2" type="email" name="email" required placeholder="Email"/>
                    <button className="font-bold p-4 text-white w-32" type="submit">Sign Up/In</button>
                </div>
                {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
        </div>
    )
}

export default SignupForm;