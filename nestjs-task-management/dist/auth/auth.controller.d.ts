import { AuthCrentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentialsDto: AuthCrentialsDto): Promise<void>;
    signIn(authCredentialsDto: AuthCrentialsDto): Promise<{
        accessToken: string;
    }>;
}
