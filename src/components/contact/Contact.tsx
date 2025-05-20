import useContactForm from "../../hooks/useContactForm";

const Contact = () => {
  const { formData, handleChange, handleSubmit } = useContactForm();
  return (
    <div className="mt-12 pt-4">
      <div className="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto  bg-white [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
        <div>
          <h1 className="text-slate-900 text-4xl font-semibold">
            Reach out to <span className="text-primary font-bold">me</span>
          </h1>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
            Let’s turn your next big idea into a powerful digital product.
          </p>

          <div className="mt-12">
            <h2 className="text-slate-900 text-base font-semibold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="white"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <a href="mailto:info@example.com" className="text-sm ml-4">
                  <span className="text-primary font-medium">
                    sivakumarjenushanth@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-slate-900 text-base font-semibold">Contact</h2>

            <ul className="flex mt-4 space-x-4">
              <li className="bg-primary h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://www.linkedin.com/in/sivakumar-jenushanth-2698b62a2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 50 50"
                    fill="white"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                </a>
              </li>

              <li className="bg-primary h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://github.com/JenushanthAts"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
    3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
    0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
    -.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 
    1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.304 3.495.997 
    .108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.93 
    0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 
    1.005-.322 3.3 1.23a11.51 11.51 0 0 1 3-.405c1.02.005 
    2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23 
    .645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 
    1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 
    1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 
    0 .315.21.694.825.576C20.565 22.092 24 17.592 24 
    12.297c0-6.627-5.373-12-12-12"
                    />
                  </svg>
                </a>
              </li>
              <li className="bg-primary h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="tel:94773820373">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="text-[var(--color-primary)] hover:text-green-600 transition-colors duration-200"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.36 11.36 0 003.58.57 1 1 0 011 1v3.44a1 1 0 01-.91 1A17 17 0 013 5a1 1 0 011-1h3.44a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.25 1.05l-2.14 2.16z" />
                  </svg>
                </a>
              </li>

              <li className="bg-primary h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://www.hackerrank.com/profile/Jenushanth_95"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <i className="fas fa-code "></i>
                </a>
              </li>
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
            className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500"
          />
          <textarea
            placeholder="Message"
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full text-slate-900 rounded-md px-4 border border-gray-300 text-sm pt-2.5 outline-0 focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="text-white bg-primary hover:bg-primary-600 rounded-md text-[15px] font-medium px-4 py-2 w-full cursor-pointer !mt-6"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
