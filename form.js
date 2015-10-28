var project = document.querySelector("input[value=project]");
var stage = document.querySelector("input[value=stage]");
var projectform = document.getElementById("project");
var stageform = document.getElementById("stage");

projectform.classList.add("formhide");
stageform.classList.add("formhide");

function formChange() {
	if (project.checked == true){
		projectform.classList.add("formhide");
		stageform.classList.remove("formhide");
	}
	else if (stage.checked == true){
		stageform.classList.add("formhide");
		projectform.classList.remove("formhide");
	}
	else{
	return;
	}
}
project.addEventListener('click', formChange);
stage.addEventListener('click', formChange);