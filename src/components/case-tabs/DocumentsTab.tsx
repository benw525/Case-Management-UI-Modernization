import React from 'react';
import { ChevronDown } from 'lucide-react';
export function DocumentsTab() {
  return (
    <div className="space-y-10">
      {/* Upload Document Section */}
      <section>
        <h2 className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-4">
          Upload Document
        </h2>
        <div className="flex items-end gap-4">
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              File (PDF, DOCX, DOC, TXT)
            </label>
            <div className="flex items-center border border-gray-300 dark:border-slate-600 rounded-lg bg-gray-50 dark:bg-slate-800 overflow-hidden">
              <button className="px-4 py-2 bg-gray-100 dark:bg-slate-700 border-r border-gray-300 dark:border-slate-600 text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600">
                Choose File
              </button>
              <span className="px-4 py-2 text-sm text-gray-500 dark:text-slate-400">
                no file selected
              </span>
            </div>
          </div>
          <div className="w-64">
            <label className="block text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              Document Type
            </label>
            <div className="relative">
              <select className="w-full border border-gray-300 dark:border-slate-600 rounded-lg px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-slate-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100">
                <option>Police Report</option>
                <option>Lab/Forensic Report</option>
                <option>Discovery Material</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 dark:text-slate-500 absolute right-3 top-2.5 pointer-events-none" />
            </div>
          </div>
          <button className="bg-gray-900 dark:bg-slate-700 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-slate-600 h-[38px]">
            Upload
          </button>
        </div>
      </section>

      <hr className="border-gray-200 dark:border-slate-700" />

      {/* Documents List Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
            Documents (3)
          </h2>
        </div>

        <div className="mb-6 relative">
          <select className="w-full border border-gray-300 dark:border-slate-600 rounded-lg px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-slate-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100">
            <option>All Types</option>
          </select>
          <ChevronDown className="w-4 h-4 text-gray-400 dark:text-slate-500 absolute right-3 top-2.5 pointer-events-none" />
        </div>

        <div className="space-y-0">
          {/* Document 1 */}
          <div className="py-5 border-b border-gray-200 dark:border-slate-700 flex items-start justify-between group">
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-slate-100 mb-1">
                Forensic Report on Randy Alan Williams - Case 25ME01348
              </h3>
              <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
                Lab/Forensic Report · 3875 KB · 2/26/2026 · Email:
                bwarren@websterhenry.com
              </p>
              <button className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 text-sm font-medium flex items-center">
                <span className="mr-1 text-xs">▸</span> View Summary
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-50 dark:hover:bg-slate-800">
                Download
              </button>
              <button className="border border-yellow-300 dark:border-yellow-800/50 text-yellow-700 dark:text-yellow-400 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-yellow-50 dark:hover:bg-yellow-900/30">
                Re-summarize
              </button>
              <button className="border border-red-300 dark:border-red-800/50 text-red-600 dark:text-red-400 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-red-50 dark:hover:bg-red-900/30">
                Delete
              </button>
            </div>
          </div>

          {/* Document 2 */}
          <div className="py-5 border-b border-gray-200 dark:border-slate-700 flex items-start justify-between group">
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-slate-100 mb-1">
                Deposition of Richard Jared Wilson - August 29, 2025
              </h3>
              <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
                Discovery Material · 1014 KB · 2/26/2026 · Email:
                bwarren@websterhenry.com
              </p>
              <button className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 text-sm font-medium flex items-center">
                <span className="mr-1 text-xs">▸</span> View Summary
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-50 dark:hover:bg-slate-800">
                Download
              </button>
              <button className="border border-yellow-300 dark:border-yellow-800/50 text-yellow-700 dark:text-yellow-400 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-yellow-50 dark:hover:bg-yellow-900/30">
                Re-summarize
              </button>
              <button className="border border-red-300 dark:border-red-800/50 text-red-600 dark:text-red-400 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-red-50 dark:hover:bg-red-900/30">
                Delete
              </button>
            </div>
          </div>

          {/* Document 3 */}
          <div className="py-5 border-b border-gray-200 dark:border-slate-700 flex items-start justify-between group">
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-slate-100 mb-1">
                000377-000381_ Crash Report 06.26.23_ Perkins.pdf
              </h3>
              <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
                Police Report · 1253 KB · 2/26/2026 · Admin
              </p>
              <button className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 text-sm font-medium flex items-center">
                <span className="mr-1 text-xs">▸</span> View Summary
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-50 dark:hover:bg-slate-800">
                Download
              </button>
              <button className="border border-yellow-300 dark:border-yellow-800/50 text-yellow-700 dark:text-yellow-400 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-yellow-50 dark:hover:bg-yellow-900/30">
                Re-summarize
              </button>
              <button className="border border-red-300 dark:border-red-800/50 text-red-600 dark:text-red-400 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-red-50 dark:hover:bg-red-900/30">
                Delete
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>);

}