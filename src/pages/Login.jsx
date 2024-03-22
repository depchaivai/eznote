import PropTypes from 'prop-types';

const Login = ({signIn}) => {
    const label = signIn ? 'Sign in' : 'Sign up';
    const renderButton = signIn 
        ? <button className='px-3 py-2 min-w-[50px] rounded-md bg-red-400 text-white mx-2'>Sign in</button> 
        : <button className='px-3 py-2 min-w-[50px] rounded-md bg-white border mx-2'>Sign up</button>;

    const renderBottomLink = signIn 
        ? <a href="/restore" className='italic text-blue-400'>forget password</a>
        : <a href="/signin" className='italic text-blue-400'>Back to login</a> ;
    return (
        <div className='w-full min-w-screen h-full min-h-screen flex justify-center items-center' style={{ backgroundImage: "url('/images/loginbg.png')", backgroundSize: "cover" }}>
            <div className='px-8 py-6 w-full max-w-[350px] bg-white'>
                <h3 className='mb-2 text-xl'>{label}</h3>
                <input type="text" className='ring-1 ring-black rounded-sm px-2 py-1 w-full my-3' placeholder='email'/>
                <input type="text" className='ring-1 ring-black rounded-sm px-2 py-1 w-full my-3' placeholder='password'/>
                <div className='w-full flex justify-end'>
                    {renderBottomLink}
                </div>
                <div className='flex justify-center items-center w-full mt-4'>
                    {renderButton}
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {
    signIn: PropTypes.bool.isRequired
};

export default Login