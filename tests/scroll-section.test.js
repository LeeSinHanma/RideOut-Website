import assert from 'node:assert/strict';
import test from 'node:test';
import { getScrollSection } from '../src/hooks/useScrollSection.js';

const elementAt = top => ({ getBoundingClientRect: () => ({ top }) });

test('keeps the preceding context through gaps instead of returning to welcome', () => {
  assert.equal(getScrollSection([-1500, -700, 600].map(elementAt), 450), 1);
});

test('does not select the next chapter before it reaches the reading line', () => {
  assert.equal(getScrollSection([-1000, 300, 451].map(elementAt), 450), 1);
  assert.equal(getScrollSection([-1000, 300, 450].map(elementAt), 450), 2);
});

test('selects the frontmost sticky card when their positions overlap', () => {
  assert.equal(getScrollSection([104, 128, 152, 900].map(elementAt), 450), 2);
});

test('handles direct jumps and reverse scrolling without previous observer state', () => {
  assert.equal(getScrollSection([-3000, -2000, -1000, 100].map(elementAt), 450), 3);
  assert.equal(getScrollSection([100, 900, 1900, 2900].map(elementAt), 450), 0);
});

test('uses the viewport reading line and tolerates missing sections', () => {
  const elements = [elementAt(80), null, elementAt(420)];
  assert.equal(getScrollSection(elements, 360), 0);
  assert.equal(getScrollSection(elements, 450), 2);
  assert.equal(getScrollSection([], 450), 0);
});
