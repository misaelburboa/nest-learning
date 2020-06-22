import { UserRepository } from './user.reporitory';
import { AuthCrentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtService;
    private logger;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp(authCrentialsDto: AuthCrentialsDto): Promise<void>;
    signIn(authCredentialsDto: AuthCrentialsDto): Promise<{
        accessToken: string;
    }>;
}
