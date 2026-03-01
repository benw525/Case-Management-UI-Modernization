import React, { useState } from 'react';
import { Search, Paperclip, Scale } from 'lucide-react';
export function CollaboratePage() {
  const [activeTab, setActiveTab] = useState('Cases');
  const cases = [
  {
    id: '1',
    title: 'State of Alabama v. Brandon L. Barnes',
    iconBg: 'bg-slate-800 dark:bg-slate-700',
    hasUnread: true
  },
  {
    id: '2',
    title: 'State of Alabama v. Precious A. Powell',
    iconBg: 'bg-slate-800 dark:bg-slate-700',
    hasUnread: true
  },
  {
    id: '3',
    title: 'In re Alejandro King',
    subtitle: 'Jamie Connolly: @Admin hey',
    time: 'Yesterday 5:17 PM',
    iconBg: 'bg-slate-800 dark:bg-slate-700',
    active: true
  }];

  return (
    <div className="h-full flex bg-white dark:bg-slate-900">
      {/* Left Sidebar */}
      <div className="w-72 border-r border-slate-200 dark:border-slate-700 flex flex-col flex-shrink-0 bg-slate-50/30 dark:bg-slate-800/30">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 font-serif italic">
            Collaborate
          </h1>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-3 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-md text-sm bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500" />

          </div>
          <div className="flex gap-1 border-b border-slate-200 dark:border-slate-700">
            {['Cases', 'Groups', 'Private'].map((tab) =>
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-sm font-medium border-b-2 transition-colors text-center ${activeTab === tab ? 'border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}>

                {tab}
              </button>
            )}
          </div>
        </div>

        <div className="p-2 border-b border-slate-200 dark:border-slate-700">
          <input
            type="text"
            placeholder="Filter cases..."
            className="w-full px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-sm bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500" />

        </div>

        <div className="flex-1 overflow-y-auto">
          {cases.map((c) =>
          <div
            key={c.id}
            className={`p-3 flex items-start gap-3 cursor-pointer border-b border-slate-100 dark:border-slate-700/50 last:border-0 transition-colors ${c.active ? 'bg-slate-100/80 dark:bg-slate-700/50' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>

              <div className="relative mt-0.5">
                <div
                className={`w-10 h-10 rounded-lg ${c.iconBg} flex items-center justify-center text-white shadow-sm`}>

                  <Scale className="w-5 h-5 opacity-80" />
                </div>
                {c.hasUnread &&
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-slate-900" />
              }
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-0.5">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate pr-2">
                    {c.title}
                  </h3>
                </div>
                {c.subtitle &&
              <div className="flex justify-between items-start">
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      {c.subtitle}
                    </p>
                    {c.time &&
                <span className="text-[10px] text-slate-400 dark:text-slate-500 whitespace-nowrap ml-2">
                        {c.time}
                      </span>
                }
                  </div>
              }
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-slate-900">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between bg-white dark:bg-slate-900 z-10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-serif italic">
            JV-2024-000814 — Alejandro R. King
          </h2>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col bg-slate-50/30 dark:bg-slate-900/50">
          <div className="flex items-center justify-center my-6">
            <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
              Yesterday
            </span>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0 shadow-sm">
              JC
            </div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                  Jamie Connolly
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  Yesterday 5:17 PM
                </span>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-4 py-2.5 rounded-2xl rounded-tl-none text-sm inline-block">
                @Admin hey
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-amber-500/20 focus-within:border-amber-500 transition-all">
            <button className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <input
              type="text"
              placeholder="Type a message... (@ to mention)"
              className="flex-1 bg-transparent border-none focus:outline-none text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500" />

          </div>
        </div>
      </div>
    </div>);

}