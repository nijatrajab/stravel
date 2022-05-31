import CardInside from "./CardInsideUtils";
import Card from "../../../UI/Card";

const CardUtils = ({img, clsName, navIdx}) => {
  const mainCard = (navIdx !== null && navIdx !== undefined) ? (
        <Card>
          <CardInside
            toCity={img.toCity}
            imgTitle={img.title}
            imgDiscount={img.discount}
            imgDiscountPercent={img.discountPercent}
            imgSpecial={img.special}
            clsNameDivStyle={clsName.divStyle}
            clsNameImgStyle={clsName.imgStyle}
            clsNameFooter={clsName.cardFooter}
            navIdx={navIdx}
          />
        </Card>
      ) : (
        <CardInside
        toCity={img.toCity}
          imgTitle={img.title}
          imgPlace={null}
          clsNameDivStyle={clsName.divStyle}
          clsNameImgStyle={clsName.fadeImgStyle}
          clsNameFooter={null}
          navIdx={navIdx}
        />
      );
  return mainCard;
};

export default CardUtils;
