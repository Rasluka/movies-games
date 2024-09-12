import React from "react";

interface INotImplementYet {
  pageName: string;
}

function NotImplementYet({ pageName }: INotImplementYet) {
  return (
    <h1 className="text-4xl mt-10 text-center">
      We are working on this. Next time we should be able to see the {pageName}{" "}
      Page
    </h1>
  );
}

export default NotImplementYet;
