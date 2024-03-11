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
          <img className="logo_img" src="/Logo1 1.svg"/>
        </motion.span>
        <div className="social">
          <a href="https://t.me/Max_Mal20"><img src="/telegram.png" alt="Telegram" /></a>
          <a href="https://vk.com/defectovnet37"><img src="/VK.png" alt="VKontacte" /></a>
          <a href="https://www.avito.ru/user/ada06bdea0bfcd48b4365a9a1a4dbd95/profile/all/predlozheniya_uslug?id=2639898600&src=item&page_from=from_item_card&iid=2639898600&sellerId=ada06bdea0bfcd48b4365a9a1a4dbd95"><img src="/avito.png" alt="Avito" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
