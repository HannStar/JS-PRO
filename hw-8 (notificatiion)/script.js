let content = [
  {
    id: 1,
    title: "Reactive demand-driven array",
    phrase:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    id: 2,
    title: "User-centric global info-mediaries",
    phrase:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    id: 3,
    title: "Synergistic tertiary hardware",
    phrase:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    id: 4,
    title: "Configurable real-time success",
    phrase:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    id: 5,
    title: "Business-focused reciprocal help-desk",
    phrase:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    id: 6,
    title: "Automated foreground collaboration",
    phrase:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    id: 7,
    title: "Customizable didactic software",
    phrase:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    id: 8,
    title: "Focused mobile structure",
    phrase:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    id: 9,
    title: "Stand-alone optimizing help-desk",
    phrase:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    id: 10,
    title: "Robust systemic infrastructure",
    phrase:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
];

let infoPopup = localStorage.getItem("checkDisable");

if (infoPopup != "checked") {
  let container = document.getElementById("popup");
  container.innerHTML = `<div class="container" id="container">
  <div class="main-popup">
  <div class="content">
    <p class="title"></p>
    <p class="text"></p>
  </div>
  <p class="close-button" id="closeButton">&times</p>
  </div>
  <div class="menu">
  <div class="disable">
    <input type="checkbox" id="checkDisable" />
    <p>Disable text</p>
  </div>
  <div class="pagination">
    <div class="button-pag" id="preButton">&lt</div>
    <div class="button-pag" id="nextButton">&gt</div>
  </div>
  </div>
  </div>`;

  let index = 0;

  let title = document.querySelector(".title");
  title.innerText = content[index].title;

  let text = document.querySelector(".text");
  text.innerText = content[index].phrase;

  closeButton.addEventListener("click", () => {
    if (checkDisable.checked) {
      localStorage.setItem("checkDisable", "checked");
    }
    container.style.display = "none";
  });

  preButton.addEventListener("click", () => {
    index -= 1;
    if (index < 0) {
      index = content.length - 1;
    }
    title.innerText = content[index].title;
    text.innerText = content[index].phrase;
  });

  nextButton.addEventListener("click", () => {
    index += 1;
    if (index > content.length - 1) {
      index = 0;
    }
    title.innerText = content[index].title;
    text.innerText = content[index].phrase;
  });
}
