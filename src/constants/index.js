import activeButton from '../assets/active-button.png';
import nextButton from '../assets/next-button.png';
import { faMagnifyingGlass, faMobile, faPen, faPenToSquare, faShop, faWrench } from '@fortawesome/free-solid-svg-icons';
export { activeButton, nextButton };

import userFocused from '../assets/user-focused.png';
import accessibility from '../assets/accessibility.png';
import modernWebDesign from '../assets/modern-web-design.png';
import mobileDesign from '../assets/mobile-design.png';
import allBrowsers from '../assets/all-browsers.png';
import onTrend from '../assets/on-trend.png';
import webDesign from '../assets/web-design.png';
import codingBackground from '../assets/coding-background.jpg';
import dataAnalytics from '../assets/data-analytics.jpg';
import graphicDesign from '../assets/graphic-design.jpg';
import musicStudio from '../assets/music-studio.jpg';
import servers from '../assets/servers.jpg';

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#our-work", label: "Our Work" },
  { href: "about-us", label: "About Us"},
];

export const services = [
  {
    title: "Custom Web Design",
    desc: "We create bespoke websites tailored to your specific needs and goals, ensuring a unique and memorable online presence.",
    logo: { icon: faPen, color: "#09d691" }
  },
  {
    title: "Responsive Web Design",
    desc: "We ensure your website looks and functions flawlessly across all devices, providing an optimal user experience for everyone.",
    logo: { icon: faMobile, color: "#09d691" } 
  },
  {
    title: "eCommerce Development:",
    desc: "We build robust and secure online stores that enable you to sell your products or services with ease.",
    logo: { icon: faShop, color: "#09d691" }
  },
  {
    title: "Website Maintenance & Support:",
    desc: "We provide ongoing maintenance and support to keep your website running smoothly and up-to-date.",
    logo: { icon: faWrench, color: "#09d691" }
  },
  {
    title: "SEO Optimisation:",
    desc: "We implement proven SEO strategies to improve your website’s visibility in search engines and attract organic traffic.",
    logo: { icon: faMagnifyingGlass, color: "#09d691" } 
  },
  {
    title: "Content Management Systems (CMS):",
    desc: "We empower you to easily manage your website content with user-friendly CMS solutions.",
    logo: { icon: faPenToSquare, color: "#09d691" } 
  },
  
];

export const  cards = [
  {
    title: "Web Design",
    desc: "Elevate your brand online with our stunning WordPress web designs.",
    img: webDesign,
  },
  {
    title: "Web Development",
    desc: "Unlock boundless possibilities with custom web development solutions.",
    img: codingBackground,
  },
  {
    title: "SEO",
    desc: "Boost rankings and drive traffic with out SEO services.",
    img: dataAnalytics,
  },
  {
    title: "Graphic Design",
    desc: "Captivate your audience with visionary graphic designs.",
    img: graphicDesign,
  },
  {
    title: "Media Production",
    desc: "Tell your story with our dynamic media production expertise.",
    img: musicStudio,
  },
  {
    title: "Web Hosting",
    desc: "Fast, secure and reliable website hosting services.",
    img: servers,
  },

];


export const infos = [
  {
    title: "Easy live view editing",
    desc: "Add, delete and move elements around on the front end of your website. No coding and no confusing backend options.",
    button: "Find out more",
  },
  {
    title: "Step-by-step training",
    desc: "After completing your website, we offer detailed narrated training videos for seamless handover.",
    button: "Contact us",
  },
  {
    title: "Lifetime updates",
    desc: "Attain lifelong theme updates, ensuring continous enhancement in speed and security.",
    button: "Contact us",
  }
]

export const details = [
  {
    img: userFocused,
    title: "User Focused",
    desc: "Our design puts your visitors at the centre, giving them the best experience possible and created specifically for their needs. We ensure your customers have a great time using your new website.",
  },
  {
    img: accessibility,
    title: "Accessible",
    desc: "We know that your website needs to perform for a range of users, and we put accessibility at the forefront of our design and development.",
  },
  {
    img: modernWebDesign,
    title: "Modern Interface Design",
    desc: "Contemporary design is at the core of every one of our projects. We really enjoy getting creative with typography and color palettes, layouts, and iconography, and it shows in our work.",
  },
  {
    img: mobileDesign,
    title: "Mobile Led Designs",
    desc: "Living in a world where more than 50% of searches are now on a mobile device, we ensure all our WordPress websites are fully optimized across all modern mobile devices.",
  },
  {
    img: allBrowsers,
    title: "Built for All Browsers",
    desc: "The likes of Google, Microsoft, and Apple control the browsers we all use on a daily basis. At Web-a, we build all WordPress websites to work perfectly in all browsers on any size screen, ensuring your audience always sees the best of you.",
  },
  {
    img: onTrend,
    title: "On-Trend",
    desc: "Our design team is constantly researching what's on-trend in design, both on the web and in the wider design world. Bringing these trends and new ideas to your website keeps you current.",
  },
];

