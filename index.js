const workers = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python", "React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript", "React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "FullStack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby", "RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript", "Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript", "Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python", "Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript", "React", "Sass"],
  },
];
console.log(workers[9].logo);
const frontEnd = document.querySelectorAll(".frontend");
const Senior = document.querySelectorAll(".senior");
const html = document.querySelectorAll(".html");
const junior = document.querySelectorAll(".junior");
const css = document.querySelectorAll(".css");
const FullStack = document.querySelectorAll(".fullstack");
const Midweight = document.querySelectorAll(".midweight");
const react = document.querySelectorAll(".react");
const sass = document.querySelectorAll(".sass");
const Ruby = document.querySelectorAll(".ruby");
const Backend = document.querySelector(".backend");
const vue = document.querySelector(".vue");
const django = document.querySelector(".django");
const Python = document.querySelectorAll(".python");
const ror = document.querySelector(".ror");
const JavaScript = document.querySelectorAll(".javascript");

const all = document.querySelectorAll(".bu");

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");
const img6 = document.querySelector(".img6");
const img7 = document.querySelector(".img7");
const img8 = document.querySelector(".img8");
const img9 = document.querySelector(".img9");
const img10 = document.querySelector(".img10");

function people(worker) {
  img1.src = worker[0].logo;
  img2.src = worker[1].logo;
  img3.src = worker[2].logo;
  img4.src = worker[3].logo;
  img5.src = worker[4].logo;
  img6.src = worker[5].logo;
  img7.src = worker[6].logo;
  img8.src = worker[7].logo;
  img9.src = worker[8].logo;
  img10.src = worker[9].logo;
  document.querySelector(".p1").innerHTML = worker[0].position;
  document.querySelector(".p2").innerHTML = worker[1].position;
  document.querySelector(".p3").innerHTML = worker[2].position;
  document.querySelector(".p4").innerHTML = worker[3].position;
  document.querySelector(".p5").innerHTML = worker[4].position;
  document.querySelector(".p6").innerHTML = worker[5].position;
  document.querySelector(".p7").innerHTML = worker[6].position;
  document.querySelector(".p8").innerHTML = worker[7].position;
  document.querySelector(".p9").innerHTML = worker[8].position;
  document.querySelector(".p10").innerHTML = worker[9].position;
}
people(workers);

const id = workers.map(function (worker) {
  return worker.id;
});
console.log(id);

const call = function (worker) {
  let selectWorker = worker.filter(function (work) {
    if (work.role === "Frontend") {
      return true;
    }
  });
  console.log(selectWorker);

  all.forEach(function (btn) {
    btn.addEventListener("click", function (event, worker) {
      let attribute = event.target.id;

      let select = workers.map(function (work) {
        return work.languages;
      });
      let see = select.join("");

      if (see.includes(attribute)) {
          

      } else {
        document.querySelector("body").style.backgroundColor = "white";
      }
    });
  });
  people(workers);
};

call(workers);
