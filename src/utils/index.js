const decodeText = function (text) {
  const txt = document.createElement("textarea");
  txt.innerHTML = text;
  return txt.value;
};

export { decodeText };
