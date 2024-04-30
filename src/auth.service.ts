// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(username: string, password: string): Promise<string | null> {
    // Simulate authentication logic
    const isAuthenticated = username === 'admin' && password === 'password';

    if (isAuthenticated) {
      // Generate JWT token
      const token = this.jwtService.sign({ username });
      return token;
    } else {
      return null;
    }
  }
}
