import React from "react";

const FilterCategory = ({
  label,
  options,
  selected,
}: Readonly<{ label: string; options: string[]; selected: string }>) => {
  return (
    <div className="flex flex-nowrap">
      <label htmlFor={label} className="text-black">
        {label}:
      </label>
      <select
        name={label}
        id={label}
        className="text-green-800 bg-transparent outline-none px-3"
        defaultValue={selected}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCategory;
