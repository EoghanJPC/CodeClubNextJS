import { hash } from 'bcryptjs';

export default async function handler (req, res){
    const { username, email, password, name } = req.body
        if (!username, !email || !password || !name) {
            return res.status(400).json({message: "Required fields not submitted"})
        }
    
        if(username.length <=1){
            return res.status(400).json({message: "username has to be more than 1 character long"})
        }

        if(password.length < 5){
            return res.status(400).json({message: "Password has to be more than 5 characters long, try again"})
        }


        try {
            const hashedPassword = await hash(password, 5);

            const newUser = await prisma.user.create({
                data: {
                    username,
                    email,
                    password: hashedPassword,
                    role: 'coder',
                },
            });

            return res.status(201).json({
                message: 'User Created',
                user: { username: newUser.username, email: newUser.email, name: newUser.name, role: newUser.role};
            })

            
        }
}