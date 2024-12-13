import { Controller, Post, Req } from "@nestjs/common";
import {  AuthService } from "./auth.service";

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('auth/signup')
    signup(@Req() req: Request){
        return this.authService.signup()
    }
    
    @Post('auth/signin')
    signin(){
        return 'I am singed in'
    }
}