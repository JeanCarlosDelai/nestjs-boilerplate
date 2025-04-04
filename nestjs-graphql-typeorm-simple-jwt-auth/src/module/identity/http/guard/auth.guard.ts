import { CanActivate, ContextType, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UserRepository } from '@src/module/identity/persistance/repository/user.repository';
import { UnauthorizedError } from '@src/module/identity/core/exception/unauthorized-error.exeption';
import { User } from '@src/module/identity/persistance/entity/user.entity';

export interface AuthenticatedRequest extends Request {
  user: Pick<User, 'id'>;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = await this.getRequest(context);
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedError('Unauthorized');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: 'secret'
      });

      const user = await this.userRepository.findOneBy({ where: { id: payload.sub } });

      if (!user) {
        throw new UnauthorizedError('Unauthorized');
      }

      request.user = user;
    } catch {
      throw new UnauthorizedError('Unauthorized');
    }

    return true;
  }

  private async getRequest(context: ExecutionContext): Promise<AuthenticatedRequest> {
    try {
      if (context.getType<ContextType | 'graphql'>() === 'graphql') {
        const ctx = GqlExecutionContext.create(context);
        const req = ctx.getContext().req;
        return req as AuthenticatedRequest;
      }
      const req = context.switchToHttp().getRequest<AuthenticatedRequest>();

      return req;
    } catch {
      throw new UnauthorizedError('Unauthorized');
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.get('Authorization')?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
