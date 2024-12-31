import  {User, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const Users = {
    create: async (data: any) =>{
        return  prisma.user.create({
            data
        })
    },
    findByEmail: (email: string) => {
        return prisma.user.findUnique({where: {email}})
    }
}

export default Users;