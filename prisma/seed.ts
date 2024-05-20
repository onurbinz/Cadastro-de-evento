import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: '51987e9f-3787-4d75-b65d-2fb9512b8d47',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para devs apaixonados pro codigos',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})