/*In skillswap.test.js, write a test suite for filterSkillsByCategory that tests that the function:

Filters skills by category
Handles "All" category
Checks for an empty array when no matches.
Run npm test to see tests fail. Be sure to commit your work at this point! */

const {filterSkillsByCategory } = require('../skillswap-functions');

const skills = [
  { title: 'Python Tutoring', category: 'Programming', price: 20 },
  { title: 'Guitar Lessons', category: 'Music', price: 15 },
  { title: 'Resume Review', category: 'Career', price: 0 },
  { title: 'Web Development', category: 'Programming', price: 25 }
];

describe('filter skills by category', () => {
    test('filters skills by category', () => {
        expect(filterSkillsByCategory(skills, 'Programming')).toEqual([{ title: 'Python Tutoring', category: 'Programming', price: 20 },
                                                                       { title: 'Web Development', category: 'Programming', price: 25 }]);
    });
    test('handles "all" category', () => {
        expect(filterSkillsByCategory(skills, 'All')).toEqual([{ title: 'Python Tutoring', category: 'Programming', price: 20 },
                                                               { title: 'Guitar Lessons', category: 'Music', price: 15 },
                                                               { title: 'Resume Review', category: 'Career', price: 0 },
                                                               { title: 'Web Development', category: 'Programming', price: 25 }]);
    });
    test('checks for an empty array when no matches', () => {
        expect(filterSkillsByCategory(skills, 'Cooking')).toEqual([]);
    });
});