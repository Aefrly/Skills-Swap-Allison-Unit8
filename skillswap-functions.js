//filter skills array by category
function filterSkillsByCategory(skills, category) {
    if (category === 'All') {
        return skills;
    }
    return skills.filter(skill => skill.category === category);
}

/*
The next function you will implement is calculateTotalCosts(hourlyRate, hours) 
that returns the total cost based on the hourly rate and number of hours requested. 
*/

//AI says this if statement is required?
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {filterSkillsByCategory, calculateTotalCost};
}