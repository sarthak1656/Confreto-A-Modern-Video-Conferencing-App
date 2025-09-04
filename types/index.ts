/**
 * Application Type Definitions
 * Centralized types for better type safety and consistency
 */

// User related types
export interface User {
  id: string;
  username: string;
  email: string;
  imageUrl?: string;
  firstName?: string;
  lastName?: string;
  createdAt: Date;
  lastSignInAt?: Date;
}

// Meeting related types
export interface Meeting {
  id: string;
  title: string;
  description?: string;
  startsAt: Date;
  endsAt?: Date;
  participants: string[];
  hostId: string;
  status: 'scheduled' | 'ongoing' | 'completed' | 'cancelled';
  recordingUrl?: string;
  meetingLink: string;
  isPersonalRoom?: boolean;
}

export interface MeetingParticipant {
  id: string;
  name: string;
  email: string;
  role: 'host' | 'participant' | 'guest';
  joinedAt?: Date;
  leftAt?: Date;
  isMuted: boolean;
  isVideoEnabled: boolean;
  isScreenSharing: boolean;
}

// Call/Video related types
export interface CallState {
  id: string;
  status: 'idle' | 'connecting' | 'connected' | 'disconnected' | 'failed';
  participants: MeetingParticipant[];
  startTime?: Date;
  endTime?: Date;
  duration?: number;
}

export interface CallControls {
  isMuted: boolean;
  isVideoEnabled: boolean;
  isScreenSharing: boolean;
  isRecording: boolean;
  canToggleMute: boolean;
  canToggleVideo: boolean;
  canShareScreen: boolean;
  canRecord: boolean;
}

// UI Component types
export interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

export interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  meetingType: 'instant' | 'scheduled' | 'join';
  defaultValues?: Partial<MeetingFormData>;
}

export interface MeetingFormData {
  title: string;
  description: string;
  dateTime: Date;
  duration: number; // in minutes
  participants: string[];
  isPersonalRoom: boolean;
}

// Navigation types
export interface SidebarLink {
  label: string;
  route: string;
  imgURL: string;
  isActive?: boolean;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

// Error types
export interface AppError {
  code: string;
  message: string;
  details?: Record<string, any>;
  timestamp: Date;
}

// Theme types
export type Theme = 'dark' | 'light' | 'system';

export interface ThemeConfig {
  theme: Theme;
  primaryColor: string;
  accentColor: string;
  backgroundColor: string;
}

// Utility types
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncState<T> {
  data: T | null;
  loading: LoadingState;
  error: string | null;
}

// Form validation types
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'date' | 'time' | 'textarea' | 'select';
  placeholder?: string;
  validation?: ValidationRule;
  options?: { value: string; label: string }[];
}

// All types are automatically exported above
