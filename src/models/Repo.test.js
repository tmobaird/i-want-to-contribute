// @flow
import Repo from './Repo';

describe('Repo', () => {
  it('is new-able', () => {
    const subject = new Repo({
      thomas: 'test',
      id: 123,
      fullName: 'facebook/react',
      name: 'react',
      language: 'JavaScript'
    });
    expect(subject.fullName).toEqual('facebook/react')
  });

  describe('create', () => {
    it('creates a new Repo', () => {
      const subject = Repo.create({
        id: 123,
        fullName: 'facebook/react',
        name: 'react',
        language: 'JavaScript'
      });

      expect(subject instanceof Repo).toBeTruthy();
    });
  });
  describe('update', () => {
    let repo;
    beforeEach(() => {
      repo = Repo.create({id: 123, fullName: 'facebook/react', name: 'react'});
    });

    it('returns a new repo', () => {
      const subject = repo.update({fullName: 'facebookCode/react'});
      expect(subject instanceof Repo).toBeTruthy();
    });

    it('updates attributes', () => {
      const subject = repo.update({fullName: 'facebookCode/react'});
      expect(subject.fullName).toEqual('facebookCode/react');
    });
  });
});
