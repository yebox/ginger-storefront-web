import OrderHistory from "./sections/orderHistory";
import PersonalInformation from "./sections/personalInformation";

export const accountNavInfo = [
  {
    id: 0,
    label: "Personal information",
    Body: PersonalInformation,
    link: "/account/personal-information",
  },
  {
    id: 1,
    label: "Order history",
    Body: OrderHistory,
    link: "/account/order-history",
  },
  {
    id: 2,
    label: "Password & Security",
    Body: PersonalInformation,
    link: "/account/security",
  },
  {
    id: 3,
    label: "Notification",
    Body: PersonalInformation,
    link: "/account/notification",
  },
  {
    id: 4,
    label: "Help & Support",
    Body: PersonalInformation,
    link: "support",
  },
];
