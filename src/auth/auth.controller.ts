import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('auth/signup')
    signup(@Body() dto: AuthDto) {
        return this.authService.signup(dto)
    }

    @Post('auth/signin')
    signin(@Body() dto: AuthDto) {
        return this.authService.signin(dto)
    }
}