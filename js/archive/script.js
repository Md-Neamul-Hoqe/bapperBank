console.clear();
const urlPath = window.location.pathname;

// console.log(urlPath, urlPath.includes("banking.html"));

/* Login validation */
if (urlPath.includes("index.html")) {
  const loginSubmit = document.getElementById("login-submit");
  loginSubmit.onclick = function () {
    const Email = document.getElementById("user-email");
    const Password = document.getElementById("user-password");
    if (Email.value === "" && Password.value === "") {
      Password.style.border = "1px solid red";
      Email.style.border = "1px solid red";
    } else if (Email.value === "") {
      Email.style.border = "1px solid red";
    } else if (Password.value === "") {
      Password.style.border = "1px solid red";
    } else {
      window.location = "./banking.html";
    }
  };
}

/* Banking Calculation */
if (urlPath.includes("banking.html")) {
  const depositOutput = document.getElementById("deposit-total");
  var depositInput = document.getElementById("deposit-input");
  const withdrawOutput = document.getElementById("withdraw-total");
  var withdrawInput = document.getElementById("withdraw-input");
  const balanceOutput = document.getElementById("balance-total");
  // const balanceInput = document.getElementById("balance-input");

  console.log(
    parseFloat(depositOutput.innerHTML),
    balanceOutput.innerHTML,
    depositInput.value | 0
  );
  balanceOutput.innerHTML =
    parseFloat(depositOutput.innerHTML) - parseFloat(withdrawOutput.innerHTML);

  /* Calculation */
  const deposit = document.getElementById("deposit-button");
  const withdraw = document.getElementById("withdraw-button");

  // console.log(deposit, withdraw);
  deposit.onclick = function () {
    // console.log(
    //   "deposit clicked:",
    //   parseFloat(depositOutput.innerHTML),
    //   depositInput.value | 0
    // );

    /* parseFloat don't get by assignment directly */
    let temp = parseFloat(depositOutput.innerHTML);
    temp += depositInput.value | 0;
    depositOutput.innerHTML = temp;

    /* Update balance */
    balanceOutput.innerHTML =
      parseFloat(depositOutput.innerHTML) -
      parseFloat(withdrawOutput.innerHTML);
  };

  withdraw.onclick = function () {
    if (!parseFloat(balanceOutput.innerHTML)) {
      alert("Sorry! Your balace is empty.");
      return;
    }

    /* parseFloat don't get by assignment directly */
    let temp = parseFloat(withdrawOutput.innerHTML);
    temp += withdrawInput.value | 0;

    /* Check! is the balance negative after this withdraw */
    if (parseFloat(depositOutput.innerHTML) - temp < 0) {
      withdrawInput.style.border = "1px solid red";
      alert("Sorry! You have no sufficient balance.");
    } else {
      withdrawInput.style.border = "1px solid gray";
      withdrawOutput.innerHTML = temp;

      /* Update balance */
      balanceOutput.innerHTML =
        parseFloat(depositOutput.innerHTML) -
        parseFloat(withdrawOutput.innerHTML);
    }
  };
}

/* Players Addition */
if (urlPath.includes("players.html")) {
  const Players = document.getElementById("players");
  const Player = document.getElementsByClassName("player");
  function addNewPlayer() {
    // console.log(Players, Player);

    // function addNewPlayer() {
    const L = Player.length;
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    Players.appendChild(div).setAttribute("class", "player");
    // console.log(Player.length);

    /* Simplest Method [Use backtick `` instead of ''] */
    Player[L].innerHTML = `<h4 class='player-name'>Player - ${L + 1} </h4>
      <p>Nemo consequatur, impedit voluptate excepturi dicta blanditiis consectetur praesentium autem omnis velit veritatis necessitatibus, sapiente neque exercitationem quos alias? Saepe natus facere quia magni dignissimos consequuntur accusantium aut itaque! Nulla.</p>`;

    /* another method */
    // Player[L].appendChild(h4).setAttribute("class", "player-name");
    // h4.textContent = "Player - " + (L + 1);
    // div.appendChild(p).textContent =
    //   "Nemo consequatur, impedit voluptate excepturi dicta blanditiis consectetur praesentium autem omnis velit veritatis necessitatibus, sapiente neque exercitationem quos alias? Saepe natus facere quiamagni dignissimos consequuntur accusantium aut itaque! Nulla.";

    addPlayerStyles();
  }
  addPlayerStyles();

  function addPlayerStyles() {
    // console.log(Player.length);
    for (const NewPlayer of Player) {
      NewPlayer.style.border = "1px solid red";
      NewPlayer.style.borderRadius = "15px";
      NewPlayer.style.padding = "15px";
      NewPlayer.style.margin = "15px";
    }
  }

  /* Change Color on click */
  Players.addEventListener("click", function (event) {
    if (event.target.tagName.toLowerCase() == "div")
      event.target.style.backgroundColor = "yellow";
    else event.target.parentNode.style.backgroundColor = "yellowgreen";
  });
}
