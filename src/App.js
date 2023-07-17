import DivChart from "./components/DivChart";
import R3fChart from "./components/R3fChart";

function App() {
  return (
    <div className="flex flex-col px-10 mx-10 my-10 border-4 border-red-200 App">
      <h1 className="mt-10 text-5xl tracking-wide border"> Bar Charts</h1>
      <div id="divChart" className="w-full my-10 border border-pink-800 h-200">
        <DivChart />
      </div>
      <div
        id="R3fChart"
        className="relative items-center justify-center min-h-screen my-10 border border-blue-500 fill-pink-400"
      >
        <R3fChart />
      </div>
      {/* <div
        id="AnimatedCylinder"
        className="relative items-center justify-center min-h-screen my-10 border border-blue-500 fill-pink-400"
      >
        <AnimatedCylinder></AnimatedCylinder>
      </div> */}
    </div>
  );
}

export default App;
