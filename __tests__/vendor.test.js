'use strict';

const vendor = require('..//.js');
const { itemPickedup } = require('../driver/driver.js');

decribe('Vendor Testing', () => {
  let consoleSpy;
  let payload = {};

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplent();
  });

  afterEach(() => {
    consoleSpy.mockImplent()
  })

  it('function "Delivered', () => {
    vendor.Delivered(payload)
    expect(consoleSpy).toHaveBeenCalled();
  })
})