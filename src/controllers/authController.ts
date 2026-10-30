import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../prisma';
import { AuthRequest } from '../middlewares/auth';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-qr-order-jwt-key-2026';

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ success: false, message: '請輸入帳號與密碼' });
    }

    const admin = await prisma.adminUser.findUnique({
      where: { username },
    });

    if (!admin) {
      return res.status(401).json({ success: false, message: '帳號或密碼錯誤' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: '帳號或密碼錯誤' });
    }

    const token = jwt.sign(
      {
        id: admin.id,
        username: admin.username,
        name: admin.name,
        role: admin.role,
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.json({
      success: true,
      message: '登入成功',
      data: {
        token,
        user: {
          id: admin.id,
          username: admin.username,
          name: admin.name,
          role: admin.role,
        },
      },
    });
  } catch (error: any) {
    console.error('Login error:', error);
    return res.status(500).json({ success: false, message: '伺服器內部錯誤' });
  }
};

export const getMe = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ success: false, message: '未登入' });
    }
    const admin = await prisma.adminUser.findUnique({
      where: { id: req.user.id },
      select: { id: true, username: true, name: true, role: true, createdAt: true },
    });
    return res.json({ success: true, data: admin });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: '伺服器內部錯誤' });
  }
};

