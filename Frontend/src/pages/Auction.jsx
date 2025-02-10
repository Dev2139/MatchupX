import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, User, Trophy, DollarSign, History, Wallet, Users } from 'lucide-react';

const Auction = () => {
  const [currentBid, setCurrentBid] = useState(20000000); // Starting bid in rupees
  const [bidHistory, setBidHistory] = useState([]);

  const teams = [
    { id: 1, name: 'Royal Challengers', budget: 450000000, color: 'red-600' },
    { id: 2, name: 'Super Kings', budget: 380000000, color: 'yellow-500' },
    { id: 3, name: 'Knight Riders', budget: 520000000, color: 'purple-600' },
  ];

  const currentPlayer = {
    id: 1,
    name: 'Virat Kohli',
    role: 'Batsman',
    battingStyle: 'Right Handed',
    basePrice: 20000000,
  };

  const topPurchases = [
    {
      name: 'MS Dhoni',
      amount: 165000000,
      team: 'Super Kings',
      role: 'Wicket Keeper',
    },
    {
      name: 'Ben Stokes',
      amount: 152500000,
      team: 'Knight Riders',
      role: 'All-Rounder',
    },
  ];

  const handleBid = (increment) => {
    const newBid = currentBid + increment;
    setCurrentBid(newBid);
    setBidHistory([
      {
        amount: newBid,
        timestamp: new Date(),
      },
      ...bidHistory,
    ]);
  };

  const formatCrores = (amount) => {
    return `₹${(amount / 10000000).toFixed(1)} Cr`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <ChevronLeft className="h-5 w-5" />
            <span>Previous Player</span>
          </button>
          <h1 className="text-2xl font-bold">Live Auction</h1>
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <span>Next Player</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors flex items-center gap-2">
          <Trophy className="h-5 w-5" />
          Start New Auction
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Auction Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Player Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-6 mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <User className="h-12 w-12 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{currentPlayer.name}</h2>
                <div className="flex items-center space-x-3 mt-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {currentPlayer.role}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {currentPlayer.battingStyle}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="flex items-center space-x-3">
                <DollarSign className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-500">Base Price</div>
                  <div className="text-xl font-bold">{formatCrores(currentPlayer.basePrice)}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Trophy className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="text-sm text-gray-500">Current Bid</div>
                  <div className="text-xl font-bold text-blue-600">{formatCrores(currentBid)}</div>
                </div>
              </div>
            </div>

            {/* Bidding Buttons */}
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleBid(5000000)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <DollarSign className="h-4 w-4" />
                Bid {formatCrores(5000000)}
              </button>
              <button
                onClick={() => handleBid(10000000)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <DollarSign className="h-4 w-4" />
                Bid {formatCrores(10000000)}
              </button>
              <button
                onClick={() => handleBid(20000000)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <DollarSign className="h-4 w-4" />
                Bid {formatCrores(20000000)}
              </button>
            </div>
          </div>

          {/* Top Purchases */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Top Auction Purchases
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {topPurchases.map((purchase, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">{purchase.name}</div>
                    <div className="text-sm text-gray-500">{purchase.role}</div>
                    <div className="text-sm font-semibold text-blue-600">
                      {formatCrores(purchase.amount)}
                    </div>
                    <div className="text-sm text-gray-500">{purchase.team}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Bid History */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <History className="h-5 w-5 text-gray-600" />
              Bid History
            </h3>
            <div className="space-y-4 max-h-[300px] overflow-y-auto">
              {bidHistory.map((bid, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b last:border-0"
                >
                  <div className="text-sm text-gray-500">
                    {bid.timestamp.toLocaleTimeString()}
                  </div>
                  <div className="font-semibold text-blue-600">
                    {formatCrores(bid.amount)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Budgets */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Wallet className="h-5 w-5 text-green-600" />
              Team Budgets
            </h3>
            <div className="space-y-4">
              {teams.map((team) => (
                <div
                  key={team.id}
                  className="flex justify-between items-center py-2 border-b last:border-0"
                >
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <div className="font-semibold">{team.name}</div>
                  </div>
                  <div className="font-semibold">{formatCrores(team.budget)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auction;