import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../prisma';
import { AuthUser, LoginDTO } from '../types/auth';
import { AppError } from '../utils/appError';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-qr-order-jwt-key-2026';

export class AuthService {
  static async login(dto: LoginDTO): Promise<{ token: string; user: AuthUser }> {
    const { username, password } = dto;
    if (!username || !password) {
      throw new AppError('請輸入帳號與密碼', 1004, 400);
    }

    const admin = await prisma.adminUser.findUnique({ where: { username } });
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      throw new AppError('帳號或密碼錯誤', 1004, 401);
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
      throw new AppError('找不到使用者資訊', 1005, 404);
    }
    return admin;
  }
}
