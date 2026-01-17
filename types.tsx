export enum AppMode {
  CHAT = 'CHAT',
  ANALYZE = 'ANALYZE',
  RESEARCH = 'RESEARCH',
  SETTINGS = 'SETTINGS',
  SPECIAL = "SPECIAL"
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  sources?: Array<{ title: string; uri: string }>;
}

export interface MenuItem {
  id: AppMode;
  label: string;
  icon: string;
  description: string;
}
