import Service from "./Service";
import { servicesImages } from "../../../store/constant-images";


import classes from "./Services.module.css"

const Services = () => {
  return (
    <div className={classes["services"]}>
      {servicesImages.map((service, idx) => (
        <Service
          key={`service-${idx}`}
          image={service.image}
          title={service.title}
          desc={service.desc}
        />
      ))}
    </div>
  );
};

export default Services;
