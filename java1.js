var namespace = "http://www.w3.org/2000/svg";

// Write your code here!

// DO NOT EDIT CODE BELOW THIS LINE!
function getX(shape) {
    if (!shape) {
        throw "Uh oh, you tried to get the x coordinate of a shape that doesn't exist!";
    }
    try {
        if (shape.hasAttribute("x")) {
            return parseFloat(shape.getAttribute("x"));
        } else if (shape.hasAttribute("cx")) {
            return parseFloat(shape.getAttribute("cx"));
        } else if (shape.hasAttribute("x1")) {
            return parseFloat(shape.getAttribute("x1"));
        }
    } catch (err) {
        throw "You're trying to get the x coordinate of something that isn't a shape!";
    }
}

function getY(shape) {
    if (!shape) {
        throw "Uh oh, you tried to get the y coordinate of a shape that doesn't exist!";
    }
    try {
        if (shape.hasAttribute("y")) {
            return parseFloat(shape.getAttribute("y"));
        } else if (shape.hasAttribute("cy")) {
            return parseFloat(shape.getAttribute("cy"));
        } else if (shape.hasAttribute("y1")) {
            return parseFloat(shape.getAttribute("y1"));
        }
    } catch (err) {
        throw "You're trying to get the y coordinate of something that isn't a shape!";
    }
}

function setX(shape, x) {
    if (!shape) {
    throw "I can't set the x of a shape that doesn't exist!"
  }
  if (isNaN(x)) {
    throw "You need to tell me what to set the x coordinate to!"
  }
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else if (shape.hasAttribute("cx")) {
    shape.setAttribute("cx", x)
  } else if (shape.hasAttribute("x1")) {
    var xDiff = parseFloat(shape.getAttribute("x2")) - parseFloat(shape.getAttribute("x1"))
    shape.setAttribute("x1", x)
    shape.setAttribute("x2", x + xDiff)
  }
}

function setY(shape, y) {
  if (!shape) {
    throw "I can't set the y of a shape that doesn't exist!"
  }
  if (isNaN(y)) {
    throw "You need to tell me what to set the y coordinate to!"
  }
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else if (shape.hasAttribute("cy")) {
    shape.setAttribute("cy", y)
  } else if (shape.hasAttribute("y1")) {
    var yDiff = parseFloat(shape.getAttribute("y2")) - parseFloat(shape.getAttribute("y1"))
    shape.setAttribute("y1", y)
    shape.setAttribute("y2", y + yDiff)
  } 
}

