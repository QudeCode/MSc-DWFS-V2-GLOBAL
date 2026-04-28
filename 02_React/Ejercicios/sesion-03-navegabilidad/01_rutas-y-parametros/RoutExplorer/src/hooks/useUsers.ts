import { users as rawUsers } from '../data/users'

const users: user[] = rawUsers;

interface user {
    id: number
    name: string
    email: string
    bio: string
    avatar: string
}

/**
 * Hook para gestionar los usuarios
 * @param userId Id del usuario
 */
export const useUsers = (userId?: string): user[] => {
    // Sin useState porque no vamos a añadir users
    // const [ users, setUsers ] = useState<user[]>(users);

    if(!userId) return users

    if(userId) return users.filter((user) => user.id.toString() === userId)
};
