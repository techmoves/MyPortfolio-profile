/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
const toggleMenu = document.querySelector('.toggle');
const navlinks = document.querySelector('.navlinks');
let menuOpen = false;

toggleMenu.addEventListener('click', () => {
  if (!menuOpen) {
    toggleMenu.classList.add('open');
    menuOpen = true;
  } else {
    toggleMenu.classList.remove('open');
    menuOpen = false;
  }

  navlinks.classList.toggle('open');
});

// eslint-disable-next-line no-unused-vars
function closeMenu() {
  toggleMenu.classList.remove('open');
  navlinks.classList.remove('open');
  menuOpen = false;
}

const worksInfo = [
  {
    classes: [
      'plchdr',
      'img',
      'text',
      'card cd1',
      'card cd2',
      'card cd3',
      'card cd4',
      'card cd5',
      'card cd6',
      'seeDemo',
      'seeDemo2',
    ],
    heading: ['Professional Art Printing Data', 'Multi-Post-Stories'],
    plchdrImage: './images/plc-img.jpg',
    alt: 'a woman doing yoga',
    description:
      "A daily selection of privately personalized reads, no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'css', 'Javascript'],
    btn: 'See Project',
    demoLink: 'https://prg-04.github.io/Portfolio/',
    srcLink: 'https://github.com/prg-04/Portfolio/',
  },
];
const popUpInfo = [
  {
    classes: [
      'popup',
      'hdg',
      'hdr',
      'heading1',
      'heading2',
      'popInfo',
      'popImg',
      'popText',
      'btns',
      'fa-solid fa-x',
      'fa-brands fa-github',
    ],
    heading: [
      'Multi Post Stories',
      'Keeping track of hundreds of components website',
    ],
    technologies: ['html', 'css', 'Javascript'],
    image: './images/popDesktop.png',
    alt: ['ten', 'icon'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    btns: ['See live', 'See source'],
    image2: './images/Icon.png',
  },
];

const portfolio = document.getElementById('portfolio');

worksInfo.map((elem) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  elem.classes.map((e) => {
    const div = document.createElement('div');
    div.className = e;
    return portfolio.appendChild(div);
  }));
const plchdr = document.querySelector('.plchdr');
const img = document.querySelector('.img');
const text = document.querySelector('.text');
const image = document.createElement('img');
const card = document.querySelectorAll('.card');
const blur = document.querySelector('#portfolio');
const openPopUp = document.querySelector('.popup');
const h2 = document.createElement('h2');
const para = document.createElement('p');
const ul = document.createElement('ul');
const btn = document.createElement('button');
worksInfo.map((elem) => {
  elem.heading.map((e) => {
    if (e === 'Professional Art Printing Data') {
      for (let i = 0; i < card.length; i += 1) {
        const cardArr = card[i];
        const h3 = document.createElement('h3');
        h3.innerHTML = e;
        cardArr.appendChild(h3);
      }
    }
  });
  for (let i = 0; i < card.length; i += 1) {
    const para = document.createElement('p');
    const cardArr = card[i];
    para.innerHTML = elem.description;
    cardArr.appendChild(para);
  }
  for (let i = 0; i < card.length; i += 1) {
    const ul = document.createElement('ul');
    const cardArr = card[i];
    elem.technologies.map((tech) => {
      const li = document.createElement('li');
      const aTag = document.createElement('a');
      aTag.innerHTML = tech;
      li.appendChild(aTag);
      ul.appendChild(li);
      return cardArr.appendChild(ul);
    });
  }
  for (let i = 0; i < card.length; i += 1) {
    const btn = document.createElement('button');
    const cardArr = card[i];
    btn.innerHTML = elem.btn;
    worksInfo.map((e) => {
      e.classes.map((item) => {
        if (item === 'seeDemo2') {
          const seeDemo = btn;
          seeDemo.addEventListener('click', () => {
            blur.classList.add('active');
            openPopUp.classList.add('active');
          });
          btn.className = item;
        }
      });
      return cardArr.appendChild(btn);
    });
  }
});
worksInfo.map((elem) => {
  image.src = elem.plchdrImage;
  img.alt = elem.alt;
  return img.appendChild(image);
});

worksInfo.map((e) => {
  e.heading.map((item) => {
    if (item === 'Multi-Post-Stories') {
      h2.innerHTML = item;
    }
  });
  e.technologies.map((tech) => {
    const li = document.createElement('li');
    const aTag = document.createElement('a');
    aTag.innerHTML = tech;
    li.appendChild(aTag);
    return ul.appendChild(li);
  });
  e.classes.map((item) => {
    if (item === 'seeDemo') {
      const seeDemo2 = btn;
      seeDemo2.addEventListener('click', () => {
        blur.classList.add('active');
        openPopUp.classList.add('active');
      });
      btn.className = item;
    }
  });
  btn.innerHTML = e.btn;
  para.innerHTML = e.description;
  return (
    text.appendChild(h2),
    text.appendChild(para),
    text.appendChild(ul),
    text.appendChild(btn)
  );
});

plchdr.appendChild(img);
plchdr.appendChild(text);
const popup = document.querySelector('.popup');

function createDiv(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    // eslint-disable-next-line no-nested-ternary, no-unused-expressions
    arr[i] === 'hdg'
      ? newArr.push(arr[i])
      : arr[i] === 'popInfo'
        ? newArr.push(arr[i])
        : '';
  }
  return newArr.map((item) => {
    const div = document.createElement('div');
    div.className = item;
    if (div.className === 'hdg') {
      const hdg = div;
      popUpInfo.map((elem) => {
        elem.classes.map((item) => {
          if (item === 'hdr') {
            const div = document.createElement('div');
            const hdr = div;
            div.className = item;
            popUpInfo.map((item) => {
              item.heading.map((e) => {
                if (e === 'Multi Post Stories') {
                  const h2 = document.createElement('h2');
                  h2.innerHTML = e;
                  popUpInfo.map((elem) => {
                    elem.classes.map((item) => {
                      if (item === 'heading1') {
                        h2.className = item;
                        hdr.appendChild(h2);
                        hdg.appendChild(hdr);
                      }
                    });
                  });
                }
                if (e === 'Keeping track of hundreds of components website') {
                  const h2 = document.createElement('h2');
                  h2.innerHTML = e;
                  popUpInfo.map((elem) => {
                    elem.classes.map((item) => {
                      if (item === 'heading2') {
                        h2.className = item;
                        hdr.appendChild(h2);
                        hdg.appendChild(hdr);
                      }
                    });
                  });
                }
              });
              item.classes.map((e) => {
                if (e === 'fa-solid fa-x') {
                  const span = document.createElement('span');
                  const icn = document.createElement('i');
                  const popIcon = icn;
                  popIcon.addEventListener('click', () => {
                    blur.classList.remove('active');
                    openPopUp.classList.remove('active');
                  });
                  icn.className = e;
                  span.appendChild(icn);
                  hdr.appendChild(span);
                }
              });
              const ul = document.createElement('ul');
              item.technologies.map((e) => {
                const li = document.createElement('li');
                li.innerHTML = e;
                ul.appendChild(li);
                hdg.appendChild(ul);
              });
            });
          }
        });
      });
    }
    if (div.className === 'popInfo') {
      const popInfo = div;
      popUpInfo.map((elem) => {
        elem.classes.map((e) => {
          if (e === 'popImg') {
            const div = document.createElement('div');
            const popImgDiv = div;
            div.className = e;
            const popImg = document.createElement('img');
            popImg.src = elem.image;
            popImg.alt = elem.alt;
            popImgDiv.appendChild(popImg);
            popInfo.appendChild(popImgDiv);
          }
        });

        elem.classes.map((e) => {
          if (e === 'popText') {
            const div = document.createElement('div');
            div.className = e;
            const popText = div;
            const para = document.createElement('p');
            para.innerHTML = elem.description;
            popText.appendChild(para);
            popUpInfo.map((elem) => {
              elem.classes.map((item) => {
                if (item === 'btns') {
                  const div = document.createElement('div');
                  const btns = div;
                  div.className = item;
                  elem.btns.map((item) => {
                    const aTag1 = document.createElement('a');
                    worksInfo.map((elem) => {
                      aTag1.href = elem.demoLink;
                    });

                    const aTag2 = document.createElement('a');
                    worksInfo.map((elem) => {
                      aTag2.href = elem.srcLink;
                    });

                    const btn1 = document.createElement('button');
                    const btn2 = document.createElement('button');
                    if (item === 'See live') {
                      btn1.innerHTML = item;
                      const span1 = document.createElement('span');
                      const image = document.createElement('img');
                      image.src = elem.image2;
                      image.alt = elem.alt;
                      span1.appendChild(image);
                      btn1.appendChild(span1);
                      btns.appendChild(aTag1);
                      popText.appendChild(btns);
                      btn1.appendChild(span1);
                      aTag1.appendChild(btn1);
                      // btns.appendChild(btn1);
                    }
                    if (item === 'See source') {
                      btn2.innerHTML = item;
                      popUpInfo.map((elem) => {
                        elem.classes.map((e) => {
                          if (e === 'fa-brands fa-github') {
                            const span = document.createElement('span');
                            const icn = document.createElement('i');
                            icn.className = e;
                            span.appendChild(icn);
                            btn2.appendChild(span);
                          }
                        });
                      });
                      aTag2.appendChild(btn2);
                      btns.appendChild(aTag2);

                      popText.appendChild(btns);
                    }
                  });
                }
              });
            });

            popInfo.appendChild(popText);
          }
        });
      });
    }
    popup.appendChild(div);
  });
}
// eslint-disable-next-line no-unused-vars
const popupWindow = createDiv(popUpInfo[0].classes);
const fstNerr = document.querySelector('.firstNerror');
const fstValid = document.querySelector('.firstNValid');
const lNerr = document.querySelector('.lastNerror');
const lastNValid = document.querySelector('.lastNValid');
const flNerr = document.querySelector('.fullNerror');
const fullNValid = document.querySelector('.fullNValid');
const emailErr = document.querySelector('.emailError');
const emailValid = document.querySelector('.emailValid');
const emailErr2 = document.querySelector('.emailError2');
const emailValid2 = document.querySelector('.emailValid2');
const msgErr = document.querySelector('.msgError');
const msgValid = document.querySelector('.msgValid');
const msgErr2 = document.querySelector('.msgError2');
const msgValid2 = document.querySelector('.msgValid2');
const submitErr = document.querySelector('.submitError');
const submitErr2 = document.querySelector('.submitError2');

