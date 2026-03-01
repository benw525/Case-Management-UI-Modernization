import React, { useState } from 'react';
import { ChevronDown, Pin, Edit2, Key, X } from 'lucide-react';
export function StaffDirectoryPage() {
  const [isPinnedOpen, setIsPinnedOpen] = useState(true);
  const [isAllOpen, setIsAllOpen] = useState(true);
  const pinnedStaff = [
  {
    id: '1',
    initials: 'BW',
    name: 'Brittany Wilson',
    role: 'Trial Attorney',
    color: 'bg-yellow-500'
  },
  {
    id: '2',
    initials: 'CN',
    name: 'Champ Napier',
    role: 'Client Advocate',
    color: 'bg-green-500'
  },
  {
    id: '3',
    initials: 'CY',
    name: 'Chris Youngpeter',
    role: 'Trial Attorney',
    color: 'bg-blue-600'
  },
  {
    id: '4',
    initials: 'JC',
    name: 'Jamie Connolly',
    role: 'Trial Attorney',
    color: 'bg-emerald-500'
  }];

  const allStaff = [
  {
    id: '5',
    initials: 'AA',
    name: "A'maya Agee",
    role: 'Trial Coordinator',
    color: 'bg-blue-600',
    email: 'amaya.agee@mobiledefender.org',
    cases: '50 (84 total)',
    activeRole: 'Trial Coordinator'
  },
  {
    id: '6',
    initials: 'AS',
    name: 'Aaron Sutherland',
    role: 'Trial Attorney',
    color: 'bg-purple-600',
    directLine: '(251) 319-6087',
    email: 'aaron.sutherland@mobiledefender.org',
    cases: '21 (35 total)',
    activeRole: 'Trial Attorney'
  },
  {
    id: '7',
    initials: 'AD',
    name: 'Admin',
    role: 'App Admin',
    color: 'bg-amber-500',
    email: 'admin@mobiledefender.org',
    cases: '0 (0 total)',
    activeRole: 'App Admin'
  },
  {
    id: '8',
    initials: 'AC',
    name: 'Alec Cartwright',
    role: 'Trial Attorney',
    color: 'bg-pink-600',
    directLine: '(251) 319-6115',
    email: 'alec.cartwright@mobiledefender.org',
    cases: '21 (39 total)',
    activeRole: 'Trial Attorney'
  }];

  const compactStaff = [
  {
    id: '9',
    initials: 'AC',
    name: 'Alisa Covington',
    role: 'Trial Coordinator',
    color: 'bg-emerald-600'
  },
  {
    id: '10',
    initials: 'AG',
    name: 'Amber Gould',
    role: 'Trial Attorney',
    color: 'bg-teal-500'
  },
  {
    id: '11',
    initials: 'AB',
    name: 'Annika Banks',
    role: 'Trial Coordinator',
    color: 'bg-amber-600'
  },
  {
    id: '12',
    initials: 'AP',
    name: 'Arthur Powell',
    role: 'Public Defender',
    color: 'bg-yellow-600'
  },
  {
    id: '13',
    initials: 'AC',
    name: 'Ashley Cameron',
    role: 'Chief Deputy Public Defender',
    color: 'bg-blue-600'
  },
  {
    id: '14',
    initials: 'AW',
    name: 'Aubrey Whitten',
    role: 'Trial Attorney',
    color: 'bg-green-500'
  },
  {
    id: '15',
    initials: 'BS',
    name: 'Barry Smith Jr',
    role: 'IT Specialist',
    color: 'bg-green-600'
  },
  {
    id: '16',
    initials: 'BH',
    name: 'Becky Harmon',
    role: 'Trial Coordinator',
    color: 'bg-red-600'
  }];

  const rolesList = [
  'Public Defender',
  'Chief Deputy Public Defender',
  'Deputy Public Defender',
  'Senior Trial Attorney',
  'Trial Attorney',
  'Office Administrator',
  'Administrative Assistant',
  'IT Specialist',
  'Trial Coordinator Supervisor',
  'Trial Coordinator',
  'Chief Social Worker',
  'Social Worker',
  'Client Advocate',
  'Investigator',
  'Paralegal',
  'App Admin'];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      {/* Header */}
      <div className="px-8 pt-8 pb-6 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 font-serif italic mb-1">
            Staff Directory
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            63 of 63 team members
          </p>
        </div>
        <div className="flex flex-col gap-3 items-end">
          <div className="relative">
            <select className="w-48 pl-3 pr-8 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md text-sm text-slate-700 dark:text-slate-300 appearance-none focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600">
              <option>All Roles</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <button className="px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-md text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors shadow-sm">
            + Add Staff
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Pinned Section */}
          <div>
            <button
              onClick={() => setIsPinnedOpen(!isPinnedOpen)}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">

              <ChevronDown
                className={`w-4 h-4 text-slate-600 dark:text-slate-400 transition-transform ${isPinnedOpen ? '' : '-rotate-90'}`} />

              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Pinned (4)
              </h2>
            </button>

            {isPinnedOpen &&
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {pinnedStaff.map((staff) =>
              <div
                key={staff.id}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm flex items-center gap-4 relative group cursor-pointer hover:border-slate-300 dark:hover:border-slate-500 transition-colors">

                    <Pin className="w-4 h-4 text-red-500 fill-red-500 absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div
                  className={`w-12 h-12 rounded-full ${staff.color} text-white flex items-center justify-center font-semibold text-lg flex-shrink-0`}>

                      {staff.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                        {staff.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 truncate">
                        {staff.role}
                      </p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-slate-300 dark:text-slate-600 -rotate-90" />
                  </div>
              )}
              </div>
            }
          </div>

          {/* All Staff Section */}
          <div>
            <button
              onClick={() => setIsAllOpen(!isAllOpen)}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">

              <ChevronDown
                className={`w-4 h-4 text-slate-600 dark:text-slate-400 transition-transform ${isAllOpen ? '' : '-rotate-90'}`} />

              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                All Staff (63)
              </h2>
            </button>

            {isAllOpen &&
            <div className="space-y-4">
                {/* Detailed Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                  {allStaff.map((staff) =>
                <div
                  key={staff.id}
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-sm flex flex-col relative">

                      <div className="absolute top-4 right-4 flex items-center gap-2 text-slate-300 dark:text-slate-600">
                        <Pin className="w-4 h-4 text-red-500 fill-red-500 cursor-pointer" />
                        <Edit2 className="w-3.5 h-3.5 cursor-pointer hover:text-slate-600 dark:hover:text-slate-400" />
                        <Key className="w-4 h-4 text-amber-500 cursor-pointer" />
                        <X className="w-4 h-4 cursor-pointer hover:text-red-500" />
                      </div>

                      <div className="flex items-center gap-4 mb-6">
                        <div
                      className={`w-12 h-12 rounded-full ${staff.color} text-white flex items-center justify-center font-semibold text-lg flex-shrink-0`}>

                          {staff.initials}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                            {staff.name}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                            {staff.role}
                          </p>
                        </div>
                        <ChevronDown className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute right-4 top-14" />
                      </div>

                      <div className="space-y-3 mb-6 flex-1">
                        <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700/50 pb-2">
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            Extension
                          </span>
                          <span className="text-xs font-medium text-slate-900 dark:text-slate-100">
                            —
                          </span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700/50 pb-2">
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            Direct Line
                          </span>
                          <span className="text-xs font-medium text-slate-900 dark:text-slate-100">
                            {staff.directLine || '—'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700/50 pb-2">
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            Cell
                          </span>
                          <span className="text-xs font-medium text-slate-900 dark:text-slate-100">
                            —
                          </span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700/50 pb-2">
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            Email
                          </span>
                          <span className="text-xs font-medium text-slate-900 dark:text-slate-100 truncate max-w-[150px]">
                            {staff.email}
                          </span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700/50 pb-2">
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            Active Cases
                          </span>
                          <span className="text-xs font-medium text-slate-900 dark:text-slate-100">
                            {staff.cases}
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                          ROLES — CLICK TO TOGGLE
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {rolesList.map((role) =>
                      <span
                        key={role}
                        className={`text-[10px] font-medium px-2 py-1 rounded cursor-pointer transition-colors ${role === staff.activeRole ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-400' : 'text-slate-300 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-300'}`}>

                              {role}
                            </span>
                      )}
                        </div>
                      </div>
                    </div>
                )}
                </div>

                {/* Compact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {compactStaff.map((staff) =>
                <div
                  key={staff.id}
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm flex items-center gap-4 cursor-pointer hover:border-slate-300 dark:hover:border-slate-500 transition-colors">

                      <div
                    className={`w-12 h-12 rounded-full ${staff.color} text-white flex items-center justify-center font-semibold text-lg flex-shrink-0`}>

                        {staff.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                          {staff.name}
                        </h3>
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 truncate">
                          {staff.role}
                        </p>
                      </div>
                      <ChevronDown className="w-4 h-4 text-slate-300 dark:text-slate-600 -rotate-90" />
                    </div>
                )}
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>);

}