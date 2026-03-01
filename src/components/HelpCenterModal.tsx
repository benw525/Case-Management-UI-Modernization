import React, { useState } from 'react';
import {
  X,
  ChevronDown,
  Scale,
  ClipboardList,
  MessageSquare,
  Search,
  Calendar,
  Brain } from
'lucide-react';
interface HelpCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function HelpCenterModal({ isOpen, onClose }: HelpCenterModalProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(
    'Getting Started'
  );
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('Tutorials');
  const [contactForm, setContactForm] = useState({
    subject: '',
    message: ''
  });
  if (!isOpen) return null;
  const tabs = ['Tutorials', 'FAQ', 'Advocate AI', 'Change Log', 'Contact'];
  // Tutorials accordion items
  const tutorialItems = [
  {
    id: 'Getting Started',
    icon: '🚀',
    label: 'Getting Started'
  },
  {
    id: 'Case Management',
    icon: '⚖️',
    label: 'Case Management'
  },
  {
    id: 'Calendar & Deadlines',
    icon: '📅',
    label: 'Calendar & Deadlines'
  },
  {
    id: 'Tasks',
    icon: '✅',
    label: 'Tasks'
  },
  {
    id: 'Documents & Filings',
    icon: '📄',
    label: 'Documents & Filings'
  },
  {
    id: 'Correspondence & SMS',
    icon: '💬',
    label: 'Correspondence & SMS'
  },
  {
    id: 'AI Tools',
    icon: '⚡',
    label: 'AI Tools'
  },
  {
    id: 'Contacts & Staff',
    icon: '👥',
    label: 'Contacts & Staff'
  },
  {
    id: 'Reports & Time Log',
    icon: '📊',
    label: 'Reports & Time Log'
  },
  {
    id: 'Administration',
    icon: '🔧',
    label: 'Administration'
  }];

  // FAQ data organized by category
  const faqCategories = [
  {
    category: 'GENERAL',
    questions: [
    {
      id: 'what-is',
      question: 'What is MattrMindr?',
      answer:
      'MattrMindr is a comprehensive case management system designed specifically for public defender offices. It helps manage cases, deadlines, documents, and client communications all in one place.'
    },
    {
      id: 'reset-password',
      question: 'How do I reset my password?',
      answer:
      'Click on Settings in the sidebar, then select "Change Password" under the Security section. You\'ll be prompted to enter your current password and create a new one.'
    },
    {
      id: 'phone',
      question: 'Can I use this on my phone?',
      answer:
      'Yes! MattrMindr is fully responsive and works on mobile devices. You can access all features through your mobile browser, and we also offer native iOS and Android apps.'
    }]

  },
  {
    category: 'CASES',
    questions: [
    {
      id: 'confidential',
      question: 'How do I mark a case as confidential?',
      answer:
      'Open the case details and click the "Mark Confidential" button in the case header. Confidential cases are only visible to assigned attorneys and administrators.'
    },
    {
      id: 'stages',
      question: 'What do the case stages mean?',
      answer:
      'Case stages track the progress of a case: Intake (new case), Discovery (gathering evidence), Pre-Trial (motions and negotiations), Trial (active trial), and Closed (case resolved).'
    },
    {
      id: 'conflict',
      question: 'How does conflict checking work?',
      answer:
      'When you create a new case, MattrMindr automatically checks for potential conflicts by comparing client names, co-defendants, and witnesses against your existing cases and contacts.'
    }]

  },
  {
    category: 'AI FEATURES',
    questions: [
    {
      id: 'data-training',
      question: 'Is my case data used to train the AI?',
      answer:
      'No. Your case data is never used to train our AI models. All AI processing is done in isolated environments, and your data remains completely private and confidential.'
    },
    {
      id: 'customize-ai',
      question: 'How do I customize AI behavior?',
      answer:
      'Visit the AI Center in the sidebar to access the AI Agent Trainer. You can add custom training entries for local rules, office policies, and defense strategies.'
    },
    {
      id: 'advocate-help',
      question: 'What can Advocate AI help with?',
      answer:
      'Advocate AI can help with case strategy, draft communications, suggest tasks, explain MattrMindr features, search across cases, and answer questions about your cases.'
    }]

  },
  {
    category: 'DOCUMENTS',
    questions: [
    {
      id: 'file-types',
      question: 'What file types can I upload?',
      answer:
      'MattrMindr supports PDF, DOCX, DOC, TXT, RTF, JPG, PNG, and common audio/video formats. Maximum file size is 100MB per document.'
    },
    {
      id: 'classify',
      question: 'How does the AI classify filings?',
      answer:
      'When you upload a document, our AI analyzes its content and automatically suggests a classification (Motion, Order, Discovery, Correspondence, etc.). You can always override the suggestion.'
    }]

  }];

  // Advocate AI capabilities
  const aiCapabilities = [
  {
    icon: Scale,
    title: 'Case Strategy',
    description:
    'Get strategic recommendations based on charges, evidence, and case details'
  },
  {
    icon: ClipboardList,
    title: 'Task Suggestions',
    description:
    'Receive actionable task suggestions you can add to a case with one click'
  },
  {
    icon: MessageSquare,
    title: 'Draft Messages',
    description: 'Draft client communications, letters, and court documents'
  },
  {
    icon: Search,
    title: 'Feature Help',
    description:
    'Ask how to use any MattrMindr feature and get step-by-step guidance'
  },
  {
    icon: Calendar,
    title: 'Calendar Help',
    description: 'Get help scheduling and managing court dates and deadlines'
  },
  {
    icon: Brain,
    title: 'Smart Search',
    description: 'Search across all your cases with natural language queries'
  }];

  const renderTutorialsTab = () =>
  <div className="space-y-1">
      {tutorialItems.map((item) => {
      const isExpanded = expandedItem === item.id;
      return (
        <div
          key={item.id}
          className="border-b border-slate-100 dark:border-slate-700/50 last:border-0">

            <button
            onClick={() => setExpandedItem(isExpanded ? null : item.id)}
            className="w-full flex items-center justify-between py-4 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors rounded-lg px-2 -mx-2">

              <div className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium text-slate-900 dark:text-slate-100 text-sm">
                  {item.label}
                </span>
              </div>
              <ChevronDown
              className={`w-4 h-4 text-slate-400 dark:text-slate-500 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />

            </button>
            {isExpanded &&
          <div className="pb-4 pt-2 px-2 text-sm text-slate-600 dark:text-slate-400">
                Content for {item.label} would go here. This is a placeholder
                for the actual help documentation and guides.
              </div>
          }
          </div>);

    })}
    </div>;

  const renderFaqTab = () =>
  <div className="space-y-6">
      {faqCategories.map((category) =>
    <div key={category.category}>
          <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
            {category.category}
          </div>
          <div className="space-y-0">
            {category.questions.map((faq) => {
          const isExpanded = expandedFaq === faq.id;
          return (
            <div
              key={faq.id}
              className="border-b border-slate-100 dark:border-slate-700/50 last:border-0">

                  <button
                onClick={() => setExpandedFaq(isExpanded ? null : faq.id)}
                className="w-full flex items-center justify-between py-3 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">

                    <span className="text-sm text-slate-900 dark:text-slate-100">
                      {faq.question}
                    </span>
                    <ChevronDown
                  className={`w-4 h-4 text-slate-400 dark:text-slate-500 flex-shrink-0 ml-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />

                  </button>
                  {isExpanded &&
              <div className="pb-4 text-sm text-slate-600 dark:text-slate-400 pr-8">
                      {faq.answer}
                    </div>
              }
                </div>);

        })}
          </div>
        </div>
    )}
    </div>;

  const renderAdvocateAiTab = () =>
  <div className="text-center">
      {/* Robot emoji and heading */}
      <div className="text-5xl mb-4">🤖</div>
      <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
        Advocate AI
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto mb-6">
        Your AI-powered legal assistant. Advocate AI is context-aware and can
        help with case strategy, explain MattrMindr features, draft
        communications, suggest next steps, and answer questions about your
        cases.
      </p>

      {/* CTA Button */}
      <button className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors font-medium mb-8">
        <span>🤖</span>
        Open Advocate AI
      </button>

      {/* Capabilities section */}
      <div className="text-left">
        <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-4">
          What can Advocate AI do?
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {aiCapabilities.map((cap) => {
          const Icon = cap.icon;
          return (
            <div
              key={cap.title}
              className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">

                <Icon className="w-5 h-5 text-slate-500 dark:text-slate-400 mb-2" />
                <div className="font-medium text-slate-900 dark:text-slate-100 text-sm mb-1">
                  {cap.title}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {cap.description}
                </div>
              </div>);

        })}
        </div>
      </div>
    </div>;

  const renderChangeLogTab = () =>
  <div className="space-y-8">
      {/* Version 1.3 */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs font-medium rounded">
            v1.3
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            February 2026
          </span>
          <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded">
            LATEST
          </span>
        </div>
        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
          SMS Notifications & Help Center
        </h4>
        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-slate-400 dark:text-slate-500 mt-1.5">•</span>
            <div>
              <span className="font-medium">
                Twilio-based SMS auto-text reminder system
              </span>
              <ul className="mt-1 ml-4 space-y-1 text-slate-500 dark:text-slate-400">
                <li>
                  • Automated reminders for hearings, court dates, deadlines,
                  and meetings
                </li>
                <li>
                  • Configurable recipient lists with phone number suggestions
                  from case data
                </li>
                <li>
                  • Reminder intervals: day-of, 1, 3, 7, and 14 days before
                  events
                </li>
                <li>
                  • AI-assisted message drafting for one-off text messages
                </li>
              </ul>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-400 dark:text-slate-500 mt-1.5">•</span>
            <span>Correspondence tab split into Emails and Texts sub-tabs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-400 dark:text-slate-500 mt-1.5">•</span>
            <span>Chat-style message bubbles for text message history</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-400 dark:text-slate-500 mt-1.5">•</span>
            <span>
              Settings popup consolidating appearance, password, and session
              controls
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-400 dark:text-slate-500 mt-1.5">•</span>
            <span>
              Help Center with Tutorials, FAQ, Change Log, and Contact Support
            </span>
          </li>
        </ul>
      </div>

      {/* Version 1.2 */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded">
            v1.2
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            February 2026
          </span>
        </div>
        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
          Advocate AI & Advanced Training
        </h4>
        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-slate-400 dark:text-slate-500 mt-1.5">•</span>
            <div>
              <span className="font-medium">Global Advocate AI assistant</span>
              <ul className="mt-1 ml-4 space-y-1 text-slate-500 dark:text-slate-400">
                <li>• Floating button accessible from every screen</li>
                <li>
                  • Screen-aware context (knows your current view and visible
                  data)
                </li>
                <li>• Case-specific mode with full case file context</li>
                <li>• Actionable task suggestions with one-click add</li>
                <li>• Per-screen starter chips for common questions</li>
              </ul>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-400 dark:text-slate-500 mt-1.5">•</span>
            <div>
              <span className="font-medium">AI Agent Trainer</span>
              <ul className="mt-1 ml-4 space-y-1 text-slate-500 dark:text-slate-400">
                <li>• Personal and office-wide training entries</li>
                <li>• Target specific agents or apply to all</li>
                <li>• Document upload support (PDF, DOCX, TXT) with OCR</li>
                <li>
                  • Categories: Local Rules, Office Policy, Defense Strategy,
                  Court Preferences
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>;

  const renderContactTab = () =>
  <div className="space-y-4">
      {/* Name and Role row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1.5">
            Name
          </label>
          <input
          type="text"
          value="Admin"
          readOnly
          className="w-full px-3 py-2.5 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-700 dark:text-slate-300" />

        </div>
        <div>
          <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1.5">
            Role
          </label>
          <input
          type="text"
          value="App Admin"
          readOnly
          className="w-full px-3 py-2.5 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-700 dark:text-slate-300" />

        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1.5">
          Email
        </label>
        <input
        type="email"
        value="admin@mobiledefender.org"
        readOnly
        className="w-full px-3 py-2.5 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-700 dark:text-slate-300" />

      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1.5">
          Subject{' '}
          <span className="text-slate-400 dark:text-slate-500">(optional)</span>
        </label>
        <input
        type="text"
        value={contactForm.subject}
        onChange={(e) =>
        setContactForm({
          ...contactForm,
          subject: e.target.value
        })
        }
        placeholder="Brief summary of your issue"
        className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-700 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600 focus:border-slate-300 dark:focus:border-slate-600" />

      </div>

      {/* Message */}
      <div>
        <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1.5">
          Message
        </label>
        <textarea
        value={contactForm.message}
        onChange={(e) =>
        setContactForm({
          ...contactForm,
          message: e.target.value
        })
        }
        placeholder="Describe your issue or suggestion..."
        rows={5}
        className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-700 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-y focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600 focus:border-slate-300 dark:focus:border-slate-600" />

      </div>

      {/* Submit button */}
      <button className="w-full py-3 bg-slate-500 dark:bg-slate-600 text-white rounded-lg hover:bg-slate-600 dark:hover:bg-slate-500 transition-colors font-medium">
        Send to Support
      </button>
    </div>;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Tutorials':
        return renderTutorialsTab();
      case 'FAQ':
        return renderFaqTab();
      case 'Advocate AI':
        return renderAdvocateAiTab();
      case 'Change Log':
        return renderChangeLogTab();
      case 'Contact':
        return renderContactTab();
      default:
        return renderTutorialsTab();
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-8 pt-8 pb-4 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            aria-label="Close help center">

            <X className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-serif italic text-slate-900 dark:text-slate-100 mb-1">
            Help Center
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Guides, answers, and support for MattrMindr
          </p>
        </div>

        {/* Tabs */}
        <div className="px-8 border-b border-slate-200 dark:border-slate-700 flex gap-6">
          {tabs.map((tab) =>
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab ? 'border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'}`}>

              {tab}
            </button>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">{renderTabContent()}</div>
      </div>
    </div>);

}