const formValid = document.querySelector('.formValid');

function validateFirstName() {
  const fstname = document.getElementById('firstName').value;

  if (fstname.length === 0) {
    fstNerr.innerHTML = 'First name is required';
    fstValid.innerHTML = null;
    return false;
  }
  fstNerr.innerHTML = null;
  fstValid.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}
function validateLastName() {
  const lstname = document.getElementById('lastName').value;

  if (lstname.length === 0) {
    lNerr.innerHTML = 'Last name is required';
    lastNValid.innerHTML = null;
    return false;
  }
  lNerr.innerHTML = null;
  lastNValid.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}
function validateFullName() {
  const fullName = document.getElementById('fullName').value;

  if (fullName.length === 0) {
    flNerr.innerHTML = 'Full name is required';
    fullNValid.innerHTML = null;
    return false;
  }
  if (!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)) {
    flNerr.innerHTML = 'Enter second name';
  }

  flNerr.innerHTML = null;
  fullNValid.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  const email = document.getElementById('email').value;

  if (email.length === 0) {
    emailErr.innerHTML = 'Email is required';
    emailValid.innerHTML = null;
    return false;
  }
  if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
  ) {
    emailErr.innerHTML = 'Email Invalid';
    emailValid.innerHTML = null;
    return false;
  }
  emailErr.innerHTML = null;
  emailValid.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail2() {
  const email2 = document.getElementById('email2').value;

  if (email2.length === 0) {
    emailErr2.innerHTML = 'Email is required';
    emailValid2.innerHTML = null;
    return false;
  }
  if (
    !email2.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
  ) {
    emailErr2.innerHTML = 'Email Invalid';
    emailValid2.innerHTML = null;
    return false;
  }
  emailErr2.innerHTML = null;
  emailValid2.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}

