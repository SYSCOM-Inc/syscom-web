// Centralized icon mapping for SYSCOM site.
// Service / product / vertical data in @shared/data/company.ts carries
// semantic icon names (e.g. "database", "stethoscope") rather than emoji.
// This map resolves those names to lucide-react icon components.

import type { LucideIcon } from 'lucide-react';
import {
  // Services
  Database,
  Workflow,
  ScanLine,
  Replace,
  Brain,
  Code2,
  ShieldCheck,
  Users,
  // Verticals
  Landmark,
  Building2,

  UsersRound,
  Stethoscope,
  Truck,
  Factory,
  // Generic fallback
  Box,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  // Service icons (from company.services[*].icon)
  database: Database,
  workflow: Workflow,
  scan: ScanLine,
  move: Replace,
  brain: Brain,
  code: Code2,
  shield: ShieldCheck,
  users: Users,
  // Vertical icons (from company.verticals[*].icon)
  landmark: Landmark,
  building: Building2,
  'users-round': UsersRound,
  stethoscope: Stethoscope,
  truck: Truck,
  factory: Factory,
  // Legacy aliases (in case shared data drifts)
  'heart-pulse': Stethoscope,
  activity: Stethoscope,
};

export interface SyscomIconProps {
  name: string;
  className?: string;
  strokeWidth?: number;
  'aria-hidden'?: boolean;
}

export function SyscomIcon({
  name,
  className,
  strokeWidth = 1.75,
  'aria-hidden': ariaHidden = true,
}: SyscomIconProps) {
  const Icon = ICON_MAP[name] ?? Box;
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden={ariaHidden} />;
}
