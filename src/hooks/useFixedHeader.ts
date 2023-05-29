import { useEffect, useRef, useState } from "react";

const useFixedHeader = () => {
  const [isBottomFixed, setIsBottomFixed] = useState(false);

  useEffect(() => {
    const header = document.getElementById("myHeader");
    let sticky = header?.offsetTop;
    function myFunction() {
      if (sticky && window.pageYOffset > sticky) {
        setIsBottomFixed(true);
      } else {
        setIsBottomFixed(false);
      }
    }

    window.addEventListener("scroll", myFunction);
  }, []);

  return { isBottomFixed };
};

export default useFixedHeader;
