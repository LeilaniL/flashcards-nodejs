

import { Card } from '../src/card';

describe('Card', function() {
let flashcard;
  beforeEach(function() {
    flashcard = new Card("test", "testing is lots of fun");
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('flashcard will have time set to 10 when created', function() {
    expect(flashcard.time).toEqual(10);
  });
});