export const TabBody = ({ index, value, children }) => {
  return <div hidden={value !== index}>{value === index && children}</div>;
};
