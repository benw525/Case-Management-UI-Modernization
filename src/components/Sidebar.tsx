import React from 'react';
import {
  LayoutDashboard,
  Scale,
  CalendarDays,
  CheckSquare,
  FileText,
  Clock,
  BarChart3,
  Sparkles,
  MessageCircle,
  Users,
  UserCog,
  Settings,
  HelpCircle } from
'lucide-react';
interface SidebarProps {
  activeView:
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
  'reports';
  onNavigate: (
  view:
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
  'reports')
  => void;
  onHelpClick?: () => void;
  onSettingsClick?: () => void;
}
export function Sidebar({
  activeView,
  onNavigate,
  onHelpClick,
  onSettingsClick
}: SidebarProps) {
  const navItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard
  },
  {
    id: 'cases',
    label: 'Cases',
    icon: Scale
  },
  {
    id: 'calendar',
    label: 'Calendar',
    icon: CalendarDays
  },
  {
    id: 'tasks',
    label: 'Tasks',
    icon: CheckSquare
  },
  {
    id: 'templates',
    label: 'Templates',
    icon: FileText
  },
  {
    id: 'time',
    label: 'Time Log',
    icon: Clock
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: BarChart3
  },
  {
    id: 'ai',
    label: 'AI Center',
    icon: Sparkles
  },
  {
    id: 'collaborate',
    label: 'Collaborate',
    icon: MessageCircle
  },
  {
    id: 'contacts',
    label: 'Contacts',
    icon: Users
  },
  {
    id: 'staff',
    label: 'Staff',
    icon: UserCog
  }];

  return (
    <div className="fixed left-0 top-0 bottom-0 w-64 bg-slate-950 text-slate-300 flex flex-col border-r border-slate-800 z-40">
      {/* Logo Area */}
      <div className="p-6 border-b border-slate-800/50">
        <div className="flex items-center gap-3 mb-2">
          <img
            src="/ChatGPT_Image_Feb_24,_2026_at_04_08_17_PM.png"
            alt="MattrMindr logo"
            className="w-8 h-8 rounded object-cover mix-blend-lighten" />

          <span className="font-bold text-lg tracking-wide text-white">
            MATTRMINDR
          </span>
        </div>
        <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider leading-tight">
          Mobile County Public Defender's Office
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-b border-slate-800/50 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-amber-600/20 text-amber-500 flex items-center justify-center font-semibold border border-amber-500/30">
          AD
        </div>
        <div>
          <div className="text-sm font-medium text-white">Admin</div>
          <div className="text-xs text-slate-500">App Admin</div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = activeView === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() =>
              item.id === 'dashboard' ||
              item.id === 'cases' ||
              item.id === 'calendar' ||
              item.id === 'templates' ||
              item.id === 'collaborate' ||
              item.id === 'time' ||
              item.id === 'ai' ||
              item.id === 'tasks' ||
              item.id === 'contacts' ||
              item.id === 'staff' ||
              item.id === 'reports' ?
              onNavigate(item.id as any) :
              null
              }
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors relative ${isActive ? 'text-white bg-slate-800/80 font-medium' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'}`}>

              {isActive &&
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-amber-500 rounded-r-full" />
              }
              <Icon className={`w-4 h-4 ${isActive ? 'text-amber-500' : ''}`} />
              {item.label}
            </button>);

        })}
      </div>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-slate-800/50 space-y-2">
        <div className="text-xs text-slate-500 mb-2 px-2">
          Signed in as
          <br />
          admin@mobiledefender.org
        </div>
        <button
          onClick={onSettingsClick}
          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-md transition-colors">

          <Settings className="w-4 h-4" />
          Settings
        </button>
        <button
          onClick={onHelpClick}
          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-md transition-colors">

          <HelpCircle className="w-4 h-4" />
          Help Center
        </button>
      </div>
    </div>);

}