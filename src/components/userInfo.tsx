import { useEffect, useState } from 'react';
import '../App.css';
interface UserInfo {
        login: {
            username: string;
        }; 
        name:{
            title:string;
            first:string;
            last:string;
        };
        email: string;
        registered:{
            age:string;
        };
        dob:{
            age:string;
        };
        nat:string;
        phone:string;
        location: {
            postcode:string;
            street:{
                name:string;
                number:string;
            };
            city:string;
            country:string;
        };
        picture:{
            large:string;
        };


   
  }
export const UserInfo = () =>{
     const [info, setInfo] = useState<UserInfo | null>(null);
    useEffect(()=>{
        const fechUserInfo  = async () => {
            const response = await fetch("https://randomuser.me/api/?results=1");
            if(response){
                const data = await response.json();
                console.log(data);
                const result = data.results[0];
                setInfo(result);
                
            }

        }
        fechUserInfo();
        
    },[]);

   return (
    <div id="mainUserDiv">
        <div id="username">
            <h2>username: {info?.login.username}</h2>
        </div>
        <div id="userInfoLeft">
            <h2 className='highlightedText'>{info?.name.title} {info?.name.first} {info?.name.last}</h2>
        <p>{info?.email}</p>
        <p className='highlightedText'> User for {info?.registered.age} years</p>
        <p> Age: {info?.dob.age}</p>
        <p> Nationality: {info?.nat}</p>
        <p> Phone: {info?.phone}</p>
        </div>
        <div id="userInfoRight">
        <img src={info?.picture.large}></img>
     
        <h2 className='highlightedText'>Address:</h2>
            <p>{info?.location.street.number} {info?.location.street.name}</p>
            <p>{info?.location.city}, {info?.location.country} - {info?.location.postcode}</p>
        </div>
    </div>
    
   );
}