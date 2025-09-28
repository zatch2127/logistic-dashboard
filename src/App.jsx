import React from "react";
import SchedulePickup from "./SchedulePickup";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="p-4 shadow bg-white flex justify-between items-center">
        <h1 className="text-xl font-bold">Logistic Dashboard</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2">Dashboard</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded">Schedule</button>
          <button className="px-4 py-2">Reports</button>
        </div>
      </header>

      <SchedulePickup />
    </div>
  );
}

export default App;
