import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <section
      className="our-cta bgc-dark pt90 pb90 pt60-md pb60-md"
      data-aos="fade"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-xl-6">
            <div className="cta-style3">
              <h2 className="cta-title text-white">
                Become a Real Estate Agent
              </h2>
              <p className="cta-text mb25 text-white">
                Get in touch with one of the fastest emerging real estate
                agencies in Dubai.
              </p>
              <Link href="/career" className="ud-btn btn-white bdrs0">
                Contact Now <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
          </div>
          {/* End .col-lg-7 */}

          <div className="col-lg-5 col-xl-4 offset-xl-2 d-none d-lg-block">
            <div className="cta-img">
              <Image
                width={255}
                height={415}
                priority
                className="w-100 h-100 cover"
                src="https://indusspeciality.com/api/assets/images/agents/become-agent.webp"
                alt="cta memeber"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
