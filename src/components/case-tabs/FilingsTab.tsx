import React, { useState } from 'react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MailIcon,
  SparklesIcon } from
'lucide-react';
interface Filing {
  id: string;
  title: string;
  fileSize: string;
  sourceEmail: string;
  date: string;
  originalFileName: string;
  docType: string;
  classification: string;
  filedDate: string;
  summary?: string;
  isExpanded?: boolean;
}
export function FilingsTab() {
  const [filedBy, setFiledBy] = useState('auto-detect');
  const [filingDate, setFilingDate] = useState('03/01/2026');
  const [docType, setDocType] = useState('');
  const [filterParty, setFilterParty] = useState('all');
  const [expandedFilings, setExpandedFilings] = useState<Set<string>>(new Set());
  const filings: Filing[] = [
  {
    id: '1',
    title: "Plaintiffs' Motion to Continue Bench Trial",
    fileSize: '249 KB',
    sourceEmail: 'bwarren@websterhenry.com',
    date: '2/26/2026',
    originalFileName: 'f3299b09-ee30-4c0b-8a46-a2a94bf35ee7.pdf',
    docType: 'OTHER',
    classification: 'Motion to Continue',
    filedDate: '2/25/2026',
    summary:
    'This motion requests a continuance of the bench trial currently scheduled for March 15, 2026. The plaintiff argues that additional time is needed to complete discovery and prepare expert witness testimony. The motion cites ongoing negotiations between parties and the complexity of the case as primary reasons for the requested delay.'
  }];

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedFilings);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedFilings(newExpanded);
  };
  return (
    <div className="p-6">
      {/* Upload Section */}
      <div className="mb-6">
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Upload Filing (PDF Only)
            </label>
            <div className="flex items-center border border-gray-300 dark:border-slate-600 rounded-md overflow-hidden bg-white dark:bg-slate-800">
              <button className="px-4 py-2 bg-gray-100 dark:bg-slate-700 border-r border-gray-300 dark:border-slate-600 text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600">
                Choose File
              </button>
              <span className="px-4 py-2 text-sm text-gray-500 dark:text-slate-400">
                no file selected
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Filed By
            </label>
            <div className="relative">
              <select
                value={filedBy}
                onChange={(e) => setFiledBy(e.target.value)}
                className="appearance-none bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md px-3 py-2 pr-8 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500">

                <option value="auto-detect">— Auto-detect —</option>
                <option value="plaintiff">Plaintiff</option>
                <option value="defendant">Defendant</option>
                <option value="court">Court</option>
              </select>
              <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-slate-500 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Filing Date
            </label>
            <input
              type="text"
              value={filingDate}
              onChange={(e) => setFilingDate(e.target.value)}
              className="border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-md px-3 py-2 text-sm w-28 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400 dark:placeholder:text-slate-500"
              placeholder="MM/DD/YYYY" />

          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Doc Type
            </label>
            <input
              type="text"
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
              className="border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-md px-3 py-2 text-sm w-44 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400 dark:placeholder:text-slate-500"
              placeholder="e.g., Motion to Suppress" />

          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <label className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
            Filter by Party:
          </label>
          <div className="relative flex-1 min-w-[200px]">
            <select
              value={filterParty}
              onChange={(e) => setFilterParty(e.target.value)}
              className="appearance-none w-full bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md px-3 py-2 pr-8 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500">

              <option value="all">All</option>
              <option value="plaintiff">Plaintiff</option>
              <option value="defendant">Defendant</option>
              <option value="court">Court</option>
            </select>
            <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-slate-500 pointer-events-none" />
          </div>
        </div>
        <div className="text-sm text-gray-500 dark:text-slate-400">
          <span className="font-medium text-slate-900 dark:text-slate-100">
            {filings.length}
          </span>{' '}
          filing
          {filings.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Filings List */}
      <div className="space-y-4">
        {filings.map((filing) =>
        <div
          key={filing.id}
          className="border border-gray-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">

            <div className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-slate-100 mb-1">
                    {filing.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400 mb-1">
                    <span>{filing.fileSize}</span>
                    <span>from {filing.sourceEmail}</span>
                    <span>{filing.date}</span>
                  </div>
                  <div className="text-sm text-gray-400 dark:text-slate-500">
                    Original: {filing.originalFileName}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 text-xs font-semibold bg-gray-800 dark:bg-slate-700 text-white rounded">
                    {filing.docType}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-slate-300">
                    {filing.classification}
                  </span>
                  <div className="flex items-center gap-1 px-2 py-1 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800/50 rounded text-sm">
                    <MailIcon className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                    <span className="text-amber-700 dark:text-amber-400">
                      Email
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-slate-400">
                    Filed: {filing.filedDate}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-3">
                <button className="px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700">
                  View
                </button>
                <button className="px-3 py-1.5 text-sm font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800/50 rounded-md hover:bg-amber-100 dark:hover:bg-amber-900/50 flex items-center gap-1">
                  <SparklesIcon className="h-3.5 w-3.5" />
                  Classify
                </button>
                <button className="px-3 py-1.5 text-sm font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800/50 rounded-md hover:bg-amber-100 dark:hover:bg-amber-900/50 flex items-center gap-1">
                  <SparklesIcon className="h-3.5 w-3.5" />
                  Re-summarize
                </button>
                <button className="px-3 py-1.5 text-sm font-medium text-red-600 dark:text-red-400 bg-white dark:bg-slate-800 border border-red-200 dark:border-red-900/50 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20">
                  Delete
                </button>
              </div>

              <button
              onClick={() => toggleExpanded(filing.id)}
              className="mt-3 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1">

                {expandedFilings.has(filing.id) ?
              <>
                    <ChevronUpIcon className="h-4 w-4" />
                    Hide Summary
                  </> :

              <>
                    <ChevronDownIcon className="h-4 w-4" />
                    View Summary
                  </>
              }
              </button>

              {expandedFilings.has(filing.id) && filing.summary &&
            <div className="mt-3 p-3 bg-gray-50 dark:bg-slate-900/50 rounded-md text-sm text-gray-700 dark:text-slate-300">
                  {filing.summary}
                </div>
            }
            </div>
          </div>
        )}
      </div>
    </div>);

}