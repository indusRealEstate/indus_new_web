"use client";
import { Fab } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import OfferForm from "./offer-form";
import StepperFive from "./stepper-five";
import StepperFour from "./stepper-four";
import StepperOne from "./stepper-one";
import StepperSeven from "./stepper-seven";
import StepperSix from "./stepper-six";
import StepperThree from "./stepper-three";
import StepperTwo from "./stepper-two";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const useStyles = makeStyles({
  root: {
    "& .MuiLinearProgress-root": {
      height: "15px",
      borderRadius: "5px",
      backgroundColor: "#dbdbdb",
      "& .MuiLinearProgress-bar": {
        borderRadius: "5px",
        backgroundColor: "#09B07E",
      },
    },
  },
});

const EnquiryForm = () => {
  const size = useWindowSize();
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [selectedOne, setselectedOne] = useState();
  const [selectedTwo, setselectedTwo] = useState();
  const [selectedThree, setselectedThree] = useState();
  const [selectedFour, setselectedFour] = useState();
  const [selectedFive, setselectedFive] = useState();

  const resetForm = () => {
    setActiveStep(0);
    setselectedOne();
    setselectedTwo();
    setselectedThree();
    setselectedFour();
    setselectedFive();
  };

  const handleFunctions = {
    handleNext,
    resetForm,
  };

  const stepperFunctions = {
    setselectedOne,
    setselectedTwo,
    setselectedThree,
    setselectedFour,
    setselectedFive,
    selectedOne,
    selectedTwo,
    selectedThree,
    selectedFour,
    selectedFive,
  };

  const closeForm = () => {
    setOpen(false);
    resetForm();
    router.push("/all-properties");
  };

  const getStepper = (step) => {
    switch (step) {
      case 0:
        return (
          <StepperOne
            activeStep={activeStep}
            functions={stepperFunctions}
            size={size}
          />
        );
      case 1:
        return (
          <StepperTwo
            activeStep={activeStep}
            functions={stepperFunctions}
            size={size}
          />
        );
      case 2:
        return (
          <StepperThree
            activeStep={activeStep}
            functions={stepperFunctions}
            size={size}
          />
        );
      case 3:
        return (
          <StepperFour
            activeStep={activeStep}
            functions={stepperFunctions}
            size={size}
          />
        );
      case 4:
        return (
          <StepperFive
            activeStep={activeStep}
            functions={stepperFunctions}
            size={size}
          />
        );
      case 5:
        return (
          <StepperSix
            activeStep={activeStep}
            size={size}
            handleFunctions={handleFunctions}
          />
        );
      case 6:
        return (
          <StepperSeven
            activeStep={activeStep}
            size={size}
            handleFunctions={handleFunctions}
          />
        );
      default:
        break;
    }
  };

  const getCurrentSelection = (active) => {
    switch (active) {
      case 0:
        return selectedOne;
      case 1:
        return selectedTwo;
      case 2:
        return selectedThree;
      case 3:
        return selectedFour;
      case 4:
        return selectedFive;
      default:
        break;
    }
  };

  const getAgentComment_one = (active) => {
    switch (active) {
      case 1:
        return "Apartment, villa or a townhouse, it's a matter of taste.";
      case 2:
        return "All properties are equipped with high-class amenities which provide ultimate level of comfort and harmony.";
      case 3:
        return "We will recommend best options according to your budget.";
      case 4:
        return "Dubai is the city where lifestyles collide.";
      case 6:
        return "We will contact you soon.";
      default:
        break;
    }
  };

  const getAgentComment_two = (active) => {
    switch (active) {
      case 1:
        return "Select one option you are interested in.";
      case 2:
        return "Select the preferred size of your property.";
      case 3:
        return "Set the price range that matches your preferred budget.";
      case 4:
        return "Select the lifestyle you'd like to live in Dubai.";
      case 6:
        return "Feel free to browse our properties";
      default:
        break;
    }
  };

  const fabStyle = {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    transition: "200ms all ease-in-out",
  };

  const [openFab, setOpenFab] = useState(false);

  const toggleFab = () => {
    openFab ? setOpenFab(false) : setOpenFab(true);
  };

  useEffect(() => {
    setTimeout(() => {
      toggleFab();
    }, 3000);
  }, []);

  return (
    <>
      
      <Fab
        sx={fabStyle}
        aria-label={"plus"}
        color={"primary"}
        onClick={toggleFab}
        className={`${openFab ? "rt-45" : ""}`}
      >
        <span className="fa fa-plus fz20"></span>
      </Fab>
      {openFab ? (
        <>
          {size.width > 500 ? (
            <div
              className="enq-more-btn"
              data-bs-toggle="offcanvas"
              data-bs-target="#SidebarPanel"
              aria-controls="SidebarPanelLabel"
            >
              More
            </div>
          ) : (
            <></>
          )}
          <a
            className="enq-whtsp-btn"
            href="https://wa.me/971080046387"
            target="_blank"
          >
            <span className="fab fa-whatsapp fz17 mr5"></span> Whatsapp
          </a>
          <div className="enq-btn" onClick={handleClickOpen}>
            Free consultation
          </div>
        </>
      ) : (
        <></>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        fullScreen={size.width < 500}
        maxWidth={"lg"}
      >
        <span
          className="close-stepper-dialog btn-close"
          onClick={handleClose}
        ></span>
        <div
          className={`${
            (size.width < 500 && activeStep == 2) ||
            (size.width < 500 && activeStep == 3) ||
            (size.width < 500 && activeStep == 5)
              ? "h-100"
              : ""
          } col-12 row m-0 enq-form`}
        >
          <div
            className={`${
              size.width > 500
                ? activeStep === 5
                  ? "col-6"
                  : "col-8"
                : "col-12"
            } p-0 pt-1`}
          >
            <div className="app-bar d-flex">
              <svg viewBox="0 0 24 24" className="app-bar-icon">
                <title>mdi-file-document-box-check-outline</title>
                <path
                  fill-rule="nonzero"
                  stroke-width="0"
                  d="M17,21L14.25,18L15.41,16.84L17,18.43L20.59,14.84L21.75,16.25M12.8,21H5C3.89,21 3,20.11 3,19V5C3,3.89 3.89,3 5,3H19C20.11,3 21,3.89 21,5V12.8C20.39,12.45 19.72,12.2 19,12.08V5H5V19H12.08C12.2,19.72 12.45,20.39 12.8,21M12,17H7V15H12M14.68,13H7V11H17V12.08C16.15,12.22 15.37,12.54 14.68,13M17,9H7V7H17"
                ></path>
              </svg>

              <span className="ml10 clr-grey fw600">
                Let&apos;s find your ideal property in Dubai
              </span>
            </div>
            <div
              className={`${
                (size.width < 500 && activeStep == 2) ||
                (size.width < 500 && activeStep == 3) ||
                (size.width < 500 && activeStep == 5)
                  ? "h-80"
                  : ""
              } stepper`}
            >
              {getStepper(activeStep)}
            </div>
            {activeStep !== 6 ? (
              <div className="stepper-progress">
                {activeStep === 5 ? (
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    className={activeStep !== 0 ? "text-indus" : ""}
                  >
                    {theme.direction === "rtl" ? (
                      <i className="mr5 far fa-chevron-right"></i>
                    ) : (
                      <i className="mr5 far fa-chevron-left"></i>
                    )}
                    Back
                  </Button>
                ) : (
                  <MobileStepper
                    variant="progress"
                    steps={7}
                    position="static"
                    activeStep={activeStep}
                    className={classes.root}
                    nextButton={
                      <Button
                        size="small"
                        onClick={handleNext}
                        disabled={
                          activeStep === 6 ||
                          getCurrentSelection(activeStep) === undefined
                        }
                        className={
                          activeStep !== 6 &&
                          getCurrentSelection(activeStep) !== undefined
                            ? "text-indus"
                            : ""
                        }
                      >
                        Next
                        {theme.direction === "rtl" ? (
                          <i className="ml5 far fa-chevron-left"></i>
                        ) : (
                          <i className="ml5 far fa-chevron-right"></i>
                        )}
                      </Button>
                    }
                    backButton={
                      <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        className={activeStep !== 0 ? "text-indus" : ""}
                      >
                        {theme.direction === "rtl" ? (
                          <i className="mr5 far fa-chevron-right"></i>
                        ) : (
                          <i className="mr5 far fa-chevron-left"></i>
                        )}
                        Back
                      </Button>
                    }
                  />
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
          {size.width > 500 ? (
            <div className={`${activeStep === 5 ? "col-6" : "col-4"} pt-2`}>
              {activeStep != 5 ? (
                <div className="row m-0 p10">
                  <div className="col-4 pl0">
                    <Image
                      src="https://www.indusre.com/agentimg/m-031d589f607631ab513e028cf8f4734b.jpg"
                      width={100}
                      height={100}
                      alt="img"
                      className="stepper-avatar cover"
                    />
                    <span className="online-green-dot"></span>
                  </div>
                  <div className="col-8 d-flex align-items-center pr0">
                    <div>
                      <p className="mb0 fz14 fw600 lh-sm">Narayan Nihalani</p>
                      <p className="mb0">Sales Manager</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p60 h-100">
                  <OfferForm handleFunctions={handleFunctions} />
                </div>
              )}
              {activeStep == 1 ||
              activeStep == 2 ||
              activeStep == 3 ||
              activeStep == 4 ||
              activeStep == 6 ? (
                <div className="px20" data-aos="fade-up" data-aos-delay="0">
                  <div className="agent-message-chat">
                    <p>{getAgentComment_one(activeStep)}</p>
                    <p>
                      <i>
                        <strong>{getAgentComment_two(activeStep)}</strong>
                      </i>
                    </p>
                    {activeStep == 6 ? (
                      <button
                        className="mb10 stepper-progres-finished-browse-btn"
                        onClick={closeForm}
                      >
                        View Properties
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default EnquiryForm;
