import React from 'react';
import {
  Scale,
  User,
  Calendar,
  Search,
  CheckSquare,
  ClipboardList,
  AlertCircle,
  BarChart2,
  CalendarDays,
  Edit3,
  Lock,
  AlertTriangle } from
'lucide-react';
export function ReportsPage() {
  const reports = [
  {
    icon: <Scale className="w-6 h-6 text-slate-400 dark:text-slate-500" />,
    title: 'Cases by Trial Date',
    description:
    'All active cases with a trial date set, sorted soonest first. Includes judge, lead attorney, and stage.'
  },
  {
    icon:
    <User className="w-6 h-6 text-blue-500 dark:text-blue-400 fill-blue-500 dark:fill-blue-400" />,

    title: 'Cases by Attorney',
    description:
    'All cases assigned to a selected attorney as lead or second chair, grouped by status.'
  },
  {
    icon: <span className="text-2xl">🤝</span>,
    title: 'Next Court Date Report',
    description:
    'Active cases with a next court date, sorted soonest first. Includes judge and days remaining.'
  },
  {
    icon: <span className="text-2xl">🔍</span>,
    title: 'Cases by Upcoming Dates',
    description:
    'Cases with arraignment or next court date deadlines within the specified window.'
  },
  {
    icon:
    <div className="w-6 h-6 bg-green-500 dark:bg-green-600 rounded flex items-center justify-center">
          <CheckSquare className="w-4 h-4 text-white" />
        </div>,

    title: 'Cases with Specific Open Task',
    description:
    'Select an incomplete task type from the list and see all cases that have that task open.'
  },
  {
    icon: <span className="text-2xl">📋</span>,
    title: 'Active Cases Without Trial Date',
    description:
    'Cases currently active but with no trial date set — useful for tracking docket gaps.'
  },
  {
    icon:
    <div className="w-6 h-6 rounded-full bg-red-600 dark:bg-red-700 shadow-inner border border-red-700 dark:border-red-800"></div>,

    title: 'Overdue Tasks by Case',
    description:
    'All cases that have at least one overdue task, with a breakdown of each overdue item.'
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    title: 'Attorney Workload Summary',
    description:
    'Case counts per attorney broken down by active/closed and stage. Useful for load balancing.'
  },
  {
    icon: <span className="text-2xl">📅</span>,
    title: 'Upcoming Deadlines by Window',
    description:
    'All deadlines falling within a chosen time window — 7, 14, 30, 60, or 90 days.'
  },
  {
    icon: <span className="text-2xl">📝</span>,
    title: 'Cases by Arrest Date',
    description:
    'Cases sorted by arrest date. Useful for tracking case timelines and reviewing recent arrests.'
  },
  {
    icon: <span className="text-2xl">🔒</span>,
    title: 'Cases by Custody Status',
    description:
    'Active cases grouped by custody status. Shows bond amounts, jail locations, and assigned attorneys.'
  },
  {
    icon:
    <AlertTriangle className="w-6 h-6 text-slate-800 dark:text-slate-300" />,

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

              <div className="mb-4">{report.icon}</div>
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