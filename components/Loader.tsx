import Image from "next/image";

const Loader = ({ children }: { children: string }) => {
  return (
    <div className="loader">
      <Image
        src="/assets/icons/loader.svg"
        alt="loader"
        width={18}
        height={18}
        className="animate-spin"
      />
      {children || 'Loading...'}
    </div>
  );
};

export default Loader;
