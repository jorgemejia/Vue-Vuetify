import axios, { AxiosInstance } from "axios";
import { UserInterface } from '@/types/User.interface';

class UserService {
    public async getUsuarios() {
        return await axios
            .get<UserInterface[]>("http://localhost:3001/users")
            .then(response => response.data);
    }
}

export const userService = new UserService();
