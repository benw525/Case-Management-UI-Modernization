import React, { useState, memo } from 'react';
import {
  Check,
  Edit2,
  X,
  AlertTriangle,
  Scale,
  Brain,
  CalendarClock,
  PenLine,
  MessageSquare,
  FileSearch,
  ListChecks,
  FolderOpen,
  Layers } from
'lucide-react';
export function AICenterPage() {
  const [activeMainTab, setActiveMainTab] = useState('AI Agents');
  const [activeSubTab, setActiveSubTab] = useState('My Training');
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 font-serif italic mb-1">
          AI Center
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Centralized AI-powered analysis tools
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Main Tabs */}
        <div className="border-b border-slate-200 dark:border-slate-700 flex gap-8 mb-6">
          {[
          {
            id: 'AI Agents',
            label: 'AI Agents'
          },
          {
            id: 'Trainer',
            label: 'Advocate AI Trainer'
          }].
          map((tab) =>
          <button
            key={tab.id}
            onClick={() => setActiveMainTab(tab.id)}
            className={`py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${activeMainTab === tab.id ? 'border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'}`}>

              {tab.id === 'Trainer' && <Brain className="w-4 h-4" />}
              {tab.label}
            </button>
          )}
        </div>

        {activeMainTab === 'AI Agents' &&
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
          {
            Icon: AlertTriangle,
            color: 'text-red-600 dark:text-red-400',
            bg: 'bg-red-50 dark:bg-red-900/20',
            title: 'Case Triage',
            description:
            'Rank active cases by urgency — death penalty, trial dates, custody status, overdue tasks.'
          },
          {
            Icon: Scale,
            color: 'text-indigo-600 dark:text-indigo-400',
            bg: 'bg-indigo-50 dark:bg-indigo-900/20',
            title: 'Charge Analysis',
            description:
            'Analyze charges under Alabama Code — sentencing ranges, mandatory minimums, diversion eligibility.'
          },
          {
            Icon: Brain,
            color: 'text-violet-600 dark:text-violet-400',
            bg: 'bg-violet-50 dark:bg-violet-900/20',
            title: 'Case Strategy',
            description:
            'Full defense strategy analysis — motions, plea negotiations, sentencing exposure, investigation priorities.'
          },
          {
            Icon: CalendarClock,
            color: 'text-amber-600 dark:text-amber-400',
            bg: 'bg-amber-50 dark:bg-amber-900/20',
            title: 'Deadline Generator',
            description:
            'Generate procedural deadlines based on Alabama Rules of Criminal Procedure and case stage.'
          },
          {
            Icon: PenLine,
            color: 'text-blue-600 dark:text-blue-400',
            bg: 'bg-blue-50 dark:bg-blue-900/20',
            title: 'Document Drafting',
            description:
            'Generate first drafts of motions, pleas, and memoranda tailored to your case.'
          },
          {
            Icon: MessageSquare,
            color: 'text-emerald-600 dark:text-emerald-400',
            bg: 'bg-emerald-50 dark:bg-emerald-900/20',
            title: 'Client Communication',
            description:
            'Plain-language case status update suitable for sharing with clients and families.'
          },
          {
            Icon: FileSearch,
            color: 'text-cyan-600 dark:text-cyan-400',
            bg: 'bg-cyan-50 dark:bg-cyan-900/20',
            title: 'Document Summary',
            description:
            'Summarize police reports, witness statements, lab reports, and other case documents for defense-relevant details.'
          },
          {
            Icon: ListChecks,
            color: 'text-teal-600 dark:text-teal-400',
            bg: 'bg-teal-50 dark:bg-teal-900/20',
            title: 'Task Suggestions',
            description:
            'Suggest concrete defense tasks based on case stage, charges, deadlines, and existing work — one-click to add.'
          },
          {
            Icon: FolderOpen,
            color: 'text-orange-600 dark:text-orange-400',
            bg: 'bg-orange-50 dark:bg-orange-900/20',
            title: 'Filing Classifier',
            description:
            'Classify court filings — auto-name, identify filing party (State, Defendant, Court), and summarize significance.'
          },
          {
            Icon: Layers,
            color: 'text-slate-600 dark:text-slate-400',
            bg: 'bg-slate-100 dark:bg-slate-700/50',
            title: 'Batch Case Manager',
            description:
            'Perform bulk operations — reassign staff, change statuses, advance stages, update court dates, transfer divisions.',
            noSelection: true
          }].
          map((agent, i) =>
          <div
            key={i}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-sm flex flex-col h-full cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors">

                <div
              className={`w-9 h-9 rounded-lg ${agent.bg} flex items-center justify-center mb-3`}>

                  <agent.Icon className={`w-5 h-5 ${agent.color}`} />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {agent.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                  {agent.description}
                </p>
                {!agent.noSelection &&
            <div className="text-[10px] font-medium text-amber-600 dark:text-amber-500 mt-auto">
                    Requires case selection
                  </div>
            }
              </div>
          )}
          </div>
        }

        {activeMainTab === 'Trainer' &&
        <>
            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 max-w-3xl leading-relaxed">
              Add instructions or upload documents to customize how AI agents
              work. You can target training to specific agents, or apply it to
              all.{' '}
              <strong className="font-semibold text-slate-900 dark:text-slate-100">
                Advocate AI always receives all training
              </strong>{' '}
              since it is a general-purpose assistant.
            </p>

            {/* Sub Tabs & Action */}
            <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 mb-6">
              <div className="flex gap-6">
                {['My Training', 'Office Training'].map((tab) =>
              <button
                key={tab}
                onClick={() => setActiveSubTab(tab)}
                className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeSubTab === tab ? 'border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'}`}>

                    {tab}
                  </button>
              )}
              </div>
              <button className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-md text-sm font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors shadow-sm mb-2">
                + Add Training
              </button>
            </div>

            {/* Training Entries List */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                      Prioritize Date/Time
                    </h3>
                    <span className="text-[10px] font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded">
                      Personal
                    </span>
                    <span className="text-[10px] font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">
                      General
                    </span>
                    <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                      📝 Client Communication
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500">
                    <button className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    </button>
                    <button className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                      <X className="w-4 h-4 text-red-400 dark:text-red-500" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 truncate">
                  When writing a text to a client prioritize the date and time
                  while keeping it within a single text. You do not need to
                  include the entire case style. A...
                </p>
                <div className="text-xs text-slate-400 dark:text-slate-500">
                  Added by Admin
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </div>);

}