import React, { Component } from "react";
import { useTranslation, Trans } from "react-i18next";

export default function Test() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2>{t("nav-home")}</h2>
        <button onClick={() => changeLanguage("fr")}>fr</button>
        <button onClick={() => changeLanguage("en")}>en</button>
      </div>
      <Trans>nav-home</Trans>
    </div>
  );
}
