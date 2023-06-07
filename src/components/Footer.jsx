import React from "react";

function Footer() {
  return (
    <div className="footer--div">
      <div>
        <div>
          <h1>Get in touch</h1>
        </div>
        <div className="list--div">
          <div className="icon--div">
            <span>
              <i class="fa-solid fa-phone" style={{ color: "yellow" }}></i>
            </span>
            <p>+91 722 290 5222</p>
          </div>
          <div className="icon--div">
            <span>
              <i class="fa-solid fa-envelope" style={{ color: "yellow" }}></i>
            </span>
            <p>Enquiry@mbachaiwala.com</p>
          </div>

          <div className="icon--div">
            <span>
              {" "}
              <i
                class="fa-solid fa-envelope-open-text"
                style={{ color: "yellow" }}
              ></i>
            </span>
            <p>info@mbachaiwala.com</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1>Quick Links</h1>
        </div>
        <div className="list--div">
          <ul>
            <li>FAQs</li>
            <li>Term Conditions</li>
            <li>Privacy Policy</li>
            <li>Cancellation Refund Policy</li>
            <li>Shipping Policy</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h1>Social Medias</h1>
        </div>
        <div className="list--div">
          <ul className="socialmedia--icons">
            <span>
              <li>
                <i class="fa-brands fa-instagram"></i>
              </li>
            </span>
            <span>
              <li>
                <i class="fa-brands fa-facebook-f"></i>
              </li>
            </span>
            <span>
              <li>
                <i class="fa-brands fa-twitter"></i>
              </li>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
