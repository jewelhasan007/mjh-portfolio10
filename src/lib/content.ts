/**
 * Website content configuration
 * Jewel Hasan Portfolio
 */


// ==========================
// Site Information
// ==========================

export const site = {

  name: "Jewel Hasan",

  initials: "JH",

  title:
    "Jewel Hasan - Developer & Designer",

  description:
    "Web Developer & UI-UX Designer",

  url:
    "https://jewelhasan.vercel.app",

  email:
    "jewelhasan.eee@outlook.com",

  linkedin:
    "https://www.linkedin.com/in/jewel-hasan-4508b21b1/",

  copyright:
    "Copyright © 2025 - Designed & Built by Jewel Hasan",

  lastUpdated:
    "Wednesday, 04/06/2025",

};



// ==========================
// Roles
// ==========================

export const roles = [

  "Web Developer",

  "Full Stack Developer",

  "MERN Stack Developer",

  "Digital Marketer",

  "Shopify Expert",

  "Amazon Product Research Expert(FBA)",

];




// ==========================
// Hero
// ==========================

export const hero = {

  eyebrow:
    "Available for new project",

  headline:
    [
      "Innovative Solutions",
      "For Digital Excellence",
    ],

  cta:
    "Book a Call",

};




// ==========================
// About
// ==========================

export const about = {

  heading:
    "Who am I?",


  items:[

    {
      title:"Web Developer"
    },

    {
      title:"A passionate Digital Marketer"
    },

    {
      title:"Shopify Expert"
    },

    {
      title:"Amazon FBA Expert"
    },

    {
      title:"Grow Your Business"
    },

  ],

};




// ==========================
// Technologies
// ==========================

export const technologies = {

  heading:
    "Technologies I Use",


  items:[

    {
      name:"HTML"
    },

    {
      name:"CSS"
    },

    {
      name:"Tailwind CSS"
    },

    {
      name:"JavaScript"
    },

    {
      name:"React"
    },

    {
      name:"Next.js"
    },

    {
      name:"MongoDB"
    },

    {
      name:"PostgreSQL"
    },


  ],

};




// ==========================
// Contact
// ==========================


export const contact = {


  heading:
    "Let's Contact",


  subheading:
    "Get in Touch",


  blurb:
    "Always up for new opportunities, collabs, or idea exchanges. Reach out through any of these channels and I'll get back to you ASAP!",


  channels:[

    {
      label:"Email",

      value:site.email,

      href:`mailto:${site.email}`,
    },


    {
      label:"LinkedIn",

      value:"@LinkedIn",

      href:site.linkedin,
    },

  ],


};





// ==========================
// Projects Type
// ==========================


export type Project = {


  title:string;


  description:string;


  image:string;



  liveUrl?:string;


  repoUrl?:string;



  featured?:boolean;



  category:

    | "Landing Page"

    | "Website"

    | "E-commerce"

    | "Portfolio"

    | "Shopify";




  industry:

    | "Plumbing"

    | "Car Service"

    | "Parlour"

    | "Digital Agency"

    | "Doctor"

    | "Consultant"

    | "Pet Service"

    | "Real Estate";




  tech:string[];

};






// ==========================
// Portfolio Projects
// ==========================


export const projects:Project[] = [



{
title:
"Modern Plumbing Service Website",


description:
"High-converting plumbing company website with service pages, emergency call CTA, booking form, and local SEO structure.",


image:
"/images/projects/plumbing.png",



liveUrl:
"https://plumbing-demo.vercel.app",



featured:true,


category:
"Website",



industry:
"Plumbing",



tech:[

"Next.js",

"TypeScript",

"Tailwind CSS",

"SEO",

],


},




{
title:
"Luxury Car Service Landing Page",


description:
"Premium automotive service landing page designed to generate customer inquiries and appointment bookings.",


image:
"/images/projects/car-service.png",



liveUrl:
"https://car-service-demo.vercel.app",



featured:true,


category:
"Landing Page",



industry:
"Car Service",



tech:[

"React",

"Framer Motion",

"Tailwind CSS",

],


},




{
title:
"Beauty Parlour Appointment Website",


description:
"Elegant beauty salon website with service showcase, gallery, booking CTA, and customer trust sections.",


image:
"/images/projects/parlour.png",



liveUrl:
"https://beauty-demo.vercel.app",



category:
"Website",



industry:
"Parlour",



tech:[

"Next.js",

"Tailwind CSS",

"Animation",

],


},





{
title:
"Digital Marketing Agency Website",


description:
"Professional agency website with service pages, case studies, testimonials, and lead generation sections.",


image:
"/images/projects/digital-agency.png",



liveUrl:
"https://agency-demo.vercel.app",



featured:true,


category:
"Website",



industry:
"Digital Agency",



tech:[

"Next.js",

"TypeScript",

"CMS",

"SEO",

],


},






{
title:
"Doctor Clinic Appointment Website",


description:
"Healthcare website template with doctor profile, services, appointment booking, and patient-focused design.",


image:
"/images/projects/doctor.png",



liveUrl:
"https://doctor-demo.vercel.app",



category:
"Website",



industry:
"Doctor",



tech:[

"Next.js",

"MongoDB",

"API",

],


},





{
title:
"Consultant Professional Portfolio",


description:
"Personal branding website for consultants, coaches, and professionals with authority-building sections.",


image:
"/images/projects/consultant.png",



liveUrl:
"https://consultant-demo.vercel.app",



category:
"Portfolio",



industry:
"Consultant",



tech:[

"React",

"Tailwind CSS",

"SEO",

],


},





{
title:
"Pet Clinic & Veterinary Website",


description:
"Complete veterinary service website with pet care services, appointment CTA, and location-based SEO.",


image:
"/images/projects/pet-clinic.png",



liveUrl:
"https://pet-clinic-demo.vercel.app",



featured:true,


category:
"Website",



industry:
"Pet Service",



tech:[

"Next.js",

"MongoDB",

"Tailwind CSS",

],


},





{
title:
"Real Estate Property Landing Page",


description:
"Modern real estate landing page with property showcase, inquiry forms, and conversion-focused sections.",


image:
"/images/projects/real-estate.png",



liveUrl:
"https://realestate-demo.vercel.app",



category:
"Landing Page",



industry:
"Real Estate",



tech:[

"Next.js",

"Animation",

"SEO",

],


},





{
title:
"Fashion Shopify Store",


description:
"Conversion-focused Shopify ecommerce store with product pages, collections, and optimized checkout experience.",


image:
"/images/projects/shopify-fashion.png",



liveUrl:
"https://shopify-fashion-demo.com",



category:
"Shopify",



industry:
"E-commerce",



tech:[

"Shopify",

"Liquid",

"E-commerce",

],


},



];