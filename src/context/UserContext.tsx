import { createContext, type ReactNode} from "react";
import React from "react";
type User = {
  firstname:string,
  lastname:string,
  email:string
} 
type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};
export const UserContext = createContext<UserContextType | null >(null)

export const UserProvider:React.FC<{children:ReactNode}> = ({children})=>{
      const [user,setUser]=React.useState<User>({
          firstname:'Aida',
          lastname:'Sabyr',
          email:'A@hjhh'
        })
        console.log(user,'context')
return(
    <UserContext.Provider value={{user,setUser}}>
    {children}
    </UserContext.Provider>

)
}