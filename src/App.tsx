import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { CasesList } from './components/CasesList';
import { CaseDetail } from './components/CaseDetail';
import { CalendarPage } from './components/CalendarPage';
import { DocumentTemplatesPage } from './components/DocumentTemplatesPage';
import { CollaboratePage } from './components/CollaboratePage';
import { TimeLogPage } from './components/TimeLogPage';
import { AICenterPage } from './components/AICenterPage';
import { TasksPage } from './components/TasksPage';
import { ContactsPage } from './components/ContactsPage';
import { StaffDirectoryPage } from './components/StaffDirectoryPage';
import { ReportsPage } from './components/ReportsPage';
import { HelpCenterModal } from './components/HelpCenterModal';
import { SettingsModal } from './components/SettingsModal';
import { ThemeProvider } from './components/ThemeContext';
import { AdvocateAIButton } from './components/AdvocateAIButton';
import { LoginPage } from './components/LoginPage';
export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeView, setActiveView] = useState<
    'dashboard' |
    'cases' |
    'calendar' |
    'templates' |
    'collaborate' |
    'time' |
    'ai' |
    'tasks' |
    'contacts' |
    'staff' |
    'reports'>(
    'dashboard');
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  if (!isAuthenticated) {
    return (
      <ThemeProvider>
        <LoginPage onLogin={() => setIsAuthenticated(true)} />
      </ThemeProvider>);

  }
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex">
        <Sidebar
          activeView={activeView}
          onNavigate={setActiveView}
          onHelpClick={() => setIsHelpOpen(true)}
          onSettingsClick={() => setIsSettingsOpen(true)} />


        <main className="flex-1 ml-64 h-screen overflow-y-auto">
          {activeView === 'dashboard' &&
          <Dashboard onCaseClick={setSelectedCaseId} />
          }
          {activeView === 'cases' &&
          <CasesList onCaseClick={setSelectedCaseId} />
          }
          {activeView === 'calendar' && <CalendarPage />}
          {activeView === 'templates' && <DocumentTemplatesPage />}
          {activeView === 'collaborate' && <CollaboratePage />}
          {activeView === 'time' && <TimeLogPage />}
          {activeView === 'ai' && <AICenterPage />}
          {activeView === 'tasks' && <TasksPage />}
          {activeView === 'contacts' && <ContactsPage />}
          {activeView === 'staff' && <StaffDirectoryPage />}
          {activeView === 'reports' && <ReportsPage />}
        </main>

        {selectedCaseId &&
        <CaseDetail
          caseId={selectedCaseId}
          onClose={() => setSelectedCaseId(null)} />

        }

        <HelpCenterModal
          isOpen={isHelpOpen}
          onClose={() => setIsHelpOpen(false)} />


        <SettingsModal
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)} />


        <AdvocateAIButton />
      </div>
    </ThemeProvider>);

}