import React from 'react'

interface props {
    nickname?: string
}

const Profile: React.FC<props> = ({nickname}) => {
    return (
        <button className="flex justify-center items-center" onClick={() => {
            window.location.href = "/dashboard";
        }}>
            <p className="mr-5">{ nickname }</p>
            <img style={{width: 50}} src="/images/profile.png" alt="profile" />
        </button>
        )
}

export default Profile;