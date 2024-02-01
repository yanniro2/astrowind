import React from "react";
import footerData from "../../data/footerData.json";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

// Define types for the California Audio Technology footer data
type ContactInformation = {
  address: string;
  email: string;
  phone: string;
};

type Services = {
  audioSystems: string;
  studioDesign: string;
  customIntegration: string;
  calibrationServices: string;
};

type SocialMedia = {
  facebook: {
    url: string;
    icon: string;
  };
  twitter: {
    url: string;
    icon: string;
  };
  instagram: {
    url: string;
    icon: string;
  };
  linkedin: {
    url: string;
    icon: string;
  };
};

type Newsletter = {
  label: string;
  emailPlaceholder: string;
};

type FooterData = {
  contactInformation: ContactInformation;
  services: Services;
  socialMedia: SocialMedia;
  newsletter: Newsletter;
};

type Props = {};

const Footer: React.FC<Props> = () => {
  const { contactInformation, services, socialMedia }: FooterData =
    footerData.footer;

  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  // Helper function to get the React Icon component based on the icon name
  const getIconComponent = (iconName: string) => {
    const iconComponents: { [key: string]: React.ElementType } = {
      FaFacebook,
      FaTwitter,
      FaInstagram,
      FaLinkedin,
      // Add more icon components as needed
    };

    return iconComponents[iconName] || null;
  };

  return (
    <div className="w-screen bg-secound  text-dark font-lato  lg:h-max flex items-end justify-end h-max p-5 bg-gray-100 pt-[4rem]">
      <div className="container mx-auto p-3 lg:p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p>{contactInformation.address}</p>
            <p>Email: {contactInformation.email}</p>
            <p>Phone: {contactInformation.phone}</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <p>{services.audioSystems}</p>
            <p>{services.studioDesign}</p>
            <p>{services.customIntegration}</p>
            <p>{services.calibrationServices}</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
            <div className="flex items-center space-x-4">
              {Object.entries(socialMedia).map(([platform, { url, icon }]) => {
                const IconComponent = getIconComponent(icon);
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer">
                    <IconComponent className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-600" />
        <p className="font-semibold">
          All Rights Reserved California Audio Technology © {currentYear}
        </p>

        {/* Newsletter */}
        {/* <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">{newsletter.label}</h3>
          <input
            type="email"
            placeholder={newsletter.emailPlaceholder}
            className="bg-gray-700 text-white rounded-md p-2 w-min"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
