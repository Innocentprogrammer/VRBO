"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeReservation, SafeUser } from "../types";
import { useCallback, useState } from "react";
import ListingCard from "../components/listings/ListingCard";
<<<<<<< HEAD
import CheckoutButton from "../components/CheckoutButton"; // Import the CheckoutButton component
import toast from "react-hot-toast"; // Ensure toast is properly imported
=======
import toast from "react-hot-toast";
>>>>>>> eb85c211137c33b73bd04232871d00f4d738300e

interface TripsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation cancelled");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId(null);
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going"
      />
      <div
        className="
              mt-10 grid 
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
              2xl:grid-cols-6
              gap-8
            "
      >
        {reservations.map((reservation) => (
          <div key={reservation.id}>
            <ListingCard
              data={reservation.listing}
              reservation={reservation}
              actionId={reservation.id}
              onAction={onCancel}
              disabled={deletingId === reservation.id}
              actionLabel="Cancel reservation"
              currentUser={currentUser}
            />
           

              {/* Checkout Button */}
              <CheckoutButton />
            </div>
        ))}
      </div>
    </Container>
  );
};

export default TripsClient;
