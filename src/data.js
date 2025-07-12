import { Card1, Card2, Card3, Card4, Card5, Card6 } from "./assets";

export const NavItem = ["Destinations", "Services", "Testimonials", "Contact"];

export const destinations = [
  {
    id: 1,
    title: "Bali, Indonesia",
    price: 1200,
    rating: 4.9,
    image: Card1,
  },
  {
    id: 2,
    title: "Santorini, Greece",
    price: 1500,
    rating: 5,
    image: Card2,
  },
  {
    id: 3,
    title: "Kyoto, Japan",
    price: 1800,
    rating: 4.8,
    image: Card3,
  },
  {
    id: 4,
    title: "Machu Picchu, Peru",
    price: 2100,
    rating: 4.9,
    image: Card4,
  },
  {
    id: 5,
    title: "Maldives",
    price: 2400,
    rating: 5,
    image: Card5,
  },
  {
    id: 6,
    title: "Paris, France",
    price: 1300,
    rating: 4.7,
    image: Card6,
  },
];

export const services = [
  {
    icon: (
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.4646 32.4841L27.4646 18.8175L33.298 12.9841C35.798 10.4841 36.6313 7.1508 35.798 5.48413C34.1313 4.6508 30.798 5.48413 28.298 7.98413L22.4646 13.8175L8.79797 10.8175C7.96464 10.6508 7.29797 10.9841 6.96464 11.6508L6.46464 12.4841C6.13131 13.3175 6.29797 14.1508 6.96464 14.6508L15.798 20.4841L12.4646 25.4841H7.46464L5.79797 27.1508L10.798 30.4841L14.1313 35.4841L15.798 33.8175V28.8175L20.798 25.4841L26.6313 34.3175C27.1313 34.9841 27.9646 35.1508 28.798 34.8175L29.6313 34.4841C30.298 33.9841 30.6313 33.3175 30.4646 32.4841Z"
          stroke="#18181B"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Flight Booking",
    text: "Get the best deals on flights to any destination worldwide.",
  },
  {
    icon: (
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.308 9.73924C24.7706 9.97043 25.2808 10.0908 25.798 10.0908C26.3152 10.0908 26.8253 9.97043 27.288 9.73924L33.3863 6.68924..."
          stroke="#18181B"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.798 10.0908V35.0908"
          stroke="#18181B"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.798 5.87744V30.8774"
          stroke="#18181B"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Tour Packages",
    text: "All-inclusive packages with guided tours and activities.",
  },
  {
    icon: (
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.1313 3.81738V10.484"
          stroke="#18181B"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.4646 3.81738V10.484"
          stroke="#18181B"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.4646 7.15088H9.13131..."
          stroke="#18181B"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.79797 17.1509H35.798"
          stroke="#18181B"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Hotel Reservations",
    text: "Book luxury, mid-range, or budget accommodations.",
  },
  {
    icon: (
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.4646 35.4841V32.1508C27.4646 30.3827..."
          stroke="#18181B"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.798 18.8175C19.4799 18.8175..."
          stroke="#18181B"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M37.4646 35.484V32.1507..."
          stroke="#18181B"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.4646 5.70068..."
          stroke="#18181B"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Custom Itineraries",
    text: "Personalized travel plans tailored to your preferences.",
  },
];
