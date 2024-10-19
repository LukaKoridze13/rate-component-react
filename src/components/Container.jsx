import "./Container.css";
import Heading from "./Heading";
import Star from "./Star";
import Text from "./Text";

const Container = () => {
  return (
    <div className="container">
      <Star />
      <Heading />
      <Text />
    </div>
  );
};

export default Container;
