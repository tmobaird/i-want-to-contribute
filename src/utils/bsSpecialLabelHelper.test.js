import getReadableTextColor from './bsSpecialLabelHelper';

describe('getReadableTextColor()', () => {
  describe('color argument is empty', () => {
    it('returns white color as default', () => {
      const bgColor = getReadableTextColor(null);
      expect(bgColor).toEqual("#fff");
    });
  });
  describe('provided a background color', () => {
    describe('when luminance is less than 85', () => {
      it('returns a white color', () => {
        const bgColor = getReadableTextColor("#000");
        expect(bgColor).toEqual("#fff");
      });
    });
    describe('when luminance is more than 85', () => {
      it('returns a black color', () => {
        const bgColor = getReadableTextColor("#fff");
        expect(bgColor).toEqual("#545454");
      });
    });
  });
});
