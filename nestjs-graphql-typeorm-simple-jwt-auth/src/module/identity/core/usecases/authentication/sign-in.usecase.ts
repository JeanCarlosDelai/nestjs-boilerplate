import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '@src/module/identity/persistance/repository/user.repository';
import { HashService } from '@src/module/identity/core/service/hash.service';
import { UserUnauthorizedError } from '@src/module/identity/core/exception/user-unauthorized-error.exception';
import { SignInInputDto } from '@src/module/identity/http/dto/authentication/sign-in/sign-in-input.dto';
import { SignInOutputDto } from '@src/module/identity/http/dto/authentication/sign-in/sign-in-output.dto';
import { ConfigService } from '@src/shared/module/config/config.service';

@Injectable()
export class SignInUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly hashService: HashService,
    private readonly configService: ConfigService
  ) {}

  async execute({ email, password }: SignInInputDto): Promise<SignInOutputDto> {
    const user = await this.userRepository.findOneBy({ where: { email } });

    if (!user || !(await this.hashService.compare(password, user.password))) {
      throw new UserUnauthorizedError(`Cannot authorize user with the email: ${email}`);
    }

    const payload = { sub: user.id };

    const accessToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get('jwt.secret'),
      expiresIn: this.configService.get('jwt.expiresIn'),
      // Using HS256 algorithm to prenvent from security risk
      // https://book.hacktricks.xyz/pentesting-web/hacking-jwt-json-web-tokens#modify-the-algorithm-to-none-cve-2015-9235
      algorithm: 'HS256'
    });

    return new SignInOutputDto({ accessToken });
  }
}
