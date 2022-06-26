import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import ClearIcon from '@mui/icons-material/Clear';
import AppleIcon from '@mui/icons-material/Apple';
import { FormikWizard } from 'formik-wizard-form';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import * as Yup from 'yup';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const RegistrationForm = () => {
    const [displayRegistrationForm, setDisplayRegistrationForm] = React.useState(true)
   
    const navigate = useNavigate()
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const closeModal = () => {
        setDisplayRegistrationForm(false); 
        navigate('/') 
    }

    return (
        <Dialog 
            aria-labelledby="Registration"
            aria-describedby="This is a registration form"
            open={displayRegistrationForm} 
            fullWidth={true}
            maxWidth="sm"
            fullScreen={fullScreen}
            className="rounded-[10px]"
            onClose={ () => closeModal() }>
        <FormikWizard
            initialValues={{
            name: "",
            phone: "",
            email: "",
            month: "",
            day: "",
            year: "",
            verification: "",
            verification_type: "email",
            accept: ""
            
            }}
            onSubmit={(values) => {

            }}
            validateOnNext
            activeStepIndex={0}
            steps={[
            {
                component: FirstForm,
                validationSchema: Yup.object().shape({
                    name: Yup.string().required("Your name is required"),
                    email: Yup.string().email("Please enter a valid email address"),
                    phone: Yup.string().min(9, "Please enter a valid phone number").max(12, "please, phone number must be 12 digits at most"),
                    day: Yup.number().required("Day is required"),
                    month: Yup.string().required("Month is required"),
                    year: Yup.number().required("Year is required"),
                })
            },
            {
                component: SecondForm,
                validationSchema: Yup.object().shape({
                accept: Yup.boolean()
                })
            },
            {
                component: ThirdForm,
                validationSchema: Yup.object().shape({
                
                })
            },
            {
                component: FourthForm,
                validationSchema: Yup.object().shape({
                verification_code: Yup.number()
                })
            }
            ]}
      >
        {({
          currentStepIndex,
          renderComponent,
          handlePrev,
          handleNext,
          isNextDisabled,
          isPrevDisabled
        }) => {
            return (
                <>
                    <DialogTitle className='dark:bg-black flex place-items-center'>
                        { isPrevDisabled && (
                        <ClearIcon 
                            onClick = {closeModal}
                            className="w-20 h-20 mr-2  rounded-full transition duration-700 ease-in-out hover:dark:bg-[#333333] dark:text-white" />) }
                        {!isPrevDisabled && (
                            <KeyboardBackspaceIcon 
                                onClick = {handlePrev}
                            className="w-20 h-20 mr-2  rounded-full transition duration-700 ease-in-out hover:dark:bg-[#333333] dark:text-white" />
                        )}
                        <h1 className="dark:text-white ml-5  font-bold text-[20px]">Step {currentStepIndex + 1} of 5</h1>
                    </DialogTitle>
                    <DialogContent className='dark:bg-black '>
                    <div className='flex flex-col justify-between content-between mx-auto w-[450px] min-h-[550px]'>
                            {renderComponent()}
                        <div className=" w-full">
                            <button disabled={isNextDisabled} onClick = { () => handleNext() } className='block disabled:bg-gray-500 p-3 w-full text-[16px] px-2 font-semibold mt-5 mb-2 text-center rounded-full dark:bg-white dark:text-black bg-[#1d9bf0] text-white'>Next</button>
                        </div>
                    </div>
                    
                    
                    </DialogContent>
                    </>
                
            )
             
           
        }}
        </FormikWizard>
        </Dialog>

    )
  }

  const FirstForm = ({ errors, values, handleChange }) => {
    const [emailInput, setEmailInput] = React.useState(true)
    
    return (
        <div className='flex flex-col w-full px-3'>
            <h1 className='dark:text-white text-[34px] font-bold mb-6'>Create your account</h1>
                <div className=''>
                    <div className='relative w-full animated-input'>
                        <Field type="text" name="name" value={values.name} onChange={handleChange} className={`w-full rounded-[5px] text-[#ddd] ${errors.name ? "border-[red]":''} border-[#aaa] border bg-transparent outline-none p-4`} required/>
                        <span className='absolute w-full left-0 p-4 pointer-events-none bg-transparent text-[#aaa]'>
                            <div className='w-full flex justify-between'>
                                <span className={`${errors.name ? "text-[red]":''}`}>Name</span>
                                <span className='text-[#ddd]'>{values.name.length}/50</span>
                            </div>
                        </span>
                    </div>
                    <ErrorMessage name="name" component="span" className='text-[red] text-[13px] pl-5'/>
                </div>
                { emailInput && (
                    <div className=''>
                        <div className='relative w-full mt-[20px] animated-input'>
                            <Field type="email" name="email" value={values.emmail} onChange={handleChange} className={`w-full rounded-[5px] ${errors.email ? "border-[red]":''} text-[#ddd] border-[#aaa] border bg-transparent outline-none p-4`} required/>
                            <span className='absolute left-0 p-4 pointer-events-none bg-transparent text-[#aaa]'>
                                <span className={`${errors.email ? "text-[red]":''}`}>Email</span>
                            </span>
                        </div>
                        <ErrorMessage name="email" component="span" className='text-[red] text-[13px] pl-5'/>
                    </div>
                ) }
                { !emailInput && (
                    <div className=''>
                        <div className='relative w-full mt-[20px] animated-input'>
                            <Field type="number" name="phone" value={values.phone} onChange={handleChange} className={`w-full rounded-[5px] text-[#ddd] ${errors.phone ? "border-[red]":''} border-[#aaa] border bg-transparent outline-none p-4`} required/>
                            <span className='absolute left-0 p-4 pointer-events-none bg-transparent text-[#aaa]'>
                                <span className={`${errors.phone ? "text-[red]":''}`}>Phone</span>
                            </span>
                        </div>
                        <ErrorMessage name="phone" component="span" className='text-[red] text-[13px] pl-5'/>

                    </div>
                ) }
                
                <div className='mt-2 mb-4 text-right'>
                    <button 
                        onClick={ () => {
                            setEmailInput( prevState => !prevState )
                            values.verification_type = emailInput ? "email":"phone"

                        } 
                            } className='dark:text-[#1d9bf0] text-[14px] hover:underline '>Use {emailInput ? "email": "phone"} instead</button>
                </div>
            <div>
            <div className=''>
                <span className='dark:text-white font-bold text-[14px]'>Date of birth</span>
                <p className='dark:text-[#aaa] text-[14px] leading-4  text-justify mt-3'>
                    This will not be shown publicly. Confirm your own age, 
                    even if this account is for a business, a pet, or something else.
                </p>
                <div className='flex '>
                    <div className=' flex-1 relative animated-select mr-3'>
                        <Field as="select" name="month" value={values.month} onChange={handleChange} className='w-full mt-6 dark:text-white bg-transparent px-5 outline-none border pt-6 pb-2 border-[#aaa] rounded-[5px]' required>
                            <option value=""></option>
                            <option value="January">January</option>
                        </Field>
                        <span className='dark:text-[#aaa] text-[14px] absolute left-0 py-7 px-2 pointer-events-none bg-transparent'>Month</span>
                    </div>
                    <div className='relative animated-select mr-3'>
                        <Field as="select" name="day" value={values.day} onChange={handleChange} className='mt-6 dark:text-white bg-transparent px-5 outline-none border pt-6 pb-2 border-[#aaa] rounded-[5px]' required>
                            <option value=""></option>
                            <option value="01">01</option>
                        </Field>
                        <span className='dark:text-[#aaa] text-[14px] absolute left-0 py-7 px-2 pointer-events-none bg-transparent'>Day</span>
                    </div>
                    <div className='relative animated-select '>
                        <Field as="select" name="year" value={values.year} onChange={handleChange} className='mt-6 dark:text-white bg-transparent px-5 outline-none border pt-6 pb-2 border-[#aaa] rounded-[5px]' required>
                            <option value=""></option>
                            <option value="1996">1996</option>
                        </Field>
                        <span className='dark:text-[#aaa] text-[14px] absolute left-0 py-7 px-2 pointer-events-none bg-transparent'>Year</span>
                    </div>
                        
                </div>
            </div>    

        </div>
    </div>
    );
  }


  const SecondForm = () => {
    return (
        <div className='flex flex-col justify-start content-between mx-auto w-[450px] min-h-[550px]'>
            <h1 className='dark:text-white text-[28px] font-bold mb-10 mt-6'>Customise your experience</h1>
            <h3 className='dark:text-white text-[20px] font-bold leading-6 mb-5'>Track where you see Twitter content across the web</h3>
            <div className='flex dark:text-white'>
                <span className='text-justify text-[14px] leading-5 font-semibold mr-10'>
                    Twitter uses this data to personalise your experience.
                        This web browsing history will never be stored with your name, email, or phone number.
                </span>
                    <Checkbox name='accept' className='mt-5' sx={{
                        color: 'white',
                        '&.Mui-checked': {
                        color: '#1d9bf0',
                        },
                    }}/>
            </div>
            <p className='dark:text-[#aaa] text-[13px] text-justify font-semibold mt-10'>
                By signing up, you agree to our <button className='text-[#1d9bf0]'>Terms</button>, <button className='text-[#1d9bf0]'>Privacy Policy</button> and <button className='text-[#1d9bf0]'>Cookie Use</button>. 
                Twitter may use your contact information, including your email address 
                and phone number for purposes outlined in our Privacy Policy. <button className='text-[#1d9bf0]'>Learn more</button>
            </p>
        </div>
    );
  }

  const ThirdForm = () => {
    return (
            <div>
                <h1 className='dark:text-white text-[34px] font-bold my-5'>Create your account</h1>

                <div className='text-[#71767b] bg-[#202327] p-1 px-4 rounded-[5px] mb-5'>
                    <span className='text-[12px]'>Name</span>
                    <p className='text-[16px] text-white font-semibold'>Olamilekan Alade</p>
                </div>
                <div className='text-[#71767b] bg-[#202327] p-1 px-4 rounded-[5px] mb-5'>
                    <span className='text-[12px]'>Email</span>
                    <p className='text-[16px] text-white font-semibold'>user@gmail.com</p>
                </div>
                <div className='text-[#71767b] bg-[#202327] p-1 px-4 rounded-[5px] mb-5'>
                    <span className='text-[12px]'>Birth Date</span>
                    <p className='text-[16px] text-white font-semibold'>2 Mar 2022</p>
                </div>
                <div>
                    <p className='text-[12px] text-[#aaa] mt-20'>
                        By signing up, you agree to the <button className='text-[#1d9bf0]'>Terms of Service</button> and <button className='text-[#1d9bf0]'>Privacy Policy</button>, 
                        including <button className='text-[#1d9bf0]'>Cookie Use</button>. Twitter may use your contact information, including your email address and phone number
                         for purposes outlined in our Privacy Policy, like keeping your account secure and personalising our services, 
                         including ads.<button className='text-[#1d9bf0]'>Learn more.</button> 
                         Others will be able to find you by email or phone number, when provided, unless you choose otherwise <button className='text-[#1d9bf0]'>here.</button>
                    </p>
                </div>
            </div>
    );
  }

  const FourthForm = ({errors, values, handleChange}) => {
    console.log(values)
    return (
             <div className='flex flex-col w-full px-3'>
                <h1 className='dark:text-white text-[30px] font-bold mb-2'>We sent you a code</h1>
                <p className='dark:text-[#aaa] text-[14px] mb-8'>Enter it below to verify</p>
                <div className=''>
                    <div className='relative w-full animated-input'>
                        <Field type="text" name="verification" value={values.verification} onChange={handleChange} className={`w-full rounded-[5px] text-[#ddd] ${errors.verification ? "border-[red]":''} border-[#aaa] border bg-transparent outline-none p-4`} required/>
                        <span className='absolute w-full left-0 p-4 pointer-events-none bg-transparent text-[#aaa]'>
                            <div className='w-full flex justify-between'>
                                <span className={`${errors.verification ? "text-[red]":''}`}>Verification Code</span>
                            </div>
                        </span>
                    </div>
                    <div className='mb-4 text-left'>
                        <button className='dark:text-[#1d9bf0] text-[12px] hover:underline pl-5'>Didn't receive an email?</button>
                    </div>
                    <ErrorMessage name="name" component="span" className='text-[red] text-[13px] pl-5'/>
                </div>
            </div>
    );
  }


export default RegistrationForm;