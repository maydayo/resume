import React, { useState } from "react";
import { navLinks } from "../../config";

const Navigation = () => {
  const [checked, setChecked] = useState(false);
  const handleOnChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        checked={checked}
        onChange={handleOnChange}
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          {navLinks.map(nav => {
            const { name, url } = nav;
            return (
              <li className="navigation__item" key={name}>
                <a
                  href={url}
                  onClick={() => {
                    setChecked(false);
                  }}
                  className="navigation__link"
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
