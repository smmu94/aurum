import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { RiRestaurantLine } from "react-icons/ri";
import { LuChefHat, LuWine } from "react-icons/lu";

export const SOCIALS: {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    href: string;
}[] = [
        { icon: FaFacebook, href: "https://www.facebook.com" },
        { icon: FaInstagram, href: "https://www.instagram.com" },
        { icon: FaTwitter, href: "https://www.twitter.com" },
    ];

export const CONTACT: {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    value: string;
}[] = [
        { icon: HiOutlineMail, value: "info@aurum.com" },
        { icon: HiOutlinePhone, value: "+34 123 456 789" },
        { icon: HiOutlineLocationMarker, value: "Av. de la gastronomía, 123" },
    ];

export const HOME_FEATURES: {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}[] = [
        {
            icon: LuChefHat,
            title: "Maestría Culinaria",
            description: "Nuestros chefs de renombre internacional crean platos únicos con ingredientes premium seleccionados con precisión.",
        },
        {
            icon: RiRestaurantLine,
            title: "Calidad Premium",
            description: "Cada ingrediente es seleccionado con exquisitez, garantizando la mejor experiencia en cada bocado.",
        },
        {
            icon: LuWine,
            title: "Ambiente Elegante",
            description: "Disfruta de un ambiente sofisticado y acogedor, perfecto para momentos especiales e inolvidables.",
        }
    ];