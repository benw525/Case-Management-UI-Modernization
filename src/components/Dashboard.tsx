import React from 'react';
import {
  Scale,
  AlertCircle,
  Calendar,
  MessageSquare,
  Plus,
  Settings2,
  Pin,
  Sparkles,
  MessageCircle,
  FileText,
  Clock } from
'lucide-react';
interface DashboardProps {
  onCaseClick: (id: string) => void;
}
export function Dashboard({ onCaseClick }: DashboardProps) {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Good morning, Admin
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Sunday, March 1, 2026
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 shadow-sm">
            <Settings2 className="w-4 h-4" />
            Customize
          </button>
          <button className="px-4 py-2 bg-amber-500 text-white rounded-md text-sm font-medium hover:bg-amber-600 transition-colors flex items-center gap-2 shadow-sm">
            <Plus className="w-4 h-4" />
            New Case
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
        {
          label: 'Active Cases',
          value: '601',
          icon: Scale,
          color: 'text-blue-600 dark:text-blue-400',
          bg: 'bg-blue-50 dark:bg-blue-900/30'
        },
        {
          label: 'Overdue Tasks',
          value: '12',
          icon: AlertCircle,
          color: 'text-red-600 dark:text-red-400',
          bg: 'bg-red-50 dark:bg-red-900/30'
        },
        {
          label: 'Upcoming Deadlines',
          value: '8',
          icon: Calendar,
          color: 'text-amber-600 dark:text-amber-400',
          bg: 'bg-amber-50 dark:bg-amber-900/30'
        },
        {
          label: 'Unread Messages',
          value: '3',
          icon: MessageSquare,
          color: 'text-emerald-600 dark:text-emerald-400',
          bg: 'bg-emerald-50 dark:bg-emerald-900/30'
        }].
        map((stat, i) =>
        <div
          key={i}
          className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">

            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg ${stat.bg}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {stat.label}
              </span>
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              {stat.value}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Quick Notes */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
          <div className="p-4 border-b border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
            <h2 className="font-semibold text-slate-900 dark:text-slate-100">
              Quick Notes
            </h2>
            <button className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 border border-slate-200 dark:border-slate-700 rounded px-2 py-1">
              + Add Note
            </button>
          </div>
          <div className="p-8 flex-1 flex items-center justify-center text-sm text-slate-400 dark:text-slate-500 text-center">
            No quick notes yet. Click "+ Add Note" to jot something down.
          </div>
        </div>

        {/* Pinned Contacts */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col lg:col-span-2">
          <div className="p-4 border-b border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
            <h2 className="font-semibold text-slate-900 dark:text-slate-100">
              Pinned Contacts
            </h2>
            <span className="text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full">
              1
            </span>
          </div>
          <div className="p-0">
            <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer border-b border-slate-100 dark:border-slate-700/50 last:border-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  Brandon L. Barnes
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded">
                  Miscellaneous
                </span>
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                (877) 780-4236 · benw52592@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pinned Cases */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm mb-6">
        <div className="p-4 border-b border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
          <h2 className="font-semibold text-slate-900 dark:text-slate-100">
            Pinned Cases
          </h2>
          <span className="text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full">
            2
          </span>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-700/50">
          {[
          {
            id: 'CC-2023-001154',
            name: 'State of Alabama v. Brandon L. Barnes',
            defendant: 'Brandon L. Barnes'
          },
          {
            id: 'CC-2025-001234',
            name: 'State of Alabama v. Precious A. Powell',
            defendant: 'Precious A. Powell'
          }].
          map((c) =>
          <div
            key={c.id}
            onClick={() => onCaseClick(c.id)}
            className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer flex items-center justify-between group">

              <div className="flex items-start gap-3">
                <Pin className="w-4 h-4 text-red-500 mt-1 fill-red-500/20" />
                <div>
                  <div className="font-medium text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                    {c.name}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                    {c.id} · <span className="font-sans">{c.defendant}</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Active
              </span>
            </div>
          )}
        </div>
      </div>

      {/* AI Triage */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-amber-900/50 shadow-sm mb-6 overflow-hidden">
        <div className="p-4 border-b border-amber-100 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-900/10 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <h2 className="font-semibold text-slate-900 dark:text-slate-100">
              AI Case Triage
            </h2>
          </div>
          <button className="text-xs font-medium text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 dark:hover:bg-amber-900/50 border border-amber-200 dark:border-amber-800/50 rounded px-3 py-1.5 transition-colors flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            Run Triage
          </button>
        </div>
        <div className="p-8 flex items-center justify-center text-sm text-slate-500 dark:text-slate-400">
          Click "Run Triage" to get AI-powered case prioritization
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="p-4 border-b border-slate-100 dark:border-slate-700/50">
            <h2 className="font-semibold text-slate-900 dark:text-slate-100">
              My Recent Activity
            </h2>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-700/50">
            {[
            {
              type: 'Auto Text Added',
              desc: 'State of Alabama v. Brandon L. Barnes — Added Brandon L. Barnes ((877) 780-4236) for auto text reminders',
              time: '1h ago',
              icon: MessageCircle
            },
            {
              type: 'SMS Sent',
              desc: 'State of Alabama v. Brandon L. Barnes — Text to Brandon L. Barnes: "Brandon, do not forget to be in Court by 8:30 on Tuesday, March 3, 2026. We will..."',
              time: '1h ago',
              icon: MessageCircle
            },
            {
              type: 'SMS Sent',
              desc: 'State of Alabama v. Brandon L. Barnes — Text to Brandon L. Barnes: "Hi Brandon, this is a reminder of your court hearing for State of Alabama v. Bra..."',
              time: '3h ago',
              icon: MessageCircle
            },
            {
              type: 'Filing classified',
              desc: "State of Alabama v. Brandon L. Barnes — Plaintiffs' Motion to Continue Bench Trial",
              time: '2d ago',
              icon: FileText
            },
            {
              type: 'Document edited',
              desc: 'State of Alabama v. Brandon L. Barnes — Deposition of Richard Jared Wilson - August 29, 2025',
              time: '2d ago',
              icon: FileText
            }].
            map((act, i) =>
            <div
              key={i}
              className="p-4 flex gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">

                <div className="mt-1">
                  <act.icon className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium text-sm text-slate-900 dark:text-slate-100">
                      {act.type}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap ml-2">
                      {act.time}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {act.desc}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* My Time */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
          <div className="p-4 border-b border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
            <h2 className="font-semibold text-slate-900 dark:text-slate-100">
              My Time
            </h2>
            <div className="flex bg-slate-100 dark:bg-slate-700 p-0.5 rounded-md text-xs font-medium">
              {['Day', 'Week', 'Month', 'Quarter', 'Year'].map((t) =>
              <button
                key={t}
                className={`px-2.5 py-1 rounded ${t === 'Week' ? 'bg-slate-800 dark:bg-slate-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'}`}>

                  {t}
                </button>
              )}
            </div>
          </div>
          <div className="p-6 flex-1">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-slate-900 dark:text-slate-100">
                0.0
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                hours this week
              </span>
            </div>
            <div className="text-sm text-slate-400 dark:text-slate-500">
              No time entries this week
            </div>
          </div>
        </div>
      </div>
    </div>);

}