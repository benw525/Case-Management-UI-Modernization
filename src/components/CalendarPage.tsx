import React, { useMemo, useState } from 'react';
import {
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
  ArrowUpDownIcon } from
'lucide-react';
type SubTab = 'calendar' | 'list' | 'internet' | 'rules';
// ... existing code ...
interface CalendarEvent {
  id: string;
  title: string;
  type: 'hearing' | 'deadline' | 'conference' | 'trial' | 'probation';
  date: number;
}
interface DeadlineItem {
  id: string;
  title: string;
  caseName: string;
  caseNumber: string;
  type: 'Court Date' | 'Filing';
  dueDate: string;
  daysOver: number;
}
interface SidebarDeadline {
  title: string;
  type: string;
  caseName: string;
  caseNumber: string;
}
interface SidebarCourtDate {
  name: string;
  caseNumber: string;
}
const EVENT_COLORS: Record<CalendarEvent['type'], string> = {
  hearing: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
  deadline:
  'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  conference:
  'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
  trial:
  'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
  probation:
  'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'
};
const HEARING_NAMES = [
'Plea Hearing',
'Bond Hearing',
'Motion Hearing',
'Sentencing Hearing',
'Suppression Hearing',
'Preliminary Hearing',
'Competency Hearing'];

const DEADLINE_NAMES = [
'Witness List Due',
'Motion Filing Deadline',
'Discovery Response Due'];

const CONFERENCE_NAMES = ['Status Conference', 'Pre-Trial Conference'];
const TRIAL_NAMES = [
'Trial Date',
'Bench Trial',
'Jury Selection',
'Arraignment Date'];

const PROBATION_NAMES = ['Probation Revocation H'];
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}
function generateMarchEvents(): CalendarEvent[] {
  const events: CalendarEvent[] = [];
  const types: CalendarEvent['type'][] = [
  'hearing',
  'deadline',
  'conference',
  'trial',
  'probation'];

  const nameMap = {
    hearing: HEARING_NAMES,
    deadline: DEADLINE_NAMES,
    conference: CONFERENCE_NAMES,
    trial: TRIAL_NAMES,
    probation: PROBATION_NAMES
  };
  let seed = 42;
  for (let day = 1; day <= 31; day++) {
    const numEvents = Math.floor(seededRandom(seed++) * 5) + 3;
    for (let i = 0; i < numEvents; i++) {
      const type = types[Math.floor(seededRandom(seed++) * types.length)];
      const names = nameMap[type];
      const title = names[Math.floor(seededRandom(seed++) * names.length)];
      events.push({
        id: `${day}-${i}`,
        title,
        type,
        date: day
      });
    }
  }
  return events;
}
const MARCH_EVENTS = generateMarchEvents();
const DEADLINES_LIST: DeadlineItem[] = [
{
  id: '1',
  title: 'Status Conference',
  caseName: 'State of Alabama v. Tyrone J. Young',
  caseNumber: 'CC-2023-001351',
  type: 'Court Date',
  dueDate: 'Feb 23, 2023',
  daysOver: 1102
},
{
  id: '2',
  title: 'Sentencing Hearing',
  caseName: 'State of Alabama v. Jeffrey N. Williams',
  caseNumber: 'CC-2023-001402',
  type: 'Court Date',
  dueDate: 'Feb 27, 2023',
  daysOver: 1098
},
{
  id: '3',
  title: 'Competency Hearing',
  caseName: 'State of Alabama v. Tyrone J. Young',
  caseNumber: 'CC-2023-001351',
  type: 'Filing',
  dueDate: 'Mar 3, 2023',
  daysOver: 1094
},
{
  id: '4',
  title: 'Plea Hearing',
  caseName: 'State of Alabama v. Clarence D. Foster',
  caseNumber: 'CC-2023-001460',
  type: 'Court Date',
  dueDate: 'Mar 9, 2023',
  daysOver: 1088
},
{
  id: '5',
  title: 'Trial Date',
  caseName: 'State of Alabama v. Clarence D. Foster',
  caseNumber: 'CC-2023-001460',
  type: 'Filing',
  dueDate: 'Apr 11, 2023',
  daysOver: 1055
},
{
  id: '6',
  title: 'Motion Filing Deadline',
  caseName: 'State of Alabama v. Carmen E. Campbell',
  caseNumber: 'DC-2023-005180',
  type: 'Court Date',
  dueDate: 'May 6, 2023',
  daysOver: 1030
},
{
  id: '7',
  title: 'Preliminary Hearing',
  caseName: 'State of Alabama v. Marcus R. Jackson',
  caseNumber: 'CC-2023-001491',
  type: 'Filing',
  dueDate: 'May 14, 2023',
  daysOver: 1022
},
{
  id: '8',
  title: 'Trial Date',
  caseName: 'State of Alabama v. Marcus R. Jackson',
  caseNumber: 'CC-2023-001491',
  type: 'Court Date',
  dueDate: 'May 20, 2023',
  daysOver: 1016
},
{
  id: '9',
  title: 'Bond Hearing',
  caseName: 'State of Alabama v. Carmen E. Campbell',
  caseNumber: 'DC-2023-005180',
  type: 'Court Date',
  dueDate: 'May 21, 2023',
  daysOver: 1015
},
{
  id: '10',
  title: 'Pre-Trial Conference',
  caseName: 'State of Alabama v. Marcus R. Jackson',
  caseNumber: 'CC-2023-001491',
  type: 'Filing',
  dueDate: 'Jun 16, 2023',
  daysOver: 989
},
{
  id: '11',
  title: 'Motion Hearing',
  caseName: 'State of Alabama v. Sandra T. Rivera',
  caseNumber: 'CC-2023-001482',
  type: 'Filing',
  dueDate: 'Jun 26, 2023',
  daysOver: 979
},
{
  id: '12',
  title: 'Trial Date',
  caseName: 'State of Alabama v. Vanessa T. Hamilton',
  caseNumber: 'DC-2023-005203',
  type: 'Filing',
  dueDate: 'Jul 2, 2023',
  daysOver: 973
},
{
  id: '13',
  title: 'Bond Hearing',
  caseName: 'State of Alabama v. Brandon F. Roberts',
  caseNumber: 'DC-2023-005172',
  type: 'Filing',
  dueDate: 'Jul 23, 2023',
  daysOver: 952
},
{
  id: '14',
  title: 'Status Conference',
  caseName: 'State of Alabama v. Patricia S. Wilson',
  caseNumber: 'CC-2023-001386',
  type: 'Filing',
  dueDate: 'Jul 27, 2023',
  daysOver: 948
}];

