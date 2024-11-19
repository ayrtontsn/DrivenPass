import prisma from "config/database";
import bcrypt from "bcrypt"

async function main() {
    const demo = {
        name: "Demo",
        email: "demo@driven.com.br",
        password: bcrypt.hashSync("demo123", 10)
    }

    await prisma.user.upsert({
        where: { email: "demo@driven.com.br" },
        update: {},
        create: demo

    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1)
    })