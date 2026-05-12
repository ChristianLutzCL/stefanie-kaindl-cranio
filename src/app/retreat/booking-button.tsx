import Link from "next/link";

export default function BookingButton() {
  return (
    <Link
      href="https://book.stripe.com/7sY4gy43abxQ27N6x8aEE00"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center bg-[#67B1B1] hover:bg-[#5a9999] text-white font-inter px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
    >
      Retreat jetzt buchen
    </Link>
  );
}
