// Gyümölcs emoji karakterek tömbje
const gyumolcsEmojik = ["🍎", "🍐", "🍊", "🍇", "🍓", "🥦", "🥬", "🍆", "🍅", 
"🥝", "🌽", "🫑", "🥕", "🫒", "🌶", "🥥", "🍇", "🍌", "🍋", "🍊", "🍑", "🥭", "🍒", "🫐", "🍎", "🍏", "🍓", "🍍", 
"🥒"];

// Gyümölcs animáció létrehozása
function createFallingFruit() {
  const gyumolcs = document.createElement("div");
  gyumolcs.className = "falling-fruit";
  gyumolcs.innerHTML = gyumolcsEmojik[Math.floor(Math.random() * gyumolcsEmojik.length)];
  gyumolcs.style.left = `${Math.random() * 100}vw`; // Véletlenszerű kezdőpozíció
  document.getElementById("gyumolcsContainer").appendChild(gyumolcs);

  // Animáció beállítása
  gyumolcs.animate(
    [
      { top: "-10vh", opacity: 0 },
      { top: "110vh", opacity: 1 }
    ],
    {
      duration: Math.random() * 10000 + 8000, // Véletlenszerű animációs idő
      easing: "linear",
      fill: "forwards"
    }
  );

  // Gyümölcs eltávolítása az animáció befejeztével
  gyumolcs.addEventListener("animationend", () => {
    gyumolcs.remove();
  });
}

// Gyümölcs animációk indítása
setInterval(createFallingFruit, 300);
