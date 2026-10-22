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
