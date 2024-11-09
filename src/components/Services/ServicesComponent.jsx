import Link from "next/link";
import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";

const ServicesComponent = () => {
  const services = [
    {
      title: "DGFT",
      items: [
        "IEC Certificate",
        "EPCG",
        "Advance License",
        "Star Export House",
        "MEIS",
        "SEIS",
        "RoSCTL",
        "RoDTEP",
      ],
    },
    {
      title: "FSSAI License",
      items: [
        "FSSAI Registration",
        "FSSAI State License",
        "FSSAI Central License",
        "Modification of License and Registration",
        "Renewal FSSAI License and Registration",
      ],
    },
    {
      title: "ISO Certificate",
      items: ["ISO 9001", "ISO 22000", "ISO 14001", "ISO 45001", "HACCP"],
    },
    {
      title: "Export Documentation",
      items: ["Pre-shipment Export Document", "Post Shipment Export Document"],
    },
    {
      title: "Digital Signature",
      items: ["Digital Signature Certificate", "Renewal Digital Signature"],
    },
    {
      title: "GST",
      items: ["GST Return", "GST Registration"],
    },
    { title: "Accounting", items: ["Book Keeping", "Income Tax Return"] },
    { title: "LEI Services", items: ["Apply LEI Certificate"] },
    { title: "Trade Mark", items: ["Trademark Registration"] },
    { title: "COO Application", items: [] },
    { title: "RCMC", items: [] },
    { title: "AEO Certificate", items: [] },
    {
      title: "Other Registration and Certificate",
    },
  ];

  return (
    <div className="mx-auto w-full m-auto container my-10 p-4">
      <h2 className="text-3xl font-bold mb-7 text-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6">
        {services.map((service, index) => (
          <div key={index} className="bg-[#15356308] p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            {service?.items && (
              <ul className="list-disc">
                {service?.items?.map((item, idx) => {
                  if (item == "Apply LEI Certificate") {
                    return (
                      <Link href="/lei-certificate" key={idx}>
                        <li key={idx} className="flex items-center gap-2 hover:list-inside hover:font-semibold cursor-pointer duration-200">
                          <RiArrowRightSFill />
                          <span>{item}</span>
                        </li>
                      </Link>
                    );
                  }
                  return (
                    <li key={idx} className="flex items-center gap-2 hover:list-inside hover:font-semibold cursor-pointer duration-200">
                      <RiArrowRightSFill />
                      {item}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;
