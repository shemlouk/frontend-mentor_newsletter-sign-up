import { Link } from "react-router-dom";
import IconSuccess from "../assets/images/icon-success.svg";
import Button from "../components/Button";

function Done() {
  return (
    <div className="w-full h-screen px-4 pb-8 text-darkSlateGrey flex flex-col justify-between">
      <div className="flex flex-col gap-6 mt-24">
        <img src={IconSuccess} alt="success icon" className="w-16" />
        <h1 className="font-bold text-4xl">Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>email</strong>. Please
          open it and click the button inside to confirm your subscription
        </p>
      </div>

      <Link to="/">
        <Button text="Dismiss message" />
      </Link>
    </div>
  );
}

export default Done;
