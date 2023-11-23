'use client';

import mergeClassNames from '@/utils/mergeClassNames';
import useOutsideClickHandler from '@/utils/useOutsideClickHandler';
import { ReactNode, useRef, useState } from 'react';
import styles from './Dropdown.module.scss';

type DropdownProps = {
  panelConfig: {
    items: {
      id: string;
      component: ReactNode;
      content: ReactNode;
      className?: string;
    }[];
    panelClassName?: string;
  };
};

export default function Dropdown({ panelConfig }: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activePanel, setActivePanel] = useState(panelConfig.items[0]);

  useOutsideClickHandler(ref, () => setIsDropdownOpen(false));

  const onPanelItemClick = (id: string) => {
    const selectedPanel =
      panelConfig.items.find((panel) => panel.id === id) ||
      panelConfig.items[0];

    if (isDropdownOpen && activePanel.id === id) {
      setIsDropdownOpen(false);
    } else {
      setIsDropdownOpen(true);
      setActivePanel(selectedPanel);
    }
  };

  return (
    <div className={styles['dropdown-container']} ref={ref}>
      <div
        className={mergeClassNames([
          styles['panel-container'],
          panelConfig.panelClassName || '',
        ])}
      >
        {panelConfig.items.map(({ id, component, className }) => (
          <button
            type="button"
            className={mergeClassNames([
              styles['dropdown-trigger-button'],
              className || '',
            ])}
            onClick={() => onPanelItemClick(id)}
            key={id}
          >
            {component}
          </button>
        ))}
      </div>

      {isDropdownOpen && (
        <div className={styles['dropdown-content']}>{activePanel.content}</div>
      )}
    </div>
  );
}
