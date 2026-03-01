import React, { useState } from 'react';
import { DetailsTab } from './case-tabs/DetailsTab';
import { DocumentsTab } from './case-tabs/DocumentsTab';
import { CorrespondenceTab } from './case-tabs/CorrespondenceTab';
import { FilingsTab } from './case-tabs/FilingsTab';
import { ActivityTab } from './case-tabs/ActivityTab';
import { LinkedCasesTab } from './case-tabs/LinkedCasesTab';
import { Sparkles } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Plus } from 'lucide-react';
interface CaseDetailProps {
  caseId: string;
  onClose: () => void;
}
export function CaseDetail({ caseId, onClose }: CaseDetailProps) {
  const [activeTab, setActiveTab] = useState('Filings');
  const tabs = [
  {
    id: 'Overview',
    label: 'Overview'
  },
  {
    id: 'Details',
    label: 'Details'
  },
  {
    id: 'Documents',
    label: 'Documents'
  },
  {
    id: 'Correspondence',
    label: 'Correspondence',
    count: 7
  },
  {
    id: 'Filings',
    label: 'Filings',
    count: 1
  },
  {
    id: 'Activity',
    label: 'Activity',
    count: 21
  },
  {
    id: 'Linked Cases',
    label: 'Linked Cases',
    count: 1
  }];

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900">
      {/* Tabs Header */}
      <div className="border-b border-gray-200 dark:border-slate-700 px-8 pt-4">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) =>
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
                ${activeTab === tab.id ? 'border-slate-800 dark:border-slate-100 text-slate-800 dark:text-slate-100' : 'border-transparent text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300 hover:border-gray-300 dark:hover:border-slate-600'}
              `}>

              {tab.label}{' '}
              {tab.count !== undefined &&
            <span className="text-xs text-gray-400 dark:text-slate-500 ml-1.5">
                  ({tab.count})
                </span>
            }
            </button>
          )}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="flex-1 p-8 overflow-y-auto bg-white dark:bg-slate-900">
        <div className="max-w-6xl">
          {activeTab === 'Overview' &&
          <>
              {/* AI Actions */}
              <div className="flex gap-3 mb-8">
                <button className="px-4 py-2 border border-amber-200 dark:border-amber-800/50 bg-amber-50/50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-md text-sm font-medium hover:bg-amber-50 dark:hover:bg-amber-900/50 transition-colors flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" /> Client Summary
                </button>
                <button className="px-4 py-2 border border-amber-200 dark:border-amber-800/50 bg-amber-50/50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-md text-sm font-medium hover:bg-amber-50 dark:hover:bg-amber-900/50 transition-colors flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" /> Analyze
                  Charges
                </button>
              </div>

              {/* Two Column Data */}
              <div className="grid grid-cols-2 gap-16 mb-12">
                {/* Left Column */}
                <div>
                  <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
                    Case Details
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 py-2 border-b border-slate-100 dark:border-slate-700/50">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Case Title
                      </div>
                      <div className="col-span-2 text-sm font-medium text-slate-900 dark:text-slate-100">
                        State of Alabama v. Brandon L. Barnes
                      </div>
                    </div>
                    <div className="grid grid-cols-3 py-2 border-b border-slate-100 dark:border-slate-700/50">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Case Number
                      </div>
                      <div className="col-span-2 text-sm font-mono text-slate-900 dark:text-slate-100">
                        {caseId}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 py-2 border-b border-slate-100 dark:border-slate-700/50">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Defendant
                      </div>
                      <div className="col-span-2 text-sm font-medium text-slate-900 dark:text-slate-100 border-b border-dashed border-slate-400 dark:border-slate-500 w-fit cursor-pointer hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-600 dark:hover:border-amber-400 transition-colors">
                        Brandon L. Barnes
                      </div>
                    </div>
                    <div className="grid grid-cols-3 py-2 border-b border-slate-100 dark:border-slate-700/50">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Prosecutor
                      </div>
                      <div className="col-span-2 text-sm font-medium text-slate-900 dark:text-slate-100 border-b border-dashed border-slate-400 dark:border-slate-500 w-fit cursor-pointer hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-600 dark:hover:border-amber-400 transition-colors">
                        Lisa Carmichael
                      </div>
                    </div>
                    <div className="grid grid-cols-3 py-2 border-b border-slate-100 dark:border-slate-700/50">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Charge Description
                      </div>
                      <div className="col-span-2 text-sm font-medium text-slate-900 dark:text-slate-100">
                        Receiving Stolen Property 1st Degree
                      </div>
                    </div>
                    <div className="grid grid-cols-3 py-2 border-b border-slate-100 dark:border-slate-700/50">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Statute
                      </div>
                      <div className="col-span-2 text-sm font-medium text-slate-900 dark:text-slate-100">
                        13A-8-13
                      </div>
                    </div>
                    <div className="grid grid-cols-3 py-2 border-b border-slate-100 dark:border-slate-700/50">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Charge Class
                      </div>
                      <div className="col-span-2 text-sm font-medium text-slate-900 dark:text-slate-100">
                        Class B Felony
                      </div>
                    </div>
                    <div className="grid grid-cols-3 py-2 border-b border-slate-100 dark:border-slate-700/50">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Case Type
                      </div>
                      <div className="col-span-2 text-sm font-medium text-slate-900 dark:text-slate-100">
                        Felony
                      </div>
                    </div>
                    <div className="grid grid-cols-3 py-2 border-b border-slate-100 dark:border-slate-700/50">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Judge
                      </div>
                      <div className="col-span-2 text-sm font-medium text-slate-900 dark:text-slate-100 border-b border-dashed border-slate-400 dark:border-slate-500 w-fit cursor-pointer hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-600 dark:hover:border-amber-400 transition-colors">
                        Hon. James T. Patterson
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
                    Key Dates
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 py-2 border-b border-slate-100 dark:border-slate-700/50">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Arrest Date
                      </div>
                      <div className="col-span-2 text-sm font-medium text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        Jan 7, 2023{' '}
                        <span className="text-xs text-red-500 dark:text-red-400 font-semibold">
                          1149d ago
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 py-2 border-b border-slate-100 dark:border-slate-700/50">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Arraignment Date
                      </div>
                      <div className="col-span-2 text-sm font-medium text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        Jan 22, 2023{' '}
                        <span className="text-xs text-red-500 dark:text-red-400 font-semibold">
                          1134d ago
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 py-2 border-b border-slate-100 dark:border-slate-700/50">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Next Court Date
                      </div>
                      <div className="col-span-2 text-sm font-medium text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        Aug 16, 2026{' '}
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                          168d
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 py-2 border-b border-slate-100 dark:border-slate-700/50">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Trial Date
                      </div>
                      <div className="col-span-2 text-sm font-medium text-slate-400 dark:text-slate-500">
                        —
                      </div>
                    </div>
                    <div className="grid grid-cols-3 py-2 border-b border-slate-100 dark:border-slate-700/50">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Sentencing Date
                      </div>
                      <div className="col-span-2 text-sm font-medium text-slate-400 dark:text-slate-500">
                        —
                      </div>
                    </div>
                    <div className="grid grid-cols-3 py-2 border-b border-slate-100 dark:border-slate-700/50">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Disposition Date
                      </div>
                      <div className="col-span-2 text-sm font-medium text-slate-400 dark:text-slate-500">
                        —
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom 3 Columns */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                {/* Deadlines */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Deadlines (2)
                    </h3>
                    <button className="text-xs font-medium text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50 rounded px-2 py-1 flex items-center gap-1 hover:bg-amber-50 dark:hover:bg-amber-900/30">
                      <Sparkles className="w-3 h-3" /> Suggest
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                          Bench Trial
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Hearing
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-amber-600 dark:text-amber-400 font-medium">
                          Mar 2, 2026
                        </div>
                        <div className="text-xs text-amber-600/70 dark:text-amber-400/70">
                          1d
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                          Sentencing Hearing
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Court Date
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                          Aug 5, 2026
                        </div>
                        <div className="text-xs text-emerald-600/70 dark:text-emerald-400/70">
                          157d
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tasks */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Tasks (1 Open)
                    </h3>
                    <button className="text-xs font-medium text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50 rounded px-2 py-1 flex items-center gap-1 hover:bg-amber-50 dark:hover:bg-amber-900/30">
                      <Sparkles className="w-3 h-3" /> Suggest Tasks
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <input
                      type="checkbox"
                      className="mt-1 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-amber-500 focus:ring-amber-500" />

                      <div className="flex-1">
                        <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-1">
                          Obtain Medical Records
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase tracking-wider font-bold bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-1.5 py-0.5 rounded">
                            Urgent
                          </span>
                          <span className="text-xs text-red-500 dark:text-red-400 font-medium">
                            Jun 9, 2023 (996d over)
                          </span>
                          <div className="flex items-center gap-1 ml-auto">
                            <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center justify-center text-[9px] font-bold border border-blue-200 dark:border-blue-800/50">
                              CM
                            </div>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              Christy Mims
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer hover:text-slate-900 dark:hover:text-slate-100 pt-2">
                      <ChevronDown className="w-4 h-4 -rotate-90" />
                      Completed{' '}
                      <span className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">
                        5
                      </span>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Notes (1)
                    </h3>
                    <button className="text-xs font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 flex items-center gap-1 hover:bg-slate-50 dark:hover:bg-slate-800">
                      <Plus className="w-3 h-3" /> Add Note
                    </button>
                  </div>
                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3 bg-white dark:bg-slate-800 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-wider font-semibold border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded">
                          Internal
                        </span>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                          Wayne Washington
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400 dark:text-slate-500">
                          Feb 5, 2026
                        </span>
                        <ChevronDown className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 italic line-clamp-2">
                      Reviewed case file for quality assurance. All deadlines
                      current and tasks on tra...
                    </p>
                  </div>
                </div>
              </div>
            </>
          }
          {activeTab === 'Details' && <DetailsTab />}
          {activeTab === 'Documents' && <DocumentsTab />}
          {activeTab === 'Correspondence' && <CorrespondenceTab />}
          {activeTab === 'Filings' && <FilingsTab />}
          {activeTab === 'Activity' && <ActivityTab />}
          {activeTab === 'Linked' && <LinkedCasesTab />}
        </div>
      </div>
    </div>);

}