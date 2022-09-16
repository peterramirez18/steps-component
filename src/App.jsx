import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className=" bg-slate-100 w-full h-screen flex justify-center items-center">
      <div className=" bg-white w-[500px] rounded-lg p-10 flex flex-col gap-y-5">
        <div className=" flex justify-between mb-10">
          <Step step={1} currentStep={currentStep} />
          <Step step={2} currentStep={currentStep} />
          <Step step={3} currentStep={currentStep} />
          <Step step={4} currentStep={currentStep} />
          <Step step={5} currentStep={currentStep} />
        </div>

        {currentStep === 1 ? (
          <div className=" flex flex-col gap-y-3">
            <div className=" line w-1/4"></div>
            <div className=" line w-full"></div>
            <div className=" line w-2/4"></div>
          </div>
        ) : currentStep === 2 ? (
          <div className=" flex flex-col gap-y-3">
            <div className=" line w-full"></div>
            <div className=" line w-full"></div>
            <div className=" line w-3/4"></div>
          </div>
        ) : currentStep === 3 ? (
          <div className=" flex flex-col gap-y-3">
            <div className=" line w-1/4"></div>
            <div className=" line w-full"></div>
            <div className=" line w-2/4"></div>
          </div>
        ) : currentStep === 4 ? (
          <div className=" flex flex-col gap-y-3">
            <div className=" line w-full"></div>
            <div className=" line w-full"></div>
            <div className=" line w-3/4"></div>
          </div>
        ) : currentStep === 5 ? (
          <div className=" flex flex-col gap-y-3">
            <div className=" line w-1/4"></div>
            <div className=" line w-full"></div>
            <div className=" line w-2/4"></div>
          </div>
        ) : (
          <div>
            <span className=" text-white bg-green-300 p-2 rounded-full px-3">
              Form Completed
            </span>
          </div>
        )}
        <div className=" mt-10 flex justify-between">
          <button
            onClick={() => setCurrentStep((currentStep) => currentStep - 1)}
          >
            Back
          </button>
          <button
            onClick={() => setCurrentStep((currentStep) => currentStep + 1)}
            className=" bg-blue-500 hover:bg-blue-400 px-3 rounded-full text-white py-2"
          >
            {currentStep > 5 ? "Send" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

function Step({ step, currentStep }) {
  let status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inative"
      : "completed";

  return (
    <div className=" relative">
      <motion.div
        animate={status}
        variants={{
          inative: { scale: 0 },
          active: { scale: 0, opacity: 1 },
          completed: { scale: 1.2, opacity: 0 },
        }}
        className=" absolute inset-0 bg-blue-500 scale-125 rounded-full"
      ></motion.div>
      <motion.div
        animate={status}
        variants={{
          active: {
            color: "#3B82F6",
            borderColor: "#3B82F6",
            backgroundColor: "#FFF",
          },
          inative: {
            color: "#949494",
            backgroundColor: "#FFF",
            borderColor: "#adadad",
          },
          completed: {
            color: "#FFF",
            backgroundColor: "#3B82F6",
            borderColor: "#3B82F6",
          },
        }}
        className=" flex relative justify-center items-center w-12 h-12 rounded-full border-2 border-black"
      >
        {status === "completed" ? <CheckIcon /> : <span>{step}</span>}
      </motion.div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5 }}
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default App;
