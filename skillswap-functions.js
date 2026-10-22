//filter skills array by category
function filterSkillsByCategory(skills, category) {
    if (category === 'All') {
        return skills;
    }
    return skills.filter(skill => skill.category === category);
}

//AI says this if statement is required?
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {filterSkillsByCategory};
}