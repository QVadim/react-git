import { useState } from "react";
import { Link } from "react-router-dom";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [buttonHide, setButtonHide] = useState(false);

  const handleEmail = (e) => {
    setEmailDirty(true);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPasswordDirty(true);
    setPassword(e.target.value);
  };

  const isValidEmail =
    email.includes("@") &&
    email.includes(".") &&
    email.indexOf("@") < email.lastIndexOf(".");

  const isValidPassword = password.length >= 8;

  const handleButton = () => {
    setEmail("");
    setPassword("");
    setEmailDirty(false);
    setPasswordDirty(false);
  };

  return (
    <>
      <div className="formL">
        <h2>Войти</h2>
        <input
          style={
            isValidEmail
              ? { borderColor: "green" }
              : {
                  borderColor: "red",
                }
          }
          onChange={handleEmail}
          value={email}
          className="formL_input"
          type="text"
          placeholder="Введите ваш Email"
        />
        {emailDirty && !isValidEmail && (
          <div style={{ color: "red" }}>Отсутствует @ или .</div>
        )}
        <input
          onChange={handlePassword}
          value={password}
          className="formL_input"
          type={buttonHide ? "text" : "password"}
          placeholder="Введите ваш пароль"
        />
        <button
          className="formL_button"
          onClick={() => {
            setButtonHide(!buttonHide);
          }}
        >
          Скрыть / показать пароль
        </button>
        {isValidPassword ? (
          <div style={{ color: "green" }}>Пароль верный</div>
        ) : (
          <div style={{ color: "red" }}>
            Пароль должен состоять минимум <br /> из 8 любых символов
          </div>
        )}

        <button className="formL_button" onClick={handleButton}>
          Войти
        </button>

        <button className="formL_button" type="button">
          <Link style={{ color: "black" }} to="/formRegistration">
            Регистрация
          </Link>
        </button>
      </div>
    </>
  );
}
