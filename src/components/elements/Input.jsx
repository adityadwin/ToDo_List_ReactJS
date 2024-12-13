// eslint-disable-next-line react/prop-types
const Input = ({ value, onChange, placeholder, className }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    className={`px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pantone-blue ${className}`}
    placeholder={placeholder}
  />
);

export default Input;
