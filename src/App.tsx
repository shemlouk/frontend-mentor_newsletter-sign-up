import { signal } from "@preact/signals-react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import IllustrationSignUpDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import IllustrationSignUpMobile from "./assets/images/illustration-sign-up-mobile.svg";
import Button from "./components/Button";
import ListItem from "./components/ListItem";

const DESKTOP_SCREEN_WIDTH = 768;
const screenWidth = signal(window.innerWidth);

window.addEventListener("resize", () => {
  screenWidth.value = window.innerWidth;
});

const email = signal("");

function App() {
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      if (email.value) navigate("/done");
    },
    [navigate]
  );

  return (
    <div className="font-[Roboto] w-full h-screen bg-charcoalGrey flex text-darkSlateGrey justify-center items-center">
      <div className="bg-white h-full w-full flex gap-10 flex-col md:h-[600px] md:w-[900px] md:rounded-3xl md:flex-row-reverse md:items-center md:p-6">
        <img
          src={
            screenWidth.value >= DESKTOP_SCREEN_WIDTH
              ? IllustrationSignUpDesktop
              : IllustrationSignUpMobile
          }
          alt="illustration"
          className="md:h-full"
        />

        <div className="flex-col gap-6 mx-6 pb-4 flex">
          <h1 className="font-bold text-4xl md:text-5xl">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>

          <ul className="flex flex-col gap-2">
            <ListItem text="Product discovery and building what matters" />
            <ListItem text="Measuring to ensure updates are a success" />
            <ListItem text="And much more!" />
          </ul>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-4">
            <fieldset className="flex flex-col gap-2 invalid:before:content-['Valid_email_required'] before:text-sm before:text-red-500 before:font-bold relative before:absolute before:right-0">
              <label htmlFor="email" className="font-bold text-sm">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="email@company.com"
                onChange={(e) => (email.value = e.currentTarget.value)}
                className="rounded-lg border border-grey p-4 placeholder:text-grey outline-none invalid:bg-red-50 invalid:border-red-500 invalid:text-red-500 invalid:placeholder:text-red-500"
              />
            </fieldset>
            <Button
              text="Subscribe to monthly newsletter"
              disabled={!email.value}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
