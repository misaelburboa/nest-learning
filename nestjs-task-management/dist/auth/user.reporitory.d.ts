import { Repository } from "typeorm";
import { User } from './user.entity';
import { AuthCrentialsDto } from './dto/auth-credentials.dto';
export declare class UserRepository extends Repository<User> {
    signUp(authCredentialsDto: AuthCrentialsDto): Promise<void>;
    validateUserPassword(authCredentialsDto: AuthCrentialsDto): Promise<string>;
    private hashPassword;
}
