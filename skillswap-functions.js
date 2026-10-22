
filterSkillsByCategory(skills, 'Programming'); 
/* [
  { title: 'Python Tutoring', category: 'Programming', price: 20 },
  { title: 'Web Development', category: 'Programming', price: 25 }
]
*/

filterSkillsByCategory(skills, 'All'); 
/*
[
  { title: 'Python Tutoring', category: 'Programming', price: 20 },
  { title: 'Guitar Lessons', category: 'Music', price: 15 },
  { title: 'Resume Review', category: 'Career', price: 0 },
  { title: 'Web Development', category: 'Programming', price: 25 }
];
*/

filterSkillsByCategory(skills, 'Cooking'); // []



module.exports = {filterSkillsByCategory};