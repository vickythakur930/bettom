import { OddsFormat } from '@/types/betslip';

export function formatOdds(decimalOdds: number, format: OddsFormat = 'decimal'): string {
  if (!decimalOdds || decimalOdds <= 1) return '1.00';

  if (format === 'decimal') {
    return decimalOdds.toFixed(2);
  }

  if (format === 'fractional') {
    const val = decimalOdds - 1;
    // Common fractional approximations
    const fractions: [number, string][] = [
      [1 / 4, '1/4'],
      [1 / 3, '1/3'],
      [2 / 5, '2/5'],
      [1 / 2, '1/2'],
      [4 / 7, '4/7'],
      [3 / 5, '3/5'],
      [2 / 3, '2/3'],
      [3 / 4, '3/4'],
      [4 / 5, '4/5'],
      [1, '1/1'],
      [11 / 10, '11/10'],
      [6 / 5, '6/5'],
      [5 / 4, '5/4'],
      [13 / 10, '13/10'],
      [7 / 5, '7/5'],
      [3 / 2, '3/2'],
      [8 / 5, '8/5'],
      [7 / 4, '7/4'],
      [9 / 5, '9/5'],
      [2, '2/1'],
      [9 / 4, '9/4'],
      [5 / 2, '5/2'],
      [11 / 4, '11/4'],
      [3, '3/1'],
      [10 / 3, '10/3'],
      [7 / 2, '7/2'],
      [4, '4/1'],
      [9 / 2, '9/2'],
      [5, '5/1'],
      [6, '6/1'],
      [7, '7/1'],
      [8, '8/1'],
      [9, '9/1'],
      [10, '10/1'],
    ];

    let closest = fractions[0];
    let minDiff = Math.abs(val - closest[0]);
    for (const f of fractions) {
      const diff = Math.abs(val - f[0]);
      if (diff < minDiff) {
        minDiff = diff;
        closest = f;
      }
    }
    return closest[1];
  }

  if (format === 'american') {
    if (decimalOdds >= 2.0) {
      const american = Math.round((decimalOdds - 1) * 100);
      return `+${american}`;
    } else {
      const american = Math.round(-100 / (decimalOdds - 1));
      return `${american}`;
    }
  }

  return decimalOdds.toFixed(2);
}
