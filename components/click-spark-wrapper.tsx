'use client';

import { ReactNode } from 'react';
import ClickSpark from './ClickSpark';

interface ClickSparkWrapperProps {
  children: ReactNode;
}

export default function ClickSparkWrapper({ children }: ClickSparkWrapperProps) {
  return (
    <ClickSpark>
      {children}
    </ClickSpark>
  );
}
