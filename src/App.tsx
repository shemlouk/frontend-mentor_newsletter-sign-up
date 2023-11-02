import IconList from "./assets/images/icon-list.svg";
import IllustrationSignUpMobile from "./assets/images/illustration-sign-up-mobile.svg";

function App() {
  return (
    <div className="font-[Roboto] w-full h-screen bg-charcoalGrey flex justify-between items-center text-darkSlateGrey">
      <div className="bg-white h-full w-full flex gap-10 flex-col">
        <img src={IllustrationSignUpMobile} alt="illustration" />

        <div className="flex-col gap-6 mx-6 pb-4 flex">
          <h1 className="font-bold text-4xl">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>

          <ul className="flex flex-col gap-2">
            <li className="flex gap-4 items-start">
              <img src={IconList} alt="check icon" />
              <p>Product discovery and building what matters</p>
            </li>
            <li className="flex gap-4 items-start">
              <img src={IconList} alt="check icon" />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li className="flex gap-4 items-start">
              <img src={IconList} alt="check icon" />
              <p>And much more!</p>
            </li>
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
            <input
              type="submit"
              value="Subscribe to monthly newsletter"
              className="font-bold text-white p-4 bg-darkSlateGrey rounded-lg"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
