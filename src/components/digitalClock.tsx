import { useEffect, useState } from "react";

export const DigitalClock = () =>{
   const [timer, updateTimer] = useState<Date>( new Date());

   useEffect( ()=>{ 
        setInterval(()=>{updateTimer(new Date())}, 1000);
   });
    return <span className="time">{timer.toLocaleTimeString()}</span>;
};