export type SharedEnquiryContactItem = {
  label: string;
  value: string;
};

export type SharedEnquiryConfig = {
  heading: string;
  description: string;
  contactItems: SharedEnquiryContactItem[];
  officeHours: {
    title: string;
    weekday: string;
    sunday: string;
  };
  formTitle: string;
  submitButton: string;
  interestOptions: string[];
};

export const sharedEnquiryConfig: SharedEnquiryConfig = {
  heading: "Begin Your Journey Home",
  description:
    "Our dedicated sales consultants are here to guide you through every step - from choosing the right plot to completing your paperwork.",
  contactItems: [
    { label: "Sales Hotline", value: "+92 (51) 000-0000" },
    { label: "Email Us", value: "info@parkviewcity.com.pk" },
    { label: "Visit Office", value: "Bani Gala Road, Islamabad" },
  ],
  officeHours: {
    title: "Office Hours",
    weekday: "Mon - Sat: 9:00 AM - 7:00 PM",
    sunday: "Sunday: 10:00 AM - 5:00 PM",
  },
  formTitle: "Send an Enquiry",
  submitButton: "Submit Enquiry",
  interestOptions: [
    "Residential Plot",
    "Commercial Plot",
    "Apartment",
    "Payment Plan",
    "ParkView City Lahore",
    "ParkView City Islamabad",
    "ParkView City UK",
    "General Enquiry",
  ],
};
