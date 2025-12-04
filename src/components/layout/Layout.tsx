import type { ReactNode } from 'react';
import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default Layout;
