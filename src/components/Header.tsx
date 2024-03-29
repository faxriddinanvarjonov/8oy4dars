import styles from "../App.module.css";
import Logo from "../assets/MaskgroupLogo.svg";

function Header() {
  return (
    <>
      <div className={styles.Header}>
        <img
          className="cursor-pointer"
          src={Logo}
          alt="logo"
          width={74}
          height={30}
        />
        <ul className={styles.ul}>
          <li>Vakansiyalar</li>
          <li>Kandidatlar</li>
          <li>Kompaniyalar</li>
          <li>Xizmatlar</li>
          <li>Ta'lim</li>
        </ul>
        <div>
          <select
            className="bg-[#5361e4] text-white outline-none"
            name="Language"
            id="1"
          >
            <option value="Ozb">O`zb</option>
            <option value="Rus">Rus</option>
          </select>
          <button className={styles.headerbtn}>Boshlash</button>
        </div>
      </div>
    </>
  );
}

export default Header;
