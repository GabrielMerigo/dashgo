import { useQuery } from "react-query";
import { api } from "../api";

type Users = {
  createdAt: string;
  email: string;
  id: string;
  name: string;
}

async function getUsers() {
  const { data } = await api.get('users');
  const usersArray: Array<Users> = data.users;
                                                                                                     
  const users = usersArray.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long', 
        year: 'numeric'
      })
    }
  });

  return users
}

export function useUsers(){
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5 // 5 seconds
  });
}