const SIDEBAR_DEADLINES: SidebarDeadline[] = [
{
  title: 'Witness List Due',
  type: 'Filing',
  caseName: 'Diego G. Wright',
  caseNumber: 'CC-2025-001530'
},
{
  title: 'Plea Hearing',
  type: 'Court Date',
  caseName: 'Monica E. Reed',
  caseNumber: 'DC-2025-005078'
},
{
  title: 'Suppression Hearing',
  type: 'Court Date',
  caseName: 'Ebony H. Reynolds',
  caseNumber: 'CC-2025-001333'
},
{
  title: 'Trial Date',
  type: 'Filing',
  caseName: 'Lakisha K. Scott',
  caseNumber: 'CC-2025-001567'
},
{
  title: 'Arraignment Date',
  type: 'Court Date',
  caseName: 'Alexis F. Evans',
  caseNumber: 'DC-2023-005151'
}];

const SIDEBAR_COURT_DATES: SidebarCourtDate[] = [
{
  name: 'Damien F. Smith',
  caseNumber: 'JV-2025-000808'
},
{
  name: 'Jessica T. Parker',
  caseNumber: 'JV-2024-000896'
},
{
  name: 'Marquis P. Baker',
  caseNumber: 'JV-2024-000829'
},
{
  name: 'Terry C. Jones',
  caseNumber: 'JV-2025-000890'
},
{
  name: 'Jeffrey S. Kelly',
  caseNumber: 'JV-2025-000845'
}];

