import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ListController } from './list/list.controller';
import { ListService } from './list/list.service';
import { ListModule } from './list/list.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, ListModule, AuthModule],
  controllers: [AppController, ListController, AuthController],
  providers: [AppService, ListService, AuthService],
})
export class AppModule {}
