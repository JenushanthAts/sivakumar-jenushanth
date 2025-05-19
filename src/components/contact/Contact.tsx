import useContactForm from "../../hooks/useContactForm";
import Button from "../button/Button";
import "./Contact.scss";

const Contact = () => {
  const { formData, handleChange, handleSubmit } = useContactForm();
  return (
    <div>
      <div className="grid-container mt-12">
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="contact-info">
            <h1 className="text-4xl ">
              Reach out to <span>me</span>
            </h1>
            <p className="text-justify greeting-text-p subTitle">
              Let’s turn your next big idea into a powerful digital product.
            </p>

            <div>
              <h3>Email</h3>
              <a href="mailto:info@example.com" className="email">
                <span className="email">sivakumarjenushanth@gmail.com</span>
              </a>
            </div>

            <div>
              <h3 className="mt-10">Connect with me</h3>
              <ul className="social-icons">
                <li>
                  <a
                    href="https://www.linkedin.com/in/sivakumar-jenushanth-2698b62a2/"
                    className="icon-btn linkedin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin "></i>
                  </a>
                </li>
                <li>
                  <a href="tel:94773820373">
                    <i className="fas fa-phone"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/JenushanthAts"
                    className="icon-btn github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github "></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.hackerrank.com/profile/Jenushanth_95"
                    className="icon-btn coding"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-code "></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <form className="grid grid-cols-1 gap-8" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="px-6 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-6 py-2 border border-gray-300 rounded-md shadow-sm"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="px-6 py-2 border border-gray-300 rounded-md shadow-sm"
            />

            <textarea
              placeholder="Message"
              rows={6}
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="px-6 py-2 border border-gray-300 rounded-md shadow-sm"
            ></textarea>
            <div>
              <Button label="Send" type="submit" variant="primary" />
            </div>
          </form>
        </div>
      </div>

      <hr className="divider" />

      <p className="text-center copyright p-2">
        &copy; {new Date().getFullYear()}
        <span> Sivakumar Jenushanth</span>, All Rights Reserved
      </p>
    </div>
  );
};

export default Contact;
