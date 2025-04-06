function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="grid grid-cols-4 gap-2">
        {/* Top row */}
        <div className={`w-16 h-16 bg-blue-500 rounded`}></div>
        <div className={`w-16 h-16 bg-blue-500 rounded`}></div>
        <div className={`w-16 h-16 bg-blue-500 rounded`}></div>
        <div className={`w-16 h-16 bg-blue-500 rounded`}></div>

        {/* Left side */}
        <div className={`w-16 h-16 bg-blue-500 rounded`}></div>
        <div className="col-span-3"></div>

        {/* Middle left */}
        <div className={`w-16 h-16 bg-blue-500 rounded`}></div>
        <div className="col-span-3"></div>

        {/* Bottom row */}
        <div className={`w-16 h-16 bg-blue-500 rounded`}></div>
        <div className={`w-16 h-16 bg-blue-500 rounded`}></div>
        <div className={`w-16 h-16 bg-blue-500 rounded`}></div>
        <div className={`w-16 h-16 bg-blue-500 rounded`}></div>
      </div>
    </div>
  );
}

export default App;
