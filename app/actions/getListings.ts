import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
    userId?: string;
    guestCount?: number;
    roomCount?: number;
    bathroomCount?: number;
    startDate?: string;
    endDate?: string;
    locationValue?: string;
    category?: string;
}

export default async function getListings(params: IListingsParams) {
    try {
        const {
            userId,
            roomCount,
            guestCount,
            bathroomCount,
            locationValue,
            startDate,
            endDate,
            category,
        } = params;

        const query: any = {};

        if (userId) query.userId = userId;

        if (category) query.category = category;

        if (roomCount) {
            query.roomCount = {
                gte: Number(roomCount),
            };
        }

        if (guestCount) {
            query.guestCount = {
                gte: Number(guestCount),
            };
        }

        if (bathroomCount) {
            query.bathroomCount = {
                gte: Number(bathroomCount),
            };
        }

        if (locationValue) query.locationValue = locationValue;

        if (startDate && endDate) {
            query.reservations = {
                none: {
                    OR: [
                        {
                            startDate: { lte: endDate }, // Reservation starts before the given end date
                            endDate: { gte: startDate }, // Reservation ends after the given start date
                        },
                    ],
                },
            };
        }

        const listings = await prisma.listing.findMany({
            where: query,
            orderBy: {
                createdAt: "desc",
            },
        });

        // Format the results to ensure consistent date formatting
        const safeListings = listings.map((listing) => ({
            ...listing,
            createdAt: listing.createdAt.toISOString(),
        }));

        return safeListings;
    } catch (error) {
        console.error("Error fetching listings:", error);
        throw new Error("Failed to fetch listings. Please try again later.");
    }
}
