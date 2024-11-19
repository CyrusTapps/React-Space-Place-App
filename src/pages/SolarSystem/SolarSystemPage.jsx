import React from "react";
import "./SolarSystemPage.css";
import Header from "../../components/common/Header/Header";
import NavBar from "../../components/common/Navigation/NavBar";
import MainViewer from "../../components/common/MainViewer/MainViewer";
import Hero from "../../components/common/Hero/Hero";
import Footer from "../../components/common/Footer/Footer";

const SolarSystemPage = () => {
  const iframeSrc = "https://www.solarsystemscope.com/iframe/";

  return (
    <div className="solar-system-page">
      <Header />
      <NavBar />
      <Hero />
      <MainViewer>
        <div className="iframe-wrapper">
          <iframe className="solsysframe" src={iframeSrc}></iframe>
        </div>
      </MainViewer>
      <Footer />
    </div>
  );
};

export default SolarSystemPage;
// *****************************************************************//
// import React, { useEffect } from "react";
// import "./SolarSystemPage.css";
// import Header from "../../components/common/Header/Header";
// import NavBar from "../../components/common/Navigation/NavBar";
// import MainViewer from "../../components/common/MainViewer/MainViewer";
// import Footer from "../../components/common/Footer/Footer";

// const SolarSystemPage = () => {
//   const iframeSrc = "https://www.solarsystemscope.com/iframe/";

//   useEffect(() => {
//     // Save the original viewport meta tag content
//     const metaTag = document.querySelector('meta[name="viewport"]');
//     const originalContent = metaTag ? metaTag.getAttribute("content") : "";

//     // Set the meta tag for desktop-like mode
//     if (metaTag) {
//       metaTag.setAttribute(
//         "content",
//         "width=1024, initial-scale=1.0, user-scalable=no"
//       );
//     } else {
//       // Create a new meta tag if one doesn't exist
//       const newMetaTag = document.createElement("meta");
//       newMetaTag.name = "viewport";
//       newMetaTag.content = "width=1024, initial-scale=1.0, user-scalable=yes";
//       document.head.appendChild(newMetaTag);
//     }

//     // Cleanup function to restore original meta tag on unmount
//     return () => {
//       if (metaTag) {
//         metaTag.setAttribute("content", originalContent);
//       } else {
//         const addedMetaTag = document.querySelector('meta[name="viewport"]');
//         if (addedMetaTag) {
//           addedMetaTag.remove();
//         }
//       }
//     };
//   }, []);

//   return (
//     <div className="solar-system-page">
//       <Header />
//       <NavBar />
//       <MainViewer>
//         <div className="iframe-wrapper">
//           <iframe className="solsysframe" src={iframeSrc}></iframe>
//         </div>
//       </MainViewer>
//       <Footer />
//     </div>
//   );
// };

// export default SolarSystemPage;