const DAYS_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
export function CalendarPage() {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>('calendar');
  // ... existing code ...
  const [selectedDate, setSelectedDate] = useState(3);
  const [showDeadlines, setShowDeadlines] = useState(true);
  const [showTasks, setShowTasks] = useState(true);
  const [showCourtDates, setShowCourtDates] = useState(true);
  const [showExternal, setShowExternal] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const weeks = useMemo(() => {
    const days: (number | null)[] = [];
    // March 2026 starts on Sunday (day index 0)
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    const result: (number | null)[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      result.push(days.slice(i, i + 7));
    }
    const lastWeek = result[result.length - 1];
    while (lastWeek.length < 7) {
      lastWeek.push(null);
    }
    return result;
  }, []);
  const getEventsForDay = (day: number) =>
  MARCH_EVENTS.filter((e) => e.date === day);
  const selectedDayEvents = getEventsForDay(selectedDate);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 px-8 py-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100 italic font-serif">
          Calendar
        </h1>
        <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
          699 overdue &middot; 58 this week &middot; 1994 deadlines
        </p>
      </div>

      {/* Sub-tabs */}
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 px-8 flex items-center gap-8">
        <button
          onClick={() => setActiveSubTab('calendar')}
          className={`py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${activeSubTab === 'calendar' ? 'border-gray-800 dark:border-slate-100 text-gray-800 dark:text-slate-100' : 'border-transparent text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300'}`}>

          <CalendarDaysIcon className="w-4 h-4" /> Calendar
        </button>
        <button
          onClick={() => setActiveSubTab('list')}
          className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeSubTab === 'list' ? 'border-gray-800 dark:border-slate-100 text-gray-800 dark:text-slate-100' : 'border-transparent text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300'}`}>

          List View
        </button>
        <button className="py-3 text-sm font-medium text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300 border-b-2 border-transparent">
          Add Deadline
        </button>
        <button
          onClick={() => setActiveSubTab('internet')}
          className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeSubTab === 'internet' ? 'border-gray-800 dark:border-slate-100 text-gray-800 dark:text-slate-100' : 'border-transparent text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300'}`}>

          Internet Calendars
        </button>
        <button
          onClick={() => setActiveSubTab('rules')}
          className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeSubTab === 'rules' ? 'border-gray-800 dark:border-slate-100 text-gray-800 dark:text-slate-100' : 'border-transparent text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300'}`}>

          Rules Calculator
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeSubTab === 'calendar' &&
        <div className="flex gap-6">
            {/* Calendar Grid Area */}
            <div className="flex-1">
              {/* Navigation */}
              <div className="flex items-center justify-between mb-4">
                <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700">
                  <ChevronLeftIcon className="h-4 w-4" />
                  Prev
                </button>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100">
                  March 2026
                </h2>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700">
                    Today
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700">
                    Next
                    <ChevronRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Filters */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs text-gray-500 dark:text-slate-400 font-medium">
                  SHOW:
                </span>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                  type="checkbox"
                  checked={showDeadlines}
                  onChange={(e) => setShowDeadlines(e.target.checked)}
                  className="w-4 h-4 text-green-600 dark:text-green-500 bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 rounded focus:ring-green-500" />

                  <span className="text-sm text-gray-700 dark:text-slate-300">
                    Deadlines
                  </span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                  type="checkbox"
                  checked={showTasks}
                  onChange={(e) => setShowTasks(e.target.checked)}
                  className="w-4 h-4 text-green-600 dark:text-green-500 bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 rounded focus:ring-green-500" />

                  <span className="text-sm text-gray-700 dark:text-slate-300">
                    Tasks
                  </span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                  type="checkbox"
                  checked={showCourtDates}
                  onChange={(e) => setShowCourtDates(e.target.checked)}
                  className="w-4 h-4 text-green-600 dark:text-green-500 bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 rounded focus:ring-green-500" />

                  <span className="text-sm text-gray-700 dark:text-slate-300">
                    Court Dates
                  </span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                  type="checkbox"
                  checked={showExternal}
                  onChange={(e) => setShowExternal(e.target.checked)}
                  className="w-4 h-4 text-green-600 dark:text-green-500 bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 rounded focus:ring-green-500" />

                  <span className="text-sm text-gray-700 dark:text-slate-300">
                    External
                  </span>
                </label>
              </div>

              {/* Calendar Grid */}
              <div className="border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800">
                {/* Day Headers */}
                <div className="grid grid-cols-7 bg-gray-50 dark:bg-slate-900/50 border-b border-gray-200 dark:border-slate-700">
                  {DAYS_OF_WEEK.map((day) =>
                <div
                  key={day}
                  className="px-2 py-3 text-xs font-semibold text-gray-500 dark:text-slate-400 text-center">

                      {day}
                    </div>
                )}
                </div>

                {/* Weeks */}
                {weeks.map((week, wi) =>
              <div
                key={wi}
                className="grid grid-cols-7 border-b border-gray-200 dark:border-slate-700 last:border-b-0">

                    {week.map((day, di) => {
                  const events = day ? getEventsForDay(day) : [];
                  const visible = events.slice(0, 3);
                  const moreCount = events.length - 3;
                  return (
                    <div
                      key={di}
                      onClick={() => day && setSelectedDate(day)}
                      className={`min-h-[100px] p-1 border-r border-gray-200 dark:border-slate-700 last:border-r-0 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors ${day === selectedDate ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}>

                          {day !== null &&
                      <>
                              <div className="text-sm font-medium text-gray-900 dark:text-slate-100 mb-1 pl-1">
                                {day}
                              </div>
                              <div className="space-y-0.5">
                                {visible.map((event) =>
                          <div
                            key={event.id}
                            className={`px-1 py-0.5 text-[10px] rounded truncate ${EVENT_COLORS[event.type]}`}>

                                    {event.title}
                                  </div>
                          )}
                                {moreCount > 0 &&
                          <div className="text-[10px] text-gray-500 dark:text-slate-400 pl-1">
                                    +{moreCount} more
                                  </div>
                          }
                              </div>
                            </>
                      }
                        </div>);

                })}
                  </div>
              )}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-72 flex-shrink-0">
              <div className="sticky top-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100">
                    Mar {selectedDate}, 2026
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-slate-400">
                    {selectedDayEvents.length} events
                  </span>
                </div>

                {/* Deadlines Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-4 h-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-800/50 rounded" />
                    <span className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                      Deadlines ({SIDEBAR_DEADLINES.length})
                    </span>
                  </div>
                  <div className="space-y-4">
                    {SIDEBAR_DEADLINES.map((item, index) =>
                  <div key={index}>
                        <p className="text-sm font-semibold text-gray-900 dark:text-slate-100">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-slate-400">
                          {item.type}
                        </p>
                        <a
                      href="#"
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline">

                          {item.caseName} ({item.caseNumber})
                        </a>
                      </div>
                  )}
                  </div>
                </div>

                {/* Court Dates Section */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-4 h-4 bg-orange-100 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-800/50 rounded" />
                    <span className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                      Court Dates ({SIDEBAR_COURT_DATES.length})
                    </span>
                  </div>
                  <div className="space-y-4">
                    {SIDEBAR_COURT_DATES.map((item, index) =>
                  <div key={index}>
                        <p className="text-sm font-semibold text-gray-900 dark:text-slate-100">
                          {item.name} — Court Date
                        </p>
                        <a
                      href="#"
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline">

                          {item.name} ({item.caseNumber})
                        </a>
                      </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

        {activeSubTab === 'list' &&
        <div>
            {/* Search and Filter */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="appearance-none bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md px-3 py-2 pr-8 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500">

                  <option value="all">All</option>
                  <option value="court_date">Court Date</option>
                  <option value="filing">Filing</option>
                </select>
                <ChevronLeftIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-slate-500 pointer-events-none rotate-[270deg]" />
              </div>
              <div className="flex-1 relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-slate-500" />
                <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search deadlines or cases..."
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />

              </div>
            </div>

            {/* Table */}
            <div className="border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-slate-900/50 border-b border-gray-200 dark:border-slate-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                      Deadline
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                      Case
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                      Due Date ▲
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                      Days
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                      Assigned
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-700/50">
                  {DEADLINES_LIST.map((item) =>
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">

                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-900 dark:text-slate-100">
                            {item.title}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="text-sm text-gray-900 dark:text-slate-100">
                          {item.caseName}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-slate-400">
                          {item.caseNumber}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 dark:text-slate-300">
                        {item.type}
                      </td>
                      <td className="px-4 py-4 text-sm text-red-600 dark:text-red-400 font-medium">
                        {item.dueDate}
                      </td>
                      <td className="px-4 py-4 text-sm text-red-600 dark:text-red-400 font-medium">
                        {item.daysOver}d over
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-400 dark:text-slate-500">
                        —
                      </td>
                    </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
        }
      </div>
    </div>);

}