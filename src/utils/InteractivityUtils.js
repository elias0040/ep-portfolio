export function cosineInterpolate(y1, y2, mu) {
  const mu2 = (1 - Math.cos(mu * Math.PI)) / 2;

  return y1 * (1 - mu2) + y2 * mu2;
}
