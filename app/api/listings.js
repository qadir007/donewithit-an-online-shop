let request = new XMLHttpRequest();
request.onreadystatechange = (e) => {
  if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
    console.log("success", request.responseText);
  } else {
    console.warn("error");
  }
};

export default request;
