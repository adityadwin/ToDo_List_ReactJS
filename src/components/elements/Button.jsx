// eslint-disable-next-line react/prop-types
const Button = ({ label, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 bg-pantone-blue text-white rounded-lg hover:bg-pantone-blue-dark focus:outline-none ${className}`}
  >
    {label}
  </button>
);

export default Button;
