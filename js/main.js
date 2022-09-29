let uczniowie = document.querySelectorAll(`div[id^="uczen"]`);
let btn = document.getElementById("oblicz");
btn.addEventListener("click", obliczanie);

function obliczanie() {
  for (const el of uczniowie) {
    let extra = el.querySelector("input.zajecia-dodatkowe");
    let wynik = el.querySelector('span[class="srednia"]');
    let uczen = el.querySelector('span[class="uczen"]');

    let infoOcena = parseFloat(el.querySelector("input.informatyka").value);
    let matOcena = parseFloat(el.querySelector("input.matematyka").value);
    let polOcena = parseFloat(el.querySelector("input.polski").value);
    let bioOcena = parseFloat(el.querySelector("input.biologia").value);
    let geoOcena = parseFloat(el.querySelector("input.geografia").value);
    let fizOcena = parseFloat(el.querySelector("input.fizyka").value);
    let cheOcena = parseFloat(el.querySelector("input.chemia").value);

    if (matOcena < 6 && extra.value.includes("matematyka")) {
      matOcena = matOcena + 0.5;
    }

    if (polOcena < 6 && extra.value.includes("polski")) {
      polOcena = polOcena + 0.5;
    }

    if (bioOcena < 6 && extra.value.includes("biologia")) {
      bioOcena = bioOcena + 0.5;
    }

    if (geoOcena < 6 && extra.value.includes("geografia")) {
      geoOcena = geoOcena + 0.5;
    }

    if (fizOcena < 6 && extra.value.includes("fizyka")) {
      fizOcena = fizOcena + 0.5;
    }

    if (cheOcena < 6 && extra.value.includes("chemia")) {
      cheOcena = cheOcena + 0.5;
    }

    if (infoOcena < 6 && extra.value.includes("informatyka")) {
      infoOcena = infoOcena + 0.5;
    }

    let zbiorOcen = [
      matOcena,
      polOcena,
      bioOcena,
      geoOcena,
      fizOcena,
      cheOcena,
      infoOcena,
    ];

    if (zbiorOcen.includes(1)) {
      uczen.setAttribute("style", "background-color:red");
    }

    let average =
      (matOcena +
        polOcena +
        bioOcena +
        geoOcena +
        fizOcena +
        cheOcena +
        infoOcena) /
      7;

    if (average >= 4.75) {
      uczen.setAttribute("style", "background-color:green");
    }

    wynik.innerHTML = average.toFixed(2);
  }
}
