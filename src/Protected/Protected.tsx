import { Navigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext/AuthContext";

interface User{
    id:string,
    
        email: string,
      
         
    }
interface AuthContextType {  
    saveData: () => void;
     userData: User | null;
} 


interface childrenProps {
    children: React.ReactNode;
}
const Protected: React.FC <childrenProps>= ({children}) => {
const {userData} = useAuthContext() as AuthContextType;
if(localStorage.getItem("userToken") || userData){
    return children;
}else{
    return <Navigate to={"/login"}/>
}
};
export default Protected;