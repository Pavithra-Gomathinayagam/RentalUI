function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
   
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n != 0) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  console.log(n);
  var x = document.getElementsByClassName("tab");
  console.log(x);
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  if(n==1 && validateForm())
  {
    var e = document.getElementById("dropdwnPg");
    var rentChoice = e.options[e.selectedIndex].text;
    console.log(rentChoice);
    if(rentChoice === "RENT")
    {
      console.log("submit"+currentTab);
      currentTab = currentTab + n;
    }
    else
    {
      console.log("submit"+currentTab);
      currentTab = currentTab + n + 1;
    }
  }
  if(n == -1)
    currentTab = 0;
  
  // currentTab = currentTab + n;
  // if you have reached the end of the form...
  console.log("next"+currentTab);
  
  if( document.getElementById("nextBtn").innerHTML == "Submit" && currentTab != 0)
  {
    console.log("hi");
    document.getElementById("sign").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, j, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  z = x[currentTab].getElementsByTagName("select");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  for(j = 0; j < z.length; j++){

    if(z[j].value == ""){
      z[j].className+= " invalid";
      valid = false;
    }
  }
  //If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}