import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserController {
    constructore() { }

    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    async getMe(@Req() req: Request) {
        return 'yourself info';
    }
}
