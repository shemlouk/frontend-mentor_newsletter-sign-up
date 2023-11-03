import { Link } from "react-router-dom";
import IconSuccess from "../assets/images/icon-success.svg";
import Button from "../components/Button";
import { email } from "../contexts/email";

function Done() {
  return (
    <div className="font-[Roboto] w-full h-screen bg-charcoalGrey flex text-darkSlateGrey justify-center items-center">
      <div className="w-full bg-white h-screen px-4 pb-8 text-darkSlateGrey flex flex-col justify-between md:h-[500px] md:w-[500px] md:rounded-3xl md:p-14">
        <div className="flex flex-col gap-6 mt-24 md:mt-0 md:gap-8">
          <img src={IconSuccess} alt="success icon" className="w-16" />
          <h1 className="font-bold text-4xl md:text-5xl">
            Thanks for subscribing!
          </h1>
          <p>
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>

        <Link to="/">
          <Button text="Dismiss message" onClick={() => (email.value = "")} />
        </Link>
      </div>
    </div>
  );
}

export default Done;
