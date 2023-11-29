import { ReactNode } from 'react';

type FlexProps = {
  children: ReactNode;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
};

export default function Flex({
  children,
  justifyContent,
  alignItems,
  flexDirection,
  flexWrap,
  gap,
}: FlexProps) {
  const style = {
    width: '100%',
    display: 'flex',
    justifyContent: justifyContent || 'flex-start',
    alignItems: alignItems || 'stretch',
    flexDirection: flexDirection || 'row',
    flexWrap: flexWrap || 'nowrap',
    gap: gap || 0,
  };

  return <div style={style}>{children}</div>;
}
