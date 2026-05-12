"use client";

import { useEffect, useState } from "react";

export default function BookingStatus() {
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("booking");
    setStatus(value);
  }, []);

  if (status === "success") {
    return (
      <p className="mb-4 rounded-xl bg-green-100 px-4 py-3 text-green-800 font-inter">
        Danke! Deine Buchung war erfolgreich. Du erhältst gleich deine Bestätigung.
      </p>
    );
  }

  if (status === "cancel") {
    return (
      <p className="mb-4 rounded-xl bg-amber-100 px-4 py-3 text-amber-800 font-inter">
        Deine Buchung wurde abgebrochen. Du kannst den Vorgang jederzeit erneut starten.
      </p>
    );
  }

  return null;
}
