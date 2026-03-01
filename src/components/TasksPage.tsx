import React, { useState } from 'react';
import { Edit2, ChevronUp, ChevronDown } from 'lucide-react';
export function TasksPage() {
  const [activeTab, setActiveTab] = useState('All');
  const tasks = [
  {
    id: '1',
    title: 'Overdue task',
    badge: '📋 30d',
    caseName: 'State of Alabama v. Brandon L. Barnes',
    caseNumber: 'CC-2023-001154',
    assignedInitials: 'AD',
    assignedName: 'Admin',
    dueDate: 'Mar 6, 2026',
    isOverdue: true,
    priority: 'Urgent',
    status: 'Not Started'
  },
  {
    id: '2',
    title: 'Test Task',
    caseName: 'State of Alabama v. Brandon L. Barnes',
    caseNumber: 'CC-2023-001154',
    assignedInitials: 'AD',
    assignedName: 'Admin',
    dueDate: 'Mar 30, 2026',
    isOverdue: false,
    priority: 'Medium',
    priorityChange: 'was Low',
    status: 'Not Started'
  }];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 font-serif italic mb-1">
            Tasks
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            2 open · 1 recurring · 0 overdue
          </p>
        </div>
        <button className="px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white rounded-md text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-700 border border-transparent dark:border-slate-700 transition-colors shadow-sm">
          + New Task
        </button>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="border-b border-slate-200 dark:border-slate-700 flex gap-8 mb-6">
          {['All', 'Open', 'Urgent', 'Overdue', 'Recurring'].map((tab) =>
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab ? 'border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'}`}>

              {tab}
            </button>
          )}
        </div>

        {/* Table Card */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="py-4 px-6 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  TASK{' '}
                  <ChevronUp className="w-3 h-3 text-slate-300 dark:text-slate-600" />
                </th>
                <th className="py-4 px-6 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    CASE{' '}
                    <ChevronUp className="w-3 h-3 text-slate-300 dark:text-slate-600" />
                  </div>
                </th>
                <th className="py-4 px-6 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    ASSIGNED{' '}
                    <ChevronUp className="w-3 h-3 text-slate-300 dark:text-slate-600" />
                  </div>
                </th>
                <th className="py-4 px-6 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    DUE{' '}
                    <ChevronUp className="w-3 h-3 text-slate-900 dark:text-slate-100" />
                  </div>
                </th>
                <th className="py-4 px-6 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    PRIORITY{' '}
                    <ChevronUp className="w-3 h-3 text-slate-300 dark:text-slate-600" />
                  </div>
                </th>
                <th className="py-4 px-6 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  STATUS
                </th>
                <th className="py-4 px-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {tasks.map((task) =>
              <tr
                key={task.id}
                className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">

                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-amber-500 focus:ring-amber-500" />

                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                          {task.title}
                        </span>
                        {task.badge &&
                      <span className="text-[10px] font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-1.5 py-0.5 rounded border border-blue-100 dark:border-blue-800/50">
                            {task.badge}
                          </span>
                      }
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {task.caseName}
                    </div>
                    <div className="text-xs text-slate-400 dark:text-slate-500">
                      {task.caseNumber}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 flex items-center justify-center text-[10px] font-bold border border-amber-200 dark:border-amber-800/50">
                        {task.assignedInitials}
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {task.assignedName}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                    className={`text-sm ${task.isOverdue ? 'text-red-600 dark:text-red-400 font-medium' : 'text-amber-600 dark:text-amber-400 font-medium'}`}>

                      {task.dueDate}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col items-start gap-0.5">
                      <div className="flex items-center gap-1.5">
                        <span
                        className={`text-xs font-medium px-2 py-0.5 rounded ${task.priority === 'Urgent' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'}`}>

                          {task.priority}
                        </span>
                        {task.priorityChange &&
                      <ChevronUp className="w-3 h-3 text-red-500 dark:text-red-400" />
                      }
                      </div>
                      {task.priorityChange &&
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 pl-1">
                          {task.priorityChange}
                        </span>
                    }
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {task.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-slate-300 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-300 transition-colors opacity-0 group-hover:opacity-100">
                      <Edit2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>);

}