const Stretch = require('./Stretch');

describe('Stretch model', () => {
  it('has a required date', () => {
    const stretch = new Stretch();
    const { errors } = stretch.validateSync();

    expect(errors.date.message).toEqual('Path `date` is required.');
  });

  it('has a required stretch name', () => {
    const stretch = new Stretch();
    const { errors } = stretch.validateSync();

    expect(errors.stretchName.message).toEqual('Path `stretchName` is required.');
  });

  it('has a required number of seconds', () => {
    const stretch = new Stretch();
    const { errors } = stretch.validateSync();

    expect(errors.seconds.message).toEqual('Path `seconds` is required.');
  });
});
