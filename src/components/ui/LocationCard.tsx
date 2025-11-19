import { HiClock, HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import type { LocationCardProps } from "../../types/locations";
import Button from "./Button";

export default function LocationCard({
    image = { url: "", isLeft: true },
    title,
    address,
    telephone,
    schedule,
    email
}: LocationCardProps) {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    const whatsappUrl = `https://wa.me/${telephone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello! I want to know more about ${title}`)}`;
    return (
        <section
            className={`
                flex flex-col md:flex-row 
                ${image.isLeft ? "md:flex-row" : "md:flex-row-reverse"}
                max-w-5xl w-full mx-auto gap-8 my-12
                p-6 md:p-8
                bg-white/70 backdrop-blur-sm
                rounded-xl shadow-[0px_6px_24px_rgba(0,0,0,0.1)]
                opacity-0 translate-y-4 transition-all duration-700 ease-out
                animate-fadeUp
            `}
        >
            <img
                src={image.url}
                alt={title}
                className="w-full md:w-1/2 h-64 md:h-auto rounded-lg object-cover shadow-md"
            />
            <div className="flex flex-col gap-5 w-full md:w-1/2 justify-center">
                <h2 className="t-subtitle font-bold text-lion">{title}</h2>
                <div className="flex gap-3 text-gunmetal">
                    <HiLocationMarker className="text-lion text-xl" />
                    <div>
                        <p className="t-small-bold">Address</p>
                        <p className="t-small">{address}</p>
                    </div>
                </div>
                <div className="flex gap-3 text-gunmetal">
                    <HiPhone className="text-lion text-xl" />
                    <div>
                        <p className="t-small-bold">Phone</p>
                        <p className="t-small">{telephone}</p>
                    </div>
                </div>
                <div className="flex gap-3 text-gunmetal">
                    <HiClock className="text-lion text-xl" />
                    <div>
                        <p className="t-small-bold">Hours</p>
                        <p className="t-small">{schedule}</p>
                    </div>
                </div>
                <div className="flex gap-3 text-gunmetal">
                    <HiMail className="text-lion text-xl" />
                    <div>
                        <p className="t-small-bold">Email</p>
                        <p className="t-small">{email}</p>
                    </div>
                </div>
                <div className="flex gap-4 pt-4">
                    <Button
                        link={{
                        href: mapsUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        }}
                    >
                        View on Map
                    </Button>
                    <Button
                        link={{
                        href: whatsappUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        }}
                        style="secondary"
                    >
                        WhatsApp
                    </Button>
                </div>
            </div>
        </section>
    );
}