function validateMsg() {
  const msg = document.getElementById('msg').value;
  const required = 30;

  const charLeft = required - msg.length;
  if (charLeft > 0) {
    msgErr.innerHTML = `${charLeft}more characters required`;
    msgValid.innerHTML = null;
    return false;
  }
  msgErr.innerHTML = null;
  msgValid.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}

function validateMsg2() {
  const msg2 = document.getElementById('msg2').value;
  const required = 30;

  const charLeft = required - msg2.length;
  if (charLeft > 0) {
    msgErr2.innerHTML = `${charLeft}more characters required`;
    msgValid2.innerHTML = null;
    return false;
  }
  msgErr2.innerHTML = null;
  msgValid2.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}

function formValidate() {
  if (
    !validateFirstName()
    || !validateLastName()
    || !validateEmail()
    || !validateMsg()
  ) {
    submitErr.style.display = 'block';
    submitErr.style.color = 'red';
    submitErr.innerHTML = 'Please fix error to submit';
    setTimeout(() => {
      submitErr.style.display = 'none';
    }, 3000);
    return false;
  }
  submitErr.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}
function formValidate2() {
  if (!validateFullName() || !validateEmail2() || !validateMsg2()) {
    submitErr2.style.display = 'block';
    submitErr2.style.color = 'red';
    submitErr2.innerHTML = 'Please fix error to submit';
    setTimeout(() => {
      submitErr2.style.display = 'none';
    }, 3000);
    return false;
  }
  submitErr2.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}
const storeData = document.querySelector('.form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const msg = document.getElementById('msg');

storeData.addEventListener('input', () => {
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    msg: msg.value,
  };
  localStorage.setItem('userInfo', JSON.stringify(formData));
});

window.onload = () => {
  let savedData = localStorage.getItem('userInfo');

  savedData = JSON.parse(savedData);

  if (savedData) {
    const email = document.getElementById('email');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const msg = document.getElementById('msg');

    email.value = savedData.email;
    firstName.value = savedData.firstName;
    lastName.value = savedData.lastName;
    msg.value = savedData.msg;
  }
};
