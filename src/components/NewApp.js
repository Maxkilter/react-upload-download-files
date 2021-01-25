import React, { useEffect, useState } from "react";

const NewApp = () => {
  // const [link, setLink] = useState(null);
  // let blob = new Blob(["Hello, world!"], { type: "text/plain" });
  //
  // useEffect(() => {
  //   const getLink = document.getElementById("link");
  //   setLink(getLink);
  //   if (link) link.href = URL.createObjectURL(blob);
  // }, []);
  //
  // console.count();
  // console.log(link);

  let link = document.createElement("a");
  link.download = "hello.txt";

  let blob = new Blob(["Hello, Max! You are very cool man)"], {
    type: "text/plain",
  });

  link.href = URL.createObjectURL(blob);

  // link.click();

  URL.revokeObjectURL(link.href);

  return (
    <>
      <a download="hello.txt" href="#" id="link">
        Загрузить
      </a>
      <img src="data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7" />
    </>
  );
};

export default NewApp;
