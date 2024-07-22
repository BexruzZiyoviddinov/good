import "./heder.css"
import { MdMenu } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
function heder() {
  return (
    <div className="conteyner">
    <div className="conteynerHed">
        <img src="
        https://playmobile.uz/wp-content/uploads/2021/10/goodzone.jpg" alt="" className="imgHed"/>
    <div className="text">
        <h3>Скидка</h3>
        <h3>Магазин</h3>
    </div>
    </div>
    <div className="conteynerBottom ">
        <button className="but1">
            <h3><MdMenu className="iconMenu"/> Категония</h3>
        </button>
        <div className="conteyner-in">
            <input type="text" placeholder="К примеру, аксесуары" />
            <button className="but2">
            <IoSearch />
            </button>
        </div>
        <div className="conteynerOff">
            <button className="but3"><FaRegHeart /></button>
            <button className="but3"><FaCartShopping /></button>
        </div>
    </div>
    
    </div>
  )
}

export default heder