window.addEventListener('load', () => {

  const test = document.querySelector('.pages .box .bx-hover');
  behavior();
  const tab_switchers = document.querySelectorAll('[data-switcher]');

  for (let i = 0; i < tab_switchers.length; i++) {
    const tab_switcher = tab_switchers[i];
    const page_id = tab_switcher.dataset.tab;

    tab_switcher.addEventListener('click', () => {
    
      test.classList.remove('is-active'); 
      tab_switcher.parentNode.classList.add('is-active'); 
      SwitchPage(page_id);
        
    });
  }

  const ex_button = document.getElementById("ex-btn");
  
  ex_button.addEventListener("click", function(){
    const ex_sec = document.querySelector(".pages .explore-section");
    const sectionTop = ex_sec.offsetTop;
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth"
    }); 
  })
  const re_button = document.getElementById("re-btn");
  re_button.addEventListener("click", function(){
    const re_sec = document.querySelector(".pages .recent-section");
    const sectionTop = re_sec.offsetTop;
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth"
    }); 
  })
  
  function SwitchPage (page_id) {
  console.log(page_id);

  const current_page = document.querySelector('.pages .page.is-active');
  current_page.classList.remove('is-active');

  const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
  next_page.classList.add('is-active');
  }

  const form = document.querySelector("#submission-form");
  const experience_text = document.querySelector("#experience-text-input");
  const boroughs = document.querySelector("#boroughs-dropdown");
  const activity = document.querySelector("#type-of-experience");

  var submittions_li = document.querySelector("#home-submittions");


  form.addEventListener('submit', (e) => {
  e.preventDefault();

  const submittion = experience_text.value;
  if(!submittion){
    sub_den = document.querySelector(".page .submission-denied");
    sub_con = document.querySelector(".page .submission-confirm");
    sub_den_okaybtn = document.querySelector(".page .submission-denied .btn");
    sub_con_okaybtn = document.querySelector(".page .submission-confirm .btn");
    console.log(sub_den_okaybtn);
    sub_den.removeAttribute("hidden");
    sub_con.setAttribute("hidden", ""); 
    experience_text.disabled = true;
    boroughs.disabled = true;
    activity.disabled = true;
    sub_den_okaybtn.addEventListener("click", function(){
      sub_den.setAttribute("hidden", ""); 
      experience_text.disabled = false;
      boroughs.disabled = false;
      activity.disabled = false;
    })
    return;
  }


  if (boroughs.value == "Manhattan") {
    submittions_li = document.querySelector("#manhattan-submittions");
    AddElement(submittions_li);
    submittions_li = document.querySelector("#home-submittions");
    AddElement(submittions_li);
  }
  if (boroughs.value == "Brooklyn") {
    submittions_li = document.querySelector("#brooklyn-submittions");
    AddElement(submittions_li);
    submittions_li = document.querySelector("#home-submittions");
    AddElement(submittions_li);
  }
  if (boroughs.value == "Queens") {
    submittions_li = document.querySelector("#queens-submittions");
    AddElement(submittions_li);
    submittions_li = document.querySelector("#home-submittions");
    AddElement(submittions_li);
  }
  if (boroughs.value == "The Bronx") {
    submittions_li = document.querySelector("#bronx-submittions");
    AddElement(submittions_li);
    submittions_li = document.querySelector("#home-submittions");
    AddElement(submittions_li);
  }
  if (boroughs.value == "Staten Island") {
    submittions_li = document.querySelector("#staten-island-submittions");
    AddElement(submittions_li);
    submittions_li = document.querySelector("#home-submittions");
    AddElement(submittions_li);
  }

    function AddElement (list) {

      //Submission Element
      const submittion_el = document.createElement("div");
      submittion_el.classList.add('container-sm', 'justify-content-center', 'bg-black', 'pt-5', 'pb-5', 'ps-5', 'pe-5', 'mb-5', 'rounded-pill');
      //Content of Submission
      const submittion_content = document.createElement("div");
      submittion_content.classList.add("cont-div");

      //Upvote button of submission
      const upvote_btn = document.createElement("button");
      upvote_btn.textContent = ' Up-vote';
      upvote_btn.classList.add('btn-like', 'btn', 'border-2','ms-5', 'text-wrap', 'btn-outline-light', 'bi-hand-thumbs-up');
      var clicked = false;
      var currentLikes = 0

      
      upvote_btn.addEventListener("click", function() {
        if(clicked) {
          currentLikes--;
          clicked=false;
        }
        else{
          currentLikes++;
          clicked=true;
        }
        this.innerText = currentLikes + " Up-votes";
        if(currentLikes <= 1){
          this.innerText = currentLikes + " Up-vote";
        }
        if(currentLikes == 0){
          this.innerText = " Up-vote";
        }
      });

      submittion_el.appendChild(submittion_content);
      submittion_el.appendChild(upvote_btn);
      
      const submission_location = document.createElement("p");
      submission_location.classList.add('text-light', 'text-wrap', 'ps-5', 'mt-3', 'ms-3', 'me-5', 'h1'); 
      submission_location.textContent = boroughs.value + ", " + activity.value;

      const submittion_input = document.createElement("p");
      submittion_input.classList.add('text-white', 'text-wrap', 'lh-base', 'mt-3', 'mb-3', 'ms-5', 'me-5' , 'text-center', 'h5');
      submittion_input.textContent = submittion;

      submittion_content.appendChild(submission_location).appendChild(submittion_input);
      list.appendChild(submittion_el);
      
      sub_den = document.querySelector(".page .submission-denied");
      sub_con = document.querySelector(".page .submission-confirm");
      sub_den_okaybtn = document.querySelector(".page .submission-denied .btn");
      sub_con_okaybtn = document.querySelector(".page .submission-confirm .btn");
      sub_den.setAttribute("hidden", "");
      sub_con.removeAttribute("hidden");
      experience_text.disabled = true;
      boroughs.disabled = true;
      activity.disabled = true;
      sub_con_okaybtn.addEventListener("click", function(){
        sub_con.setAttribute("hidden", ""); 
        experience_text.disabled = false;
        boroughs.disabled = false;
        activity.disabled = false;
        experience_text.value = "";
        boroughs.value = "Manhattan";
        activity.value = "Entertainment";
      }) 
      return;
    }
  })
  function behavior (){  
    //svg color for manhattan
    const svgManPath = document.getElementById('man-svg');

    document.getElementById('man-btn').addEventListener('mouseover', () => {
        svgManPath.classList.add('svg-btn-hover');
    });

    document.getElementById('man-btn').addEventListener('mouseout', () => {
        svgManPath.classList.remove('svg-btn-hover');
    });

    //svg color for bronx
    const svgBronxPath = document.getElementById('bronx-svg');

    document.getElementById('bron-btn').addEventListener('mouseover', () => {
        svgBronxPath.classList.add('svg-btn-hover');
    });

    document.getElementById('bron-btn').addEventListener('mouseout', () => {
        svgBronxPath.classList.remove('svg-btn-hover');
    });
    //svg color for brooklyn
    const svgBrookPath = document.getElementById('brook-svg');

    document.getElementById('brook-btn').addEventListener('mouseover', () => {
        svgBrookPath.classList.add('svg-btn-hover');
    });

    document.getElementById('brook-btn').addEventListener('mouseout', () => {
        svgBrookPath.classList.remove('svg-btn-hover');
    });
    //svg color for queens
    const svgQueensPath = document.getElementById('queens-svg');

    document.getElementById('queens-btn').addEventListener('mouseover', () => {
        svgQueensPath.classList.add('svg-btn-hover');
    });

    document.getElementById('queens-btn').addEventListener('mouseout', () => {
        svgQueensPath.classList.remove('svg-btn-hover');
    });
    //svg color for staten island
    const svgStatenPath = document.getElementById('staten-svg');

    document.getElementById('staten-btn').addEventListener('mouseover', () => {
        svgStatenPath.classList.add('svg-btn-hover');
    });

    document.getElementById('staten-btn').addEventListener('mouseout', () => {
        svgStatenPath.classList.remove('svg-btn-hover');
    });
  }
})