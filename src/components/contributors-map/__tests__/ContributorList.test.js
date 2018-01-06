import React from 'react';
import { shallow } from 'enzyme';
import ContributorList from '../ContributorList';

describe('ContributorList', () => {
  it('renders unordered list', () => {
    const wrapper = shallow(<ContributorList />);
    expect(wrapper.find("ul.contributor-list")).toHaveLength(1);
  });
  describe('list items', () => {
    describe('when no contributors exist (defaultProps)', () => {
      it("includes 0 li's", () => {
        const wrapper = shallow(<ContributorList />);
        expect(wrapper.find("Contributor")).toHaveLength(0);
      });
    });

    describe('when one contributor exists', () => {
      const contributors = [
        { "name": "Thomas Baird", "username": "tmobaird" }
      ];
      it('includes 1 li', () => {
        const wrapper = shallow(<ContributorList contributors={contributors} />);
        expect(wrapper.find("Contributor")).toHaveLength(1);
      });
    });
    describe('when multiple contributors exists', () => {
      const contributors = [
        { "name": "Thomas Baird", "username": "tmobaird" },
        { "name": "Devin Osorio", "username": "cubadomingo" }
      ];
      it("it includes 2 li's", () => {
        const wrapper = shallow(<ContributorList contributors={contributors} />);
        expect(wrapper.find("Contributor")).toHaveLength(2);
      });
    });
  });
});
