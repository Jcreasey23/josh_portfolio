import React from 'react';
import profile from './photo_of_me.JPG'; // Tell webpack this JS file uses this image

console.log(profile); // /logo.84287d09.png

function ProfilePic() {
  // Import result is the URL of your image
  return <img src={profile} alt="Profile" style={{ maxWidth: '100%', height: 600, marginLeft:250}} />;
}

export default ProfilePic;