

const tags = {
  init() {
    const tagsList = document.querySelector('.tags');
    if (tagsList) {
      const tagsItem = tagsList.querySelectorAll('.tag');
      const tagsToggle = tagsList.querySelector('.all__tags');

      tagsToggle.addEventListener('click', () => {
        tagsList.classList.toggle('active');
        tagsToggle.classList.toggle('active');
      });

      tagsItem.forEach((elem) => {
        elem.addEventListener('click', () => {
          elem.classList.toggle('active');
        })
      })
    }
  }
};

export default tags;