import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
   async signup() {
        console.log('data')
     }

}

const service = new AuthService();