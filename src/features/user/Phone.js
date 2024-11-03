import { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'; // Import PhoneInput
import 'react-phone-input-2/lib/style.css'; // Import the styles for PhoneInput
import LandingIntro from './LandingIntro';
import ErrorText from '../../components/Typography/ErrorText';
import darkLogo from '../../assets/Logo-dark.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa6';
import { Line } from 'react-chartjs-2';

function Phone() {
    const INITIAL_LOGIN_OBJ = {
        password: '',
        emailId: '',
        phoneNumber: '', // Add phoneNumber to initial login state
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
        if (loginObj.phoneNumber.trim() === '') return setErrorMessage('Phone number is required! (use any value)');
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

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <Link to="/" className="absolute top-4 left-6 inline-block bg-white rounded-[100%] p-3">
                <FaArrowLeft className="text-[#e9677b]"></FaArrowLeft>
            </Link>
            <div className="card mx-auto w-full max-w-[500px]">
                <div className="py-24 px-10 flex justify-center flex-col items-center">
                    <img className="w-[250px] h-auto mb-5" src={darkLogo} alt="Helpy Logo" />
                    <form onSubmit={(e) => submitForm(e)} className="w-[100%] text-center">
                        <div className="mb-4">
                            <div className="relative mt-4 flex justify-center w-full">
                                <div className="w-full max-w-[350px]">
                                    <PhoneInput
                                        country={'us'}
                                        value={loginObj.phoneNumber}
                                        onChange={(phone) => updateFormValue({ updateType: 'phoneNumber', value: phone })}
                                        containerClass="w-full"
                                        inputClass="w-full rounded-[16px] "
                                        placeholder="Enter your mobile number"
                                    />
                                </div>
                            </div>
                        </div>
                        <ErrorText styleClass="mt-6">{errorMessage}</ErrorText>
                        <button
                            type="submit"
                            className={'btn mt-2 w-[150px] rounded-[30px] hover:bg-[#f86a82] text-white bg-[#e9677b]' + (loading ? ' loading' : '')}
                        >
                            Continue
                        </button>
                    </form>
                </div>
            </div>
            
        </div>
    );
}

export default Phone;
