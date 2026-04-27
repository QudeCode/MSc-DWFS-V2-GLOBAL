import { useParams } from "react-router-dom";
import { useLogger } from "../hooks/useLogger";

export default function UserProfile() {
    useLogger(UserProfile.name)
    const { userId } = useParams();
    
    return (
        <div className={'userProfile'} >
            <p>userId: {userId}</p>
        </div>
    );
};