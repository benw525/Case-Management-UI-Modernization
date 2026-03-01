import React, { useState } from 'react';
import { Search, Pin, ChevronDown } from 'lucide-react';
export function ContactsPage() {
  const [activeTab, setActiveTab] = useState('All (48)');
  const [isPinnedOpen, setIsPinnedOpen] = useState(true);
  const tabs = [
  'All (48)',
  'Clients (0)',
  'Prosecutors (20)',
  'Judges (20)',
  'Courts (7)',
  'Witnesses (0)',
  'Experts (0)',
  'Family (0)',
  'Social Workers (0)',
  'Treatment (0)',
  'Misc (1)',
  'Deleted (0)'];

  const contacts = [
  {
    id: '1',
    category: 'Prosecutor',
    name: 'Amanda Price',
    phone: '(251) 574-8401',
    email: 'aprice@mobileda.gov',
    cases: '55'
  },
  {
    id: '2',
    category: 'Prosecutor',
    name: 'Andrew Collins',
    phone: '(251) 574-8402',
    email: 'acollins@mobileda.gov',
    cases: '47'
  },
  {
    id: '3',
    category: 'Miscellaneous',
    name: 'Brandon L. Barnes',
    phone: '(877) 780-4236',
    email: 'benw52592@gmail.com',
    cases: '—',
    pinned: true
  },
  {
    id: '4',
    category: 'Prosecutor',
    name: 'Brian Lawson',
    phone: '(251) 574-8403',
    email: 'blawson@mobileda.gov',
    cases: '50'
  },
  {
    id: '5',
    category: 'Prosecutor',
    name: 'Catherine Webb',
    phone: '(251) 574-8404',
    email: 'cwebb@mobileda.gov',
    cases: '63'
  },
  {
    id: '6',
    category: 'Prosecutor',
    name: 'Daniel Marsh',
    phone: '(251) 574-8405',
    email: 'dmarsh@mobileda.gov',
    cases: '56'
  },
  {
    id: '7',
    category: 'Prosecutor',
    name: 'David Harper',
    phone: '(251) 574-8406',
    email: 'dharper@mobileda.gov',
    cases: '62'
  },
  {
    id: '8',
    category: 'Judge',
    name: 'Hon. Ben H. Brooks',
    phone: '(251) 574-8701',
    email: 'chambers.brooks@alacourt.gov',
    cases: '56'
  },
  {
    id: '9',
    category: 'Judge',
    name: 'Hon. Brandy V. Hambright',
    phone: '(251) 574-8702',
    email: 'chambers.hambright@alacourt.gov',
    cases: '73'
  },
  {
    id: '10',
    category: 'Judge',
    name: 'Hon. Charles A. Graddick Jr.',
    phone: '(251) 574-8703',
    email: 'chambers.graddick@alacourt.gov',
    cases: '54'
  },
  {
    id: '11',
    category: 'Judge',
    name: 'Hon. Deborah B. Alley',
    phone: '(251) 574-8704',
    email: 'chambers.alley@alacourt.gov',
    cases: '32'
  },
  {
    id: '12',
    category: 'Judge',
    name: 'Hon. Gaines McCorquodale',
    phone: '(251) 574-8705',
    email: 'chambers.mccorquodale@alacourt.gov',
    cases: '31'
  },
  {
    id: '13',
    category: 'Judge',
    name: 'Hon. George M. Callahan',
    phone: '(251) 574-8706',
    email: 'chambers.callahan@alacourt.gov',
    cases: '43'
  },
  {
    id: '14',
    category: 'Judge',
    name: 'Hon. J. Ryan deGraffenried',
    phone: '(251) 574-8707',
    email: 'chambers.degraffenried@alacourt.gov',
    cases: '32'
  },
  {
    id: '15',
    category: 'Judge',
    name: 'Hon. James T. Patterson',
    phone: '(251) 574-8708',
    email: 'chambers.patterson@alacourt.gov',
    cases: '70'
  },
  {
    id: '16',
    category: 'Judge',
    name: 'Hon. Jennifer Wright',
    phone: '(251) 574-8709',
    email: 'chambers.wright@alacourt.gov',
    cases: '47'
  },
  {
    id: '17',
    category: 'Judge',
    name: 'Hon. John H. Lockett',
    phone: '(251) 574-8710',
    email: 'chambers.lockett@alacourt.gov',
    cases: '56'
  },
  {
    id: '18',
    category: 'Judge',
    name: 'Hon. Joseph H. Johnston',
    phone: '(251) 574-8711',
    email: 'chambers.johnston@alacourt.gov',
    cases: '51'
  },
  {
    id: '19',
    category: 'Judge',
    name: 'Hon. Karlos R. Finley',
    phone: '(251) 574-8712',
    email: 'chambers.finley@alacourt.gov',
    cases: '49'
  }];

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Prosecutor':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400';
      case 'Miscellaneous':
        return 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300';
      case 'Judge':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400';
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
    }
  };
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      {/* Header */}
      <div className="px-8 pt-8 pb-6 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 font-serif italic mb-1">
              Contacts
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              48 contacts across 9 categories
            </p>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder="Search contacts..."
                className="pl-9 pr-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md text-sm w-64 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600" />

            </div>
            <button className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
              Merge Contacts
            </button>
            <button className="px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-md text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors shadow-sm">
              + New Contact
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-7xl mx-auto flex gap-6 overflow-x-auto no-scrollbar">
          {tabs.map((tab) =>
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === tab ? 'border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'}`}>

              {tab}
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-auto bg-slate-50 dark:bg-slate-900 p-8">
        <div className="max-w-7xl mx-auto bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm overflow-hidden">
          {/* Pinned Section */}
          <div className="border-b border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setIsPinnedOpen(!isPinnedOpen)}
              className="w-full px-6 py-3 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors">

              <div className="flex items-center gap-2">
                <Pin className="w-4 h-4 text-red-500 fill-red-500/20" />
                <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Pinned Contacts{' '}
                  <span className="text-slate-400 dark:text-slate-500 font-normal">
                    (1)
                  </span>
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 dark:text-slate-500 transition-transform ${isPinnedOpen ? '' : '-rotate-90'}`} />

            </button>

            {isPinnedOpen &&
            <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-700 flex items-center">
                <div className="w-10 flex-shrink-0">
                  <Pin className="w-4 h-4 text-red-500 fill-red-500/20" />
                </div>
                <div className="w-48 flex-shrink-0">
                  <span className="text-[10px] font-medium bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded uppercase tracking-wider">
                    Miscellaneous
                  </span>
                </div>
                <div className="w-1/3 flex-shrink-0 text-sm font-medium text-slate-900 dark:text-slate-100">
                  Brandon L. Barnes
                </div>
                <div className="w-1/4 flex-shrink-0 text-sm text-slate-600 dark:text-slate-400">
                  (877) 780-4236
                </div>
                <div className="flex-1 text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                  benw52592@gmail.com
                </div>
                <div className="w-16 flex-shrink-0 text-right text-sm text-slate-400 dark:text-slate-500">
                  —
                </div>
              </div>
            }
          </div>

          {/* Main Table */}
          <table className="w-full text-left border-collapse">
            <thead className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="py-4 px-6 w-10"></th>
                <th className="py-4 px-0 w-48 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  CATEGORY
                </th>
                <th className="py-4 px-0 w-1/3 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  NAME
                </th>
                <th className="py-4 px-0 w-1/4 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  PHONE
                </th>
                <th className="py-4 px-0 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  EMAIL
                </th>
                <th className="py-4 px-6 w-16 text-right text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  CASES
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {contacts.map((contact) =>
              <tr
                key={contact.id}
                className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">

                  <td className="py-3 px-6">
                    <Pin className="w-4 h-4 text-red-500 fill-red-500/20 opacity-50 hover:opacity-100 cursor-pointer transition-opacity" />
                  </td>
                  <td className="py-3 px-0">
                    <span
                    className={`text-[10px] font-medium px-2 py-0.5 rounded uppercase tracking-wider ${getCategoryBadge(contact.category)}`}>

                      {contact.category}
                    </span>
                  </td>
                  <td className="py-3 px-0 text-sm font-medium text-slate-900 dark:text-slate-100">
                    {contact.name}
                  </td>
                  <td className="py-3 px-0 text-sm text-slate-600 dark:text-slate-400">
                    {contact.phone}
                  </td>
                  <td className="py-3 px-0 text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                    {contact.email}
                  </td>
                  <td className="py-3 px-6 text-right text-sm font-medium text-slate-900 dark:text-slate-100">
                    {contact.cases}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>);

}