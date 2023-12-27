"use client";
import React, { useEffect, useRef, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";
import { Dialog } from "@mui/material";
import Image from "next/image";
import CommonDialog from "@/components/common/common-form";
import { getAllIndusBanners } from "@/api/listings";

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

const CookieConsent = (props) => {
  const size = useWindowSize();
  const [showConsent, setShowConsent] = useState(true);

  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [alertDialogImg, setAlertDialogImg] = useState("");

  const handleClose = () => {
    setOpenAlertDialog(false);
  };

  const handleOpen = () => {
    setOpenAlertDialog(true);
  };

  const commonDialog = useRef();

  const openCommonDialog = () => {
    handleClose();
    commonDialog.current?.handleOpen();
  };

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
    getAllIndusBanners()
      .then((res) => {
        setAlertDialogImg(res[0]);
      })
      .finally(() => {
        setTimeout(() => {
          if (!hasCookie("banner")) {
            handleOpen();
            setCookie("banner", "true", {});
          }
        }, 5000);
      });
  };

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  if (showConsent) {
    return (
      <>
        <Dialog onClose={handleClose} open={openAlertDialog} maxWidth="md">
          <button
            type="button"
            className="btn-close close-btn-alert-banner"
            onClick={handleClose}
          />
          <Image
            // width={900}
            // height={641}
            width={size.width > 500 ? 900 : 420}
            height={size.width > 500 ? 641 : 299}
            className={`w-100`}
            src={alertDialogImg.image}
            alt={`img`}
          />
          <button
            className="custom-btn-alert-banner"
            onClick={openCommonDialog}
          >
            Contact Now
          </button>
        </Dialog>

        <CommonDialog ref={commonDialog} />
      </>
    );
  }

  return (
    <>
      <div className="cookies-dialog">
        <div className="container">
          <div className="d-flex justify-content-center my40">
            <span className="text-dark fz20 lh-base cookies-dialog-mbl-text">
              This website uses cookies to improve user experience. By using our
              website you consent to all cookies in accordance with our Cookie
              Policy.
            </span>
            <button
              className="ud-btn btn-dark bdrs0 w-170 cookies-dialog-mbl-btn"
              onClick={() => acceptCookie()}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;