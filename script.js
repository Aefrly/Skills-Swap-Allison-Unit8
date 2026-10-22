//button to toggle the skill details section
document.querySelectorAll(".skill-details-toggle").forEach((button) => {
	button.addEventListener("click", () => {
		const card = button.closest(".skill-card");
		const details = card.querySelector(".skill-details");
		const isOpening = details.hidden;

		details.hidden = !isOpening;
		button.textContent = isOpening ? "Hide session details" : "Show session details";
		card.classList.toggle("is-expanded", isOpening);
	});
});

//picking out skill cards and creating an array with their category and column - AI
const skillCards = Array.from(document.querySelectorAll(".skill-card")).map((card) => ({
	category: card.dataset.category,
	column: card.closest(".col"),
}));

//variable to hold the buttons for filtering skills by category
const filterButtons = document.querySelectorAll(".filter-btn");

//actual filtering of skills by category when a button is clicked - AI
filterButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const category = button.dataset.category;
		const matchingSkills = new Set(filterSkillsByCategory(skillCards, category));

		skillCards.forEach((skill) => {
			skill.column.hidden = !matchingSkills.has(skill);
		});

		filterButtons.forEach((filterButton) => {
			const isActive = filterButton === button;
			filterButton.classList.toggle("active", isActive);
		});
	});
});