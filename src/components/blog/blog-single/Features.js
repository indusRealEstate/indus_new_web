import React from "react";

const Features = ({ features }) => {
  const featuresData = [
    {
      points: [
        "Passport copy",
        "Residence visa copy",
        "Emirates ID copy",
        "Security deposit cheque",
        "Agency fee cheque",
      ],
    },
    {
      points: [
        "Original signed tenancy contract",
        "Copy of title deed",
        "Power of Attorney (POA) if needed",
        "Passport and Emirates ID copy of landlord",
      ],
    },
  ];
  return (
    <>
      {featuresData.map((featureSection, index) => (
        <div className="col-auto" key={index}>
          <div className="ui-content">
            <div className="list-style1">
              <ul>
                {featureSection.points.map((point, pointIndex) => (
                  <li key={pointIndex}>
                    <i className="far fa-check text-thm3 bgc-thm3-light fz20" />
                    <p className="fz20 mb0 ml10">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
