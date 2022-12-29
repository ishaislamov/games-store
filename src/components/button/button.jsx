import React from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

export const Button = (onClick, children, size = 's', type) => {
    const btnClass = classNames({
        'btn': true,
        'btn-primary': type === 'primary',
        'btn-small': size === 's',
        'btn-medium': size === 'm',
    })
  return (
    <button 
    className={btnClass}
    onClick={onClick}>
        {children}
    </button>
    )
}
