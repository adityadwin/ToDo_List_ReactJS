// eslint-disable-next-line react/prop-types
const Checkbox = ({ checked, onChange }) => (
  <input
    type="checkbox"
    checked={checked}
    onChange={onChange}
    className="mr-4 text-pantone-blue focus:ring-pantone-blue"
  />
);

export default Checkbox;
