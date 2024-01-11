import Image from "next/image";
const Quote = ({ background, quote, name }) => {
  return (
    <div className="absolute flex flex-col">
      <Image
        src={background}
        alt="background for quote"
        width={100}
        height={100}
        className="absolute top-0 left-0 h-full "
      />
      <h3>{quote}</h3>
      <p>- {name}</p>
    </div>
  );
};

export default Quote;
