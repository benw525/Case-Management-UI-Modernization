import React, { useState } from 'react';
type ActivityType =
'all' |
'field_edits' |
'notes' |
'tasks' |
'links' |
'deadlines' |
'billing' |
'expenses' |
'correspondence';
interface ActivityEvent {
  id: string;
  type:
  'auto_text_added' |
  'sms_sent' |
  'filing_classified' |
  'document_edited' |
  'correspondence_removed' |
  'filing_deleted' |
  'filing_summarized';
  user: string;
  role: string;
  description: string;
  timestamp: string;
}
const filterOptions: {
  key: ActivityType;
  label: string;
}[] = [
{
  key: 'all',
  label: 'All'
},
{
  key: 'field_edits',
  label: 'Field Edits'
},
{
  key: 'notes',
  label: 'Notes'
},
{
  key: 'tasks',
  label: 'Tasks'
},
{
  key: 'links',
  label: 'Links'
},
{
  key: 'deadlines',
  label: 'Deadlines'
},
{
  key: 'billing',
  label: 'Billing'
},
{
  key: 'expenses',
  label: 'Expenses'
},
{
  key: 'correspondence',
  label: 'Correspondence'
}];

const activityTypeConfig: Record<
  ActivityEvent['type'],
  {
    label: string;
    className: string;
  }> =
{
  auto_text_added: {
    label: 'Auto Text Added',
    className: 'bg-gray-800 dark:bg-gray-700 text-white'
  },
  sms_sent: {
    label: 'SMS Sent',
    className:
    'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50'
  },
  filing_classified: {
    label: 'Filing classified',
    className:
    'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50'
  },
  document_edited: {
    label: 'Document edited',
    className:
    'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/50'
  },
  correspondence_removed: {
    label: 'Correspondence Removed',
    className:
    'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800/50'
  },
  filing_deleted: {
    label: 'Filing deleted',
    className:
    'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800/50'
  },
  filing_summarized: {
    label: 'Filing summarized',
    className:
    'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/50'
  }
};
export function ActivityTab() {
  const [activeFilter, setActiveFilter] = useState<ActivityType>('all');
  const activities: ActivityEvent[] = [
  {
    id: '1',
    type: 'auto_text_added',
    user: 'Admin',
    role: 'App Admin',
    description:
    'Added Brandon L. Barnes ((877) 780-4236) for auto text reminders',
    timestamp: 'Mar 1, 2026 at 10:26 AM'
  },
  {
    id: '2',
    type: 'sms_sent',
    user: 'Admin',
    role: 'App Admin',
    description:
    'Text to Brandon L. Barnes: "Brandon, do not forget to be in Court by 8:30 on Tuesday, March 3, 2026. We will..."',
    timestamp: 'Mar 1, 2026 at 10:24 AM'
  },
  {
    id: '3',
    type: 'sms_sent',
    user: 'Admin',
    role: 'App Admin',
    description:
    'Text to Brandon L. Barnes: "Hi Brandon, this is a reminder of your court hearing for State of Alabama v. Bra..."',
    timestamp: 'Mar 1, 2026 at 7:49 AM'
  },
  {
    id: '4',
    type: 'filing_classified',
    user: 'Admin',
    role: 'App Admin',
    description: "Plaintiffs' Motion to Continue Bench Trial",
    timestamp: 'Feb 26, 2026 at 6:16 PM'
  },
  {
    id: '5',
    type: 'document_edited',
    user: 'Admin',
    role: 'App Admin',
    description: 'Deposition of Richard Jared Wilson - August 29, 2025',
    timestamp: 'Feb 26, 2026 at 6:02 PM'
  },
  {
    id: '6',
    type: 'correspondence_removed',
    user: 'Admin',
    role: 'App Admin',
    description:
    'Deleted email from Benjamin Warren: "Richard Wilson Deposition"',
    timestamp: 'Feb 26, 2026 at 5:39 PM'
  },
  {
    id: '7',
    type: 'filing_deleted',
    user: 'Admin',
    role: 'App Admin',
    description: 'Deposition of Richard Jared Wilson',
    timestamp: 'Feb 26, 2026 at 5:29 PM'
  },
  {
    id: '8',
    type: 'filing_summarized',
    user: 'Admin',
    role: 'App Admin',
    description: 'Deposition of Richard Jared Wilson',
    timestamp: 'Feb 26, 2026 at 5:25 PM'
  }];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Case Activity
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {activities.length} Events
        </span>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filterOptions.map((option) =>
        <button
          key={option.key}
          onClick={() => setActiveFilter(option.key)}
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${activeFilter === option.key ? 'bg-blue-600 dark:bg-blue-500 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'}`}>

            {option.label}
          </button>
        )}
      </div>

      {/* Activity Feed */}
      <div className="space-y-4">
        {activities.map((activity) => {
          const config = activityTypeConfig[activity.type];
          return (
            <div key={activity.id} className="flex items-start gap-4">
              {/* Avatar */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <span className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                  AD
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`px-2 py-0.5 text-xs font-medium rounded ${config.className}`}>

                    {config.label}
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {activity.user}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {activity.role}
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {activity.timestamp}
                </p>
              </div>
            </div>);

        })}
      </div>
    </div>);

}