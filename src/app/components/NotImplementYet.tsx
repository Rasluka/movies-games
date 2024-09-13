import React from "react";

interface INotImplementYet {
  pageName: string;
}

function NotImplementYet({ pageName }: INotImplementYet) {
  return (
    <h1 className="text-4xl mt-10 text-center bg-gradient-to-r from-blue-500 via-blue-900 to-blue-500 bg-clip-text text-transparent font-bold">
      We are working on this. Next time we should be able to see the {pageName}{" "}
      page.
    </h1>
  );
}

export default NotImplementYet;
