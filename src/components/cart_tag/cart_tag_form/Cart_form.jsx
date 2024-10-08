import React, { useState } from "react";
import style from "./cart_form.module.css";

const Cart_form = () => {
  const [focusedInputs, setFocusedInputs] = useState({
    name: false,
    input1: false,
    input2: false,
    input3: false,
  });

  const handleFocus = (key) => {
    setFocusedInputs((prev) => ({ ...prev, [key]: true }));
  };

  const handleBlur = (key, value) => {
    setFocusedInputs((prev) => ({ ...prev, [key]: value !== "" }));
  };

  return (
    <div className={style.container}>
      {/* Input 1: نام و نام خانوادگی */}
      <div className={style.input_group}>
        <label
          className={`${style.floating_label} ${
            focusedInputs.name ? style.focused : ""
          }`}
        >
          نام و نام خانوادگی
        </label>
        <input
          type="text"
          className={style.input}
          onFocus={() => handleFocus("name")}
          onBlur={(e) => handleBlur("name", e.target.value)}
        />
      </div>

      {/* Input 2 */}
      <div className={style.input_group}>
        <label
          className={`${style.floating_label} ${
            focusedInputs.input1 ? style.focused : ""
          }`}
        >
          Input 2
        </label>
        <input
          type="text"
          className={style.input}
          onFocus={() => handleFocus("input1")}
          onBlur={(e) => handleBlur("input1", e.target.value)}
        />
      </div>

      {/* Input 3 */}
      <div className={style.input_group}>
        <label
          className={`${style.floating_label} ${
            focusedInputs.input2 ? style.focused : ""
          }`}
        >
          Input 3
        </label>
        <input
          type="text"
          className={style.input}
          onFocus={() => handleFocus("input2")}
          onBlur={(e) => handleBlur("input2", e.target.value)}
        />
      </div>
      <p>s</p>
      {/* Input 4 */}
      <div className={style.input_group}>
        <label
          className={`${style.floating_label} ${
            focusedInputs.input3 ? style.focused : ""
          }`}
        >
          Input 4
        </label>
        <input
          type="text"
          className={style.input}
          onFocus={() => handleFocus("input3")}
          onBlur={(e) => handleBlur("input3", e.target.value)}
        />
      </div>
      <p>s</p>
    </div>
  );
};

export default Cart_form;
