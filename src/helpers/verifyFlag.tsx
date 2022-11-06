export const verifyFlag = (ccn: string) => {
  const visa = "^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$";
  const mastercard =
    "^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$";
  const american = "^3[47]\\d{0,13}";
  const elo =
    "/^((((636368)|(438935)|(504175)|(451416)|(636297))\\d{0,10})|((5067)|(4576)|(4011))\\d{0,12})$";
  let regexpVisa = new RegExp(visa);
  let regexpMaster = new RegExp(mastercard);
  let regexpAmerican = new RegExp(american);

  if (regexpVisa.test(ccn)) {
    return <img alt="visa" src="visa.png" className="flag-icon" />;
  } else if (regexpMaster.test(ccn)) {
    return <img alt="mastercard" src="mastercard.png" className="flag-icon" />;
  } else if (regexpAmerican.test(ccn)) {
    return <img alt="american" src="american.png" className="flag-icon" />;
  } else {
    return null;
  }
};
