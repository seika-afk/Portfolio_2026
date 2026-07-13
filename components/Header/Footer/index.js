import styles from "./style.module.css";
import { translate } from "@/components/Header/anim";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul></ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Typography:</span> Bodoni Moda{" "}
        </motion.li>
      </ul>
    </div>
  );
}
