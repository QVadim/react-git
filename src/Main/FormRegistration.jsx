import { useState } from "react";
import { Link } from "react-router-dom";

export default function FormRegistration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [buttonHide, setButtonHide] = useState(false);
  const [copyPassword, setCopyPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleEmail = (e) => {
    setEmailDirty(true);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPasswordDirty(true);
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === copyPassword);
  };

  const similarPassword = (e) => {
    const value = e.target.value;
    setCopyPassword(value);
    setPasswordsMatch(value === password);
  };

  const isValidEmail =
    email.includes("@") &&
    email.includes(".") &&
    email.indexOf("@") < email.lastIndexOf(".");

  const isValidPassword = password.length >= 8;

  const handleButton = () => {
    if (password !== copyPassword) {
      setPasswordsMatch(false);
      return; // Не очищаем форму, если пароли не совпадают
    }
    setEmail("");
    setPassword("");
    setCopyPassword("");
    setEmailDirty(false);
    setPasswordDirty(false);
    setPasswordsMatch(true);
  };

  return (
    <>
      <div className="formL">
        <h2>Регистрация</h2>
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
        <input
          onChange={similarPassword}
          value={copyPassword}
          className="formL_input"
          type={buttonHide ? "text" : "password"}
          placeholder="Повторите пароль"
          style={{
            borderColor: copyPassword
              ? passwordsMatch
                ? "green"
                : "red"
              : "inherit",
          }}
        />
        {copyPassword && !passwordsMatch && (
          <div style={{ color: "red" }}>Пароли не совпадают</div>
        )}
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
            Пароль должен состоять минимум <br />
            из 8 любых символов
          </div>
        )}

        <button className="formL_button" onClick={handleButton}>
          Зарегистрироваться
        </button>

        <button className="formL_button" type="button">
          <Link style={{ color: "black" }} to="/formLogin">
            Войти
          </Link>
        </button>
      </div>
    </>
  );
}
