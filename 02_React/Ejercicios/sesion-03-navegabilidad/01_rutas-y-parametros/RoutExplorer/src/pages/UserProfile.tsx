import { Link, useParams } from "react-router-dom";
import { useLogger } from "../hooks/useLogger";
import { useUsers } from "../hooks/useUsers";

export default function UserProfile() {
    useLogger(UserProfile.name)
    const { userId } = useParams();
    const users = useUsers(userId)

    return (
        <div className="users">
            <h2>Users</h2>
            <section className={'userProfile'} >
                {users.map((user) => {
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
                })}
            </section>
        </div>
    );
};