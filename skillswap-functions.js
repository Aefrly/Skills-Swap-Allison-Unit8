const skills = [
  { title: 'Python Tutoring', category: 'Programming', price: 20 },
  { title: 'Guitar Lessons', category: 'Music', price: 15 },
  { title: 'Resume Review', category: 'Career', price: 0 },
  { title: 'Web Development', category: 'Programming', price: 25 }
];

const filterSkillsByCategory = (skills, category) => {
    if (category === 'All') {
        return skills;
    }
    return skills.filter(skill => skill.category === category);
};

module.exports = {filterSkillsByCategory};