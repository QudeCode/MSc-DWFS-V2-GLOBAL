import { Navigate } from "react-router-dom";
import { useLogger } from "../hooks/useLogger";
import { useUsers } from "../hooks/useUsers";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";

export default function UserProfile() {
    useLogger(UserProfile.name)
    // const { userId } = useParams();
    // const users = useUsers(userId)
    const { user } = useContext(AuthContext)
    const userProfile = useUsers(user.id)[0]
    const { logout } = useAuth()

    if(!userProfile) {
        console.error("Error: login succed, but user not found.")
        logout()
        return <Navigate to="/" replace/>
    }

    return (
        <div className="userProfile-wrapper">
            <h2>Users</h2>
            <section className={'userProfile-content'} >
                <h3>{userProfile.avatar} {userProfile.name}</h3>
                <p>Email: {userProfile.email}</p>
                <p>Bio: {userProfile.bio}</p>

                <button onClick={() => logout()}>Log Out</button>

                {/* Old implementation: */}
                {/* {users.map((user) => {
                    return (
                        <div key={user.id}>
                            {
                            // userId ? 
                             <h3>{user.avatar} {user.name}</h3>
                            //  : 
                            //  <h3><Link to={`/users/${user.id}`}>{user.avatar} {user.name}</Link></h3>
                             }
                            {userId ? <p>Email: {user.email}</p> : ''}
                            {userId ? <p>Bio: {user.bio}</p> : ''}
                        </div>
                    )
                })} */}
            </section>
        </div>
    );
};