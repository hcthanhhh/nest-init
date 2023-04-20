import { Controller, Logger, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local.guard';

@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name);

    constructor(private readonly authService: AuthService) { }
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        this.logger.log(`req: ${JSON.stringify(req.user)}`);
        return this.authService.login(req.user);
    }
}
