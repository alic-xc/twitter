import React from 'react'
import BaseLayout from './components/BaseLayout';
import { Grid } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import ClearIcon from '@mui/icons-material/Clear';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

const LoginScreen = () => {
    const navigate = useNavigate();
  return (
    <BaseLayout>
        <Grid container className='w-full min-h-[95vh]'>
            <Grid item xs={12} md={5} lg={7} className="hidden md:block relative ">
                <div className="absolute w-full h-full flex justify-center place-items-center">
                <TwitterIcon sx={{ fontSize: 300 }} className='text-white'  />
                </div>
                
                <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" className="w-full h-[100%]" alt="twitter" />
            </Grid>
            <Grid item xs={12} md={7} lg={5} className="py-20 px-10">
                <TwitterIcon sx={{ fontSize: 60 }} className='dark:text-white text-[#1d9bf0] text-[50px] mb-10'  />
                <h2 className="text-[64px] dark:text-white font-bold mb-8">Happening now</h2>
                <p className="text-[32px] dark:text-white font-bold mb-5">Join Twitter today.</p>
                <div className="w-[300px]">
                <div className="w-full">
                    <button className="p-2 px-10 w-full flex justify-center place-items-center text-center rounded-full dark:bg-white">
                        <GoogleIcon /> <span className="text-[14px] ml-1 font-semibold">Sign up with Google</span>
                    </button>
                    <button className="p-2 px-[10] w-full flex justify-center place-items-center mt-3 text-center rounded-full dark:bg-white">
                        <AppleIcon/><span className="text-[14px] ml-1 font-bold">Sign up with Apple</span>
                    </button>
                </div>
                <div className="relative py-2 w-full">
                    <span className="absolute right-1/2 top-[7px] dark:bg-white  block  rounded-full w-[20px] h-[20px] leading-4 text-[14px] text-center">or</span>
                    <hr className="my-2 border"/>
                    <button className='block p-2 w-full text-[15px] px-2 font-semibold my-5 text-center rounded-full bg-[#1d9bf0] text-white'>Sign up with a phone number or em..</button>
                    <span className="text-[12px] block dark:text-[#71767b]">By signing up, you agree to the <button className="text-[#1d9bf0]">Terms of Service</button> and 
                    <button className="text-[#1d9bf0]">Privacy Policy</button>, including <button className="text-[#1d9bf0]">Cookie Use.</button></span>
                </div>
                <div className="mt-10 w-full">
                    <span className="text-[20px] font-semibold dark:text-white">Already have an account?</span>
                    <button onClick={ () => navigate('/i/flow/login')} className="block mt-5 w-full border-[#1d9bf0] p-2 text-[14px] px-8 font-semibold text-center rounded-full border text-[#1d9bf0]">Sign in</button>
                </div>
                </div>
            </Grid>
        </Grid>
            <Grid item xs={12} className="hidden relative sm:block xs:bg-[#1d9bf0] overflow-hidden xs:block h-[50vh]">
                <div className="absolute w-full h-full flex justify-center place-items-center">
                    <TwitterIcon sx={{ fontSize: 200 }} className='text-white'  />
                </div>
                <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" className="w-full hidden sm:block" alt="twitter" />
            </Grid>
        
        <Grid item xs={12} md={12} className="min-h-[5vh]" >
            <nav className='flex flex-wrap justify-center place-items-center mx-10 mt-3'>
                <button className="dark:text-[#71767b] text-[13px] mr-3">About</button>
                <button className="dark:text-[#71767b] text-[13px] mr-3">Help Centre</button>
                <button className="dark:text-[#71767b] text-[13px] mr-3">Terms of Service</button>
                <button className="dark:text-[#71767b] text-[13px] mr-3">Privacy Policy</button>
                <button className="dark:text-[#71767b] text-[13px] mr-3">Cookies Policy</button>
                <button className="dark:text-[#71767b] text-[13px] mr-3">Accessibility</button>
                <button className="dark:text-[#71767b] text-[13px] mr-3">Ads info</button>
                <button className="dark:text-[#71767b] text-[13px] mr-3">Blog</button>
                <button className="dark:text-[#71767b] text-[13px] mr-3">Status</button>
                <button className="dark:text-[#71767b] text-[13px] mr-3">Careers</button>
                <button className="dark:text-[#71767b] text-[13px] mr-3">Brand Resources</button>
                <button className="dark:text-[#71767b] text-[13px] mr-3">Advertising</button>
                <button className="dark:text-[#71767b] text-[13px] mr-3">Marketing</button>
                <button className="dark:text-[#71767b] text-[13px] mr-3">Twitter for business</button>
                <button className="dark:text-[#71767b] text-[13px] mr-3">Developer</button>
                <button className="dark:text-[#71767b] text-[13px] mr-3">Directory</button>
                <button className="dark:text-[#71767b] text-[13px] mr-3">settings</button>
                <button className="dark:text-[#71767b] text-[13px] mr-3">2022 Twitter, inc</button>
            </nav>
        </Grid>  
        <Outlet />
    </BaseLayout>
  )

  
}

