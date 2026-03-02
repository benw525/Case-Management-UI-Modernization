import React from 'react';
import {
  Scale,
  User,
  CalendarDays,
  Search,
  CheckSquare,
  ClipboardList,
  AlertCircle,
  BarChart2,
  CalendarClock,
  FileText,
  Lock,
  AlertTriangle } from
'lucide-react';
export function ReportsPage() {
  const reports = [
  {
    Icon: Scale,
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',
    title: 'Cases by Trial Date',
    description:
    'All active cases with a trial date set, sorted soonest first. Includes judge, lead attorney, and stage.'
  },
  {
    Icon: User,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    title: 'Cases by Attorney',
    description:
    'All cases assigned to a selected attorney as lead or second chair, grouped by status.'
  },
  {
    Icon: CalendarDays,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    title: 'Next Court Date Report',
    description:
    'Active cases with a next court date, sorted soonest first. Includes judge and days remaining.'
  },
  {
    Icon: Search,
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    title: 'Cases by Upcoming Dates',
    description:
    'Cases with arraignment or next court date deadlines within the specified window.'
  },
  {
    Icon: CheckSquare,
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-50 dark:bg-green-900/20',
    title: 'Cases with Specific Open Task',
    description:
    'Select an incomplete task type from the list and see all cases that have that task open.'
  },
  {
    Icon: ClipboardList,
    color: 'text-orange-600 dark:text-orange-400',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    title: 'Active Cases Without Trial Date',
    description:
    'Cases currently active but with no trial date set — useful for tracking docket gaps.'
  },
  {
    Icon: AlertCircle,
    color: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-900/20',
    title: 'Overdue Tasks by Case',
    description:
    'All cases that have at least one overdue task, with a breakdown of each overdue item.'
  },
  {
    Icon: BarChart2,
    color: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-900/20',
    title: 'Attorney Workload Summary',
    description:
    'Case counts per attorney broken down by active/closed and stage. Useful for load balancing.'
  },
  {
    Icon: CalendarClock,
    color: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
    title: 'Upcoming Deadlines by Window',
    description:
    'All deadlines falling within a chosen time window — 7, 14, 30, 60, or 90 days.'
  },
  {
    Icon: FileText,
    color: 'text-teal-600 dark:text-teal-400',
    bg: 'bg-teal-50 dark:bg-teal-900/20',
    title: 'Cases by Arrest Date',
    description:
    'Cases sorted by arrest date. Useful for tracking case timelines and reviewing recent arrests.'
  },
  {
    Icon: Lock,
    color: 'text-slate-600 dark:text-slate-400',
    bg: 'bg-slate-100 dark:bg-slate-700/50',
    title: 'Cases by Custody Status',
    description:
    'Active cases grouped by custody status. Shows bond amounts, jail locations, and assigned attorneys.'
  },
  {
    Icon: AlertTriangle,
    color: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    title: 'Pending Custody Actions',
    description:
    'Cases with unresolved custody actions — bond set but not posted, release ordered but not completed, transport ordered but not completed.'
  }];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 font-serif italic mb-1">
          Reports
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Generate and export case reports
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {reports.map((report, index) =>
          <div
            key={index}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full">

              <div
              className={`w-9 h-9 rounded-lg ${report.bg} flex items-center justify-center mb-4`}>

                <report.Icon className={`w-5 h-5 ${report.color}`} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2 leading-tight">
                {report.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {report.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>);

}