export const faqs = [
  {
    question: "How much does it cost to build a website?",
    answer: "Web-A offers flexible pricing for web design services, making it an ideal choice for smaller businesses and startups. Our WordPress website design packages start at £700 + VAT, providing an affordable entry point for those beginning their online journey. The overall cost depends on project specifics, such as website complexity and desired features. To receive a personalised quote tailored to your needs, we encourage you to contact our team. web-A is committed to transparency, collaboration, and delivering cost-effective solutions that suit both your goals and budget. Get in touch today at " ,
    answer2: "to discuss your web design project."
  },
  {
    question: "How long does it take to build a website?",
    answer: "In a similar way to the pricing question, timescales can vary depending on variables such as; the size and complexity of the project, availability of content and the urgency and deadlines you have. We do however find, that the majority of our projects take between 4-6 weeks from start to finish. We will always help to guide you through the process and if you are struggling on certain parts, such as content, we can always jump in to help.",
  }, 
  {
    question: "Where is Web-A based?",
    answer: "We have a lovely converted barn on the Oxfordshire/ Northamptonshire border, kitted out with all the latest tech and high-speed broadband. We love to work with businesses local to us but just as much we love working with people and businesses from across the globe! It's true…. We have clients as close as across the courtyard from the Barn to New Zealand, Sweden, USA and dozens of clients across the whole of the UK. In a world that is now so used to using the likes of Zoom and Skype etc, we find it as easy to run a project across continents as in the next building.",
  },
  {
    question: "Will I be able to update the website?",
    answer: "Absolutely. Once the website is complete and live, you will have access to the site to update, add and remove content such as text, images and video. The website will be built on WordPress which is the world's most popular content-managed system (CMS) and is simple to use for these purposes. We do recommend that if you are unsure of how to make changes or have more complex changes, then you get in touch with us as we can either teach you how to make them or we can carry them out on your behalf based on an hourly rate of £50+VAT."
  },
  {
    question: "Can you maintain our website?",
    answer: "Yes. Either in conjunction with you or completely on your behalf. Many of our clients have monthly or annual maintenance contracts where we carry out essential maintenance on their behalf as well as regular updates to the content and features on the website. We always say that going live on a new website is only the beginning of the journey and a good website should grow and evolve. This will also help when it comes to SEO as the likes of Google like to see new engaging content on a website showing it's relevant. Contact us to find out the options."
  },
  {
    question: "Do you provide a website hosting service?",
    answer: "Yes, we offer packages to host websites through our trusted third-party hosting providers. Most of our clients opt to do this so they don't have to worry in the unlikely event that the website goes down. However, we can also recommend hosting providers if you wish to host the website yourselves or elsewhere and we'll help to migrate the website to your chosen provider on launch within the project price."
  },
  {
    question: "Will my website be mobile friendly?",
    answer: "100%. Every website we build is always developed to work across mobile devices of all sizes and browsers as standard."
  },
  {
    question: "Is SEO included in my website project?",
    answer: "Not as such. Each project will have a minimum standard for SEO in the build where we will ensure all the key setup is done to launch the website. However, SEO is not a one-off service with a project but is an ongoing service to ensure that your website keeps up and stays ahead of the competition. We offer monthly packages for this and work with many clients in this way to deliver results for their businesses from their websites."
  },
  {
    question: "How do we get started?",
    answer: "The best thing to do is to get in touch with us to discuss your project and we will guide you through the process from there. We have systems and processes that we have worked on and developed over many years that help projects run smoothly for both us and your company so we can launch your website with the minimum disruption to your business promptly. So get in touch today to discuss your next project with us.",
    answer2: "Email:",
  },
]

export const footerInfos = [
  {
    info: "Creative web & graphic design agency, based in Oxfordshire."
  },
  {
    info: "© Copyright Web-Agency Ltd 2024. All Rights Reserved."
  },
  {
    info: "Registered in England & Wales."
  },
  {
    info: "Company no: 12345678"
  }
]

export const footerLinks = [
{
  link: "Our Work",
},
{
  link: "Services",
},
{
  link: "About Us",
},
{
  link: "Blog",
},
{
  link: "Contact Us",
},
{
  link: "Sitemap",
}
]
export const footerServices = [
  {
    info: "Web Design & SEO"
  },
  {
    info: "Oxford WordPress"
  },
  {
    info: "Designer"
  },
  {
    info: "WordPress Website Design"
  },
  {
    info: "Packages"
  },
  {
    info: "WordPress Development"
  }
]