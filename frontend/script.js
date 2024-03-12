document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".search");

  if (button) {
    button.addEventListener("click", sendRequest);
  }
});

function sendRequest() {
  // Get input data using JavaScript
  const selectAreaValue = document.getElementById("selectAreaInput").value;
  const findDoctorValue = document.getElementById("findDoctorInput").value;

  if (!selectAreaValue || !findDoctorValue) {
    alert("Both input fields are required!");
    return;
  }


  async function postData(
    url = "https://doctorsearchweb.onrender.com/api/find/doctors",
    data = { area: selectAreaValue, specialty: findDoctorValue }
  ) {
    const response = await fetch(url, {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  const Data =  postData().then(res=>{
    console.log(res); 
     displayDoctor(res);
    });
  console.log(Data,'yar me abhi to fetch huaa')
}

function displayDoctor(data) {
  const container = document.getElementById('docListhere');

  if (Array.isArray(data) && data.length > 0) {
    container.innerHTML = '';
    data.forEach(doctor => {
      const doctorElement = document.createElement("div");
      doctorElement.classList.add("d1-parent"); // Add class to the parent div

      // Set inner HTML with data from each doctor object
      doctorElement.innerHTML = `
        <img class="d1-icon" alt="" src="./public/d1.svg" />
        <div class="lorem-ipsum-dolor1">
        Lorem ipsum dolor sit amet consectetur. Malesuada non imperdiet
        lacus diam eget vel.
        </div>
        <div class="experience">Experience : ${doctor.experience} years</div>
        <div class="orthopedist">${doctor.specialty}</div>
        <div class="docName">${doctor.name}</div>
        <img class="group-child"  src=./public/ellipse-2@2x.png />
      `;

      container.appendChild(doctorElement); // Append each doctor div to the container
    });
    container.style.display = "flex";
    container.style.justifyContent = "space-around";
    container.style.width = "70rem";
  } else {
    container.innerHTML = `<div class='d1-parent'>No Doctor Found</div>`;
  }
}

