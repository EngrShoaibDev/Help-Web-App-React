import { useState } from 'react';
import { Link } from 'react-router-dom';
import LandingIntro from './LandingIntro';
import ErrorText from '../../components/Typography/ErrorText';
import darkLogo from '../../assets/Logo-dark.png';
import {  FaEye, FaEyeSlash } from 'react-icons/fa';
import {  FaArrowLeft  } from 'react-icons/fa6';
import { Line } from 'react-chartjs-2';

function Register() {
    const INITIAL_LOGIN_OBJ = {
        password: '',
        emailId: '',
        confirm: ''
    };

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (loginObj.emailId.trim() === '') return setErrorMessage('Email Id is required! (use any value)');
        if (loginObj.password.trim() === '') return setErrorMessage('Password is required! (use any value)');
        if (loginObj.confirm.trim() === '') return setErrorMessage('Confirm password is required! (use any value)');
        if (loginObj.password !== loginObj.confirm) return setErrorMessage('Passwords do not match!');
        else {
            setLoading(true);
            // Call API to check user credentials and save token in localstorage
            localStorage.setItem('token', 'DumyTokenHere');
            setLoading(false);
            window.location.href = '/app/welcome';
        }
    };

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage('');
        setLoginObj({ ...loginObj, [updateType]: value });
    };

    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleToggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
         <Link to="/" className="absolute top-4 left-6 inline-block bg-white rounded-[100%] p-3"><FaArrowLeft className='text-[#e9677b]'></FaArrowLeft></Link>
            <div className="card mx-auto w-full max-w-[500px]">
                <div className="py-24 px-10 flex justify-center flex-col items-center">
                    <img className="w-[250px] h-auto mb-5" src={darkLogo} alt="Helpy Logo" />
                    <form onSubmit={(e) => submitForm(e)} className="w-[100%]">
                        <div className="mb-4">
                            <div className="relative mt-4">
                                <input
                                    type="email"
                                    defaultValue={loginObj.emailId}
                                    placeholder="Enter your email"
                                    className="input  w-full rounded-[16px]"
                                    onChange={(e) => updateFormValue({ updateType: 'emailId', value: e.target.value })}
                                />
                            </div>

                            <div className="relative mt-4">
                                <input
                                    type={isPasswordVisible ? 'text' : 'password'}
                                    defaultValue={loginObj.password}
                                    placeholder="Enter your password"
                                    className="input  w-full pr-10 rounded-[16px]"
                                    onChange={(e) => updateFormValue({ updateType: 'password', value: e.target.value })}
                                />
                                <span
                                    className="absolute right-3 top-4 cursor-pointer text-[#b3b3b3]"
                                    onClick={handleTogglePasswordVisibility}
                                >
                                    {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>

                            <div className="relative mt-4">
                                <input
                                    type={isConfirmPasswordVisible ? 'text' : 'password'}
                                    defaultValue={loginObj.confirm}
                                    placeholder="Confirm your password"
                                    className="input  w-full pr-10  rounded-[16px]"
                                    onChange={(e) => updateFormValue({ updateType: 'confirm', value: e.target.value })}
                                />
                                <span
                                    className="absolute right-3 top-4 cursor-pointer text-[#b3b3b3]"
                                    onClick={handleToggleConfirmPasswordVisibility}
                                >
                                    {isConfirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                        </div>
                        <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                        <button
                            type="submit"
                            className={'btn mt-2 w-full rounded-[30px] hover:bg-[#f86a82] text-white bg-[#e9677b]' + (loading ? ' loading' : '')}
                        >
                            submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
