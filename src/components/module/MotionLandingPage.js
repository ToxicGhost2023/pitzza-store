"use client";
import { motion } from "framer-motion";
function MotionLandingPage() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-y1"
      >
        بهPizza Land خوش آمدید
      </motion.h1>
      
    </div>
  );
}

export default MotionLandingPage;
