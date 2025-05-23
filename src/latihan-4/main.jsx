import { createRoot } from "react-dom/client";
// import TailwindCSS from "./TailwinddCSS";
import './tailwind.css';
import frameworkData from "./framework.json";
import FrameworkList from "./FrameworkList.jsx";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter.jsx";
import ResponsiveDesign from "./ResponsiveDesign.jsx";

createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkList/> */}
            <FrameworkListSearchFilter/>
            <ResponsiveDesign/>
        </div>
    )