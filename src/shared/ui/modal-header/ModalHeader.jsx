const ModalHeader = ({ action, item, description }) => {
  return (
    <div className="">
      <h2 className="text-xl font-semibold">
        {action}{" "}
        {item && <span className="font-medium text-gray-400">{item}</span>}
      </h2>
      {description && (
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      )}{" "}
    </div>
  );
};

export default ModalHeader;
