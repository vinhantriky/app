import React from 'react';

import Back from '#/assets/images/ico_arrow.svg';
import Checked from '#/assets/images/ico_checked.svg';
import Eye from '#/assets/images/ico_eye.svg';
import Next from '#/assets/images/ico_next.svg';
import NoCheck from '#/assets/images/ico_noCheck.svg';

type IconType = 'back' | 'eye' | 'checked' | 'no-checked' | 'next';

type Props = {
  size: number;
  color: string;
  name: IconType;
};
export default function Icon({color, name, size}: Props) {
  switch (name) {
    case 'next':
      return <Next fill={color} width={size} height={size} />;
    case 'back':
      return <Back fill={color} width={size} height={(size * 14) / 8} />;
    case 'eye':
      return <Eye fill={color} width={size} height={(size * 10) / 19} />;
    case 'checked':
      return <Checked fill={color} width={size} height={size} />;
    case 'no-checked':
      return <NoCheck fill={color} width={size} height={size} />;
    default:
      return null;
  }
}
