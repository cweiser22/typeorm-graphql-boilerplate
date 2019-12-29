import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Repository } from "typeorm";
import { User } from "../entities/user";

@Service()
export class UserService {
  @InjectRepository(User)
  private readonly userRepo: Repository<User>;
}
