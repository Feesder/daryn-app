import React, { useContext, useState } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";
import Logo from "./Logo";

function RegistrationForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [enable, setEnable] = useState<boolean>(false);
  const { store } = useContext(Context);

  return (
    <div className="form-wrapper">
      <Logo />
      <div className="form-block mt-7">
        <h3 className="text-4xl font-bold">Создайте учетную запись</h3>
        <p className="text-lg font-semibold">
          Есть аккаунт?{" "}
          <a href="/login" className="text-blue-500">
            Войти сейчас
          </a>
        </p>
        <div className="mt-3">
          <label className="font-semibold text-base" htmlFor="username">
            Логин
          </label>
          <Input
            onChange={(e) => {
              if (e.target.value !== "") {
                setEnable(true);
              } else {
                setEnable(false);
              }
              setUsername(e.target.value);
            }}
            className="input mt-1"
            type="text"
            id="username"
          />
        </div>
        <div className="mt-3">
          <label className="font-semibold text-base" htmlFor="email">
            Почта
          </label>
          <Input
            onChange={(e) => {
              if (e.target.value !== "") {
                setEnable(true);
              } else {
                setEnable(false);
              }
              setEmail(e.target.value);
            }}
            className="input mt-1"
            type="text"
            id="email"
          />
        </div>
        <div className="mt-3">
          <label className="font-semibold text-base" htmlFor="password">
            Пароль
          </label>
          <Input
            onChange={(e) => {
              if (e.target.value !== "") {
                setEnable(true);
              } else {
                setEnable(false);
              }
              setPassword(e.target.value);
            }}
            className="input mt-1"
            type="password"
            id="password"
          />
        </div>
      </div>
      <div className="mt-20">
        <div className="mt-20">
          <Button
            disabled={!enable}
            onClick={() => {
              store.register(username, email, password)
              .then((response) => {
                if (response) window.location.href = "/dashboard"
              });
            }}
          >
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </div>
  );
}

export default observer(RegistrationForm);
