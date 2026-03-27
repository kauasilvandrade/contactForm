type Props = React.ComponentProps<"div"> & {
  image: string;
  title: string;
  contact: string;
};

export function ContactInfo({ image, title, contact }: Props) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="p-3 border-1 border-solid border-gray-300 rounded-full">
        <img src={image} alt="Image Icon" className="h-8 w-8" />
      </div>
      <div>
        <h2 className="text-white font-bold mb-1.5">{title}</h2>
        <p className="text-gray-100 text-xs">{contact}</p>
      </div>
    </div>
  );
}
