import EmailIcon from "../../assets/icons/email.icon";
import { socialLinks } from "../../data/SocialLinks";
import useContactForm from "../../hooks/useContactForm";
import IconLinkList from "../iconLinkList/IconLinkList";
import Toast from "../toast/Toast";

const Contact = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    toastObj,
    loading,
    handleCloseToastMessage,
  } = useContactForm();
  return (
    <div>
      {toastObj && (
        <Toast
          type={toastObj.type}
          message={toastObj.text}
          onClose={handleCloseToastMessage}
        />
      )}
      <div className="grid sm:grid-cols-2 items-start gap-12  mx-auto  bg-white  rounded-md">
        <div>
          <h1 className="text-slate-900 text-4xl font-semibold">
            Reach out to <span className="text-primary font-bold">me</span>
          </h1>
          <p className="text-md text-slate-500 mt-4 leading-relaxed font-arial">
            Let’s turn your next big idea into a powerful digital product.
          </p>

          <div className="mt-12">
            <h2 className="text-slate-900 text-base font-semibold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-gray text-primary h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <EmailIcon />
                </div>
                <a href="mailto:info@example.com" className="text-sm ml-4">
                  <span className="text-primary font-mono">
                    sivakumarjenushanth@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-slate-900 text-base font-semibold">Contact</h2>

            <ul className="flex mt-4 space-x-4">
              {socialLinks.map((ele, index) => (
                <IconLinkList
                  icon={ele.icon}
                  key={index}
                  href={ele.href}
                  target={ele.target}
                />
              ))}
            </ul>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="font-mono w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="font-mono w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="font-mono w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500"
          />
          <textarea
            placeholder="Message"
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="font-mono w-full text-slate-900 rounded-md px-4 border border-gray-300 text-sm pt-2.5 outline-0 focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="font-mono text-white bg-primary hover:bg-primary-600 rounded-md text-[15px] font-medium px-4 py-2 w-full cursor-pointer !mt-6"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
