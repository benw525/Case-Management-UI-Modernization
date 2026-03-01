import React, { useState } from 'react';
import {
  Search,
  Plus,
  ChevronDown,
  Sparkles,
  Pin,
  X,
  Filter } from
'lucide-react';
interface CasesListProps {
  onCaseClick: (id: string) => void;
}
const STAGE_COLORS: Record<string, string> = {
  Trial:
  'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50',
  Arraignment:
  'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800/50',
  'Pre-Trial Motions':
  'bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-800/50',
  'Plea Negotiations':
  'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/50',
  'Post-Conviction':
  'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600',
  Appeal:
  'bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800/50'
};
const MOCK_CASES = [
{
  id: 'CC-2025-001108',
  title: 'State of Alabama v. Dorothy G. Sullivan',
  prosecutor: 'Sarah Johnson',
  type: 'Felony',
  defendant: 'Dorothy G. Sullivan',
  stage: 'Trial',
  trialDate: 'Jun 2, 2026',
  arrestDate: 'Dec 26, 2025',
  lead: 'BW'
},
{
  id: 'DC-2025-005036',
  title: 'State of Alabama v. Robert A. Wright',
  prosecutor: 'Stephanie Moore',
  type: 'Misdemeanor',
  defendant: 'Robert A. Wright',
  stage: 'Arraignment',
  trialDate: '—',
  arrestDate: 'Aug 19, 2025',
  lead: 'JC'
},
{
  id: 'CC-2025-001234',
  title: 'State of Alabama v. Precious A. Powell',
  prosecutor: 'David Harper',
  type: 'Felony',
  defendant: 'Precious A. Powell',
  stage: 'Pre-Trial Motions',
  trialDate: 'Jan 26, 2027',
  arrestDate: 'Aug 15, 2025',
  lead: 'JC',
  pinned: true
},
{
  id: 'JV-2025-000810',
  title: 'In re Raymond Torres',
  prosecutor: 'Daniel Marsh',
  type: 'Juvenile',
  defendant: 'Raymond C. Torres',
  stage: 'Arraignment',
  trialDate: '—',
  arrestDate: 'Jul 18, 2025',
  lead: 'CD'
},
{
  id: 'CC-2025-001079',
  title: 'State of Alabama v. Omar K. McDonald',
  prosecutor: 'Catherine Webb',
  type: 'Felony',
  defendant: 'Omar K. McDonald',
  stage: 'Trial',
  trialDate: 'Nov 22, 2026',
  arrestDate: 'Jun 24, 2025',
  lead: 'JC'
},
{
  id: 'CC-2025-001171',
  title: 'State of Alabama v. Regina D. Sanders',
  prosecutor: 'Patricia Nolan',
  type: 'Felony',
  defendant: 'Regina D. Sanders',
  stage: 'Pre-Trial Motions',
  trialDate: 'Aug 11, 2026',
  arrestDate: 'Jun 21, 2025',
  lead: 'JC'
},
{
  id: 'CC-2025-001135',
  title: 'State of Alabama v. David P. Harris',
  prosecutor: 'Robert Tillman',
  type: 'Felony',
  defendant: 'David P. Harris',
  stage: 'Plea Negotiations',
  trialDate: 'Oct 26, 2026',
  arrestDate: 'Apr 29, 2025',
  lead: 'JC'
},
{
  id: 'CC-2025-001257',
  title: 'State of Alabama v. Barbara E. Watson',
  prosecutor: 'Rachel Foster',
  type: 'Felony',
  defendant: 'Barbara E. Watson',
  stage: 'Appeal',
  trialDate: '—',
  arrestDate: 'Mar 29, 2025',
  lead: 'JC'
},
{
  id: 'CC-2023-001154',
  title: 'State of Alabama v. Brandon L. Barnes',
  prosecutor: 'Lisa Carmichael',
  type: 'Felony',
  defendant: 'Brandon L. Barnes',
  stage: 'Post-Conviction',
  trialDate: '—',
  arrestDate: 'Jan 7, 2023',
  lead: 'JC',
  pinned: true
}];

