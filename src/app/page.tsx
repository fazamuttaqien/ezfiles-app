"use client";

import { TourGuide } from "@/temporary/components/tour-guide";
import { Bell, Search, Settings, User } from "lucide-react";

export default function Home() {
  const tourSteps = [
    {
      element: '[data-tour="search"]',
      popover: {
        title: "Search Feature",
        description:
          "Use this search bar to find anything you need quickly. Just type your keywords and press Enter.",
        side: "bottom",
        align: "start",
      },
    },
    {
      element: '[data-tour="notifications"]',
      popover: {
        title: "Notifications",
        description:
          "Click here to view your latest notifications and stay updated with important alerts.",
        side: "bottom",
        align: "center",
      },
    },
    {
      element: '[data-tour="settings"]',
      popover: {
        title: "Settings",
        description:
          "Access your account settings, preferences, and configuration options from this menu.",
        side: "left",
        align: "start",
      },
    },
    {
      element: '[data-tour="profile"]',
      popover: {
        title: "User Profile",
        description:
          "View and edit your profile information, change your avatar, and manage your account details.",
        side: "left",
        align: "center",
      },
    },
    {
      element: '[data-tour="dashboard"]',
      popover: {
        title: "Main Dashboard",
        description:
          "This is your main workspace where you can see an overview of all your activities and quick access to key features.",
        side: "top",
        align: "center",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header with Navigation */}
      <header className="bg-white shadow-sm rounded-lg mb-6 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>

            {/* Search Bar */}
            <div className="relative" data-tour="search">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Tour Guide Button */}
            <TourGuide
              steps={tourSteps}
              buttonText="Take Tour"
              className="mr-4"
              popoverWidth="90vw" // 90% dari viewport width
              popoverMaxWidth="600px"
            />

            {/* Notifications */}
            <button
              data-tour="notifications"
              className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* Settings */}
            <button
              data-tour="settings"
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full"
            >
              <Settings className="w-5 h-5" />
            </button>

            {/* Profile */}
            <button
              data-tour="profile"
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main data-tour="dashboard" className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Cards */}
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-lg font-medium text-blue-900 mb-2">
              Analytics
            </h3>
            <p className="text-blue-700">
              View your performance metrics and insights.
            </p>
            <div className="mt-4 text-2xl font-bold text-blue-900">1,234</div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-lg font-medium text-green-900 mb-2">Revenue</h3>
            <p className="text-green-700">
              Track your earnings and financial growth.
            </p>
            <div className="mt-4 text-2xl font-bold text-green-900">
              $12,345
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h3 className="text-lg font-medium text-purple-900 mb-2">Tasks</h3>
            <p className="text-purple-700">
              Manage your pending and completed tasks.
            </p>
            <div className="mt-4 text-2xl font-bold text-purple-900">23</div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h4 className="font-medium text-yellow-800 mb-2">
            👋 Welcome to your dashboard!
          </h4>
          <p className="text-yellow-700">
            New here? Click the <strong>&quot;Take Tour&quot;</strong> button in
            the header to get a guided walkthrough of all the features.
          </p>
        </div>
      </main>
    </div>
  );
}
