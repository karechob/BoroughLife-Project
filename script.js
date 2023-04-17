window.addEventListener('load', () => {
  
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active'); 

            SwitchPage(page_id);
        });
    }
    function SwitchPage (page_id) {
      console.log(page_id);
    
      const current_page = document.querySelector('.pages .page.is-active');
      current_page.classList.remove('is-active');
    
      const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
      next_page.classList.add('is-active');
    }

    const form = document.querySelector("#submission-form");
    const experience_text = document.querySelector("#experience-text-input");
    var submittions_li = document.querySelector("#home-submittions");
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const submittion = experience_text.value;
      if(!submittion){
        alert("Please write something!");
        return;
      }
      const boroughs = document.querySelector("#boroughs-dropdown");
      

      if (boroughs.value == "Manhattan") {
        submittions_li = document.querySelector("#manhattan-submittions");
        AddElement(submittions_li);
      }
      if (boroughs.value == "Brooklyn") {
        submittions_li = document.querySelector("#brooklyn-submittions");
        AddElement(submittions_li);
      }
      if (boroughs.value == "Queens") {
        submittions_li = document.querySelector("#queens-submittions");
        AddElement(submittions_li);
      }
      if (boroughs.value == "The Bronx") {
        submittions_li = document.querySelector("#bronx-submittions");
        AddElement(submittions_li);
      }
      if (boroughs.value == "Staten Island") {
        submittions_li = document.querySelector("#staten-island-submittions");
        AddElement(submittions_li);
      }
      
      function AddElement (list) {
        const submittion_el = document.createElement("div");
        submittion_el.classList.add('container-sm', 'justify-content-center', 'bg-black', 'pt-5', 'pb-5', 'mb-5', 'rounded-pill');
        
        const submittion_content = document.createElement("div");
        submittion_content.classList.add('text-white', 'text-center');
        const upvote_btn_el = document.createElement("div");
        upvote_btn_el.classList.add("actions");
    
        submittion_el.appendChild(submittion_content);
        submittion_el.appendChild(upvote_btn_el);
    
        const submittion_input = document.createElement("input");
        submittion_input.classList.add("text");
        submittion_input.type = "text";
        submittion_input.value = submittion;
        submittion_input.setAttribute("readonly", "readonly");
  

        const btn_obj = document.createElement("button");
        btn_obj.classList.add("man-btn");
        btn_obj.classList.add("bi");
        btn_obj.setAttribute('border-2', 'ms-5', 'btn-outline-light', "upvote")
        upvote_btn_el.appendChild(btn_obj);
        BtnPress();

    
        submittion_content.appendChild(submittion_input);
        list.appendChild(submittion_el);
    
      
        alert("Submitted!");
        return;
      }
      function BtnPress (btn) {
        
      }
 
    }) 
  })