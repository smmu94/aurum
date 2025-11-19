type CardProps = {
  name: string;
  description: string;
  imageUrl: string;
  price?: number;
};

export default function Card({ name, description, price, imageUrl }: CardProps) {
  return (
    <div className="bg-gunmetal rounded-lg shadow-md border-2 border-transparent overflow-hidden
                hover:scale-105 hover:border-lion hover:shadow-xl transition-transform duration-300">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="t-body-bold text-light">{name}</h2>
          {price !== undefined && (
            <span className="t-body-bold text-lion">${price}</span>
          )}
        </div>
        <p className="mt-2 t-small text-light leading-snug">{description}</p>
      </div>
    </div>
  );
}