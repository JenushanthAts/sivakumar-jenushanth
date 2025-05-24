const Footer = () => {
  return (
    <footer>
      <div className="w-full max-w-screen-xl mx-auto pb-2 md:py-5">
        <hr className="my-3 sm:mx-auto border-green-400 lg:my-8" />
        <span className="block text-center dark:text-slate-900">
          © {new Date().getFullYear()} &nbsp;
          <a href="/" className="hover:underline text-primary font-semibold">
            Sivakumar Jenushanth
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
