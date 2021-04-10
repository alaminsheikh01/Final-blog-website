import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer mt-5">
      <div className="container-fluid bg-dark pt-5 pb-5 footer_contents">
        <div className="row">
          <div className="col-md-12 cus_footer_text text-center">
            <div>
              <span>
                <a href="#">Github</a>
              </span>
              <span>
                <a href="#">Twitter</a>
              </span>
              <span>
                <a href="#">Linkedin</a>
              </span>
              <span>
                <a href="#">DEV</a>
              </span>
            </div>

            <br />
            <h3
              style={{ fontSize: "16px", textAlign: "center", color: "white" }}
            >
              © 2021 - 2022, Built with ❤️ to code
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
