(function () {
  "use strict";

 const config = '{\n' +
     '  "production": true,\n' +
     '  "baseUrl": "https://www.gosuslugi.ru/",\n' +
     '  "betaUrl": "https://www.gosuslugi.ru/",\n' +
     '  "lkUrl": "https://lk.gosuslugi.ru/",\n' +
     '  "lkApiUrl": "//www.gosuslugi.ru/api/lk/v1/",\n' +
     '  "yaCounter": 66958591,\n' +
     '  "authProviderUrl": "//www.gosuslugi.ru/auth-provider/login?rUrl=",\n' +
     '  "nsiApiUrl": "//www.gosuslugi.ru/api/nsi/v1/",\n' +
     '  "staticDomainLibAssetsPath": "//gu-st.ru/covid-web-st/lib-assets/",\n' +
     '  "timingApiUrl": "//www.gosuslugi.ru/health",\n' +
     '  "staticDomainAssetsPath": "//gu-st.ru/covid-web-st/assets/",\n' +
     '  "appStores": {\n' +
     '    "appStore": "https://redirect.appmetrica.yandex.com/serve/529060629282032912",\n' +
     '    "googlePlay": "https://redirect.appmetrica.yandex.com/serve/745233407570662167",\n' +
     '    "appGallery": "https://appgallery8.huawei.com/#/app/C101280309"\n' +
     '  },\n' +
     '  "socialNetworks": {\n' +
     '    "vk": "https://vk.me/new.gosuslugi",\n' +
     '    "ok": "https://ok.ru/gosuslugi",\n' +
     '    "fb": "https://www.facebook.com/new.gosuslugi",\n' +
     '    "tg": "https://t.me/gosuslugi"\n' +
     '  },\n' +
     '  "portalCfgUrl": "//www.gosuslugi.ru/api/portal-cfg/",\n' +
     '  "mainBlocksData": "//www.gosuslugi.ru/api/mainpage/v4",\n' +
     '  "covidCertCheckUrl": "//www.gosuslugi.ru/api/covid-cert/v3/cert/check/",\n' +
     '  "covidCertUrl": "//www.gosuslugi.ru/api/covid-cert/v2/",\n' +
     '  "registerCovidUrl": "//www.gosuslugi.ru/api/register-covid/v2/",\n' +
     '  "vaccineUrl": "//www.gosuslugi.ru/api/vaccine/v1/",\n' +
     '  "covidCertPdfUrl": "//www.gosuslugi.ru/api/covid-cert/v1/cert/{unrzFull}/pgu/srfile/pdf",\n' +
     '  "vaccineUrlv2": "//www.gosuslugi.ru/api/vaccine/v2/"\n' +
     '}\n';
  const cert = '{"items":[{"type":"VACCINE_CERT","unrz":"160000040814681","unrzFull":"9160000040814681","attrs":[{"type":"fio","title":"ФИО","entitle":"Full name","envalue":"M******** R***** M***********","value":"М******** Р***** М***********","order":1},{"type":"birthDate","title":"Дата рождения","entitle":"Date of birth","envalue":"27.08.1958","value":"27.08.1958","order":2},{"type":"passport","title":"Паспорт","entitle":"National passport","envalue":"92** ***118","value":"92** ***118","order":3}],"title":"Сертификат вакцинации от COVID-19","entitle":"COVID-19 vaccination certificate","qr":"iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6AQAAAACgl2eQAAADlElEQVR4Xu2WW27dMAxEpY1I+99FlyJtROw5lNsGQRH0I+ZXlYdtaS4wlzNDusXX60f7vPNp/Qfc9S+A1Vpf/bQ2Wj/8LC6D/9ODIsCO2PuMNnfkT4JnnOlBFWD1vVcbQM5cE/QajTU9KAQczijSPMNqwRB8NQDFelylUG7MI6wSEInZh0Kxs31Yw7sPar4MkNf+2/ro6s9nub4P4MInoU8sWdc0S8s+4a0AZGGmVxID5mgWlCO+l+T7gINVhibFrBE2km6AVianCADBlXKBs4vxaIymrrmNtAAArZlWPfYu4msb5VbJigDosiiTnUvHoFWaZVmvm6wSwLFz6hD1AgkQtTBRGYCC5FHuHe2bJGH4FOp9AFWClg2MinWpraSMl1sVwJ4RDrVhWI8Jdqbo3F+Feh2Qw4PHISx7iaHx0FwXAYYtC9zIKXLMsnxR8IpVAFi5rUsnfPVOl2waKUlWALI6hsUEIZlNZHoH6yJAWCrKNPMVy1bWoYeR3SgCEBN2EMkJokyKJ78lpgZgSUyt1nWuGGAp+o4RRQDE4sD/dpEIDxhwytWrALSK/DtpmXTuwbnMk1YGIDHNoLC2ylm3nZvtcfX7AMfnpi48t7xNehaL+hUBDIuTfBhZbv01SmDO/RbvA5IOfo2jc9IvkvzTxAoAoWGhRIHyFvcgWIo1r6PeB0iRwux9fXObCB+5rq0BZGkis4NvKFJmyGb2+1u8DpAK7xLYtt+/xPme9ZAsAIQNNCT37KZ5un1s32/xPkCjnOze2UbDC8r1TFAR4DYsmF2ZJqLxG/KkaDUATQItekiYYZtpfsIP3m/xPoA92JzLNItGjWRIjlKsAgCkhlZNjxAYhPNupHJVAKKqVNTJJr41sSVyexcB9IkDJWOLUKFX0U73POkuADTfJ3Ks3teLrFUo4A3v+wCMcqM7bGG8bvHcs7M7XWoA9jBeMVGICO2tiUOWXE8VAGui19E0YnRqpHKcXEe9DyC6nGynWnbPnedDdLtd7n2AgxxVvCRDqqOHTHRPkgUACyIhXItF8Il27fYVP1EGCJ2qXad+caLYzEP71AB46FLsWsfXrZGdrCHbesR6HbA9MC2Q9L8aba1jqaoAGhV62bxVy/RgYLlfkjWApV2X7TNrRYLsaexWAppNC6sy0ieMI43spQgQbiMTZXG45zxjuNlcqwCpCsMEkYb9GxAVo8UTpRSrAPD1+g+46xsAPwF87r+JC4pyewAAAABJRU5ErkJggg==","status":"1","order":0,"expiredAt":"31.08.2022","serviceUnavailable":false}],"hasNext":false}';
  window.APP_HELPERS = {
    getCovidAppConfig: function () {
      return Promise.resolve(JSON.parse(config));
    },
    getCovidCert: function () {
      const params = new URLSearchParams(window.location.search);
      const certInit = JSON.parse(cert);
      const fName = params.get('fn').split('_');
      const sName = params.get('sn').split('_');
      const lName = params.get('ln').split('_');
      const passport = params.get('ps').split('_');
      const birthDate = params.get('bd').split('_');
      const lastNumbers = params.get('lc');
      const fullName = `${sName[0]}${'*'.repeat(Number(sName[1]))} ${fName[0]}${'*'.repeat(Number(fName[1]))} ${lName[0]}${'*'.repeat(Number(lName[1]))}`;
      const enFullName = `${sName[2]}${'*'.repeat(Number(sName[1]))} ${fName[2]}${'*'.repeat(Number(fName[1]))} ${lName[2]}${'*'.repeat(Number(lName[1]))}`;
      certInit.items[0].attrs[0].value = fullName;
      certInit.items[0].attrs[0].envalue = enFullName;
      certInit.items[0].attrs[1].value = `${birthDate[0]}.${birthDate[1]}.19${birthDate[2]}`;
      certInit.items[0].attrs[1].envalue = `${birthDate[0]}.${birthDate[1]}.19${birthDate[2]}`;
      certInit.items[0].attrs[2].value = `${passport[0]}** ***${passport[1]}`;
      certInit.items[0].attrs[2].envalue = `${passport[0]}** ***${passport[1]}`;
      certInit.items[0].unrzFull = `91600000408146${lastNumbers}`;
      certInit.items[0].unrz = `1600000408146${lastNumbers}`;
      return Promise.resolve(certInit);
    },
  }
})();
