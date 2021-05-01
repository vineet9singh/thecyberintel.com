let MESSAGES = {};
export const setMsgJson = async (setIsLoading) => {
  const fetchOptions = {
    cache: "no-cache",
  };
  MESSAGES = await fetch(`${window.FILE_PATH}/msg.json`, fetchOptions).then((resp) => resp.json());
  setIsLoading(false);
};
export const getMsgJson = () => ({ ...MESSAGES });

export const checkMobileDevice = () => {
  let returnFlag = false;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(navigator.userAgent)) {
    returnFlag = true;
  }
  return returnFlag;
};

export const isValidMobileNumber = (number) => /^(\+\d{1,3}[- ]?)?\d{10}$/g.test(number.toString());
export const isValidDate = (str) =>
  /^([0-2][0-9]|(3)[0-1]|[0-9])(\/)(((0)[0-9])|((1)[0-2])|[0-9])(\/)((\d{4})|(\d{2}))$/.test(str);

export const handlePrint = () => {
  document.body.classList.add("printing");
  window.print();
};
