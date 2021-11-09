export default  function imageExists(image_url) {
  fetch(image_url, {
    method: "HEAD",
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((res) => {
      if (res.ok) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => false);
  
}