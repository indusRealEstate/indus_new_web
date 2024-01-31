import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/home/home-v7/footer";
import ImgGallery from "./gallary";
import MainBanner from "./main-banner";
import Image from "next/image";
import ImgGallary from "./gallary";
import ScheduleEvent from "./event-schedule";

async function Bayz101Page() {
  const amenties = [
    "Infinity Pool",
    "Aquatic Gym",
    "Kids Play Area",
    "Floating Cinema",
    "Relaxation Zone",
    "BBQ Area",
    "Daycare Center",
    "Mini Golf",
    "Gym",
    "Open Air Yoga Platform",
    "Health Club",
  ];

  const featuresData = [
    "Golden Visa",
    "1% Monthly Payment Plan",
    "No Tax",
    "Book with only AED 25,000",
    "Only Tallest Residential Tower",
    "Next to Metro Station",
    "Purchase in Pre launch & avail Fully Furnished Apartments",
  ];
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />

      <section className="our-blog pt80 pt0-mbl">
        {/* <Details data={data} /> */}

        <div
          className="banner-wrapper main-banner-wrapper  position-relative banner-style-one"
          style={{
            maxHeight: "55rem",
          }}
        >
          <MainBanner />
        </div>

        <div className="container">
          <div className="row wrap">
            <div className="col-lg-8">
              <h2 className="title mt40">
                Seize the chance to <br />
                <b className="text-indus">Invest</b> in the most <br />
                <b className="text-indus">Dynamic Real Estate Market</b>
              </h2>
              <div className="row m0 mt20">
                <div className="col-2 maxw-70px">
                  <Image
                    src={`/images/svg/clock-svgrepo-com.svg`}
                    width={35}
                    height={35}
                    alt="clock"
                  />
                </div>
                <div className="col-10 d-flex align-items-center pl0">
                  <span className="fz25">10AM-7PM</span>
                </div>
              </div>
              <div className="row m0 mt15">
                <div className="col-2 maxw-70px">
                  <Image
                    src={`/images/svg/calendar-svgrepo-com.svg`}
                    width={35}
                    height={35}
                    alt="clock"
                  />
                </div>
                <div className="col-10 d-flex align-items-center pl0">
                  <span className="fz25">February 18, 2024</span>
                </div>
              </div>
              <div className="row m0 mt15">
                <div className="col-2 maxw-70px">
                  <Image
                    src={`/images/svg/location-pin-svgrepo-com.svg`}
                    width={35}
                    height={35}
                    alt="clock"
                  />
                </div>
                <div className="col-10 d-flex align-items-center pl0">
                  <span className="fz25">Ahmedabad, India</span>
                </div>
              </div>

              <h4 className="title mt40">AVAIL AND GET</h4>
              {featuresData.map((point, index) => (
                <div className="col-auto" key={index}>
                  <div className="list-style1">
                    <ul className="mb5">
                      <li className="mb5">
                        <i className="far fa-check text-thm3 bgc-thm3-light fz20 text-indus bg-indus-light" />
                        <p className="fz20 mb0 ml10">{point}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
              <div className="ui-content mt30 mb60">
                {/* <p className="mb25 ff-heading fz20">101 LEVELS OF LUXURY IN BUSINESS BAY, DUBAI.</p> */}
                {/* <div className="ff-heading fz20">
                  Presenting the most luxurious project in the Danube Properties
                  portfolio - BAYZ 101. One of the tallest towers in the city,
                  providing a panoramic view of the Burj Khalifa, Downtown
                  Dubai, Business Bay, Dubai Canal, Sheikh Zayed Road, Jumeirah,
                  and the shoreline. Nestled within the contemporary enclave of
                  Business Bay, distinguished by its high-rises, stylish
                  apartments, corporate offices, and opulent hotels, Bayz 101
                  stands as a refined residence. Positioned in proximity to
                  Sheikh Zayed Road and a mere two-minute stroll from the
                  Business Bay metro station, it embodies sophistication in
                  every detail.
                </div> */}
              </div>
              <h4 className="title mt40 mobile-hide">FEATURES &amp; AMENITIES</h4>
              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative mobile-hide">
                <div className="row">
                  {amenties.map((am, rowIndex) => (
                    <div key={rowIndex} className="col-sm-6 col-md-4">
                      <div className="pd-list">
                        <p key={rowIndex} className="text mb10 paragraph-theme">
                          <i className="fas fa-circle fz6 align-middle pe-2" />
                          {am}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <h4 className="title mt40">GLIMPSE OF BAYZ 101</h4>
              <ImgGallary /> */}
              <h4 className="title mt40">LOCATION</h4>
              <Image
                className="w-100 h-20 cover"
                src={"/images/bayz-101/bayz_maap.webp"}
                width={1500}
                height={800}
                alt="location-image"
              />
            </div>
            <div className="col-lg-4">
              <div className="default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative mt50">
                <h4 className="form-title mb15">Contact Us</h4>
                {/* <p className="text">Choose your preferred day</p> */}
                <ScheduleEvent />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4-2 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
}

export default Bayz101Page;