import visaImg from "../../assets/images/footer/visa.png";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 bg-neutral-800 bg-red-400	 max-w-screen w-full h-64 sm:h-[21rem] shadow-lg px-2 py-4">
      <div className="max-w-[75rem] w-full mx-auto bg-red-40 flex justify-between sm:grid grid-cols-2 gap-y-3 border-b border-neutral-400 pb-6">
        <h1 className="text-5xl sm:text-4xl font-bold text-white font-sans">
          istore
        </h1>
        <div className="">
          <h1 className="text-xl md:text-base">დაგვიკავშირდით</h1>
          <ul className="md:text-sm text-neutral-500 flex flex-col gap-1 mt-2">
            <li>თბილისი, ავლაბარი #54</li>
            <li>2 77 55 88 / 574 57 67 17</li>
            <li>onlinesales@istore.com</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl md:text-base">კატეგორიები</h1>
          <ul className="md:text-sm text-neutral-500 flex flex-col gap-1 mt-2">
            <li>კომპიუტერები</li>
            <li>ნაწილები</li>
            <li>პერიფერია</li>
            <li>მონიტორები</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl md:text-base">ჩვენს შესახებ</h1>
          <ul className="md:text-sm text-neutral-500 flex flex-col gap-1 mt-2">
            <li>კონტაქტი</li>
            <li>ჩვენს შესახებ</li>
            <li>FAQs</li>
            <li>პირობები</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[75rem] w-full mx-auto flex justify-between mt-4">
        <p className="sm:hidden">© 2023 Powered by Davit Malutashvili</p>
        <p className="hidden sm:block">© Davit Malutashvili</p>
        <img src={visaImg} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
