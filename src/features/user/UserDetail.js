import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaMarsStroke, FaMarsAndVenus, FaPeopleArrows, FaRegCircleXmark } from 'react-icons/fa6';
import darkLogo from '../../assets/Logo-dark.png';
import ErrorText from '../../components/Typography/ErrorText';

function UserDetail() {
    const INITIAL_LOGIN_OBJ = {
        name: '',
        location: '',
        dateOfBirth: '',
    };

    const BILL_OPTIONS = [
        'Travel/Transportation', 'Textbooks', 'School Supplies', 'Tuition', 'Student loan payment',
        'Clothes', 'Rent', 'Groceries', 'Emergency Expense', 'Greek life', 'Utilities', 'Dining out',
        'Savings', 'Insurance', 'Laundry', 'Cell phone', 'Personal care Products', 'Credit card',
        'Subscriptions', 'Car payment', 'Vacation'
    ];

    const [errorMessage, setErrorMessage] = useState('');
    const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);
    const [showForm, setShowForm] = useState(1); // 1: First form, 2: Second form, 3: Third form
    const [gender, setGender] = useState('');
    const [sexuality, setSexuality] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [selectedBills, setSelectedBills] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    const [height, setHeight] = useState(66); // default height in inches (5 feet 6 inches)
    const [language, setLanguage] = useState('');
    const [bodyType, setBodyType] = useState('');
    const [smoking, setSmoking] = useState('');
    const [drinking, setDrinking] = useState('');
    const [relationshipStatus, setRelationshipStatus] = useState('');
    const [education, setEducation] = useState('');
    const [Children, setChildren] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (loginObj.name.trim() === '') return setErrorMessage('Name is required! (use any value)');
        if (loginObj.location.trim() === '') return setErrorMessage('Location is required! (use any value)');
        if (loginObj.dateOfBirth.trim() === '') return setErrorMessage('Date of birth is required! (use any value)');

        setShowForm(2); // Move to the second form
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!gender) return setErrorMessage('Gender is required!');
        if (!sexuality) return setErrorMessage('Sexuality is required!');
        if (!ethnicity) return setErrorMessage('Ethnicity is required!');

        setShowForm(3); // Move to the third form when validation passes
    };

    useEffect(() => {
        // This will run whenever selectedBills changes
        console.log('Selected Bills:', selectedBills);
    }, [selectedBills]);

    const handleBillSelection = (bill) => {
        if (selectedBills.includes(bill)) {
            setSelectedBills(selectedBills.filter((item) => item !== bill));
        } else {
            setSelectedBills([...selectedBills, bill]);
        }
    };

    // Handler for adding images
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedImages((prevImages) => [...prevImages, ...files]);
    };

    // Handler for removing a specific image
    const handleRemoveImage = (index) => {
        setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
        setImageUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
    };

    // Effect to generate and clean up object URLs
    useEffect(() => {
        const newUrls = selectedImages.map((image) => URL.createObjectURL(image));
        setImageUrls(newUrls);

        // Cleanup URLs to avoid memory leaks
        return () => {
            newUrls.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [selectedImages]);



    const handleNext = (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!language) return setErrorMessage('Language is required!');
        if (!bodyType) return setErrorMessage('Body type is required!');
        if (!smoking) return setErrorMessage('Smoking status is required!');
        if (!drinking) return setErrorMessage('Drinking status is required!');
        if (!relationshipStatus) return setErrorMessage('Relationship status is required!');
        if (!education) return setErrorMessage('Education level is required!');

        // Move to the next form
        console.log('Form completed with data:', { height, language, bodyType, smoking, drinking, relationshipStatus, education });
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-[500px]">
                {showForm === 1 && (
                    <div className="py-24 px-10 flex justify-center flex-col items-center">
                        <Link to="/" className="fixed top-4 left-6 inline-block bg-white rounded-[100%] p-3">
                            <FaArrowLeft className='text-[#e9677b]' />
                        </Link>
                        <img className="w-[250px] h-auto mb-5" src={darkLogo} alt="Helpy Logo" />
                        <form onSubmit={(e) => submitForm(e)} className="w-[100%]">
                            <div className="mb-4">
                                <div className="relative mt-4">
                                    <input
                                        type="text"
                                        defaultValue={loginObj.name}
                                        placeholder="Name"
                                        className="input w-full rounded-[16px]"
                                        onChange={(e) => setLoginObj({ ...loginObj, name: e.target.value })}
                                    />
                                </div>
                                <div className="relative mt-4">
                                    <input
                                        type="date"
                                        defaultValue={loginObj.dateOfBirth}
                                        placeholder="Select your date of birth"
                                        className="input w-full rounded-[16px]"
                                        onChange={(e) => setLoginObj({ ...loginObj, dateOfBirth: e.target.value })}
                                    />
                                </div>
                                <div className="relative mt-4">
                                    <input
                                        type="text"
                                        defaultValue={loginObj.location}
                                        placeholder="Location"
                                        className="input w-full pr-10 rounded-[16px]"
                                        onChange={(e) => setLoginObj({ ...loginObj, location: e.target.value })}
                                    />
                                </div>
                            </div>
                            <ErrorText styleClass="mt-6">{errorMessage}</ErrorText>
                            <button
                                type="submit"
                                className={'btn mt-2 w-full rounded-[30px] hover:bg-[#f86a82] text-white bg-[#e9677b]'}
                            >
                                Next
                            </button>
                        </form>
                    </div>
                )}
                {showForm === 2 && (
                    <div className="py-24 px-10 flex justify-center flex-col items-center">
                        <button onClick={() => setShowForm(1)} className="fixed top-4 left-6 inline-block bg-white rounded-[100%] p-3">
                            <FaArrowLeft className='text-[#e9677b]' />
                        </button>
                        <img className="w-[250px] h-auto mb-9" src={darkLogo} alt="Helpy Logo" />
                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="mb-4">
                                <select
                                    className="w-full border rounded-[16px] p-2 mb-4"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="" disabled>Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="non-binary">Non-Binary</option>
                                </select>

                                <label className="block mb-2 text-[#f86a82] text-center font-semibold">Your Sexuality?</label>
                                <div className="flex justify-between mb-4">
                                    <button
                                        type="button"
                                        className={`w-[30%] flex flex-col justify-center items-center gap-2 px-2 py-6 rounded-[16px] ${sexuality === 'straight' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                            }`}
                                        onClick={() => setSexuality('straight')}
                                    >
                                        <FaMarsStroke className='text-xl' />
                                        <span>Straight</span>
                                    </button>
                                    <button
                                        type="button"
                                        className={`w-[30%] flex flex-col justify-center items-center gap-2 px-2 py-6 rounded-[16px] ${sexuality === 'gay' ? 'bg-pink-500 text-white' : 'bg-gray-200'
                                            }`}
                                        onClick={() => setSexuality('gay')}
                                    >
                                        <FaPeopleArrows className='text-xl' />
                                        <span>Gay</span>
                                    </button>
                                    <button
                                        type="button"
                                        className={`w-[30%] flex flex-col justify-center items-center gap-2 px-2 py-6 rounded-[16px] ${sexuality === 'bisexual' ? 'bg-purple-500 text-white' : 'bg-gray-200'
                                            }`}
                                        onClick={() => setSexuality('bisexual')}
                                    >
                                        <FaMarsAndVenus className='text-xl' />
                                        <span>Bisexual</span>
                                    </button>
                                </div>
                                <label className="block mb-2 text-[#f86a82] font-semibold text-center">Your Ethnicity?</label>
                                <select
                                    className="w-full border rounded-[16px] p-2 mb-4"
                                    value={ethnicity}
                                    onChange={(e) => setEthnicity(e.target.value)}
                                >
                                    <option value="" disabled>Select Ethnicity</option>
                                    <option value="asian">Asian</option>
                                    <option value="black">Black</option>
                                    <option value="hispanic">Hispanic</option>
                                    <option value="white">White</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
                            <button
                                type="submit"
                                className="btn mt-2 w-full rounded-[30px] hover:bg-[#f86a82] text-white bg-[#e9677b]"
                            >
                                Next
                            </button>
                        </form>
                    </div>
                )}
                {showForm === 3 && (
                    <div className="py-24 px-10 flex justify-center flex-col items-center">
                        <button onClick={() => setShowForm(2)} className="fixed top-4 left-6 inline-block bg-white rounded-[100%] p-3">
                            <FaArrowLeft className='text-[#e9677b]' />
                        </button>
                        <img className="w-[250px] h-auto mb-9" src={darkLogo} alt="Helpy Logo" />
                        <h2 className="text-[#f86a82] font-semibold mb-4 text-center">Select the bills you can help a friend with:</h2>
                        <div className="grid grid-cols-2 gap-4 mb-6 w-full">
                            {BILL_OPTIONS.map((bill) => (
                                <button
                                    key={bill}
                                    type="button"
                                    onClick={() => handleBillSelection(bill)}
                                    className={`flex justify-center items-center py-2 px-4 rounded-[16px] border ${selectedBills.includes(bill) ? 'bg-[#e9677b] text-white' : 'bg-gray-100'
                                        } hover:bg-[#f86a82] hover:text-white transition`}
                                >
                                    {bill}
                                </button>
                            ))}
                        </div>
                        <button
                            type="button"
                            className="btn mt-2 w-full rounded-[30px] hover:bg-[#f86a82] text-white bg-[#e9677b]"
                            onClick={() => setShowForm(4)}
                        >
                            Next
                        </button>
                    </div>
                )}
                {showForm === 4 && (
                    <div className="py-10 px-10 flex justify-center flex-col items-center">
                        <button onClick={() => setShowForm(3)} className="fixed top-4 left-6 inline-block bg-white rounded-[100%] p-3">
                            <FaArrowLeft className='text-[#e9677b]' />
                        </button>
                        <img className="w-[250px] h-auto mb-5" src={darkLogo} alt="Helpy Logo" />

                        <h2 className="text-[#f86a82] font-semibold mb-6 text-center">Tell us about yourself and upload photos</h2>

                        <form
                            className="w-full"
                            onSubmit={(e) => {
                                e.preventDefault(); // Prevent the default form submission behavior
                                // Validation logic to ensure all fields are filled
                                if (!loginObj.occupation || !loginObj.description || selectedImages.length === 0) {
                                    setErrorMessage("Please fill out all fields and upload at least one photo.");
                                } else {
                                    console.log('Form submitted successfully with details:', loginObj, selectedImages);
                                    setShowForm(5); // Move to next form or action
                                }
                            }}
                        >
                            {/* Occupation Field */}
                            <div className="w-full mb-4">
                                <input
                                    type="text"
                                    placeholder="Your Current Occupation"
                                    className="input w-full rounded-[16px] border p-2"
                                    value={loginObj.occupation || ''}
                                    onChange={(e) => setLoginObj({ ...loginObj, occupation: e.target.value })}
                                />
                            </div>

                            {/* Describe Yourself Field */}
                            <div className="w-full mb-4">
                                <textarea
                                    placeholder="Describe Yourself..."
                                    className="input w-full rounded-[16px] border p-2 resize-none h-32" // Updated height with Tailwind utility classes
                                    value={loginObj.description || ''}
                                    onChange={(e) => setLoginObj({ ...loginObj, description: e.target.value })}
                                />
                            </div>

                            {/* File Upload Button */}
                            <div className='flex justify-center'>
                                <button
                                    type="button"
                                    className="btn flex flex-col justify-center items-center bg-[#e9677b] text-white w-fit py-6 rounded-[30px] mb-4 hover:bg-[#f86a82] transition"
                                    onClick={() => document.getElementById('file-upload').click()}
                                >
                                    <span className="text-sm">Tap to Upload Photos</span>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        accept="image/png, image/jpeg, image/jpg"
                                        multiple
                                        className="hidden"
                                        onChange={handleImageChange}
                                    />
                                </button>
                            </div>

                            {/* Image Preview Section */}
                            <div className="grid grid-cols-3 gap-4 w-full">
                                {imageUrls.map((url, index) => (
                                    <div key={index} className="relative p-2 border rounded-lg">
                                        <img
                                            src={url}
                                            alt={`uploaded-${index}`}
                                            className="w-full  rounded-lg object-contain h-[120px]"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveImage(index)}
                                            className="absolute top-2 right-2 bg-white rounded-full p-1 text-red-500 shadow-md"
                                        >
                                            <FaRegCircleXmark />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="btn mt-2 w-full rounded-[30px] hover:bg-[#f86a82] text-white bg-[#e9677b]"
                            >
                                Next
                            </button>

                            {/* Error Message Display */}
                            {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
                        </form>
                    </div>
                )}
                {showForm === 5 && (
                    <div className="py-10 px-4 md:px-10 flex flex-col items-center mt-10">
                        <button onClick={() => setShowForm(4)} className="fixed top-4 left-4 inline-block bg-white rounded-[100%] p-2 md:p-3">
                            <FaArrowLeft className='text-[#e9677b] text-sm md:text-base' />
                        </button>

                        <form onSubmit={handleNext} className="w-full">
                            <p className="block mb-4 text-[#f86a82] font-semibold  text-sm text-left">User Additional Information</p>
                            <div className="mb-4">
                                <label className="block mb-2 text-[#000] font-semibold  text-sm ">Height: {Math.floor(height / 12)} feet {height % 12} inches</label>
                                <input
                                    type="range"
                                    min="48"
                                    max="84"
                                    value={height}
                                    onChange={(e) => {
                                        setHeight(parseInt(e.target.value));
                                        e.target.style.background = `linear-gradient(to right, #80cbc7 0%, #80cbc7 ${(e.target.value - e.target.min) / (e.target.max - e.target.min) * 100}%, white ${(e.target.value - e.target.min) / (e.target.max - e.target.min) * 100}%, white 100%)`;
                                    }}
                                    className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
                                    style={{
                                        background: `linear-gradient(to right, #80cbc7 0%, #80cbc7 ${(height - 48) / (84 - 48) * 100}%, white ${(height - 48) / (84 - 48) * 100}%, white 100%)`,
                                        accentColor: '#80cbc7',
                                    }}
                                />
                            </div>
                            <div className="mb-4">
                                <select
                                    className="w-full border rounded-[16px] p-2 mb-4 text-sm "
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                >
                                    <option value="" disabled>Select a language</option>
                                    <option value="english">English</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="french">French</option>
                                    <option value="german">German</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-[#000] font-semibold  text-sm ">Body Type</label>
                                <div className="flex flex-wrap justify-between gap-2 mb-4">
                                    {['Slim', 'Athletic', 'Average', 'Heavyset'].map(type => (
                                        <button
                                            type="button"
                                            key={type}
                                            onClick={() => setBodyType(type)}
                                            className={`w-[48%] md:w-[23%] p-2 rounded-[16px] text-sm  ${bodyType === type ? 'bg-[#e9677b] text-white' : 'bg-gray-200'}`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-[#000] font-semibold  text-sm">Smoking</label>
                                <div className="flex flex-wrap justify-between gap-2 mb-4">
                                    {['Non-smoker', 'Occasional', 'Regular'].map(status => (
                                        <button
                                            type="button"
                                            key={status}
                                            onClick={() => setSmoking(status)}
                                            className={`w-[48%] md:w-[30%] p-2 rounded-[16px] text-sm  ${smoking === status ? 'bg-[#e9677b] text-white' : 'bg-gray-200'}`}
                                        >
                                            {status}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-[#000] font-semibold  text-sm ">Drinking</label>
                                <div className="flex flex-wrap justify-between gap-2 mb-4">
                                    {['Non-drinker', 'Social drinker', 'Regular drinker'].map(status => (
                                        <button
                                            type="button"
                                            key={status}
                                            onClick={() => setDrinking(status)}
                                            className={`w-[48%] md:w-[30%] p-2 rounded-[16px] text-sm  ${drinking === status ? 'bg-[#e9677b] text-white' : 'bg-gray-200'}`}
                                        >
                                            {status}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-[#000] font-semibold  text-sm">Relationship Status</label>
                                <div className="flex flex-wrap justify-between gap-2 mb-4">
                                    {['Single', 'In a relationship', 'Married', 'Divorced'].map(status => (
                                        <button
                                            type="button"
                                            key={status}
                                            onClick={() => setRelationshipStatus(status)}
                                            className={`w-[48%]  p-2 rounded-[16px] text-sm  ${relationshipStatus === status ? 'bg-[#e9677b] text-white' : 'bg-gray-200'}`}
                                        >
                                            {status}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-[#000] font-semibold  text-sm">Education</label>
                                <div className="flex flex-wrap justify-between gap-2 mb-4">
                                    {['High School', "Bachelor's Degree", "Master's Degree", 'Doctorate'].map(status => (
                                        <button
                                            type="button"
                                            key={status}
                                            onClick={() => setEducation(status)}
                                            className={`w-[48%]  p-2 rounded-[16px] text-sm  ${education === status ? 'bg-[#e9677b] text-white' : 'bg-gray-200'}`}
                                        >
                                            {status}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-[#000] font-semibold  text-sm">Education</label>
                                <div className="flex flex-wrap justify-between gap-2 mb-4">
                                    {['Yes', "Not", "Not Prefer"].map(status => (
                                        <button
                                            type="button"
                                            key={status}
                                            onClick={() => setChildren(status)}
                                            className={`w-[48%]  p-2 rounded-[16px] text-sm  ${Children === status ? 'bg-[#e9677b] text-white' : 'bg-gray-200'}`}
                                        >
                                            {status}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <ErrorText styleClass="mt-6 text-sm ">{errorMessage}</ErrorText>
                            <button
                                type="submit"
                                className='btn mt-2 w-full rounded-[30px] hover:bg-[#f86a82] text-white bg-[#e9677b] text-sm md:text-base'
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                )}
            </div>
        </div>
    );
}

export default UserDetail;


