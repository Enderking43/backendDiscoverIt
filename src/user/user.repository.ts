import { Repository } from "../shared/repository";
import { User } from "./user.entity";
const users: User[] = []
export class UserRepository implements Repository<User> {
    findAll(): User[] {
        return users
    }
    findOne(item: { id: string }): User | undefined {
        return users.find(user => user.idUser === item.id)
    }
    add(item: User): User | undefined {
        
        users.push(item)
        return item
    }
    update(item: User): User | undefined {
        const index = users.findIndex(user => user.idUser === item.idUser)
        users[index] = item
        return item
    }
    delete(item: { id: string }): User | undefined {
        const index = users.findIndex(user => user.idUser === item.id)
        const deleted = users[index]
        users.splice(index, 1)
        return deleted
    }

}