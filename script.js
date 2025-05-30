
const texts = {
  en: {
    title: "Welcome to My Portfolio",
    description: "This is a professional portfolio showcasing my programming projects and technical skills.",
    projectsLink: "View Projects",
  },
  ar: {
    title: "مرحباً بكم في ملفي الشخصي",
    description: "هذا ملف احترافي يعرض مشاريعي البرمجية ومهاراتي التقنية.",
    projectsLink: "عرض المشاريع",
  },
  nl: {
    title: "Welkom op mijn portfolio",
    description: "Dit is een professioneel portfolio met mijn programmeerprojecten en technische vaardigheden.",
    projectsLink: "Bekijk projecten",
  }
};

function setLanguage(lang) {
  document.getElementById('title').textContent = texts[lang].title;
  document.getElementById('description').textContent = texts[lang].description;
  document.getElementById('projects-link').textContent = texts[lang].projectsLink;

  ['en-btn', 'ar-btn', 'nl-btn'].forEach(id => {
    document.getElementById(id).classList.remove('active');
  });
  document.getElementById(`${lang}-btn`).classList.add('active');

  document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
}

document.getElementById('en-btn').onclick = () => setLanguage('en');
document.getElementById('ar-btn').onclick = () => setLanguage('ar');
document.getElementById('nl-btn').onclick = () => setLanguage('nl');

setLanguage('en');
