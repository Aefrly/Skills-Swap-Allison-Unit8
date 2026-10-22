//filter skills array by category
function filterSkillsByCategory(skills, category) {
    if (category === 'All') {
        return skills;
    }
    return skills.filter(skill => skill.category === category);
}

//calculate total cost based on hourly rate and number of hours requested
function calculateTotalCost(hourlyRate, hours) {
    return hourlyRate * hours;
}

//AI says this if statement is required?
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {filterSkillsByCategory, calculateTotalCost};
}