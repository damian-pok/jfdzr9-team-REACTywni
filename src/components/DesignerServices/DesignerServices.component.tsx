import { TagSecond } from "../SingleDesignerWidget/SingleDesignerWidget.styled";

interface IServices {
  services: string;
}

export const DesignerServices = ({ services }: IServices) => {
  const servicesSplit = services.split(" ");

  return (
    <>
      {servicesSplit.map((service) => (
        <TagSecond key={service}>{service}</TagSecond>
      ))}
    </>
  );
};
