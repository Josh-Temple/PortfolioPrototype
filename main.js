import { projects } from "./data/projects.js";

const renderProjects = (target, list) => {
  if (!target) return;
  target.innerHTML = list
    .map((project) => {
      const links = [
        { label: "デモ", url: project.links.demo },
        { label: "GitHub", url: project.links.github },
        { label: "記事", url: project.links.article }
      ];

      return `
        <article class="card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tag-list">
            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <div class="link-list">
            ${links
              .map(
                (link) =>
                  `<a href="${link.url}" aria-label="${project.title}の${link.label}">${link.label}</a>`
              )
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
};

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

renderProjects(document.querySelector("[data-projects='featured']"), featuredProjects);
renderProjects(document.querySelector("[data-projects='all']"), projects);
