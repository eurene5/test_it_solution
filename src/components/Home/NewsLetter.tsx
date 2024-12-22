import { EnvelopeIcon } from "@heroicons/react/24/outline";
import BlackButton from "../buttons/BlackButton";

const Newsletter = () => {
  return (
    <div className="md:container mx-auto flex justify-between py-6 items-center relative">
      <div className="space-y-3">
        <h5 className="text-5xl text-white">La newsletter</h5>
        <p className="text-gray-200">
          Rhoncus morbi et augue nec, in id ullamcorper at sit.
        </p>
      </div>
      <form className="flex gap-3 item-center">
        <div className="flex items-center border bg-white border-gray-300 rounded-lg px-3 py-2 w-full max-w-lg">
          <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" />
          <input
            type="email"
            placeholder="Email"
            className="w-full border-none outline-none text-gray-700 placeholder-gray-400 focus:ring-0"
          />
        </div>
        <BlackButton href="#" className="font-bold">
          Envoyer
        </BlackButton>
      </form>
    </div>
  );
};

export default Newsletter;
