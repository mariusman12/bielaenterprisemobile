import type { LucideIcon } from 'lucide-react-native';
import { StyleProp, ViewStyle } from 'react-native';

export type IconSymbolName = LucideIcon;

/**
 * Icon component using lucide-react-native.
 * Pass any Lucide icon component as the `name` prop.
 *
 * Usage:
 *   import { Home } from 'lucide-react-native';
 *   <IconSymbol name={Home} size={24} color="#000" />
 */
export function IconSymbol({
  name: Icon,
  size = 24,
  color,
  style,
  strokeWidth = 2,
}: {
  name: LucideIcon;
  size?: number;
  color: string;
  style?: StyleProp<ViewStyle>;
  strokeWidth?: number;
}) {
  return <Icon size={size} color={color} strokeWidth={strokeWidth} style={style} />;
}
