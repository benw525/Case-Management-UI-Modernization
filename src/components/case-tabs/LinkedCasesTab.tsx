import React, { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react';
interface LinkedCase {
  id: string;
  caseNumber: string;
  relationship: string;
  caseType: string;
  status: string;
  title: string;
  charges: string;
  defendant: string;
  court: string;
  county: string;
  stage: string;
  addedBy: string;
  addedDate: string;
}
export function LinkedCasesTab() {
  const [expandedCases, setExpandedCases] = useState<Set<string>>(
    new Set(['1'])
  );
  const linkedCases: LinkedCase[] = [
  {
    id: '1',
    caseNumber: 'CC-2025-001245',
    relationship: 'Co-Defendant',
    caseType: 'PD Case',
    status: 'Active',
    title: 'State of Alabama v. Alexis A. James',
    charges: 'Drug Trafficking (Cocaine), Resisting Arrest',
    defendant: 'Alexis A. James',
    court: 'Mobile County Circuit Court',
    county: 'Mobile',
    stage: 'Arraignment',
    addedBy: 'Admin',
    addedDate: '3/1/2026'
  }];

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedCases);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCases(newExpanded);
  };
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
          Linked Cases
        </h2>
        <span className="text-sm text-gray-500 dark:text-slate-400">
          {linkedCases.length} Linked
        </span>
      </div>

      {/* Link Button */}
      <div className="mb-6">
        <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700">
          + Link a Case
        </button>
      </div>

      {/* Linked Cases List */}
      <div className="space-y-4">
        {linkedCases.map((linkedCase) => {
          const isExpanded = expandedCases.has(linkedCase.id);
          return (
            <div
              key={linkedCase.id}
              className="border border-gray-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 overflow-hidden">

              {/* Header Row */}
              <button
                onClick={() => toggleExpanded(linkedCase.id)}
                className="w-full p-4 flex items-start gap-3 text-left hover:bg-gray-50 dark:hover:bg-slate-700/50">

                <div className="flex-shrink-0 mt-1">
                  {isExpanded ?
                  <ChevronDownIcon className="h-4 w-4 text-gray-400 dark:text-slate-500" /> :

                  <ChevronRightIcon className="h-4 w-4 text-gray-400 dark:text-slate-500" />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900 dark:text-slate-100">
                      {linkedCase.caseNumber}
                    </span>
                    <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 rounded">
                      {linkedCase.relationship}
                    </span>
                    <span className="px-2 py-0.5 text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded border border-amber-200 dark:border-amber-800/50">
                      {linkedCase.caseType}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-slate-400">
                      {linkedCase.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-slate-300">
                    {linkedCase.title}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-slate-400">
                    {linkedCase.charges}
                  </p>
                </div>
              </button>

              {/* Expanded Details */}
              {isExpanded &&
              <div className="px-4 pb-4 pt-2 border-t border-gray-100 dark:border-slate-700/50">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 ml-7">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">
                        Case Number:
                      </p>
                      <p className="text-sm text-gray-900 dark:text-slate-100">
                        {linkedCase.caseNumber}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">
                        Defendant:
                      </p>
                      <p className="text-sm text-gray-900 dark:text-slate-100">
                        {linkedCase.defendant}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">
                        Court:
                      </p>
                      <p className="text-sm text-gray-900 dark:text-slate-100">
                        {linkedCase.court}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">
                        County:
                      </p>
                      <p className="text-sm text-gray-900 dark:text-slate-100">
                        {linkedCase.county}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">
                        Status:
                      </p>
                      <p className="text-sm text-gray-900 dark:text-slate-100">
                        {linkedCase.status}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">
                        Stage:
                      </p>
                      <p className="text-sm text-gray-900 dark:text-slate-100">
                        {linkedCase.stage}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">
                        Charges:
                      </p>
                      <p className="text-sm text-gray-900 dark:text-slate-100">
                        {linkedCase.charges}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">
                        Relationship:
                      </p>
                      <p className="text-sm text-gray-900 dark:text-slate-100">
                        {linkedCase.relationship}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">
                        Added by:
                      </p>
                      <p className="text-sm text-gray-900 dark:text-slate-100">
                        {linkedCase.addedBy} on {linkedCase.addedDate}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 mt-4 ml-7">
                    <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 dark:bg-slate-700 rounded-md hover:bg-gray-700 dark:hover:bg-slate-600">
                      Go to Case
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 bg-white dark:bg-slate-800 border border-red-200 dark:border-red-900/50 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20">
                      Unlink
                    </button>
                  </div>
                </div>
              }
            </div>);

        })}
      </div>
    </div>);

}