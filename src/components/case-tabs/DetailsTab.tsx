import React, { useState } from 'react';
import { Plus, X, ChevronDown } from 'lucide-react';
export function DetailsTab() {
  const [bondSet, setBondSet] = useState(false);
  const [bondPosted, setBondPosted] = useState(false);
  const [releaseOrdered, setReleaseOrdered] = useState(false);
  const [releaseCompleted, setReleaseCompleted] = useState(false);
  const [transportOrdered, setTransportOrdered] = useState(false);
  const [transportCompleted, setTransportCompleted] = useState(false);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Column */}
      <div className="lg:col-span-8 space-y-12">
        {/* Charges Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Charges
            </h2>
            <button className="bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 flex items-center">
              <Plus className="w-4 h-4 mr-1" />
              Add Charge
            </button>
          </div>

          <div className="space-y-4">
            {/* Charge 1 */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 relative">
              <button className="absolute top-4 right-4 text-red-400 hover:text-red-600 dark:hover:text-red-300">
                <X className="w-4 h-4" />
              </button>
              <div className="mb-4">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  Receiving Stolen Property 1st Degree (§13A-8-13)
                </h3>
                <span className="inline-block mt-1 px-2 py-0.5 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-medium rounded">
                  Class C Felony
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Statute
                  </label>
                  <input
                    type="text"
                    defaultValue="13A-8-13"
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500" />

                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    defaultValue="Receiving Stolen Property 1st Degree"
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500" />

                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Class
                  </label>
                  <div className="relative">
                    <select className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                      <option>Class C Felony</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute right-3 top-2.5 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Original / Amended
                  </label>
                  <div className="relative">
                    <select className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                      <option>Original</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute right-3 top-2.5 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Disposition
                  </label>
                  <div className="relative">
                    <select className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                      <option>— None —</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute right-3 top-2.5 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Disposition Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    defaultValue="03/01/2026"
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500" />

                </div>
              </div>
            </div>

            {/* Charge 2 */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 relative">
              <button className="absolute top-4 right-4 text-red-400 hover:text-red-600 dark:hover:text-red-300">
                <X className="w-4 h-4" />
              </button>
              <div className="mb-4">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  Resisting Arrest (§13A-10-5)
                </h3>
                <span className="inline-block mt-1 px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded">
                  Misdemeanor B
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Statute
                  </label>
                  <input
                    type="text"
                    defaultValue="13A-10-5"
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500" />

                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    defaultValue="Resisting Arrest"
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500" />

                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Class
                  </label>
                  <div className="relative">
                    <select className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                      <option>Misdemeanor B</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute right-3 top-2.5 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Original / Amended
                  </label>
                  <div className="relative">
                    <select className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                      <option>Original</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute right-3 top-2.5 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Disposition
                  </label>
                  <div className="relative">
                    <select className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                      <option>— None —</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute right-3 top-2.5 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Disposition Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    defaultValue="03/01/2026"
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500" />

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custody Tracking Section */}
        <section>
          <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            Custody Tracking
          </h2>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 p-6 space-y-8">
            {/* Bond Status */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Bond Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={bondSet}
                      onChange={(e) => setBondSet(e.target.checked)}
                      className="w-4 h-4 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded text-gray-900 focus:ring-gray-900 dark:focus:ring-gray-500" />

                    <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      Bond Set
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    defaultValue="03/01/2026"
                    className="w-64 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />

                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={bondPosted}
                      onChange={(e) => setBondPosted(e.target.checked)}
                      className="w-4 h-4 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded text-gray-900 focus:ring-gray-900 dark:focus:ring-gray-500" />

                    <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      Bond Posted
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    defaultValue="03/01/2026"
                    className="w-64 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />

                </div>
              </div>
            </div>

            {/* Release Status */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Release Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={releaseOrdered}
                      onChange={(e) => setReleaseOrdered(e.target.checked)}
                      className="w-4 h-4 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded text-gray-900 focus:ring-gray-900 dark:focus:ring-gray-500" />

                    <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      Release Ordered
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    defaultValue="03/01/2026"
                    className="w-64 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />

                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={releaseCompleted}
                      onChange={(e) => setReleaseCompleted(e.target.checked)}
                      className="w-4 h-4 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded text-gray-900 focus:ring-gray-900 dark:focus:ring-gray-500" />

                    <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      Release Completed
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    defaultValue="03/01/2026"
                    className="w-64 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />

                </div>
              </div>
            </div>

            {/* Transport Status */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Transport Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={transportOrdered}
                      onChange={(e) => setTransportOrdered(e.target.checked)}
                      className="w-4 h-4 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded text-gray-900 focus:ring-gray-900 dark:focus:ring-gray-500" />

                    <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      Transport Ordered
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    defaultValue="03/01/2026"
                    className="w-64 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />

                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={transportCompleted}
                      onChange={(e) => setTransportCompleted(e.target.checked)}
                      className="w-4 h-4 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded text-gray-900 focus:ring-gray-900 dark:focus:ring-gray-500" />

                    <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      Transport Completed
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    defaultValue="03/01/2026"
                    className="w-64 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />

                </div>
                <div className="pt-2">
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    Destination
                  </label>
                  <input
                    type="text"
                    placeholder="Transport destination..."
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500" />

                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200 dark:border-gray-700" />

        {/* Experts Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Experts (0)
            </h2>
            <button className="bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 flex items-center">
              <Plus className="w-4 h-4 mr-1" />
              Add Expert
            </button>
          </div>
          <p className="italic text-gray-400 dark:text-gray-500 text-sm">
            No experts added yet.
          </p>
        </section>

        {/* Miscellaneous Contacts Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
              Miscellaneous Contacts
            </h2>
            <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center">
              <Plus className="w-4 h-4 mr-1" />
              Add
            </button>
          </div>
          <p className="italic text-gray-400 dark:text-gray-500 text-sm">
            No miscellaneous contacts added yet.
          </p>
        </section>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-4 space-y-12">
        {/* Case Info Section */}
        <section>
          <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            Case Info
          </h2>
          <div className="space-y-4">
            <div className="flex py-3 border-b border-gray-100 dark:border-gray-800">
              <span className="w-1/3 text-sm text-gray-500 dark:text-gray-400">
                Custody Status
              </span>
              <span className="w-2/3 text-sm text-gray-900 dark:text-gray-100">
                Out on Bond
              </span>
            </div>
            <div className="flex py-3 border-b border-gray-100 dark:border-gray-800">
              <span className="w-1/3 text-sm text-gray-500 dark:text-gray-400">
                Bond Amount
              </span>
              <span className="w-2/3 text-sm text-gray-900 dark:text-gray-100">
                $5,000
              </span>
            </div>
            <div className="flex py-3 border-b border-gray-100 dark:border-gray-800">
              <span className="w-1/3 text-sm text-gray-500 dark:text-gray-400">
                Bond Conditions
              </span>
              <span className="w-2/3 text-sm text-gray-900 dark:text-gray-100">
                No firearms; No contact with minor children unsupervised
              </span>
            </div>
            <div className="flex py-3 border-b border-gray-100 dark:border-gray-800">
              <span className="w-1/3 text-sm text-gray-500 dark:text-gray-400">
                Jail Location
              </span>
              <span className="w-2/3 text-sm text-gray-900 dark:text-gray-100">
                —
              </span>
            </div>
            <div className="flex py-3 border-b border-gray-100 dark:border-gray-800">
              <span className="w-1/3 text-sm text-gray-500 dark:text-gray-400">
                Court Division
              </span>
              <span className="w-2/3 text-sm text-gray-900 dark:text-gray-100">
                Circuit
              </span>
            </div>
            <div className="flex py-3 border-b border-gray-100 dark:border-gray-800">
              <span className="w-1/3 text-sm text-gray-500 dark:text-gray-400">
                County
              </span>
              <span className="w-2/3 text-sm text-gray-900 dark:text-gray-100">
                Mobile
              </span>
            </div>
            <div className="flex py-3 border-b border-gray-100 dark:border-gray-800">
              <span className="w-1/3 text-sm text-gray-500 dark:text-gray-400">
                Court
              </span>
              <span className="w-2/3 text-sm text-gray-900 dark:text-gray-100">
                Mobile County Circuit Court
              </span>
            </div>
            <div className="flex py-3">
              <span className="w-1/3 text-sm text-gray-500 dark:text-gray-400">
                Disposition
              </span>
              <span className="w-2/3 text-sm text-gray-900 dark:text-gray-100">
                —
              </span>
            </div>
          </div>
        </section>

        <hr className="border-gray-200 dark:border-gray-700" />

        {/* Co-Defendant(s) Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Co-Defendant(s) (0)
            </h2>
            <button className="bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 flex items-center">
              <Plus className="w-4 h-4 mr-1" />
              Add Co-Defendant
            </button>
          </div>
          <p className="italic text-gray-400 dark:text-gray-500 text-sm">
            No co-defendants added yet.
          </p>
        </section>
      </div>
    </div>);

}