
interface user {
    name: string;          
    email: string;          
    password: string;         
    role: 'user' | 'admin';               
    inBlocked: 'true' | 'false';      
}

interface userlogin {         
  email: string;          
  password: string;         
     
}