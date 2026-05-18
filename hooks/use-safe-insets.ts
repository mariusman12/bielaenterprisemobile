import { Platform, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface SafeInsets {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

interface DeviceProfile {
  name: string;
  width: number;
  height: number;
  insets: SafeInsets;
}

// Known device profiles — add new devices here as needed
const DEVICE_MAP: DeviceProfile[] = [
  {
    name: 'iPhone SE 3',
    width: 375,
    height: 667,
    insets: { top: 20, bottom: 0, left: 0, right: 0 },
  },
  {
    name: 'iPhone 14 / 15 / 16',
    width: 393,
    height: 852,
    insets: { top: 59, bottom: 34, left: 0, right: 0 },
  },
  {
    name: 'iPhone 17 Pro',
    width: 402,
    height: 874,
    insets: { top: 62, bottom: 34, left: 0, right: 0 },
  },
  {
    name: 'iPhone 17 Pro Max',
    width: 440,
    height: 956,
    insets: { top: 62, bottom: 34, left: 0, right: 0 },
  },
  {
    name: 'Pixel 9 Pro',
    width: 393,
    height: 851,
    insets: { top: 32, bottom: 24, left: 0, right: 0 },
  },
  {
    name: 'Android Mid-Range',
    width: 412,
    height: 892,
    insets: { top: 48, bottom: 24, left: 0, right: 0 },
  },
  {
    name: 'Galaxy Z Fold 7',
    width: 374,
    height: 870,
    insets: { top: 32, bottom: 24, left: 0, right: 0 },
  },
];

// Fallback when no device matches
const DEFAULT_INSETS: SafeInsets = {
  top: 50,
  bottom: 34,
  left: 0,
  right: 0,
};

/**
 * Finds the closest matching device profile based on screen dimensions.
 * Uses Euclidean distance between screen sizes to pick the best match.
 */
function findClosestDevice(screenWidth: number, screenHeight: number): SafeInsets {
  let bestMatch = DEFAULT_INSETS;
  let bestDistance = Infinity;

  for (const device of DEVICE_MAP) {
    const dw = device.width - screenWidth;
    const dh = device.height - screenHeight;
    const distance = Math.sqrt(dw * dw + dh * dh);

    if (distance < bestDistance) {
      bestDistance = distance;
      bestMatch = device.insets;
    }
  }

  // Only trust the match if it's reasonably close (within 30pt)
  if (bestDistance > 30) {
    return DEFAULT_INSETS;
  }

  return bestMatch;
}

export function useSafeInsets(): SafeInsets {
  const nativeInsets = useSafeAreaInsets();

  if (Platform.OS === 'web') {
    const { width, height } = Dimensions.get('window');
    return findClosestDevice(width, height);
  }

  return nativeInsets;
}
