import React from 'react';

import EmailInput from '../EmailInput/EmailInput';
import PasswordInput from '../PasswordInput/PasswordInput';

type Props = {
  label: string;
  type: 'password' | 'email';
  name: string;
  control: any;
};

export default function FormInput({type, ...props}: Props) {
  switch (type) {
    case 'email':
      return <EmailInput {...props} />;
    case 'password':
      return <PasswordInput {...props} />;
    default:
      return null;
  }
}
