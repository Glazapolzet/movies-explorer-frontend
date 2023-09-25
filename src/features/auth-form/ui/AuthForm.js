import React from 'react';
import styles from './AuthForm.module.css';
import { Form } from 'shared/ui';


export const AuthForm = ({ onSubmit, children }) => {
  return (
    <Form onSubmit={onSubmit}>
      <div className={styles.content}>
        {children}
      </div>
    </Form>
  )
}
