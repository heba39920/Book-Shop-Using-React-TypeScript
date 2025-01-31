import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';  

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {  
    const [remainingTime, setRemainingTime] = useState<number>(targetDate.getTime() - Date.now());  

    useEffect(() => {  
        const interval = setInterval(() => {  
            setRemainingTime(targetDate.getTime() - Date.now());  
        }, 1000);  

        return () => clearInterval(interval);  
    }, [targetDate]);  

    const calculateTimeLeft = () => {  
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));  
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));  
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);  

        return { days, hours, minutes, seconds };  
    };  

    const timeLeft = calculateTimeLeft();  

    return (  
    
 <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left' , color:'#000', fontSize:'16px', fontWeight:500}}>  
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px' }}>  
                <Typography sx={{fontSize:'26px', color:'#ED553B', fontWeight:700}} variant="h4">{timeLeft.days}</Typography>  
                <Typography>Days</Typography>  
            </Box>  
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px' }}>  
                <Typography variant="h4" sx={{fontSize:'26px', color:'#ED553B', fontWeight:700}}>{timeLeft.hours}</Typography>  
                <Typography>Hours</Typography>  
            </Box>  
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px' }}>  
                <Typography variant="h4" sx={{fontSize:'26px', color:'#ED553B', fontWeight:700}}>{timeLeft.minutes}</Typography>  
                <Typography >Minutes</Typography>  
            </Box>  
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px' }}>  
                <Typography variant="h4" sx={{fontSize:'26px', color:'#ED553B', fontWeight:700}}>{timeLeft.seconds}</Typography>  
                <Typography>Seconds</Typography>  
            </Box>  
        </Box>  
      
    );  
};  

export default CountdownTimer;