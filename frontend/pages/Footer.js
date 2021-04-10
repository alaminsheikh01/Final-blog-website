import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer mt-5">
      <div className="container-fluid bg-dark pt-5 pb-5 footer_contents">
        <div className="row">
          <div className="col-md-12 cus_footer_text text-center">
            <div>
              <span>
                <a href="https://github.com/alaminsheikh01" target="_blank">
                  Github
                </a>
              </span>
              <span>
                <a
                  href="https://stackoverflow.com/users/14701706/alamin?tab=profile"
                  target="_blank"
                >
                  Stackoverflow
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/alaminsheikh/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </span>
              <span>
                <a href="https://dev.to/alaminsheikh001" target="_blank">
                  DEV
                </a>
              </span>
            </div>

            <br />
            <h3
              style={{ fontSize: "12px", textAlign: "center", color: "white" }}
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
