import { parseOpenIssues, suggested } from './openIssuesParser';

describe('suggested()', () => {
  describe('when issue has no labels', () => {
    const issueWoLabels = {
      title: "Test Issue",
      labels: []
    };
    it('returns false', () => {
      expect(suggested(issueWoLabels)).toEqual(false);
    });
  });
  describe('when issue has suggested label', () => {
    const issue = {
      title: "Test Issue",
      labels: [{ name: "help wanted" }]
    };
    it('returns true', () => {
      expect(suggested(issue)).toEqual(true);
    });
    describe("when label is uppercased", () => {
      it('still returns true', () => {
        const upcaseIssue = {
          title: "Test Issue",
          labels: [{ name: "HELP WANTED" }]
        }
        expect(suggested(upcaseIssue)).toEqual(true);
      });
    });
  });
  describe('when issue has a bad label', () => {
    const issue = {
      title: "Test Issue",
      labels: [
        { name: "in progress" },
        { name: "help wanted" }
      ]
    };
    it('returns false', () => {
      expect(suggested(issue)).toEqual(false);
    });
    describe("when label is uppercased", () => {
      it('still returns false', () => {
        const upcaseIssue = {
          title: "Test Issue",
          labels: [{ name: "IN PROGRESS" }]
        }
        expect(suggested(upcaseIssue)).toEqual(false);
      });
    });
  });
});

describe('parseOpenIssues()', () => {
  describe('when no issues exist', () => {
    it('returns an object', () => {
      expect(parseOpenIssues([])).toBeInstanceOf(Object);
    });
    it('returns object with [] for openIssues', () => {
      const result = parseOpenIssues([]);
      expect(result.openIssues).toEqual([]);
    });
    it('returns object with [] for suggestedIssues', () => {
      const result = parseOpenIssues([]);
      expect(result.suggestedIssues).toEqual([]);
    });
  });
  describe('when issue(s) exist', () => {
    describe('when suggestedIssue exists', () => {
      const issues = [
        {
          title: "Test Issue",
          labels: [{ name: "help wanted" }]
        }
      ]
      const result = parseOpenIssues(issues);

      it('includes issue in suggestedIssues', () => {
        expect(result.suggestedIssues).toEqual([{
          title: "Test Issue",
          labels: [{ name: "help wanted" }]
        }]);
      });
      it('does not include issue in openIssues', () => {
        expect(result.openIssues).not.toContain({
          title: "Test Issue",
          labels: [{ name: "help wanted" }]
        });
      });
    });
    describe('when openIssue exists', () => {
      const issues = [
        {
          title: "Test Issue",
          labels: [{ name: "in progress" }]
        }
      ]
      const result = parseOpenIssues(issues);

      it('includes issue in openIssues', () => {
        expect(result.openIssues).toEqual([{
          title: "Test Issue",
          labels: [{ name: "in progress" }]
        }]);
      });
      it('does not include issue in suggestedIssues', () => {
        expect(result.suggestedIssues).not.toContain({
          title: "Test Issue",
          labels: [{ name: "in progress" }]
        });
      });
    });
  });
});
