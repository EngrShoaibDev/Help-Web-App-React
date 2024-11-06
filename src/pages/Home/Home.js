import React from 'react';
import ProfileCard from '../../components/Cards/ProfileCard';
import Navbar from '../Navbar/Navbar';


const Home = () => {
    const profiles = [
        {
            id: 1,
            name: 'serena',
            age: 25,
            location: 'Mumbai, MH, IN',
            image: 'https://i.pravatar.cc/150?img=3',
            newMember: true,
        },
        {
            id: 2,
            name: 'Mistress Mona',
            age: 39,
            location: 'Mumbai, MH, IN',
            image: 'https://i.pravatar.cc/150?img=1',
            newMember: false,
        },
        {
            id: 3,
            name: 'Mini',
            age: 30,
            location: 'Pune, MH, IN',
            image: 'https://i.pravatar.cc/150?img=2',
            newMember: true,
            online: true,
        },
        {
            id: 4,
            name: 'Mini',
            age: 30,
            location: 'Pune, MH, IN',
            image: 'https://i.pravatar.cc/150?img=4',
            newMember:false,
            online: true,
        },
        {
            id: 5,
            name: 'Mini',
            age: 30,
            location: 'Pune, MH, IN',
            image: 'https://i.pravatar.cc/150?img=5',
            newMember: true,
            online: true,
        },
    ];
 

    return (
        <div >
        <Navbar />
        <div className="home flex justify-center p-8">
        <div className="profile-cards grid gap-6 w-full max-w-[1200px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {profiles.map(profile => (
                <ProfileCard key={profile.id} profile={profile} />
            ))}
        </div>
        </div>
    </div>
    );
};

export default Home;
