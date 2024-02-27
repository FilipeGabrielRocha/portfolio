fetch(
    "https://app.typebot.io/api/v1/typebots/clt4eojwf0004123lj2cspww4/results",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));