import React, { memo } from 'react';
import { ChevronDown, Search } from 'lucide-react';
export function DocumentTemplatesPage() {
  const templates = [
  {
    id: '1',
    title: 'Case Status Summary',
    category: 'General',
    isGlobal: true,
    author: 'Admin',
    fields: 7,
    tags: ['status', 'summary', 'internal', 'case review']
  },
  {
    id: '2',
    title: 'Client Introduction Letter',
    category: 'Letters — Client',
    isGlobal: true,
    author: 'Admin',
    fields: 6,
    tags: ['letter', 'client', 'introduction', 'new case', 'initial']
  },
  {
    id: '3',
    title: 'Investigation Report',
    category: 'General',
    isGlobal: true,
    author: 'Admin',
    fields: 7,
    tags: ['investigation', 'report', 'investigator', 'findings']
  },
  {
    id: '4',
    title: 'Motion for Bond Reduction',
    category: 'Pleadings',
    isGlobal: true,
    author: 'Admin',
    fields: 7,
    tags: ['motion', 'bond', 'reduction', 'bail', 'pretrial']
  },
  {
    id: '5',
    title: 'Motion for Discovery',
    category: 'Pleadings',
    isGlobal: true,
    author: 'Admin',
    fields: 3,
    tags: ['motion', 'discovery', 'disclosure', 'evidence', 'Brady']
  },
  {
    id: '6',
    title: 'Motion to Dismiss',
    category: 'Pleadings',
    isGlobal: true,
    author: 'Admin',
    fields: 4,
    tags: ['motion', 'dismiss', 'dismissal', 'charges']
  },
  {
    id: '7',
    title: 'Motion to Suppress Evidence',
    category: 'Pleadings',
    isGlobal: true,
    author: 'Admin',
    fields: 5,
    tags: [
    'motion',
    'suppress',
    'evidence',
    'fourth amendment',
    'search',
    'seizure']

  },
  {
    id: '8',
    title: 'Notice of Alibi Defense',
    category: 'Pleadings',
    isGlobal: true,
    author: 'Admin',
    fields: 5,
    tags: ['notice', 'alibi', 'defense', 'Rule 16']
  },
  {
    id: '9',
    title: 'Plea Offer Summary Letter',
    category: 'Letters — Client',
    isGlobal: true,
    author: 'Admin',
    fields: 7,
    tags: ['letter', 'plea', 'offer', 'client', 'negotiation']
  },
  {
    id: '10',
    title: 'Prosecutor Correspondence',
    category: 'Letters — Attorney',
    isGlobal: true,
    author: 'Admin',
    fields: 5,
    tags: ['letter', 'prosecutor', 'ADA', 'correspondence', 'plea']
  },
  {
    id: '11',
    title: 'Sentencing Memorandum',
    category: 'General',
    isGlobal: true,
    author: 'Admin',
    fields: 8,
    tags: ['sentencing', 'memorandum', 'mitigation', 'memo']
  },
  {
    id: '12',
    title: 'Speedy Trial Demand',
    category: 'Pleadings',
    isGlobal: true,
    author: 'Admin',
    fields: 4,
    tags: ['speedy trial', 'demand', 'sixth amendment', 'constitutional']
  },
  {
    id: '13',
    title: 'Witness Contact Letter',
    category: 'Letters',
    isGlobal: true,
    author: 'Admin',
    fields: 5,
    tags: ['letter', 'witness', 'contact', 'interview', 'investigation']
  },
  {
    id: '14',
    title: 'Youthful Offender Application',
    category: 'Pleadings',
    isGlobal: true,
    author: 'Admin',
    fields: 7,
    tags: [
    'youthful offender',
    'YO',
    'application',
    'sentencing',
    'juvenile']

  }];

  const getCategoryColor = (category: string) => {
    if (category.includes('Letters'))
    return 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400';
    if (category === 'Pleadings')
    return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400';
    return 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-300';
  };
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 font-serif italic">
            Document Templates
          </h1>
          <button className="bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 px-4 py-1.5 rounded-md text-sm font-medium transition-colors">
            + New Template
          </button>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          14 templates
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Filters */}
        <div className="space-y-3 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-4 pr-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 shadow-sm" />

          </div>
          <div className="relative">
            <select className="w-full pl-4 pr-10 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 shadow-sm">
              <option>All</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <div className="relative">
            <select className="w-full pl-4 pr-10 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 shadow-sm">
              <option>All Categories</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <div className="relative">
            <select className="w-full pl-4 pr-10 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 shadow-sm">
              <option>All Tags</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {templates.map((template) =>
          <div
            key={template.id}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-sm flex flex-col">

              <div className="flex justify-between items-start mb-2 gap-2">
                <h3 className="font-bold text-slate-900 dark:text-slate-100 leading-tight">
                  {template.title}
                </h3>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  {template.isGlobal &&
                <span className="text-[10px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
                      Global
                    </span>
                }
                  <span
                  className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${getCategoryColor(template.category)}`}>

                    {template.category}
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                by {template.author} · {template.fields} fields
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6 flex-1 content-start">
                {template.tags.map((tag) =>
              <span
                key={tag}
                className="text-[10px] bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full">

                    {tag}
                  </span>
              )}
              </div>

              <div className="flex gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                <button className="px-4 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  Edit
                </button>
                <button className="px-4 py-1.5 text-xs font-medium text-red-600 dark:text-red-400 bg-white dark:bg-slate-800 border border-red-200 dark:border-red-900/50 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

}