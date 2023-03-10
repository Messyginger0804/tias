import React from 'react'
import googleLogo from '../assets/googleLogo.png'
import githubLogo from '../assets/githubLogo.png'
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from 'firebase/auth'
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser, deleteUser } from '../redux/tiasSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth(); const provider = new GoogleAuthProvider(auth);

    const handleGoogleAuth = (e) => {
        e.preventDefault();
        // console.log(auth)

        signInWithPopup(auth, provider).then((response) => {
            const user = response.user
            // console.log(user)
            dispatch(addUser({
                id: user.id,
                name: user.name,
                email: user.email,
                image: user.photoURL
            }));
            setTimeout(() => {
                navigate('/')
            }, 1500)
        }).catch((error) => {
            console.error(error)
        })

    };

    const handleSignOut = (e) => {
        signOut(auth).then(() => {
            toast.success('Logged Out!');
            dispatch(deleteUser());

            console.log('Logged Out!');
            console.log(auth);
        })
            .catch((error) => {
                console.error(error)
            })
    }
    return (
        <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
            <div className='w-full flex items-center justify-center gap-10'>
                <div onClick={handleGoogleAuth} className='text-base w-60 h-12 tracking-wide border-2 border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-700 cursor-pointer duration-300'>
                    <img className='w-8'
                        src={googleLogo} alt='google-logo' />
                    <span className='text-sm text-gray-900'>Sign in with Google</span>
                </div>
            </div>
            {/* <div className='w-full flex items-center justify-center gap-10'>
                <div className='text-base w-60 h-12 tracking-wide border-2 border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-700 cursor-pointer duration-300'>
                    <img className='w-8'
                        src={githubLogo} alt='github-logo' />
                    <span className='text-sm text-gray-900'>Sign in with Github</span>
                </div>
            </div> */}
            <button onClick={handleSignOut} className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'>Sign Out</button>
            <ToastContainer
                position='top-left'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
        </div>
    )
}

export default Login