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
        class="navigation__checkbox"
        checked={checked}
        onChange={handleOnChange}
        id="navi-toggle"
      />

      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>

      <div class="navigation__background">&nbsp;</div>

      <nav class="navigation__nav">
        <ul class="navigation__list">
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
