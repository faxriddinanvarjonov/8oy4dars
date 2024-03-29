import styles from "../App.module.css";
import Avatar from "../assets/PngAvatar.png";

function Main() {
  let paddingleft = { paddingLeft: "32px" };
  return (
    <div className={styles.Main}>
      <div className="p-9 pb-8">
        <h1 className="text-3xl">Kompaniya ma'lumotlari</h1>
        <p className="text-sm text-[#B3B3B3;]">
          Kompaniya haqidagi ma'lumotlarni kiriting
        </p>
      </div>
      <div className={styles.img} style={paddingleft}>
        <img src={Avatar} alt="img" />
        <p>Yuklash</p>
      </div>
      <div className="inputs">
        <div className="mt-6" style={paddingleft}>
          <label>Kompaniya nomi *</label>
          <input
            className={styles.Input}
            typeof="text"
            name="name"
            placeholder="Kompaniya nomi"
          />
        </div>
        <div className="mt-6" style={paddingleft}>
          <label>Email *</label>
          <input
            className={styles.Input}
            typeof="text"
            name="name"
            placeholder="Email"
          />
        </div>{" "}
        <div className="mt-6" style={paddingleft}>
          <label>Telefon raqami *</label>
          <input
            className={styles.Input}
            typeof="text"
            name="name"
            placeholder="UZ +9989"
          />
        </div>
        <div className="mt-6" style={paddingleft}>
          <label>Linklar *</label>
          <div className={styles.LinksParent}>
            <button className={styles.Links} typeof="text" name="name" />
            <button className={styles.Links} typeof="text" name="name" />
            <button className={styles.Links} typeof="text" name="name" />
            <button className={styles.Links} typeof="text" name="name" />
            <button className={styles.Links} typeof="text" name="name" />
          </div>
        </div>
        <div className="mt-6" style={paddingleft}>
          <label>Davlat *</label>
          <input
            className={styles.Input}
            typeof="text"
            name="name"
            placeholder="Davlat *"
          />
        </div>{" "}
        <div className="mt-6" style={paddingleft}>
          <label>Shahar *</label>
          <input
            className={styles.Input}
            typeof="text"
            name="name"
            placeholder="Shahar *"
          />
        </div>
        <div className="mt-6" style={paddingleft}>
          <label>Yashash joyi *</label>
          <input
            className={styles.Input}
            typeof="text"
            name="name"
            placeholder="Yashash joyi"
          />
        </div>
        <form className="mt-6" style={paddingleft}>
          <label>Hodimlar soni *</label>
          <input
            className={styles.Input}
            typeof="text"
            name="name"
            placeholder="Hodimlar soni"
          />
        </form>
        <form className="mt-6" style={paddingleft}>
          <label>Izoh *</label>
          <input
            className={styles.InputLast}
            typeof="text"
            name="name"
            placeholder="Kompaniya haqida izoh qoldiring"
          />
        </form>
        <div className="flex justify-between mt-8" style={paddingleft}>
          <button className=" w-[113px] h-[46px] pt-2 pb-2 pr-6 pl-6 bg-[#F8F8F8] rounded-xl">
            Ortga
          </button>
          <button className=" w-[113px] h-[46px] pt-2 pb-2 pr-6 pl-6 bg-[#5361e4] rounded-xl text-white mr-12">
            Keyingisi
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
