
export interface AuthloginProps {
    isAuthenticated: boolean;
    username: string  | null;
    login: (username: string, password:string ) => Promise<void>;
    logout:() => void;
}