function move(shape, dx, dy) {
  if (!shape) {
    throw "I can't move a shape that doesn't exist!"
  }
  if (isNaN(dx)) {
    throw "You need to tell me how much to move the shape in the x direction!"
  }
  if (isNaN(dy)) {
    throw "You need to tell me how much to move the shape in the y direction!"
  }
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else if (shape.hasAttribute("cx")) {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  } else if (shape.hasAttribute("x1")) {
    var x1 = parseFloat(shape.getAttribute("x1"))
    var y1 = parseFloat(shape.getAttribute("x1"))
    setX(shape, x1 + dx)
    setY(shape, y1 + dy)
  }
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeRectid(x, y, width, height, fill, opacity, id) {
    var rect = document.createElementNS(namespace, "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", fill);
    rect.setAttribute("opacity", opacity);
    rect.setAttribute("id", id);

    var canvas = document.getElementById("canvas");
    canvas.appendChild(rect);
    return rect;
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}

function collides(shape1, shape2) {
  var centerX, centerY
  if (shape1.hasAttribute("x")) {
    centerX = getX(shape1) + parseFloat(shape1.getAttribute("width"))/2
    centerY = getY(shape1) + parseFloat(shape1.getAttribute("height"))/2
  } else if (shape1.hasAttribute("cx")) {
    centerX = getX(shape1)
    centerY = getY(shape1)
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }
  
  var xMin, xMax, yMin, yMax
  if (shape2.hasAttribute("x")) {
    xMin = getX(shape2)
    yMin = getY(shape2)
    xMax = getX(shape2) + parseFloat(shape2.getAttribute("width"))
    yMax = getY(shape2) + parseFloat(shape2.getAttribute("height"))
  } else if (shape2.hasAttribute("cx")) {
    if (shape2.hasAttribute("rx")) {
      var rx = parseFloat(shape2.getAttribute("rx"))
      var ry = parseFloat(shape2.getAttribute("ry"))
      xMin = getX(shape2) - rx
      yMin = getY(shape2) - ry
      xMax = getX(shape2) + rx
      yMax = getY(shape2) + ry
    } else {
      var r = parseFloat(shape2.getAttribute("r"))
      xMin = getX(shape2) - r
      yMin = getY(shape2) - r
      xMax = getX(shape2) + r
      yMax = getY(shape2) + r
    }
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }
  return (centerX > xMin && 
          centerX < xMax &&
         centerY > yMin &&
         centerY < yMax)
}

//var FOW = makeRect(0, 0, 1001.5, 610.5, "black", 0);
var wall = document.getElementById("walls")
var player = makeRect(659,3,14,14,"green",1);
var x = getX(player);
var xscore = x;
var y = getY(player);
var yscore = y;
var xscoreText = makeText(xscore, 969, 20, 20, "sans-serif", "blue");
var yscoreText = makeText(yscore, 969, 50, 20, "sans-serif", "blue");
var minotaur = makeRect(659,291,14,14,"brown",1)


addEventListener('keydown', movePlayer);

function movePlayer(event) {
 //   console.log(event)
    if (event.key === "a" && x > 3) {
        move(player, -2, 0);
        direction = "left";
   } else if (event.key === "d" && x < 1314.5) {
        move(player, 2, 0);
        direction = "right";
    } else if (event.key === "w" && y > 3) {
        move(player, 0, -2);
        direction = "up";
   } else if (event.key === "s" && y < 594.5) {
        move(player, 0, 2);
        direction = "down";
   } else if(event.keyCode === 13){
    console.log("To infinity and beyond" )   
   }
    x = getX(player);
    y = getY(player);
    player.setAttribute("opacity", 0);
    player = makeRect(x, y, 14, 14, "green", 1);

}

function intersectRect(r1, r2) {
    var r1 = r1.getBoundingClientRect();    //BOUNDING BOX OF THE FIRST OBJECT
    var r2 = r2.getBoundingClientRect();    //BOUNDING BOX OF THE SECOND OBJECT

    //CHECK IF THE TWO BOUNDING BOXES OVERLAP
  return !(r2.left > r1.right ||
           r2.right < r1.left || 
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
}
function minotaurz() {
    var minox = getX(minotaur);
    var minoy = getY(minotaur);
    var minogoes = Math.random() * 100;
        if(minogoes <= 25 && minox < 1314.5){
            move(minotaur,16,0);
        } else if (minogoes <= 50 && minogoes >= 25 && minoy < 594.5){
            move(minotaur,0,-16);
        } else if(minogoes <= 75 && minogoes >= 50 && minox > 5){
            move(minotaur,-16,0);
        }else if(minogoes <= 100 && minogoes >= 75 && minoy > 5){
            move(minotaur,0,16);
        }
        if(minoy > 594.5){
         move(minotaur,0,-16);   
        }else if (minoy < 5){
         move(minotaur,0,16);   
        }

    
        minox = getX(minotaur);
        minoy = getY(minotaur);
//        } else{
//         if(minox < x){
//           move(minotaur,11,0);   
//         }else if(minox > x){
//            move(minotaur, -11, 0)   
//         }
//         if(minoy < y){
//            move(minotaur,0,11);   
//         }else if(minoy > y){
//             move(minotaur,0,-11);   
//         }
//    }
    
//    requestAnimationFrame(minotaurz);

}
//minotaurz();
var minotaurgo = setInterval(minotaurz, 1500); 


function collision(){
 if(intersectRect(player,wall)){
    console.log("Hit!!");
 }else     
    if(intersectRect(player,minotaur)){
     console.log("Beefed")   
    }else{
//    console.log("Clear!!") 
 }
    requestAnimationFrame(collision);

}
collision();

function moreConditions() {    
    xscore = x;
    yscore = y;

    xscoreText.innerHTML = xscore;
    yscoreText.innerHTML = yscore;
    requestAnimationFrame(moreConditions);
}
moreConditions();
var time = 0;
function timer(){
 time = time + 1;
 console.log(time)
}
var newVar = setInterval(timer, 1000);