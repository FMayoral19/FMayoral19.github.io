const API_KEY = "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";
const inputElement = document.querySelector("input");
const imageSection = document.querySelector('.image-section');
const loader = document.querySelector('#loader');
const changeTextButton = document.querySelector('#changeTextButton');
const paragraph = document.querySelector('#paragraph');
const score = document.querySelector('#score');
const visual = document.querySelector('#visual');
const table = document.querySelector('.score');
const gravedad = document.querySelector('#gravedad');
const habitable = document.querySelector('#habitable');
const tipoP = document.querySelector('#tipoP');


// Obtén el elemento del título
const titleElement = document.querySelector('header h1');
const title2Element = document.querySelector('header h2');
const Element = document.querySelector('header p');

// Obtén el elemento del input y el contenedor
const inputContainer = document.querySelector('.input-container');
const inputContainer1 = document.querySelector('.input-container1');
const inputContainer2 = document.querySelector('.input-container2');
const inputContainer4 = document.querySelector('.input-container4');

const inputValues = {
    value1: null,
    value2: null,
    value3: null,
    value4: null,
  };
  

  const array1 = ["A Start Into The Stars","Introduce Your Exoplanet's Radius:", "Unearth Your Exoplanet's Mass", "Reveal The Distance From Your Exoplanet to its Star","DID YOU LIKE THE PLANET THAT WAS GENERATED?"];
  const array2 = ["Your exoplanet orbits a star in a circular-shaped orbit, possesses mass, a magnetic field, and it also features an atmosphere. In this experience you will create your own exoplanet by shaping your planet the way you want it to be!",'Radius is a way to define the size of a planet. The size of the radius of Earth is 6,371 km. Jupiter has a radius 11 times bigger than Earth.','The mass of celestial objects is often expressed relative to Earth or Jupiter, but it can also be quantified in kilograms or other units of mass. The mass of a planet influences other properties such as its gravity, its orbit around the star, and its capacity to possess an atmosphere. It is a key factor in determining the nature and behavior of celestial objects.','The orbital radius (distance from a planet to its star) is crucial in determining the environmental and climatic conditions of a planet. It can influence temperature, the received radiation, and the possibility of liquid water on its surface, all of which are key factors for habitability.', "DON'T FORGET TO SHARE!"]
  let i = 0;
  
  
  // Cuando se haga clic en cualquier parte de la página
  changeTextButton.addEventListener('click', function() {
      console.log('Botón clickeado');
      // Cambia el texto del título
      titleElement.textContent = array1[i];
      title2Element.textContent = "";
      Element.textContent = array2[i];
  
      
      if (i==0) {
          inputContainer1.style.display = 'none';
          inputContainer2.style.display = 'none';
          inputContainer.style.display = 'none';
          inputContainer4.style.display = 'none';
      }
  
      if (i==1) {
      inputContainer1.style.display = 'block';
      inputContainer2.style.display = 'none';
      inputContainer.style.display = 'none';
      inputContainer4.style.display = 'none';
      mostrarValor('output1', 'rango1'); // Para la primera pregunta
      
      }
      if (i==2) {
          inputContainer1.style.display = 'none';
          inputContainer2.style.display = 'block';
          inputContainer.style.display = 'none';
          inputContainer4.style.display = 'none';
          mostrarValor('output2', 'rango2'); // Para la segunda pregunta
      }
      if (i==3) {
          inputContainer1.style.display = 'none';
          inputContainer2.style.display = 'none';
          inputContainer.style.display = 'block';
          inputContainer4.style.display = 'none';
          mostrarValor('output3', 'rango3'); // Para la tercera pregunta
      }
  
      if (i==4) {
          inputContainer1.style.display = 'none';
          inputContainer2.style.display = 'none';
          inputContainer.style.display = 'none';
          inputContainer4.style.display = 'none';
          getImages();
      }
  

    // Dale el foco al input
    inputElement.focus();
    i += 1;
    
});







