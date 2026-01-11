const ExtraButtons = ({
  buttons,
  name,
  cryptoForSell,
  crypto,
  handlers,
  setFieldValue,
  values,
}) => {
  const { handleChange } = handlers;
  return (
    <ul className="flex gap-2 mt-2">
      {buttons.map((elem, idx) => (
        <li
          key={idx}
          onClick={() => {
            setFieldValue(
              name,
              name !== "sellAmount"
                ? (cryptoForSell[name] * elem) / 100
                : (crypto.last * cryptoForSell.count * elem) / 100
            );
            handleChange(
              {
                target: {
                  name,
                  value:
                    name !== "sellAmount"
                      ? (cryptoForSell[name] * elem) / 100
                      : (crypto.last * cryptoForSell.count * elem) / 100,
                },
              },
              values,
              setFieldValue
            );
          }}
        >
          {elem}%
        </li>
      ))}
    </ul>
  );
};

export default ExtraButtons;