export const LoginForm = () => {
    const [displayLoginForm, setDisplayLoginForm] = React.useState(true)
    const navigate = useNavigate()
    return (
        <>
            <Dialog 
                aria-labelledby="Login"
                aria-describedby="This is a login form"
                open={displayLoginForm} 
                fullWidth={true}
                maxWidth="sm"
                onClose={ () => {setDisplayLoginForm(false); navigate('/') } }>
                <DialogTitle className='dark:bg-black flex  '>
                    <ClearIcon 
                        className="w-20 h-20 mr-2  rounded-full transition duration-700 ease-in-out hover:dark:bg-[#333333] dark:text-white" />
                    <div className="flex-1 flex justify-center">
                        <TwitterIcon sx={{fontSize: 35}} className="w-20 h-20 mr-2 dark:text-[#ccc]" />
                    </div>
                </DialogTitle>
                <DialogContent className='dark:bg-black '>
                <div className="flex flex-col mx-auto w-[300px] pb-10 pt-5">
                    <h2 className='dark:text-white text-[32px] font-bold mb-10'>Sign in Twitter</h2>
                    <div className="w-full">

                        <button className="p-2 px-10 w-full flex justify-center place-items-center text-center rounded-full dark:bg-white">
                            <GoogleIcon /> <span className="text-[14px] ml-1 font-semibold">Sign up with Google</span>
                        </button>
                        <button className="p-2 px-[10] w-full flex justify-center place-items-center mt-3 text-center rounded-full dark:bg-white">
                            <AppleIcon/><span className="text-[14px] ml-1 font-bold">Sign up with Apple</span>
                        </button>
                    </div>
                    <div className="relative py-2 w-full">
                        <span className="absolute right-1/2 top-[7px] dark:bg-white  block  rounded-full w-[20px] h-[20px] leading-4 text-[14px] text-center">or</span>
                        <hr className="my-2 border"/>
                        <div className='relative  mt-[20px]' id="animated-input">
                            <input type="text" className='w-full rounded-[5px] text-[#ddd] border-[#aaa] border bg-transparent outline-none p-4' />
                            <span className='absolute left-0 p-4 pointer-events-none bg-transparent text-[#aaa]'>Phone, email address, or username</span>

                        </div>
                    </div>
                    <div className=" w-full">
                        <button className='block p-2 w-full text-[15px] px-2 font-semibold my-5 text-center rounded-full dark:bg-white dark:text-black bg-[#1d9bf0] text-white'>Next</button>
                        <button onClick={ () => navigate('/i/flow/signup')} className="block mt-5 w-full border-[#1d9bf0] dark:border-[#aaa] p-2 text-[14px] px-8 font-semibold text-center rounded-full border dark:text-white text-[#1d9bf0]">Sign in</button>
                        <p className='mt-10 dark:text-[#ddd] text-[14px] font-semibold'> Don't have an account? <button className='text-[#1d9bf0]'>Sign up</button> </p>
                    </div>
                </div> 
                </DialogContent>
            </Dialog> 
           
        </>

    )
  }

export default LoginScreen;