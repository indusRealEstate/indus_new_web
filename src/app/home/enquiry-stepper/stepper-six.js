"use client";

import OfferForm from "./offer-form";

const StepperSix = ({ activeStep, size, handleFunctions }) => {
  return (
    <>
      {/* <div
        className="d-flex justify-content-between"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <span className="fz19 fw500">
          What is your primary goal for this property?
        </span>
        <span>
          <b className="clr-green mr5">{Math.ceil((activeStep / 6) * 100)}%</b> Completed
        </span>
      </div> */}
      <div
        className="w-100 h20rem d-flex align-items-center"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <div className="w-100">
          <p>Great, that&apos;s it! You&apos;re almost done...</p>
          <div className="last-stepper-progress">
            <span className="part-1"></span>
          </div>
          <span className="last-stepper-progres-perc">
            <b>{Math.ceil((activeStep / 6) * 100)}%</b>
          </span>
          <h4 className="mt20">
            Where should we send your personalized offer?
          </h4>
          {size.width > 500 ? (
            <span className="last-stepper-arrow">
              <svg
                data-v-2be8f1c4=""
                width="64"
                height="64"
                viewBox="0 0 64 64"
                enable-background="new 0 0 64 64"
              >
                <g data-v-2be8f1c4="">
                  <path
                    data-v-2be8f1c4=""
                    d="m63.386,16.193l.002-.002c0.002-0.003 0.004-0.006 0.006-0.01 0.172-0.195 0.298-0.43 0.399-0.678 0.032-0.076 0.053-0.148 0.076-0.225 0.058-0.191 0.094-0.389 0.106-0.596 0.006-0.076 0.018-0.148 0.016-0.226 0-0.04 0.01-0.076 0.008-0.115-0.014-0.239-0.062-0.47-0.136-0.687-0.006-0.023-0.022-0.041-0.03-0.064-0.088-0.239-0.214-0.451-0.363-0.645-0.021-0.027-0.028-0.063-0.05-0.09l-10.311-12.146c-0.789-0.93-2.084-0.948-2.894-0.037-0.808,0.91-0.823,2.402-0.032,3.334l5.558,6.549c-8.121-1.076-16.104,0.633-16.481,0.717-24.646,4.467-42.087,27.227-38.88,50.736 0.159,1.164 1.028,1.992 2.019,1.992 0.106,0 0.212-0.009 0.32-0.027 1.116-0.203 1.878-1.409 1.704-2.696-2.857-20.94 13.056-41.282 35.537-45.358 0.103-0.024 8.351-1.794 16.117-0.574l-8.577,5.093c-1.005,0.598-1.398,2.02-0.881,3.177 0.516,1.159 1.748,1.608 2.756,1.017l13.52-8.028c0.183-0.111 0.347-0.25 0.491-0.411z"
                  ></path>
                </g>
              </svg>
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
      {size.width < 500 ? (
        <OfferForm handleFunctions={handleFunctions}/>
      ) : (
        <></>
      )}
    </>
  );
};

export default StepperSix;
