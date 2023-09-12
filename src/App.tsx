import Header from "./components/header-element-info/Header";
import Main from "./components/main-periodic-table/Main";

import { useState } from "react";
function App() {
  const [elementNumberInPreview, setElementNumberInPreview] = useState(1);

  function ElementNumberInPreview(elementNumber: number) {
    setElementNumberInPreview(elementNumber);
  }

  return (
    <>
      <div className="bg-black h-screen">
        <Header elementNumberInPreview={elementNumberInPreview} />
        <Main ElementNumberInPreview={ElementNumberInPreview} />
      </div>
    </>
  );
}

export default App;
