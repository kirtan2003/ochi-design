import React from 'react';
import './marquee.css';
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full  py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-[1px] border-b-[1px] border-zinc-500 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration: 10}} className='marquee-text text-[18vw] leading-none tracking-tighter font-semibold uppercase mb-[3vw] pr-8'>We are ochi</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration: 10}} className='marquee-text text-[18vw] leading-none tracking-tighter font-semibold uppercase mb-[3vw] pr-8'>We are ochi</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration: 10}} className='marquee-text text-[18vw] leading-none tracking-tighter font-semibold uppercase mb-[3vw] pr-8'>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee



// import React from 'react';
// import './marquee.css';
// import { motion } from "framer-motion";

// const Marquee = () => {
//   return (
//     <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
//         <div className='text border-t-[1px] border-b-[1px] border-zinc-500 flex overflow-hidden whitespace-nowrap'>
//             <motion.h1
//               initial={{ x: "0" }}
//               animate={{ x: "-100%" }}
//               transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
//               className='marquee-text text-[18vw] leading-none tracking-tighter font-semibold uppercase mb-[3vw] mr-6'
//               style={{ marginRight: "6vw" }}
//             >
//               We are ochi
//             </motion.h1>
//             <motion.h1
//               initial={{ x: "0" }}
//               animate={{ x: "-100%" }}
//               transition={{ ease: "linear", repeat: Infinity, duration: 10, delay: 1 }}
//               className='marquee-text text-[18vw] leading-none tracking-tighter font-semibold uppercase mb-[3vw] mr-6'
//               style={{ marginRight: "6vw" }}
//             >
//               We are ochi
//             </motion.h1>
//             <motion.h1
//               initial={{ x: "0" }}
//               animate={{ x: "-100%" }}
//               transition={{ ease: "linear", repeat: Infinity, duration: 10, delay: 2 }}
//               className='marquee-text text-[18vw] leading-none tracking-tighter font-semibold uppercase mb-[3vw] mr-6'
//             >
//               We are ochi
//             </motion.h1>
//         </div>
//     </div>
//   )
// }

// export default Marquee;




// import React from 'react';
// import './marquee.css';
// import { motion} from "framer-motion";

// const Marquee = () => {
//   return (
//     <div className='w-full data-scroll data-scroll-speed="1.2" py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
//       <div className='text border-t-[1px] border-b-[1px] border-zinc-500 flex overflow-hidden whitespace-nowrap'>
//         {/* <AnimatePresence> */}
//           <motion.h1
//             key="1"
//             initial={{ x: "0%" }}
//             animate={{ x: "-100%" }}
//             transition={{ ease: "linear", repeat: Infinity, duration: 8 , delay:1}}
//             className='marquee-text text-[19vw] leading-none tracking-tighter font-semibold uppercase mb-[3vw] mr-6'
//             style={{ marginRight: "6vw" }}
//           >
//             We are ochi
//           </motion.h1>
//           <motion.h1
//             key="2"
//             initial={{ x: "0%" }}
//             animate={{ x: "-100%" }}
//             transition={{ ease: "linear", repeat: Infinity, duration: 8 , delay:1}}
//             className='marquee-text text-[19vw] leading-none tracking-tighter font-semibold uppercase mb-[3vw] mr-6'
//             style={{ marginRight: "6vw" }}
//           >
//             We are ochi
//           </motion.h1>
//           <motion.h1
//             key="3"
//             initial={{ x: "0%" }}
//             animate={{ x: "-100%" }}
//             transition={{ ease: "linear", repeat: Infinity, duration: 8, delay:1}}
//             className='marquee-text text-[19vw] leading-none tracking-tighter font-semibold uppercase mb-[3vw]'
//           >
//             We are ochi
//           </motion.h1>
//           <motion.h1
//             key="4"
//             initial={{ x: "0%" }}
//             animate={{ x: "-100%" }}
//             transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
//             className='marquee-text text-[19vw] leading-none tracking-tighter font-semibold uppercase mb-[3vw]'
//           >
//             We are ochi
//           </motion.h1>
//         {/* </AnimatePresence> */}
//       </div>
//     </div>
//   )
// }

// export default Marquee;


