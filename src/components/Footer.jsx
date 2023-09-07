import styles from "../styles/footer.module.css";

const Footer = () => {
  const company = [
    { url: "#", item: "Abous Us" },
    { url: "#", item: "Our Services" },
    { url: "#", item: "Privacy Policy" },
  ];
  const categories = [
    { url: "#", item: "Trending" },
    { url: "#", item: "Gaming" },
    { url: "#", item: "Software" },
    { url: "#", item: "Gadgets" },
    { url: "#", item: "How To Guides" },
    { url: "#", item: "Mobiles" },
    { url: "#", item: "Laptop" },
  ];

  const h4class =
    "text-white text-lg font-semibold relative mb-8 before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:bg-orange-500 before:h-[2px] before:w-[50px]";
  return (
    <>
      <footer className={`${styles.font_style}`}>
        <div className="mt-8 w-full bg-[#24262b]">
          <div className="container p-12">
            <div className="row flex flex-row flex-wrap justify-center">
              <div className="company mx-[10%]">
                <h4 className={h4class}>Company</h4>
                <ul className="leading-relaxed text-[#bbbbbb]">
                  {company.map((element) => {
                    return (
                      <li
                        key={element.item}
                        className="mb-1 hover:text-white transition-all duration-200"
                      >
                        <a href={element.url}>{element.item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="Categories mx-[10%]">
                <h4 className={h4class}>Categories</h4>
                <div></div>
                <ul className="leading-relaxed text-[#bbbbbb]">
                  {categories.map((element) => {
                    return (
                      <li
                        key={element.item}
                        className="mb-1 hover:text-white transition-all duration-200"
                      >
                        <a href={element.url}>{element.item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="follow mx-[10%]">
                <h4 className={h4class}>Follow Us</h4>
                <div className="social-icons mt-4 flex flex-row flex-wrap ">
                  <a
                    href="#"
                    className="flex mr-6 bg-gray-700 w-[60px] h-[60px] rounded-full items-center justify-center text-white hover:bg-white hover:text-[#24262b] transition-all duration-300"
                  >
                    <i className="fab fa-facebook-f "></i>
                  </a>
                  <a
                    href="#"
                    className="flex mr-6 bg-gray-700 w-[60px] h-[60px] rounded-full items-center justify-center text-white hover:bg-white hover:text-[#24262b] transition-all duration-300"
                  >
                    <i className="fab fa-instagram "></i>
                  </a>
                  <a
                    href="#"
                    className="flex mr-6 bg-gray-700 w-[60px] h-[60px] rounded-full items-center justify-center text-white hover:bg-white hover:text-[#24262b] transition-all duration-300"
                  >
                    <i className="fab fa-linkedin-in "></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
