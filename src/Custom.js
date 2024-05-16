const Custom = ({ customTip, onCustomTipChange }) => {
  return (
    <input
      className="custom-tip"
      type="number"
      value={customTip}
      onChange={(e) => onCustomTipChange(e.target.value)}
    />
  );
};

export default Custom;
