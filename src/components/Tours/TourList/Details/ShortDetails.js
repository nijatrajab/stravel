
import ShortDetail from "./ShortDetail";


const ShortDetails = ({ children, className, mainTour }) => {
  return (
    <>
      <ShortDetail
        delay={1}
        className={className}
        isType={"star"}
        valueProp={mainTour.star}
      />
      <ShortDetail delay={2} className={className} valueProp={mainTour.desc} isType={"description"} />
      {mainTour.discount && (
        <ShortDetail
          delay={3}
          className={className}
          isType={"special"}
          valueProp={mainTour.discountEndsText}
        />
      )}
      {mainTour.special && (
        <ShortDetail
          delay={3}
          className={className}
          isType={"special"}
          valueProp={mainTour.specialText}
        />
      )}
    </>
  );
};

export default ShortDetails;
