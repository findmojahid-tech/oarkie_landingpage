import React from 'react';
import * as Icons from 'lucide-react';

interface DynamicIconProps {
  name?: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = 'w-5 h-5', size }) => {
  if (!name) return <Icons.Circle className={className} size={size} />;

  // @ts-expect-error dynamic lookup
  const Component = Icons[name] as React.ComponentType<{ className?: string; size?: number }> | undefined;

  if (!Component) {
    return <Icons.Sparkles className={className} size={size} />;
  }

  return <Component className={className} size={size} />;
};
