"use client";
import React, { FC, useState } from "react";
import styles from './Selector.module.scss';

type SelectorProps = {
  options: string[];
  selectedValue: (value: string) => void;
}

const Selector: FC<SelectorProps> = ({ options, selectedValue }) => {

  const [selected, setSelected] = useState<string>(options[0]);

  const handleSelect = (value: string) => {
    setSelected(value);
    selectedValue(value);
  }

  return (
    <div className={styles.selector}>
      {options.map((option, index) => (
        <div 
          key={index}
          className={selected === option ? styles.selected : styles.option}
          onClick={() => handleSelect(option)}
        >
          {option}
        </div>
      ))}
    </div>
  )
}

export default Selector;