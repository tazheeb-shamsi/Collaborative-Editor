import Image from "next/image";
<<<<<<< HEAD
import React from "react";

const Loader = () => {
=======

const Loader = ({ children }: { children: string }) => {
>>>>>>> master
  return (
    <div className="loader">
      <Image
        src="/assets/icons/loader.svg"
<<<<<<< HEAD
        alt="loader image"
        width={32}
        height={32}
        className="animate-spin"
      />
      Loading ...
=======
        alt="loader"
        width={18}
        height={18}
        className="animate-spin"
      />
      {children || 'Loading...'}
>>>>>>> master
    </div>
  );
};

export default Loader;
