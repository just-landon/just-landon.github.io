$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100, 650, 120, 20, "green");
    createPlatform(300, 550, 150, 25, "blue");
    createPlatform(600, 450, 100, 20, "orange");
    createPlatform(900, 350, 200, 30, "purple");
    createPlatform(1200, 250, 130, 15, "yellow");





    // TODO 3 - Create Collectables
    createCollectable("grace", 400, 500, 0.3, 0.5);
    createCollectable("kennedi", 790, 350, 0, 0);
    createCollectable("max", 1100, 250, 0, 0);
    createCollectable("database", 1250, 150, 0, 0)


    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
    createCannon("right", 300, 2000);
    createCannon("bottom", 700, 3000)
    createCannon("left", 490, 2000)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
