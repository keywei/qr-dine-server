import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../prisma';
import { AuthUser, LoginDTO } from '../types/auth';
import { AppError } from '../utils/appError';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-qr-order-jwt-key-2026';

export class AuthService {
  static async login(dto: LoginDTO): Promise<{ token: string; user: AuthUser }> {
    const { username, password } = dto;
    if (!username || !password) {
      throw new AppError(MESSAGES.AUTH.REQUIRED_CREDENTIALS, ResponseCode.AUTH_INVALID_CREDENTIALS, HttpStatus.BAD_REQUEST);
    }

    const admin = await prisma.adminUser.findUnique({ where: { username } });
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      throw new AppError(MESSAGES.AUTH.INVALID_CREDENTIALS, ResponseCode.AUTH_INVALID_CREDENTIALS, HttpStatus.UNAUTHORIZED);
    }

    const user: AuthUser = {
      id: admin.id,
      username: admin.username,
      name: admin.name,
      role: admin.role,
    };

    const token = jwt.sign(user, JWT_SECRET, { expiresIn: '7d' });
    return { token, user };
  }

  static async getMe(userId: number): Promise<AuthUser> {
    const admin = await prisma.adminUser.findUnique({
      where: { id: userId },
      select: { id: true, username: true, name: true, role: true },
    });

    if (!admin) {
      throw new AppError(MESSAGES.AUTH.USER_NOT_FOUND, ResponseCode.AUTH_USER_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return admin;
  }
}
