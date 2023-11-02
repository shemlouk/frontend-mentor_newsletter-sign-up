import IllustrationSignUpMobile from "./assets/images/illustration-sign-up-mobile.svg";
import Button from "./components/Button";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div className="font-[Roboto] w-full h-screen bg-charcoalGrey flex justify-between items-center text-darkSlateGrey">
      <div className="bg-white h-full w-full flex gap-10 flex-col">
        <img src={IllustrationSignUpMobile} alt="illustration" />

        <div className="flex-col gap-6 mx-6 pb-4 flex">
          <h1 className="font-bold text-4xl">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>

          <ul className="flex flex-col gap-2">
            <ListItem text="Product discovery and building what matters" />
            <ListItem text="Measuring to ensure updates are a success" />
            <ListItem text="And much more!" />
          </ul>

          <form className="flex flex-col gap-4">
            <label htmlFor="email" className="font-bold text-sm translate-y-2">
              Email address
            </label>
            <input
              id="email"
              required
              type="email"
              placeholder="email@company.com"
              className="rounded-lg border border-grey p-4 placeholder:text-grey outline-none"
            />
            <Button text="Subscribe to monthly newsletter" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
