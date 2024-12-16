import {
   ForbiddenException
} from "@nestjs/common";

import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
import { PrismaService } from "src/prisma/prisma.service";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable({})
export class AuthService {
   constructor (private prisma: PrismaService) {}
   async signup(dto: AuthDto) {
      // generate the password hash
      const hash = await argon.hash(dto.password);

      try {
      // save the new user in the db
      const newUser = await this.prisma.user.create({
            data: {
               email: dto.email,
               hash,
            },
         });

         // return the saved user
         return newUser;
      } catch (error){
         if (
            error instanceof PrismaClientKnownRequestError
         ) {
            if (error.code === 'P2002') {
               throw new ForbiddenException(
                  'Credentials taken',
               );
            }
         }
      }
   }
}