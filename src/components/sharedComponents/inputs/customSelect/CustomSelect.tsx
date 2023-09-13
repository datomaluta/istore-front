const CustomSelect = ({ register, name, label }) => {
  return (
    <div>
      <label className="mb-1 block text-sm">{label}</label>
      <div className="relative">
        <select
          name={name}
          {...register(name)}
          className="appearance-none outline-none border border-greyForBorder dark:border-greyforText rounded-md px-4 py-2 pr-8 
    leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 
    dark:focus:ring-opacity-50 focus:border-indigo-500 dark:focus:border-white w-full"
        >
          <option value="">აირჩიეთ პროდუქტის კატეგორია</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
