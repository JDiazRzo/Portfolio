import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Aurora from "./components/Aurora/Aurora";

function App() {
  return (
    <div className="relative min-h-screen">
      
      <div className="fixed inset-0 -z-20 bg-[#0f0f0f]" />

      <div className="fixed inset-0 -z-10 w-screen h-screen opacity-60">
        <Aurora
          colorStops={["#bce8fb","#b39ef5","#b624f9"]}
          blend={1}
          amplitude={1.0}
          speed={1.4}
        />
      </div>

      <Header />
      <Body />
    </div>
  );
}

export default App;