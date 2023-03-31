let r;		//radius
let angle;
let step;  //distance between steps in radians

let data;
let url = "https://raw.githubusercontent.com/annkomkova/threatend_species/main/data/data_header.csv";

function preload() {
  data = loadTable(url, 'csv', 'header');
}

function setup() {
  let maxSize = min(windowWidth, windowHeight) - 10;

  createCanvas(maxSize, maxSize);
  background(27,27,27);
  noFill();
  //initialize variables
  r = 380;
  angle = 0;
  ma = 0;
  b = 0;
  rept = 0;
  a = 0;
  f = 0;
  mo = 0;
}

function draw() {
  // button = createButton('Save');
  // button.mousePressed(saveImage);
  //parse data
let numCol = data.getColumnCount();
let numRow = data.getRowCount();
let mammals = data.getColumn('Mammals');
let birds = data.getColumn('Birds');
let reptiles = data.getColumn('Reptiles');
let amphibians = data.getColumn('Amphibians');
let fishes = data.getColumn('Fishes');
let moll = data.getColumn('Molluscs');
let total = data.getColumn('Total');

  // translate(width / 2 , height / 2);

for (let i = 0; i < numRow; i++) {
  translate(
    (width / 8),
    (height / 32),
);

    x = (r - 40) * sin(angle);
    y = (r - 40) * cos(angle);
    fill(253,199,124); //gold
    ellipse(x, y, 6);
    angle = angle + TWO_PI/mammals[i]*10;
}
for (let i = 0; i < numRow; i++) {
  translate(
    (width / 8),
    (height / 32),
);

    x1 = (r - 30) * sin(b);
    y1 = (r - 30) * cos(b);
    fill(146,163,225); //purple
    ellipse(x1, y1, 6);
    b = b + TWO_PI/birds[i]*10;
}
for (let i = 0; i < numRow; i++) {
  translate(
    (width / 8),
    (height / 32),
);

    x3 = (r-50) * sin(f);
    y3 = (r-50) * cos(f);
    fill(72,229,168); //green
    ellipse(x3, y3, 6);
    f = f + TWO_PI/fishes[i]*10;
}
for (let i = 0; i < numRow; i++) {
  translate(
    (width / 8),
    (height / 32),
);

    x4 = (r - 20) * sin(rept);
    y4 = (r - 20) * cos(rept);
    fill(255, 255, 255); //white
    ellipse(x4, y4, 6);
    rept = rept + TWO_PI/reptiles[i]*10;
}
for (let i = 0; i < numRow; i++) {
  translate(
    (width / 8),
    (height / 32),
);

    x5 = r * sin(a);
    y5 = r * cos(a);
    fill(31,228,255); //blue
    ellipse(x5, y5, 6);
    a = a + TWO_PI/amphibians[i]*10;
}
for (let i = 0; i < numRow; i++) {
  translate(
  (width / 8),
  (height / 32),
);

    x6 = (r - 10) * sin(mo);
    y6 = (r - 10) * cos(mo);
    fill(253,95,9); //red
    ellipse(x6, y6, 6);
    mo = mo + TWO_PI/moll[i]*10;
}

}
