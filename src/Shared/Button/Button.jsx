const Button = ({ text,width }) => {
  return (
    <button
      className={`rounded-lg relative inline-block h-12overflow-hidden border-[#FF1493] px-5 py-2 text-black shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-[#FF1493] before:duration-300 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-[#FF1493] after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0`}
    >
      {text}
    </button>
  );
};


export default Button;
