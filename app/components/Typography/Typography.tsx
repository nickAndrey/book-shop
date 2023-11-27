import mergeClassNames from '@/utils/mergeClassNames';
import { ElementType, ReactNode } from 'react';
import styles from './Typography.module.scss';

type TypographyProps = {
  component: ElementType;
  children: ReactNode;
  variant?: 'heading' | 'subheading' | 'body' | 'caption';
  className?: string;
};

export default function Typography({
  component: Component,
  children,
  variant = 'body',
  className = '',
}: TypographyProps) {
  return (
    <Component
      className={mergeClassNames([styles[`typography-${variant}`], className])}
    >
      {children}
    </Component>
  );
}
