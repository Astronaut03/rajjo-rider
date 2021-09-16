import * as firebase from "firebase/app";
import { GoogleAuthProvider} from "firebase/auth";
import firebaseConfig from './firebase.config';
import { getAuth, signInWithPopup} from "firebase/auth";import { signOut } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";


export const initializeLoginFramework = () => {
    firebase.initializeApp(firebaseConfig);
}

export const handleGoogleSignIn = () => {
    const googleProvider =  new GoogleAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, googleProvider)
    .then((res) => {
      const { displayName, photoURL, email} = res.user;
      const signedInUser ={
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
          success: true
      };
      return signedInUser; 
  })
    .catch((error) => {
      console.log(error.code); 
      console.log(error.message);
    })
  }

  
  export const handleSignOut = () =>{

    const auth = getAuth();
    return signOut(auth)
    .then((res) => {
    const signedOutUser ={
      isSignedIn: false,
      name:'',
      email:'',
      photo:'',
      error: '',
      success: false
    }
    return signedOutUser;
  })
  .catch((error) => {
    
  });
  }


  export const createUserWithEmailAndPasswords = (name, email, password) =>{
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed in 
        const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success = true;
        updateUserName(name);
        return newUserInfo;
      })
      .catch((error) => {
        const newUserInfo ={};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        return newUserInfo;
      });
  }

  export const signInWithEmailAndPasswords = (email, password)=>{
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = '';
      newUserInfo.success = true;
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo ={};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
  }

  const updateUserName = name =>{

    const auth = getAuth();
    
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      // Profile updated!
      console.log('user name update successfully');
    }).catch((error) => {
      // An error occurred
      console.log(error);
    });
  
  }


