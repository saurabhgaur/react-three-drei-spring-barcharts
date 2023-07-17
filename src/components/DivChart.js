import { useSprings, animated } from "@react-spring/web";
// import { a } from "@react-spring/three";

const DivChart = () => {
  const items = [300, 500, 600, 250, 700];

  const [springs, api] = useSprings(items.length, (_) => ({
    from: { width: 20 },
  }));

  const showChart = () => {
    console.log("show chart");
    api.start((i) => ({
      width: items[i],
    }));
  };

  const hideChart = () => {
    console.log("hide chart");
    console.log("hideChart called");
    api.start((_) => ({
      width: 20,
    }));
  };

  return (
    <div>
      <div className="px-2 py-2 flex flex-row gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={showChart}
        >
          Show Chart
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={hideChart}
        >
          Hide Chart
        </button>
      </div>
      <div id="bars">
        {springs.map((animation, i) => (
          <animated.div
            key={i}
            className="bar mx-2 my-2"
            style={{
              height: 20,
              background: "#ff6d6d",
              borderRadius: 2,

              ...animation,
            }}
          ></animated.div>
        ))}
      </div>
    </div>
  );
};

export default DivChart;
