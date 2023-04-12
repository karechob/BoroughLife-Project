window.addEventListener('load', () => {
  const form = document.querySelector("#submission-form");
  const boroughs = document.querySelector("#boroughs-dropdown");
  const experience_selection = document.querySelector("#type-of-experience");
  const experience_text = document.querySelector("#experience-text-input");

  const manhattan_submittions_li = document.querySelector("#manhattan-submittions");
  //const bronx_submittions_li = document.querySelector('manhattan-submittions');
  //const brooklyn_submittions_li = document.querySelector('manhattan-submittions');
  //const queens_submittions_li = document.querySelector('manhattan-submittions');
  //const staten_island_submittions_li = document.querySelector('manhattan-submittions');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submittion = experience_text.value;
    if(!submittion){
      alert("Please write something!");
      return;
    }

    //checking values
    console.log(boroughs.value);
    console.log(experience_selection.value);
    console.log(experience_text.value);
    console.log(manhattan_submittions_li);

    const submittion_el = document.createElement("div");
    submittion_el.classList.add("manhattan-submittion");

    const submittion_content = document.createElement("div");
    submittion_content.classList.add("manhattan-content");

    submittion_el.appendChild(submittion_content);

    const submittion_input = document.createElement("input");
    submittion_input.classList.add("text");
    submittion_input.type = "text";
    submittion_input.value = submittion;
    submittion_input.setAttribute("readonly", "readonly");

    submittion_content.appendChild(submittion_input);
    
    manhattan_submittions_li.appendChild(submittion_el);
    
    alert("Submitted!");

  })
  
})