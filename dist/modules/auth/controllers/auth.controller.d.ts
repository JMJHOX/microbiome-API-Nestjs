import { UserLoginDto, UserRegistrationDto } from '../dtos';
import { RequestWithUserInterface } from '../interfaces';
export declare class AuthController {
    private readonly _authService;
    private readonly _userService;
    register(userRegistrationDto: UserRegistrationDto, res: any): Promise<any>;
    login(req: RequestWithUserInterface, userLogin: UserLoginDto, res: any): Promise<void>;
    userProfile({ user }: RequestWithUserInterface): Promise<any>;
    logout(request: RequestWithUserInterface): Promise<void>;
}
