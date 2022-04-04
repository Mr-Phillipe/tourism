import React from "react";

function MySelect({ options, defaultValue, onChange, value }) {
  return (
    <select onChange={(e) => onChange(e.target.value)} className="form-control w-50">
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.name}
        </option>
      ))}
    </select>
  );
}

export default MySelect;
