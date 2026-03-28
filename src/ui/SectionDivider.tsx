import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <div className="relative w-full flex items-center justify-center py-12">
      
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="h-[2px] w-full bg-gradient-to-r from-transparent via-white to-transparent"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute h-[4px] w-1/2 bg-purple-500 blur-xl"
      />
      
    </div>
  );
};

export default SectionDivider;