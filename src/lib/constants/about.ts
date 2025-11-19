import { FaMedal, FaHeart, FaPeopleCarry } from "react-icons/fa"
import { GiCook } from "react-icons/gi"
export const AURUM_VALUES: Array<{
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}> = [
  {
    icon: FaMedal,
    title: "Excelencia",
    description:
      "Buscamos la perfección en cada detalle, desde la selección de ingredientes hasta la presentación final.",
  },
  {
    icon: FaHeart,
    title: "Pasion",
    description:
      "Amamos lo que hacemos y eso se refleja en cada plato y en la calidez de nuestro servicio.",
  },
  {
    icon: FaPeopleCarry,
    title: "Comunidad",
    description:
      "Creemos en construir relaciones duraderas con nuestros clientes y proveedores.",
  },
]

export const AURUM_TEAM: Array<{
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  title: string
  role: string
  description: string
}> = [
  {
    icon: GiCook,
    title: "Chef Marco Rossi",
    role: "Chef Ejecutivo",
    description:
      "Con más de 25 años de experiencia en la cocina gourmet internacional, Marco ha perfeccionado su arte en los mejores restaurantes de Italia, Francia y España.",
  },
  {
    icon: GiCook,
    title: "Elena García",
    role: "Sommelier Principal",
    description:
      "Experta en vinos con certificación internacional, Elena cura personalmente nuestra selección de vinos premium de todo el mundo.",
  },
  {
    icon: GiCook,
    title: "David López",
    role: "Director de Operaciones",
    description:
      "Dedicado a crear una experiencia excepcional, David lidera nuestro equipo con pasión y atención al detalle en cada servicio.",
  },
]