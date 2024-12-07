import React from 'react';
import Scene from './components/Scene';
import { PawPrint } from 'lucide-react';

function App() {
  return (
    <div className="w-full h-screen bg-gray-900">
      <Scene />
      <div className="absolute top-4 left-4 text-white">
        <div className="flex items-center gap-2 mb-2">
          <PawPrint className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Pet Services Platform</h1>
        </div>
        <p className="text-gray-300">Meet our friendly virtual companion!</p>
      </div>
    </div>
  );
}

export default App;