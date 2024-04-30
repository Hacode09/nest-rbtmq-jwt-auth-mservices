// app.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the config globally available in your app
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule], // Import ConfigModule
      inject: [ConfigService], // Inject ConfigService to use environment variables
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'), // Use environment variable
        signOptions: { expiresIn: '60s' }, // You can also use environment variables here
      }),
    }),
  ],
  providers: [AuthService],
})
export class AppModule {}
