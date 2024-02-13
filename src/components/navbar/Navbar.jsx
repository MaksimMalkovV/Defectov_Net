import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Max Malkov
        </motion.span>
        <div className="social">
          <a href="https://t.me/Max_Mal20"><img src="/telegram.png" alt="Telegram" /></a>
          <a href="https://vk.com/m.malkov2013"><img src="/VK.png" alt="VKontacte" /></a>
          <a href="mailto:m.malckov2013@yandex.ru"><img src="/Yandex.png" alt="Email" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
