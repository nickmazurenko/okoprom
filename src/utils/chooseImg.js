import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";

export const chooseImg = (id, setImg) => {
  switch (id) {
    case 1:
      setImg(item1);
      break;
    case 2:
      setImg(item2);
      break;
    case 3:
      setImg(item3);
      break;
    default:
      break;
  }
};
