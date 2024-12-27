const CustomButton = ({ btnType, title, styles, handleClick, id }) => {
  return (
    <button
      type={btnType}
      className={`font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
      onClick={handleClick}
      id={id}
    >
      {title}
    </button>
  );
};

export default CustomButton;
