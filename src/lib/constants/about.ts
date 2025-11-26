import { FaMedal, FaHeart, FaPeopleCarry } from "react-icons/fa";
import { GiCook } from "react-icons/gi";

export const AURUM_VALUES: Array<{
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}> = [
  {
    icon: FaMedal,
    title: "Excellence",
    description:
      "We strive for perfection in every detail, from ingredient selection to the final presentation.",
  },
  {
    icon: FaHeart,
    title: "Passion",
    description:
      "We love what we do, and that is reflected in every dish and the warmth of our service.",
  },
  {
    icon: FaPeopleCarry,
    title: "Community",
    description:
      "We believe in building lasting relationships with our customers and suppliers.",
  },
];

export const AURUM_TEAM: Array<{
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  role: string;
  description: string;
}> = [
  {
    icon: GiCook,
    title: "Chef Marco Rossi",
    role: "Executive Chef",
    description:
      "With over 25 years of experience in international gourmet cuisine, Marco has perfected his craft in the finest restaurants of Italy, France, and Spain.",
  },
  {
    icon: GiCook,
    title: "Elena García",
    role: "Head Sommelier",
    description:
      "An internationally certified wine expert, Elena personally curates our premium wine selection from around the world.",
  },
  {
    icon: GiCook,
    title: "David López",
    role: "Operations Director",
    description:
      "Dedicated to creating an exceptional experience, David leads our team with passion and attention to detail in every service.",
  },
];
