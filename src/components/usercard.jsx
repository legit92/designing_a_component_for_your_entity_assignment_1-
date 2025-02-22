import React from "react";

const Usercard = () => {
    const user = {
        profilePhoto: "https://placehold.co/150",
        name: "Nitin",
        email: "nitin@kalvium.community",
        phoneNumber: "+91-1234567890",
        address: "MIT ADTU, LONI GAON"
    }
    return (
        <div>
            <img src={user.profilePhoto} alt="UserImage"/>
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
            <p><strong>Address:</strong> {user.address}</p>
        </div>
    );    
}

export default Usercard;