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

/*The final function that you’ll implement is matchSkillsToUser(userNeeds, skills) 
that matches skills to a user's needs based on category preference and maximum price budget. Example functionality for this function is shown below.

const skills = [
  { title: 'Python Tutoring', category: 'Programming', price: 20 },
  { title: 'JavaScript Help', category: 'Programming', price: 25 },
  { title: 'Guitar Lessons', category: 'Music', price: 15 },
  { title: 'Resume Review', category: 'Career', price: 0 }
];

const user1Needs = { category: 'Programming', maxPrice: 30 };
matchSkillsToUser(user1Needs, skills); 
/*
[ 
{ title: 'Python Tutoring', category: 'Programming', price: 20 }, 
{ title: 'JavaScript Help', category: 'Programming', price: 25 } 
]
*/

//const user2Needs = { category: 'Programming', maxPrice: 20 };
//matchSkillsToUser(user2Needs, skills); // [ { title: 'Python Tutoring', category: 'Programming', price: 20 }] 

//const user3Needs = { category: 'Cooking', maxPrice: 100 };
//matchSkillsToUser(user3Needs, skills); // []

//const user4Needs = { category: 'Career', maxPrice: 0 };
//matchSkillsToUser(user4Needs, skills); // [ { title: 'Resume Review', category: 'Career', price: 0 } ] 

//AI says this if statement is required?
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {filterSkillsByCategory, calculateTotalCost};
}