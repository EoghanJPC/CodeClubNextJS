import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler (req, res){
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({message: "Missing Required Fields"})
    }

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if(!user){
            return res.status(401).json({message: "Invalid Details"});
        }

        const isPasswordValid = await compare(password, user.password);

        if(!isPasswordValid){
            return res.status(401).json({message: "Invalid Details"})
        }
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message})
    }
}