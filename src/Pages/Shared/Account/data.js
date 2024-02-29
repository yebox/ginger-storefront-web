import Notification from "./sections/notification";
import OrderHistory from "./sections/orderHistory";
import PersonalInformation from "./sections/personalInformation";
import Security from "./sections/security";
import Support from "./sections/support";

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
    Body: Security,
    link: "/account/security",
  },
  {
    id: 3,
    label: "Notification",
    Body: Notification,
    link: "/account/notification",
  },
  {
    id: 4,
    label: "Help & Support",
    Body: Support,
    link: "/account/support",
  },
];
