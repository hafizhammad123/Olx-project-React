// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,signOut
} from "firebase/auth";

import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// ye image add karna hai storge me is liya hai//
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDVVsQric-DYy5gcrspCrIuEECEG2bTVCo",
    authDomain: "login-b32ea.firebaseapp.com",
    projectId: "login-b32ea",
    storageBucket: "login-b32ea.appspot.com",
    messagingSenderId: "273076533304",
    appId: "1:273076533304:web:29ce9571626cf6f5f0cecd",
    measurementId: "G-BF0PJ12QNQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// ye image add karna hai storge me is liya hai//
const storage = getStorage(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


export async function Res(useIfon) {
    try {
      const { email, password, naam, Age ,date } = useIfon;
  
      await createUserWithEmailAndPassword(auth, email, password);
  
      
  
      const userData = {
        naam,
        Age,
        email,
        date
      };
  
     
  
      await addDoc(collection(db, "users"), userData);

  
      alert("theek hai uncle work huta hai");
  
      return true;
    } 
    catch (e) {
      console.error(e);
      alert(e.message);
      throw e;
    }
  }

export async function ADDS(HASIL){
try{    
const {add, mod, Rs,image} = HASIL
//step 1.//
const storageRef = ref(storage, `adds - ${image.name}`);
await uploadBytes(storageRef, image)
//step 2.//
const url = await  getDownloadURL(storageRef)
//step 3.//
await addDoc(collection(db, "ADD"), {
    Product: add,
    Model: mod,
    Price: Rs,
    imaurl: url
  });
  alert('NaSIR')

  return true

}catch(e){
    alert(e.message)
    throw e;
    
}
}  


export async function sigin(userINFO) {
 try{
    const { email, password  } = userINFO

   await signInWithEmailAndPassword(auth, email, password)

   alert("theek brother! ")

   return true
 } catch (e){
    alert(e.message)
    throw e;
 }     
}


export async function sigout(){
  signOut(auth)
}

//get data//

export async function getADS(){

  const querySnapshot = await getDocs(collection(db,"ADD"));
  const ADD =[]

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const ads = doc.data();
    ads.id = doc.id
    
    ADD.push(ads)
 
  });

  return ADD

}
//Initialize Firebase
