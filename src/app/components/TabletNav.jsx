// TabletNav.jsx
import React, { useState } from "react";

export default function TabletNav({ navItems }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <ul className="flex gap-4 items-center">
      {navItems.map((item, i) => {
        // If NO dropdown, just render a normal anchor link
        if (!item.dropdown) {
          return (
            <li key={i} className="list-none">
              <a
                href={item.path}
                className="block px-3 py-2 text-sm font-medium text-gray-700 
                           hover:bg-neutral-100 hover:text-yellow-600 rounded-md"
              >
                {item.label}
              </a>
            </li>
          );
        }

        // If the item HAS a dropdown, we skip the anchor and use a button
        // so that clicking it only toggles the sub-menu (does not navigate).
        const isDropdownOpen = openDropdown === item.label;
        return (
          <li key={i} className="relative list-none">
            <button
              onClick={() => toggleDropdown(item.label)}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 
                         hover:bg-neutral-100 hover:text-yellow-600 rounded-md"
              aria-expanded={isDropdownOpen ? "true" : "false"}
              aria-haspopup="true"
            >
              {item.label}
            </button>

            {isDropdownOpen && (
              <ul
                className="absolute top-full left-0 bg-white shadow-md p-2 
                             rounded-md mt-0 z-10 min-w-[10rem]"
              >
                {item.subItems.map((sub, j) => (
                  <li key={j} className="mb-1 last:mb-0">
                    <a
                      href={sub.path}
                      className="block px-3 py-1 text-sm rounded-md text-gray-700 
                                 hover:bg-neutral-100 hover:text-yellow-600"
                    >
                      {sub.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
