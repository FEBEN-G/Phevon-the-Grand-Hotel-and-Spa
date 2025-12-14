import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding ...');

  const rooms = [
    {
      name: 'The Royal Sovereign Suite',
      description: 'The pinnacle of luxury. A sprawling suite with panoramic city views, a private terrace, and a master bathroom with a gold-plated tub.',
      pricePerNight: 1200.00,
      capacity: 2,
      type: 'SUITE',
      amenities: JSON.stringify(['King Size Bed', 'Private Terrace', 'Jacuzzi', 'Butler Service', 'Free WiFi', 'Mini Bar']),
      images: JSON.stringify(['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80']),
      isAvailable: true,
    },
    {
      name: 'Oceanic Deluxe Room',
      description: 'Immerse yourself in tranquility. This room features soothing blue tones, curated art pieces, and a view that stretches to the horizon.',
      pricePerNight: 450.00,
      capacity: 2,
      type: 'DELUXE',
      amenities: JSON.stringify(['Queen Size Bed', 'Ocean View', 'Work Desk', 'Smart TV', 'Rain Shower']),
      images: JSON.stringify(['https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80']),
      isAvailable: true,
    },
    {
      name: 'Executive Garden Suite',
      description: 'Perfect for business or leisure. Enjoy direct access to the hotel gardens and a spacious lounge area for meetings or relaxation.',
      pricePerNight: 650.00,
      capacity: 3,
      type: 'SUITE',
      amenities: JSON.stringify(['King Bed', 'Lounge Area', 'Garden Access', 'Coffee Machine', 'Soundproof Walls']),
      images: JSON.stringify(['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80']),
      isAvailable: true,
    },
    {
      name: 'Classic Elegance Room',
      description: 'Timeless design meets modern comfort. A cozy retreat with high-quality linens and a marble bathroom.',
      pricePerNight: 300.00,
      capacity: 2,
      type: 'STANDARD',
      amenities: JSON.stringify(['Double Bed', 'City View', 'En-suite Bathroom', 'Air Conditioning']),
      images: JSON.stringify(['https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80']),
      isAvailable: true,
    },
     {
      name: 'Presidential Penthouse',
      description: 'The ultimate experience. Top floor privacy, exclusive elevator access, and a dedicated concierge team 24/7.',
      pricePerNight: 2500.00,
      capacity: 4,
      type: 'SUITE',
      amenities: JSON.stringify(['2 King Beds', 'Private Pool', 'Gym', 'Cinema Room', 'Chef on Call']),
      images: JSON.stringify(['https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80']),
      isAvailable: true,
    },
  ];

  // Clean up existing data
  await prisma.room.deleteMany();

  for (const room of rooms) {
    const r = await prisma.room.create({
      data: room,
    });
    console.log(`Created room with id: ${r.id}`);
  }
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
