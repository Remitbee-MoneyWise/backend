import { Injectable, NotFoundException, Logger, UnauthorizedException , HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user-auth.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserAuthService {
  private readonly logger = new Logger(UserAuthService.name);

  constructor( @InjectModel(User.name) private userModel: Model<User>, private jwtService: JwtService) {}
  
  async registerUser(email: string, password: string): Promise<{ message: string }> {
    try {
      let existingUser = this.userModel.findOne({email:email}).exec();
    if(!existingUser){
      const hash = await bcrypt.hash(password, 10);
      let data = await this.userModel.create({ email, password: hash });
      return { message: 'User registered successfully' };
    }
    } catch (error) {
      throw new Error('An error occurred while registering the user');
    }
 }
  async loginUser(email: string, password: string): Promise<string> {
    try {
      const user = await this.userModel.findOne({ email });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new UnauthorizedException('Invalid login credentials');
      }
      const payload = { userId: user._id };
      const token = this.jwtService.sign(payload); 
      return token;
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException('An error occurred while logging in');
    }
  }
  async getUsers(): Promise<User[]> {
    try {
      const users = await this.userModel.find({});
      return users;
    } catch (error) {
      this.logger.error(`An error occurred while retrieving users: ${error.message}`);
      throw new Error('An error occurred while retrieving users');
    }
  }
}
