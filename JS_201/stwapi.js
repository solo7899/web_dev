"use strict";

const name = document.querySelector('.name');
const birthYear = document.querySelector('.birthYear');
const mass = document.querySelector('.mass');
const gender = document.querySelector('.gender');
const skinColor = document.querySelector('.skinColor');
const button = document.querySelector('.doIt');

function getNewOne() {
    name.innerText = "-------------";
    birthYear.innerText = "-------------";
    mass.innerText = "-------------";
    gender.innerText = "-------------";
    skinColor.innerText = "-------------";

    button.innerHTML = "<i>loading...</i>";

    const randomNumber = Math.ceil(Math.random() * 83); 
    fetch(`https://swapi.dev/api/people/${randomNumber}/`)
        .then((response) => response.json())
        .then((swChar) => {
            name.innerText = swChar.name;
            birthYear.innerText = swChar.birth_year;
            mass.innerText = swChar.mass;
            gender.innerText = swChar.gender;
            skinColor.innerText = swChar.skin_color;
            button.innerText = "Change";    
        })
}


button.addEventListener('click', getNewOne);

const oldName = name.innerText;
const oldBirthYear = birthYear.innerText;
const oldMass = mass.innerText;
const oldGender = gender.innerText;
const oldSkinColor = skinColor.innerText;

name.addEventListener('mouseover', () => name.innerHTML = '<em>Name</em>');
name.addEventListener('mouseout', () => name.innerText = oldName);

birthYear.addEventListener('mouseover', () => birthYear.innerHTML = '<em>Birth year</em> '); 
birthYear.addEventListener('mouseout', () => birthYear.innerText = oldBirthYear);

mass.addEventListener('mouseover', () => mass.innerHTML = '<em>Mass</em>');
mass.addEventListener('mouseout', () => mass.innerText = oldMass);

gender.addEventListener('mouseover', () => gender.innerHTML = '<em>Gender</em>');
gender.addEventListener('mouseout', () => gender.innerText = oldGender);

skinColor.addEventListener('mouseover', () => skinColor.innerHTML = '<em>Skin color</em>');
skinColor.addEventListener('mouseout', () => skinColor.innerText = oldSkinColor);