export function CasesList({ onCaseClick }: CasesListProps) {
  const [activeTab, setActiveTab] = useState('Active');
  const pinnedCases = MOCK_CASES.filter((c) => c.pinned);
  const unpinnedCases = MOCK_CASES.filter((c) => !c.pinned);
  return (
    <div className="h-full flex flex-col bg-white dark:bg-slate-900">
      {/* Header & Filters */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Cases
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              26 of 1001 · 601 active
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md p-1">
              <select className="bg-transparent text-sm text-slate-700 dark:text-slate-300 py-1 pl-2 pr-6 outline-none appearance-none border-r border-slate-200 dark:border-slate-700">
                <option>All Divisions</option>
              </select>
              <select className="bg-transparent text-sm text-slate-700 dark:text-slate-300 py-1 pl-2 pr-6 outline-none appearance-none border-r border-slate-200 dark:border-slate-700">
                <option>All Stages</option>
              </select>
              <div className="flex items-center gap-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded px-2 py-1 text-sm text-slate-700 dark:text-slate-300 shadow-sm ml-1">
                Jamie Connolly
                <X className="w-3 h-3 text-slate-400 dark:text-slate-500 cursor-pointer hover:text-slate-700 dark:hover:text-slate-300" />
              </div>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500" />

            </div>
            <button className="px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white rounded-md text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-700 border border-transparent dark:border-slate-700 transition-colors flex items-center gap-2 shadow-sm">
              <Plus className="w-4 h-4" />
              New Case
            </button>
          </div>
        </div>

        {/* AI Search Bar */}
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 rounded-md text-sm font-medium hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Triage
          </button>
          <div className="flex-1 relative flex items-center">
            <Sparkles className="w-4 h-4 absolute left-3 text-amber-500" />
            <input
              type="text"
              placeholder='AI Search — ask anything about your cases (e.g. "cases with trial in March" or "slip and fall in Mobile")...'
              className="w-full pl-9 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500" />

            <button className="px-6 py-2 bg-slate-500 dark:bg-slate-600 text-white rounded-r-md text-sm font-medium hover:bg-slate-600 dark:hover:bg-slate-500 transition-colors border border-l-0 border-slate-500 dark:border-slate-600">
              AI Search
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 border-b border-slate-200 dark:border-slate-700 flex gap-6">
        {['All', 'Active', 'Monitoring', 'Closed', 'Deleted'].map((tab) =>
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab ? 'border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'}`}>

            {tab}
          </button>
        )}
      </div>

      {/* Table Area */}
      <div className="flex-1 overflow-auto bg-slate-50/50 dark:bg-slate-900/50">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 z-10 shadow-sm">
            <tr>
              <th className="py-3 px-6 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-40">
                Case Number
              </th>
              <th className="py-3 px-6 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Style
              </th>
              <th className="py-3 px-6 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-32">
                Case Type
              </th>
              <th className="py-3 px-6 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-48">
                Defendant
              </th>
              <th className="py-3 px-6 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-40">
                Stage
              </th>
              <th className="py-3 px-6 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-32">
                Trial Date
              </th>
              <th className="py-3 px-6 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-32">
                Arrest Date
              </th>
              <th className="py-3 px-6 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-16 text-center">
                Lead
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
            {/* Pinned Section Header */}
            <tr className="bg-slate-50/80 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
              <td colSpan={8} className="py-2 px-6">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <ChevronDown className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <Pin className="w-3.5 h-3.5 text-red-500 fill-red-500/20" />
                  Pinned Cases
                  <span className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded ml-1">
                    2
                  </span>
                </div>
              </td>
            </tr>

            {/* Pinned Rows */}
            {pinnedCases.map((c) =>
            <tr
              key={c.id}
              onClick={() => onCaseClick(c.id)}
              className="hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors group">

                <td className="py-3 px-6 text-sm font-mono text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <Pin className="w-3.5 h-3.5 text-red-500 fill-red-500/20 shrink-0" />
                  {c.id}
                </td>
                <td className="py-3 px-6">
                  <div className="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                    {c.title}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {c.prosecutor}
                  </div>
                </td>
                <td className="py-3 px-6 text-sm text-slate-600 dark:text-slate-400">
                  {c.type}
                </td>
                <td className="py-3 px-6 text-sm text-slate-600 dark:text-slate-400">
                  {c.defendant}
                </td>
                <td className="py-3 px-6">
                  <span
                  className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${STAGE_COLORS[c.stage] || 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}>

                    {c.stage}
                  </span>
                </td>
                <td
                className={`py-3 px-6 text-sm ${c.trialDate !== '—' ? 'text-emerald-600 dark:text-emerald-400 font-medium' : 'text-slate-400 dark:text-slate-500'}`}>

                  {c.trialDate}
                </td>
                <td className="py-3 px-6 text-sm text-slate-600 dark:text-slate-400">
                  {c.arrestDate}
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-[10px] font-bold mx-auto border border-emerald-200 dark:border-emerald-800/50">
                    {c.lead}
                  </div>
                </td>
              </tr>
            )}

            {/* Unpinned Rows */}
            {unpinnedCases.map((c) =>
            <tr
              key={c.id}
              onClick={() => onCaseClick(c.id)}
              className="hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors group">

                <td className="py-3 px-6 text-sm font-mono text-slate-600 dark:text-slate-400 pl-11">
                  {c.id}
                </td>
                <td className="py-3 px-6">
                  <div className="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                    {c.title}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {c.prosecutor}
                  </div>
                </td>
                <td className="py-3 px-6 text-sm text-slate-600 dark:text-slate-400">
                  {c.type}
                </td>
                <td className="py-3 px-6 text-sm text-slate-600 dark:text-slate-400">
                  {c.defendant}
                </td>
                <td className="py-3 px-6">
                  <span
                  className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${STAGE_COLORS[c.stage] || 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}>

                    {c.stage}
                  </span>
                </td>
                <td
                className={`py-3 px-6 text-sm ${c.trialDate !== '—' ? 'text-emerald-600 dark:text-emerald-400 font-medium' : 'text-slate-400 dark:text-slate-500'}`}>

                  {c.trialDate}
                </td>
                <td className="py-3 px-6 text-sm text-slate-600 dark:text-slate-400">
                  {c.arrestDate}
                </td>
                <td className="py-3 px-6 text-center">
                  <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold mx-auto border ${c.lead === 'BW' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/50' : c.lead === 'CD' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800/50' : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50'}`}>

                    {c.lead}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>);

}