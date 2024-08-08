/* javascript for take action page */

/* variable change color of first sentence */
document.addEventListener('DOMContentLoaded', (event) => {
  const textElements = document.querySelectorAll('.hover-change');
  
/* set the first sentence to black and the rest to gray */
  textElements.forEach((element, index) => {
    if (index === 0) {
      element.classList.add('black-text');
    } else {
      element.classList.add('grey-text');
    }
  });
  textElements.forEach(element => {
    element.addEventListener('mouseover', () => {

/* reset all sentences to gray if they're not being hovered over */
      textElements.forEach(el => {
        if(el !== element) {
          el.classList.remove('black-text');
          el.classList.add('grey-text');
        }
      });

/* make the currently hovered sentence black */
      element.classList.remove('grey-text');
      element.classList.add('black-text');
    });
  });
});

/* variables changing hover images */
document.addEventListener('DOMContentLoaded', (event) => {
  const textElement1 = document.getElementById('carePackages');
  const textElement2 = document.getElementById('stuffedToys');
  const textElement3 = document.getElementById('schlSupplies');
  const textElement4 = document.getElementById('soupKitchen');
  const textElement5 = document.getElementById('educateOthers');
  const textElement6 = document.getElementById('cannedFood');
  
  const imageElement = document.getElementById('actionPicture');
  
  const newSrc1 = 'assets/Toiletry.jpg'; 
  const newSrc2 = 'assets/Toys.jpg';
  const newSrc3 = 'assets/School-supplies.jpg';
  const newSrc4 = 'assets/Soup-kitchen.jpg';
  const newSrc5 = 'assets/Teaching.jpg';
  const newSrc6 = 'assets/Canned-food.jpg';

/* change images based on sentence hovered over */
  textElement1.addEventListener('mouseover', () => {
    imageElement.src = newSrc1;
  });

  textElement2.addEventListener('mouseover', () => {
    imageElement.src = newSrc2;
  });

  textElement3.addEventListener('mouseover', () => {
    imageElement.src = newSrc3;
  });

  textElement4.addEventListener('mouseover', () => {
    imageElement.src = newSrc4;
  });

  textElement5.addEventListener('mouseover', () => {
    imageElement.src = newSrc5;
  });

  textElement6.addEventListener('mouseover', () => {
    imageElement.src = newSrc6;
  });
  
});

/* variables alt text to images */
document.addEventListener('DOMContentLoaded', (event) => {
  const textElements = document.querySelectorAll('.hover-change');
  const actionPicture = document.getElementById('actionPicture');

/* connect alt text to images and sentences */
  const imageMappings = {
      'cannedFood': {
        'src': 'assets/Canned-food.jpg',
        'alt': 'Yellow, dark gray, light blue, and orange canned goods filling up a large shelf. To view the alt text for the other images, first make sure the Image Alt Text Viewer is turned off, then hover over or click on the sentence you want to see the image for, then turn the Image Alt Text Viewer on again.'
      },
      'carePackages': {
        'src': 'assets/Toiletry.jpg',
        'alt': 'A black pouch, black chapstick, black toothpaste, black toothbrush, black comb, and black socks on a white table with a light gray marble backdrop. To view the alt text for the other images, first make sure the Image Alt Text Viewer is turned off, then hover over or click on the sentence you want to see the image for, then turn the Image Alt Text Viewer on again.'
      },
      'stuffedToys': {
        'src': 'assets/Toys.jpg',
        'alt': 'Many different Disney character stuffed animals filling up a wall, with a pink fluffy floor. To view the alt text for the other images, first make sure the Image Alt Text Viewer is turned off, then hover over or click on the sentence you want to see the image for, then turn the Image Alt Text Viewer on again.'
      },
      'schlSupplies': {
        'src': 'assets/School-supplies.jpg',
        'alt': 'School supplies such as pencils, pens, paintbrushes, watercolors, scissors, highlighters, erasers, construction paper, etc, in a circle on a white table. To view the alt text for the other images, first make sure the Image Alt Text Viewer is turned off, then hover over or click on the sentence you want to see the image for, then turn the Image Alt Text Viewer on again.'
      },
      'soupKitchen': {
        'src': 'assets/Soup-kitchen.jpg',
        'alt': 'A volunteer scooping up soup from a pot into a plate, with other volunteers in the background as well. To view the alt text for the other images, first make sure the Image Alt Text Viewer is turned off, then hover over or click on the sentence you want to see the image for, then turn the Image Alt Text Viewer on again.'
      },
      'educateOthers': {
        'src': 'assets/Teaching.jpg',
        'alt': 'A chalkboard image of a stick figure person using a pointer stick to point at a board. To view the alt text for the other images, first make sure the Image Alt Text Viewer is turned off, then hover over or click on the sentence you want to see the image for, then turn the Image Alt Text Viewer on again.'
      }
    };
    textElements.forEach(element => {
      element.addEventListener('mouseover', () => {
        const id = element.id;
        if (imageMappings[id]) {
          actionPicture.src = imageMappings[id].src;
          actionPicture.alt = imageMappings[id].alt;
        }
      });
    });
  });
