"use strict";

//Clicking Projects
const sectionProjects = document.querySelector("#projects");
const btnScrollToProject = document.querySelectorAll("#btn-scroll-to-projects");
//Clicking Education
const sectionEducation = document.querySelector("#education");
const btnScrollToEducation = document.querySelectorAll(
  "#btn-scroll-to-education"
);

//Clicking Skills
const sectionSkills = document.querySelector("#skill");
const btnScrollToSkills = document.querySelectorAll("#btn-scroll-to-skills");

//Reveal Part
const allSections = document.querySelectorAll(".section");

btnScrollToEducation.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    sectionEducation.scrollIntoView({ behavior: "smooth" });
  })
);

btnScrollToProject.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    sectionProjects.scrollIntoView({ behavior: "smooth" });
  })
);

btnScrollToSkills.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    sectionSkills.scrollIntoView({ behavior: "smooth" });
  })
);

/*
btnScrollToProject.addEventListener("click", function (e) {
  sectionProjects.scrollIntoView({ behavior: "smooth" });
});

btnScrollToEducation.addEventListener("click", function (e) {
  sectionEducation.scrollIntoView({ behavior: "smooth" });
});
*/
//Reveal Part
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
