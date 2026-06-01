import { Link } from "react-router";
import logo from "../../assets/logo.png";

function Logo({
  width = "40px",
  textSize = "text-3xl",
  marginStart = "ms-0",
  marginBottom = "mb-0",
}) {
  return (
    <Link to="/" className={`${marginStart} ${marginBottom} flex items-end`}>
      <img src={logo} alt="logo" style={{ width }} className="h-auto" />
      <h3 className={`${textSize} text-3xl font-bold md:-ml-4 -ml-4`}>zapShift</h3>
    </Link>
  );
}

export default Logo;
