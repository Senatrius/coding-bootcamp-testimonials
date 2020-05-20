const testimonies = [
	{
		name: "Tanya Sinclair",
		occupation: "UX Engineer",
		testimony: "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
		photo: "images/image-tanya.jpg",
	},
	{
		name: "John Tarkpor",
		occupation: "Junior Front-end Developer",
		testimony: "If you want to lay the best foundation possible, I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
		photo: "images/image-john.jpg",
	},
	{
		name: "Andrew Lowe",
		occupation: "Full-stack Developer",
		testimony: "This course helped me refresh my memory and fill in any knowledge gaps. Thanks to it I can be even more productive at work. Highly recommended for beginners as well as experienced developers.",
		photo: "https://via.placeholder.com/540.jpg",
	},
	{
		name: "Bella White",
		occupation: "Freelancer",
		testimony: "Thanks to this course, I can serve my clients faster and provide better, higher quality services. It has been a valuable learning resource.",
		photo: "https://via.placeholder.com/540.jpg",
	},
];

const testimonyContainer = document.querySelector('.testimony');
let currentTestimony = 0;

window.addEventListener('DOMContentLoaded', loadTestimony);

function switchPrev() {
  testimonyContainer.classList.add('change-prev');
  if(currentTestimony == 0) {
    currentTestimony = (testimonies.length - 1);
  } else {
    currentTestimony--;
  }

  loadTestimony();
  testimonyContainer.addEventListener('animationend', () => {
    testimonyContainer.classList.remove('change-prev');
  })
}

function switchNext() {
  testimonyContainer.classList.add('change-next');
  if(currentTestimony == (testimonies.length - 1)) {
    currentTestimony = 0;
  } else {
    currentTestimony++;
  }

  loadTestimony();
  testimonyContainer.addEventListener('animationend', () => {
    testimonyContainer.classList.remove('change-next');
  })
}

function loadTestimony() {
    testimonyContainer.innerHTML = `
    <div class="testimony-photo-block">
      <img src="${testimonies[currentTestimony].photo}" alt="" class="testimony-photo">
    
      <div class="switch">
        <button class="btn" onclick="switchPrev()"><img src="images/icon-prev.svg" alt="previous" class="icon"></button> 
        <button class="btn" onclick="switchNext()"><img src="images/icon-next.svg" alt="next" class="icon"></button>
      </div>
    </div>
    
    <div class="testimony-text-block">
      <img src="images/pattern-quotes.svg" alt="" class="quotes">
      <p class="text">"${testimonies[currentTestimony].testimony}"</p>
      <div class="info">
        <p class="info-name">${testimonies[currentTestimony].name}</p>
        <p class="info-position">${testimonies[currentTestimony].occupation}</p>
      </div>
    </div>
    `;
}