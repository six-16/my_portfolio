import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-soft-bg text-soft-dark relative">
      {/* Superposition de texture grain analogique */}
      <div className="grain-overlay" />

      {/* Les sections de ton portfolio viendront ici */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Prochaine étape : La Navbar et le Hero */}
      </main>
    </div>
  );
}

export default App;