const getImages = async() => {
    changeTextButton.style.display = 'none';
    loader.style.display = 'block';
    var resultado = {};
    var score1 = null;
    var score2 = null;
    var score3 = null;

    var Gravedad = (inputValues.value2 * 6.67430e-11) / Math.pow(inputValues.value1, 2) / 9.8;

    if (Gravedad >= 0.7 && Gravedad <= 1.3) {
        resultado.G = "Gravity is acceptable as it falls within the parameters that the human body could endure."        ;
        var habitable1 = true;
        score1 = (Gravedad <= 1) ? (Gravedad - 0.7) * 100 / (1 - 0.7) : (1.3 - Gravedad) * 100 / (1.3 - 1);
    } else if (Gravedad < 0.75) {
        resultado.G = "The planet's gravity makes it uninhabitable since it falls below the parameters that the human body could withstand.";
        var habitable1 = false;
    } else {
        resultado.G = "Due to the planet's gravity, it is uninhabitable, as it exceeds the parameters that the human body could endure.";
        var habitable1 = false;
    }

    resultado.Gravedad = Gravedad;

    if (inputValues.value3 >= 0.75 && inputValues.value3 <= 1.77) {
        resultado.temp = "Being in the habitable zone, it's possible that liquid water may exist on the planet in the form of vast oceans, similar to Earth, which could indicate the potential for life to exist on the exoplanet.";
        var habitable2 = true;
        score2 = (inputValues.value3 <= 1) ? (inputValues.value3 - 0.75) * 100 / (1 - 0.75) : (1.77 - inputValues.value3) * 100 / (1.77 - 1);
    } else if (inputValues.value3 < 0.75) {
        resultado.temp = "Being located beyond the habitable zone, it's possible that there is water on the planet, but it would likely be frozen, making the possibility of life existing on the exoplanet highly unlikely.";
        var habitable2 = false;
        score2= 0;
    } else {
        resultado.temp = "Being closer to the sun than the habitable zone, it's possible that water on the planet may exist in the form of vapor due to extreme temperatures, rendering the possibility of life existing on the exoplanet highly improbable.";
        var habitable2 = false;
        score2 = 0;
    }
    resultado.score2=score2;
    var densidad = inputValues.value2 / ((4 / 3) * 3.1416 * Math.pow(inputValues.value1, 3) * 1000);

    if (densidad >= 3.5) {
        resultado.tipo = "On the other hand, the exoplanet is rocky, which allows for the possibility of life but does not guarantee it.";
        resultado.tipoP = "Rocky"
        console.log(resultado.tipoP)
        var habitable3 = true;
        score3 = 100;
    } else {
        resultado.tipo = "On the other hand, the exoplanet is gaseous, and as a result, it is impossible for life to exist on it.";
        resultado.tipoP = "Gas-rich"
        console.log(resultado.tipoP)
        var habitable3 = false;
        score3 = 100;
    }

    resultado.score = (score1 + score2 + score3) / 3;

    if (habitable1 && habitable2 && habitable3) {
        resultado.habitable = "In conclusion, the exoplanet shows very promising signs of being habitable.";
    } else {
        resultado.habitable = "In conclusion, the exoplanet is uninhabitable.";
    }
    table.style.display = 'block';
    console.log(resultado)
    var prompt1 = resultado.temp + resultado.tipo + resultado.habitable;
    var prompt2 = ">En ingles, explicame en 500 palabras como seria vivir en este planeta en caso de ser posible y en caso de que no por que no: " + resultado.temp + resultado.G + resultado.tipo + resultado.habitable;
    
    console.log(prompt2)
    cambiarColorFondo("#001220")
    const response2 = await getCompletion(prompt2);
    console.log(response2.choices[0].text)
    score.textContent = resultado.score;
    gravedad.textContent = resultado.Gravedad;
    habitable.textContent = resultado.score2;
    tipoP.textContent = resultado.tipoP;
    paragraph.textContent = response2.choices[0].text;
    paragraph.style.backgroundColor = "white"; // Set background to white
    paragraph.style.padding = "10px";          // Add padding
    paragraph.style.borderRadius = "10px";     // Round the corners for a "bubbly" effect
    paragraph.style.fontWeight = "bold";  
    console.log(response2)

    
    const options= {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY} ` ,
            'Content-Type' : "application/json"
        },
        body: JSON.stringify( {
            //"prompt": inputElement.value,
            "prompt": prompt1,
            "n": 1,
            "size": "1024x1024"
        })
    }
    
    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', options);
        const data = await response.json();
        
        data?.data.forEach(imageObject => {
            const ImageContainer = document.createElement('div');
            ImageContainer.classList.add('image-cointainer');
            const imageElement = document.createElement('img');
            imageElement.setAttribute('src', imageObject.url);
            ImageContainer.append(imageElement);
            imageSection.append(ImageContainer);
            imageElement.style.borderRadius='25px';
        });
        const imageURL = data.data[0].url;
        console.log(imageURL)

        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = imageURL;
        downloadLink.style.display = 'block';

     

    } catch (error){
        console.error(error);
    }

    loader.style.display = 'none'; // Ocultar el elemento de carga después de obtener las imágenes
}

function cambiarColorFondo(color) {
    document.body.style.backgroundColor = color;
    visual.style.display = 'none';
}


function mostrarValor(outputId, rangeId) {
    var valor = document.getElementById(rangeId).value;
    document.getElementById(outputId).textContent = valor;
  
    if (rangeId === 'rango1') {
      inputValues.value1 = parseFloat(valor);
    } else if (rangeId === 'rango2') {
      inputValues.value2 = parseFloat(valor);
    } else if (rangeId === 'rango3') {
      inputValues.value3 = parseFloat(valor);
    } else if (rangeId === 'rango4') {
        inputValues.value4 = parseFloat(valor);
      }
    console.log(inputValues)
  }

  async function getCompletion(prompt1) {
    const response = await fetch(`https://api.openai.com/v1/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo-instruct",
        // prompt: "give a random example of programming language",
        prompt: prompt1,
        max_tokens: 600,
      }),
    });
  
    const data = await response.json();
    // console.log(data)
    return data;
  }
  