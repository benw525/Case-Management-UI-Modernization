import React, { useState } from 'react';
import { RefreshCw, Plus } from 'lucide-react';
export function CorrespondenceTab() {
  const [activeSubTab, setActiveSubTab] = useState<'emails' | 'texts'>('emails');
  return (
    <div className="max-w-5xl">
      {/* Sub-tabs Header */}
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-700 mb-6">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveSubTab('emails')}
            className={`pb-4 text-sm font-medium ${activeSubTab === 'emails' ? 'border-b-2 border-gray-900 dark:border-slate-100 text-gray-900 dark:text-slate-100' : 'text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300'}`}>

            Emails{' '}
            <span className="text-gray-400 dark:text-slate-500 font-normal ml-1">
              (3)
            </span>
          </button>
          <button
            onClick={() => setActiveSubTab('texts')}
            className={`pb-4 text-sm font-medium ${activeSubTab === 'texts' ? 'border-b-2 border-gray-900 dark:border-slate-100 text-gray-900 dark:text-slate-100' : 'text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300'}`}>

            Texts{' '}
            <span className="text-gray-400 dark:text-slate-500 font-normal ml-1">
              (4)
            </span>
          </button>
        </div>
        <button className="border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-50 dark:hover:bg-slate-800 mb-2">
          Auto Text Settings
        </button>
      </div>

      {/* Emails View */}
      {activeSubTab === 'emails' &&
      <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-600 dark:text-slate-400">
              Email:{' '}
              <span className="font-mono text-gray-900 dark:text-slate-100 bg-gray-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                case-1095@mcpd.mattrmindr.com
              </span>
            </p>
            <button className="border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-50 dark:hover:bg-slate-800 flex items-center">
              Refresh
            </button>
          </div>

          <div className="space-y-0">
            {/* Email 1 */}
            <div className="py-4 border-b border-gray-100 dark:border-slate-700/50 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-800 dark:bg-slate-700 text-white flex items-center justify-center font-semibold flex-shrink-0">
                B
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-slate-100">
                    Benjamin Warren
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-slate-400">
                    2/26/2026, 6:19:01 PM
                  </span>
                </div>
                <p className="text-sm text-gray-900 dark:text-slate-100 mb-1">
                  (no subject)
                </p>
                <p className="text-xs text-gray-500 dark:text-slate-400">
                  Attachments: 1
                </p>
              </div>
            </div>

            {/* Email 2 */}
            <div className="py-4 border-b border-gray-100 dark:border-slate-700/50 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-800 dark:bg-slate-700 text-white flex items-center justify-center font-semibold flex-shrink-0">
                B
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-slate-100">
                    Benjamin Warren
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-slate-400">
                    2/26/2026, 5:56:08 PM
                  </span>
                </div>
                <p className="text-sm text-gray-900 dark:text-slate-100 mb-1">
                  Deposition of Richard Wilson
                </p>
                <p className="text-sm text-gray-500 dark:text-slate-400 mb-1 truncate">
                  Here is the depo transcript
                </p>
                <p className="text-xs text-gray-500 dark:text-slate-400">
                  Attachments: 1
                </p>
              </div>
            </div>

            {/* Email 3 */}
            <div className="py-4 border-b border-gray-100 dark:border-slate-700/50 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-800 dark:bg-slate-700 text-white flex items-center justify-center font-semibold flex-shrink-0">
                B
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-slate-100">
                    Benjamin Warren
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-slate-400">
                    2/26/2026, 3:47:25 PM
                  </span>
                </div>
                <p className="text-sm text-gray-900 dark:text-slate-100 mb-1">
                  Fwd: Notice of Motion Filing - 05-CV-2024-900961.00 - JBB
                </p>
                <p className="text-sm text-gray-500 dark:text-slate-400 mb-1 truncate">
                  [cid:57847359-5d41-4269-83f6-56c552d0a204@namprd17.prod.outlook.com]
                  Benjamin M. Warren Shareholder 29000 U.S.
                </p>
                <p className="text-xs text-gray-500 dark:text-slate-400">
                  Attachments: 1
                </p>
              </div>
            </div>
          </div>
        </div>
      }

      {/* Texts View */}
      {activeSubTab === 'texts' &&
      <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600 dark:text-slate-400">
              1 active auto-text recipient
            </p>
            <div className="flex items-center gap-2">
              <button className="border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-50 dark:hover:bg-slate-800 relative">
                Unmatched
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  1
                </span>
              </button>
              <button className="border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-50 dark:hover:bg-slate-800">
                Send Text
              </button>
              <button className="border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-50 dark:hover:bg-slate-800">
                Refresh
              </button>
            </div>
          </div>

          {/* Monitored Numbers Accordion */}
          <div className="bg-gray-100 dark:bg-slate-800 rounded-lg p-3 flex items-center justify-between mb-8">
            <button className="text-sm font-medium text-gray-900 dark:text-slate-100 flex items-center">
              <span className="mr-1 text-xs">▸</span> Monitored Numbers{' '}
              <span className="text-gray-500 dark:text-slate-400 font-normal ml-1">
                (1)
              </span>
            </button>
            <button className="border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-300 px-2 py-1 rounded text-xs font-medium hover:bg-gray-50 dark:hover:bg-slate-600 flex items-center">
              <Plus className="w-3 h-3 mr-1" /> Add
            </button>
          </div>

          {/* Chat Interface */}
          <div className="space-y-6 mb-12">
            {/* Incoming Message */}
            <div className="flex justify-start">
              <div className="max-w-[70%]">
                <div className="bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-slate-100 rounded-2xl rounded-tl-sm p-4 text-sm">
                  Hi
                </div>
                <div className="flex items-center gap-2 mt-1 px-1">
                  <span className="text-xs text-gray-500 dark:text-slate-400">
                    Test
                  </span>
                  <span className="text-xs text-gray-400 dark:text-slate-500">
                    3/1/2026, 10:25:26 AM
                  </span>
                </div>
              </div>
            </div>

            {/* Outgoing Message */}
            <div className="flex justify-end">
              <div className="max-w-[70%]">
                <div className="bg-[#2B3A55] dark:bg-slate-700 text-white rounded-2xl rounded-tr-sm p-4 text-sm">
                  Brandon, do not forget to be in Court by 8:30 on Tuesday,
                  March 3, 2026. We will be on the 8th floor in Court Room 8400.
                  As a reminder, you can't bring you cell
                </div>
                <div className="flex items-center justify-end gap-2 mt-1 px-1">
                  <span className="text-xs text-gray-500 dark:text-slate-400">
                    Brandon L. Barnes
                  </span>
                  <span className="text-xs text-gray-400 dark:text-slate-500">
                    3/1/2026, 10:24:24 AM
                  </span>
                </div>
              </div>
            </div>

            {/* Incoming Message */}
            <div className="flex justify-start">
              <div className="max-w-[70%]">
                <div className="bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-slate-100 rounded-2xl rounded-tl-sm p-4 text-sm">
                  I'll be there
                </div>
                <div className="flex items-center gap-2 mt-1 px-1">
                  <span className="text-xs text-gray-500 dark:text-slate-400">
                    +12514049290
                  </span>
                  <span className="text-xs text-gray-400 dark:text-slate-500">
                    3/1/2026, 9:53:57 AM
                  </span>
                </div>
              </div>
            </div>

            {/* Outgoing Message */}
            <div className="flex justify-end">
              <div className="max-w-[70%]">
                <div className="bg-[#2B3A55] dark:bg-slate-700 text-white rounded-2xl rounded-tr-sm p-4 text-sm">
                  Hi Brandon, this is a reminder of your court hearing for State
                  of Alabama v. Brandon L. Barnes on [insert date]. Please be
                  prepared to attend.
                </div>
                <div className="flex items-center justify-end gap-2 mt-1 px-1">
                  <span className="text-xs text-gray-500 dark:text-slate-400">
                    Brandon L. Barnes
                  </span>
                  <span className="text-xs text-gray-400 dark:text-slate-500">
                    3/1/2026, 7:49:32 AM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Scheduled Texts */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-slate-100 mb-4">
              Upcoming Scheduled Texts
            </h3>
            <div className="space-y-0">
              <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-slate-700/50">
                <span className="text-sm text-gray-700 dark:text-slate-300">
                  Sentencing Hearing — +18777804236
                </span>
                <span className="text-sm text-gray-500 dark:text-slate-400">
                  7/29/2026
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-slate-700/50">
                <span className="text-sm text-gray-700 dark:text-slate-300">
                  Sentencing Hearing — +18777804236
                </span>
                <span className="text-sm text-gray-500 dark:text-slate-400">
                  8/4/2026
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-slate-700/50">
                <span className="text-sm text-gray-700 dark:text-slate-300">
                  Court Date — +18777804236
                </span>
                <span className="text-sm text-gray-500 dark:text-slate-400">
                  8/9/2026
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-slate-700/50">
                <span className="text-sm text-gray-700 dark:text-slate-300">
                  Court Date — +18777804236
                </span>
                <span className="text-sm text-gray-500 dark:text-slate-400">
                  8/15/2026
                </span>
              </div>
            </div>
          </div>
        </div>
      }
    </div>);

}