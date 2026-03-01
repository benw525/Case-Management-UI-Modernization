import React from 'react';
import { Download, X } from 'lucide-react';
export function TimeLogPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 font-serif italic mb-1">
            Time Log
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Admin · 1 entry · Feb 28, 2026 – Feb 28, 2026
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-slate-700 dark:bg-slate-600 text-white rounded-md text-sm font-medium hover:bg-slate-600 dark:hover:bg-slate-500 transition-colors shadow-sm">
            + Add Entry
          </button>
          <button className="px-4 py-2 bg-slate-800 dark:bg-slate-700 text-white rounded-md text-sm font-medium hover:bg-slate-900 dark:hover:bg-slate-600 transition-colors flex items-center gap-2 shadow-sm">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Filters Card */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm flex items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              From
            </span>
            <input
              type="text"
              defaultValue="03/01/2026"
              className="w-32 px-3 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500" />

          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              To
            </span>
            <input
              type="text"
              defaultValue="03/01/2026"
              className="w-32 px-3 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500" />

          </div>

          <div className="flex items-center gap-2 ml-4">
            {[
            'This Week',
            'This Month',
            'Last Month',
            'Last 30 Days',
            'Last 90 Days',
            'This Year'].
            map((filter) =>
            <button
              key={filter}
              className="px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">

                {filter}
              </button>
            )}
          </div>
        </div>

        {/* Time Entries Card */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm overflow-hidden flex flex-col min-h-[400px]">
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-white dark:bg-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-serif">
              Time Entries
            </h2>
            <span className="text-sm text-slate-400 dark:text-slate-500">
              1 entries
            </span>
          </div>

          {/* Table */}
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-[15%]">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-[35%]">
                  Case
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-[35%]">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-[10%]">
                  Time
                </th>
                <th className="px-3 py-3 w-[5%]"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                  Feb 28, 2026
                </td>
                <td className="px-6 py-4 text-sm text-slate-900 dark:text-slate-100">
                  State of Alabama v. Brandon L. Barnes
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                  Draft motion to compel
                </td>
                <td className="px-6 py-4 text-sm text-slate-900 dark:text-slate-100">
                  .5
                </td>
                <td className="px-3 py-4 text-center">
                  <button className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>);

}