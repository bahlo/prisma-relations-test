import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Comment me in to create the user
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Bob',
  //     email: 'bob@prisma.io',
  //     invitations: {
  //       create: {
  //         code: 'foo-bar',
  //       },
  //     },
  //   },
  // })

  const users = await prisma.user.findMany({
    include: {
      invitations: true,
    },
  });
  console.log(users[0].invitations);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
