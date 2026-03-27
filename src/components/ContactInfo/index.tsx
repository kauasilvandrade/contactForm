type Props = React.ComponentProps<"div"> & {
  image: string;
  title: string;
  contact: string;
};

export function ContactInfo({ image, title, contact }: Props) {
  return (
    <div className="flex items-start sm:items-center gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10">
      <div className="p-2 sm:p-2.5 md:p-3 border-1 border-solid border-gray-300 rounded-full flex-shrink-0">
        <img
          src={image}
          alt="Image Icon"
          className="h-8 w-8 sm:h-9 sm:w-9 md:h-11 md:w-11"
        />
      </div>
      <div>
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1">
          {title}
        </h2>
        <p className="text-gray-100 text-sm sm:text-base md:text-lg">
          {contact}
        </p>
      </div>
    </div>
  );
}
