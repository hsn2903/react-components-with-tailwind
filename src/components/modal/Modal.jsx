import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {/* hero */}
      <header className="min-h-screen grid place-items-center">
        {/* banner */}
        <div className="bg-white py-16 px-0 rounded-lg shadow-lg w-[90vw] text-center max-w-3xl flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-600">Modal Project</h1>
          <button
            type="button"
            className="px-4 py-2 rounded-sm shadow-md bg-indigo-600 text-white self-center"
            onClick={() => setOpenModal(true)}
          >
            Open Modal
          </button>
        </div>
      </header>

      <div
        className={`fixed z-10 inset-0 overflow-y-auto transition grid place-content-center ${
          openModal ? "visible" : "invisible"
        }`}
      >
        {/* overlay */}
        <div
          className="absolute inset-0 bg-gray-500 opacity-75 z-10 backdrop-blur-sm"
          onClick={() => setOpenModal(false)}
        ></div>

        {/* modal content */}
        <div className="inline-block align-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full relative z-50 p-8">
          <button
            class="absolute top-3 right-3 text-2xl text-red-600 border-transparent bg-transparent transition-all hover:transform hover:rotate-3 hover:scale-110 bg-slate-100 p-1 rounded-full"
            onClick={() => setOpenModal(false)}
          >
            <IoCloseOutline size={28} />
          </button>

          <div className="flex flex-col items-center justify-center p-4 gap-4">
            <h3 className="text-2xl font-bold text-gray-700">
              I&apos;am modal 😀
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
