import React from 'react';
import { FaRegUser ,FaCamera } from 'react-icons/fa6';

const ProfileCard = ({ profile }) => {
    return (
        <div className="w-[100%] border border-gray-300 rounded-lg overflow-hidden shadow-md relative">
            <div className="relative">
                {/* Container for image and overlay */}
                <div className="relative">
                    <img 
                        src={profile.image} 
                        alt={profile.name} 
                        className="w-full h-96 object-cover object-center"
                    />
                    {/* Black overlay */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                
                {profile.newMember && (
                    <span className="absolute top-3 left-3 border-2 bg-transparent text-white text-xs font-fa-weight-[500] px-2 py-1 rounded-full z-20 flex flex-row gap-2 items-center">
                    <FaRegUser />
                    <span> NEW MEMBER</span>
                    </span>
                )}

                {/* Text Container */}
                <div className="px-4 py-2 absolute bottom-2 z-20 w-full">
                    <h3 className="mb-[0px]">

                   {profile.online && (
                        <span className="text-green-500 text-[30px] font-bold mt-2 inline-block">
                            &#x2022; 
                        </span>
                    )}
                    <span className='text-lg font-semibold text-white '> {profile.name}</span>
                    </h3>
                   <div className='flex flex-row gap-3 justify-between'>
                   <p className="text-[12px] text-white max-w-[150px]">{profile.age} - {profile.location}</p>

                    <div className='text-white flex flex-row gap-2 items-center text-[12px]'>
                    <FaCamera />
                    <span>
                        4
                    </span>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
