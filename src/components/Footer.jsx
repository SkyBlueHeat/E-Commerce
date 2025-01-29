// /* eslint-disable react/prop-types */
// import { motion } from 'framer-motion';

// const SocialIcons = () => (
//   <div className="flex gap-3">
//     <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-blue-500 text-xl"></motion.a>
//     <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-pink-500 text-xl"></motion.a>
//     <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-blue-400 text-xl"></motion.a>
//   </div>
// );

// const FooterSection = ({ title, items }) => (
//   <div>
//     <h3 className="font-semibold mb-1">{title}</h3>
//     <ul className="space-y-0.5">
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   </div>
// );

// const SubscribeForm = () => (
//   <div className="md:col-span-2 lg:col-span-1">
//     <h3 className="font-semibold mb-2">Get In Touch</h3>
//     <div className="flex">
//       <input type="email" placeholder="Your Email" className="border p-2 rounded-l-md w-full" />
//       <motion.button whileHover={{ scale: 1.1 }} className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
//         Subscribe
//       </motion.button>
//     </div>
//     <p className="text-xs text-gray-500 mt-2">Lorem imp sum dolor Amet</p>
//   </div>
// );

// const FooterTop = () => (
//   <div className="bg-gray-200 py-10 px-5 md:px-20 text-black ">
//     <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
//       <h2 className="text-2xl font-bold">Bandage</h2>
//       <SocialIcons />
//     </div>
//   </div>
// );

// const Footer = () => {
//   return (
//     <>
//     <FooterTop />
//     <footer className="bg-gray-100 py-10 px-5 md:px-20">
//       {/* Footer üst kısmı */}
      

//       <div className="max-w-7xl mx-auto flex flex-col gap-4 mt-10">
//         <div className="flex justify-center md:justify-between flex-col md:flex-row gap-4 md:gap-0">
//           <FooterSection title="Company Info" items={["About Us", "Carrier", "We are hiring", "Blog"]} />
//           <FooterSection title="Legal" items={["Privacy Policy", "Terms of Service", "Cookie Policy"]} />
//           <FooterSection title="Features" items={["Business Marketing", "User Analytics", "Live Chat", "Unlimited Support"]} />
//           <FooterSection title="Resources" items={["iOS & Android", "Watch a Demo", "Customers", "API"]} />
//           <SubscribeForm />
//         </div>
//       </div>

//       <p className="text-center text-sm text-gray-600 mt-4">Made With Love By Finland All Rights Reserved</p>
//     </footer>
//     </>
//   );
// };

// export default Footer;
