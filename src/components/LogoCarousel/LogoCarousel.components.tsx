import { LogoField, LogoStyles } from "./LogoCarousel.styled";
//logo import
import millenium from "./../../assets/bank-millenium-logo.svg";
import creditAgricole from "./../../assets/credit-agricole-logo.svg";
import jackDaniels from "./../../assets/jack-daniels-logo.svg";
import kfc from "./../../assets/kfc-logo.svg";
import mcDonalds from "./../../assets/mcdonalds-logo.svg";
import nike from "./../../assets/nike-logo.svg";
import pepsi from "./../../assets/pepsi-logo.svg";
import samsung from "./../../assets/samsung-logo.svg";
import { useEffect, useState } from "react";

interface Logo {
  id: number;
  image: string;
}

const LogoCarousel = () => {
  const [index, setIndex] = useState<number>(0);
  const logos: Logo[] = [
    { id: 1, image: millenium },
    { id: 2, image: creditAgricole },
    { id: 3, image: jackDaniels },
    { id: 4, image: kfc },
    { id: 5, image: mcDonalds },
    { id: 6, image: nike },
    { id: 7, image: pepsi },
    { id: 8, image: samsung },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [logos.length]);

  const visibleLogos = logos
    .slice(index, index + 8)
    .concat(logos.slice(0, index))
    .slice(0, 8);

  return (
    <LogoField>
      {visibleLogos.map((logo) => (
        <LogoStyles key={logo.id} className="logo" src={logo.image} alt={`Logo ${logo.id}`} />
      ))}
    </LogoField>
  );
};
export default LogoCarousel;
