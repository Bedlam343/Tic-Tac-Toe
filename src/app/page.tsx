"use client";
import { BackgroundBeams } from "../components/background-beams";
import TicTacToe from "../components/tic-tac-toe";

const App = () => {
  return (
    <div>
      {/* <div onClick={() => console.log("geuygy")} className="z-10">
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
      </div> */}
      <TicTacToe />
      <BackgroundBeams />
    </div>
  );
};

export default App;
