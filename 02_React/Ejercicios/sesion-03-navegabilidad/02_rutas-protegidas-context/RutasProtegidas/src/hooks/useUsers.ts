import { users as rawUsers } from '../data/users'
import type { User } from '../interfaces/User';

const users: User[] = rawUsers;

/**
 * Hook para gestionar los usuarios
 * @param userId Id del usuario
 */
export const useUsers = (userId?: string): User[] => {
    // Sin useState porque no vamos a añadir users
    // const [ users, setUsers ] = useState<user[]>(users);

    if(!userId) return users

    if(userId) return users.filter((user) => user.id.toString() === userId)
};
