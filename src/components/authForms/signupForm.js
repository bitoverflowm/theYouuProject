
const SignupForm = ({ errorMessage, onSubmit }) => {
    return(
        <div>
            <form onSubmit={onSubmit} className="grid place-items-center">
                <div className="flex border-white border-4 rounded-full pl-2 py-1 mt-3 max-w-md">
                    <input className="flex-auto focus:outline-none bg-transparent pl-2" type="email" name="email" required placeholder="Email"/>
                    <div className="flex-none submit text-white rounded-full">
                        <button className="font-bold p-4" type="submit">Sign Up/Log In</button>
                    </div>
                </div>
                {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
        </div>
    )
}

export default SignupForm;