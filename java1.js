"use strict";
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
        throw "I can't set the x of a shape that doesn't exist!";
    }
    if (isNaN(x)) {
        throw "You need to tell me what to set the x coordinate to!";
    }
    if (shape.hasAttribute("x")) {
        shape.setAttribute("x", x);
    } else if (shape.hasAttribute("cx")) {
        shape.setAttribute("cx", x);
    } else if (shape.hasAttribute("x1")) {
        var xDiff = parseFloat(shape.getAttribute("x2")) - parseFloat(shape.getAttribute("x1"));
        shape.setAttribute("x1", x);
        shape.setAttribute("x2", x + xDiff);
    }
}

function setY(shape, y) {
    if (!shape) {
        throw "I can't set the y of a shape that doesn't exist!";
    }
    if (isNaN(y)) {
        throw "You need to tell me what to set the y coordinate to!";
    }
    if (shape.hasAttribute("y")) {
        shape.setAttribute("y", y);
    } else if (shape.hasAttribute("cy")) {
        shape.setAttribute("cy", y);
    } else if (shape.hasAttribute("y1")) {
        var yDiff = parseFloat(shape.getAttribute("y2")) - parseFloat(shape.getAttribute("y1"));
        shape.setAttribute("y1", y);
        shape.setAttribute("y2", y + yDiff);
    }
}

function move(shape, dx, dy) {
    if (!shape) {
        throw "I can't move a shape that doesn't exist!";
    }
    if (isNaN(dx)) {
        throw "You need to tell me how much to move the shape in the x direction!";
    }
    if (isNaN(dy)) {
        throw "You need to tell me how much to move the shape in the y direction!";
    }
    if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
        var x = parseFloat(shape.getAttribute("x")), 
            y = parseFloat(shape.getAttribute("y"));
        shape.setAttribute("x", x + dx);
        shape.setAttribute("y", y + dy);
    } else if (shape.hasAttribute("cx")) {
        var cx = parseFloat(shape.getAttribute("cx")), 
            cy = parseFloat(shape.getAttribute("cy"));
        shape.setAttribute("cx", cx + dx);
        shape.setAttribute("cy", cy + dy);
    } else if (shape.hasAttribute("x1")) {
        var x1 = parseFloat(shape.getAttribute("x1")), 
            y1 = parseFloat(shape.getAttribute("x1"));
        setX(shape, x1 + dx);
        setY(shape, y1 + dy);
    }
}

function makeCircle(cx, cy, r, fill, opacity) {
    var circle = document.createElementNS(namespace, "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", fill);
    circle.setAttribute("opacity", opacity);
  
    var canvas = document.getElementById("canvas");
    canvas.appendChild(circle);
    return circle;
}

function makeRect(x, y, width, height, fill, opacity) {
    var rect = document.createElementNS(namespace, "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", fill);
    rect.setAttribute("opacity", opacity);
  
    var canvas = document.getElementById("canvas");
    canvas.appendChild(rect);
    return rect;
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
    var ellipse = document.createElementNS(namespace, "ellipse");
    ellipse.setAttribute("cx", cx);
    ellipse.setAttribute("cy", cy);
    ellipse.setAttribute("rx", rx);
    ellipse.setAttribute("ry", ry);
    ellipse.setAttribute("fill", fill);
    ellipse.setAttribute("opacity", opacity);
  
    var canvas = document.getElementById("canvas");
    canvas.appendChild(ellipse);
    return ellipse;
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
    var line = document.createElementNS(namespace, "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", stroke);
    line.setAttribute("stroke-width", strokeWidth);
    line.setAttribute("opacity", opacity);
  
    var canvas = document.getElementById("canvas");
    canvas.appendChild(line);
    return line;
}

function makePolyline(points, stroke, strokeWidth, opacity) {
    var polyline = document.createElementNS(namespace, "polyline");
    polyline.setAttribute("points", points);
    polyline.setAttribute("stroke", stroke);
    polyline.setAttribute("stroke-width", strokeWidth);
    polyline.setAttribute("opacity", opacity);
    polyline.setAttribute("fill", "none");
  
    var canvas = document.getElementById("canvas");
    canvas.appendChild(polyline);
    return polyline;
}

function makePolygon(points, fill, opacity) {
    var polygon = document.createElementNS(namespace, "polygon");
    polygon.setAttribute("points", points);
    polygon.setAttribute("opacity", opacity);
    polygon.setAttribute("fill", fill);
  
    var canvas = document.getElementById("canvas");
    canvas.appendChild(polygon);
    return polygon;
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
    var text = document.createElementNS(namespace, "text");
    text.innerHTML = message;
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("font-size", fontSize);
    text.setAttribute("font-family", fontFamily);
    text.setAttribute("fill", fill);
    text.setAttribute("opacity", opacity);
  
    var canvas = document.getElementById("canvas");
    canvas.appendChild(text);
    return text;
}

function makeImage(url, x, y, width, height, opacity) {
    var image = document.createElementNS(namespace, "image");
    image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url);
    image.setAttribute("x", x);
    image.setAttribute("y", y);
    image.setAttribute("width", width);
    image.setAttribute("height", height);
    image.setAttribute("opacity", opacity);
  
    var canvas = document.getElementById("canvas");
    canvas.appendChild(image);
    return image;
}

function collides(shape1, shape2) {
    var centerX, centerY;
    if (shape1.hasAttribute("x")) {
        centerX = getX(shape1) + parseFloat(shape1.getAttribute("width")) / 2;
        centerY = getY(shape1) + parseFloat(shape1.getAttribute("height")) / 2;
    } else if (shape1.hasAttribute("cx")) {
        centerX = getX(shape1);
        centerY = getY(shape1);
    } else {
        throw "Oops, that kind of shape isn't supported by the collide function!";
    }
  
    var xMin, xMax, yMin, yMax;
    if (shape2.hasAttribute("x")) {
        xMin = getX(shape2);
        yMin = getY(shape2);
        xMax = getX(shape2) + parseFloat(shape2.getAttribute("width"));
        yMax = getY(shape2) + parseFloat(shape2.getAttribute("height"));
    } else if (shape2.hasAttribute("cx")) {
        if (shape2.hasAttribute("rx")) {
            var rx = parseFloat(shape2.getAttribute("rx"));
            var ry = parseFloat(shape2.getAttribute("ry"));
            xMin = getX(shape2) - rx;
            yMin = getY(shape2) - ry;
            xMax = getX(shape2) + rx;
            yMax = getY(shape2) + ry;
        } else if (shape2.hasAttribute("r")) {
            var r = parseFloat(shape2.getAttribute("r"));
            xMin = getX(shape2) - r;
            yMin = getY(shape2) - r;
            xMax = getX(shape2) + r;
            yMax = getY(shape2) + r;
        } else {
            throw "Oops, that kind of shape isn't supported by the collide function!";
        }
        return (centerX > xMin && 
          centerX < xMax &&
         centerY > yMin &&
         centerY < yMax);
    }
}
//    function collideVertLine(square, line) {
//        if line's x coordinate is between the sides of the square, and: 
//           // one endpoint is in the square OR endpoints are on opposite sides of the square
//        var xMin = Math.min(parseFloat(shape2.getAttribute("x1")), parseFloat(shape2.getAttribute("x2")));
//        var xMax = Math.max(parseFloat(shape2.getAttribute("x1")), parseFloat(shape2.getAttribute("x2")));
//        var yMin = Math.min(parseFloat(shape2.getAttribute("y1")), parseFloat(shape2.getAttribute("y2")));
//        var yMax = Math.max(parseFloat(shape2.getAttribute("y1")), parseFloat(shape2.getAttribute("y2"))); 
//    }
    
//    function collideHorizLine(square, line) {
    
    
//        var xMin = Math.min(parseFloat(shape2.getAttribute("x1")), parseFloat(shape2.getAttribute("x2")));
//        var xMax = Math.max(parseFloat(shape2.getAttribute("x1")), parseFloat(shape2.getAttribute("x2")));
 //       var yMin = Math.min(parseFloat(shape2.getAttribute("y1")), parseFloat(shape2.getAttribute("y2")));
//        var yMax = Math.max(parseFloat(shape2.getAttribute("y1")), parseFloat(shape2.getAttribute("y2"))); 
//    }
//}

makeLine(0, 10.5, 1001.5, 10.5, "gray", 1, 0.75);
makeLine(10.5, 0, 10.5, 527.5, "gray", 1, 0.75);
makeLine(0, 21.5, 1001.5, 21.5, "gray", 1, 0.75);
makeLine(21.5, 0, 21.5, 527.5, "gray", 1, 0.75);
makeLine(0, 32.5, 1001.5, 32.5, "gray", 1, 0.75);
makeLine(32.5, 0, 32.5, 527.5, "gray", 1, 0.75);
makeLine(0, 43.5, 1001.5, 43.5, "gray", 1, 0.75);
makeLine(43.5, 0, 43.5, 527.5, "gray", 1, 0.75);
makeLine(0, 54.5, 1001.5, 54.5, "gray", 1, 0.75);
makeLine(54.5, 0, 54.5, 527.5, "gray", 1, 0.75);
makeLine(0, 65.5, 1001.5, 65.5, "gray", 1, 0.75);
makeLine(65.5, 0, 65.5, 527.5, "gray", 1, 0.75);
makeLine(0, 76.5, 1001.5, 76.5, "gray", 1, 0.75);
makeLine(76.5, 0, 76.5, 527.5, "gray", 1, 0.75);
makeLine(0, 87.5, 1001.5, 87.5, "gray", 1, 0.75);
makeLine(87.5, 0, 87.5, 527.5, "gray", 1, 0.75);
makeLine(0, 98.5, 1001.5, 98.5, "gray", 1, 0.75);
makeLine(98.5, 0, 98.5, 527.5, "gray", 1, 0.75);
makeLine(0, 109.5, 1001.5, 109.5, "gray", 1, 0.75);
makeLine(109.5, 0, 109.5, 527.5, "gray", 1, 0.75);
makeLine(0, 120.5, 1001.5, 120.5, "gray", 1, 0.75);
makeLine(120.5, 0, 120.5, 527.5, "gray", 1, 0.75);
makeLine(0, 131.5, 1001.5, 131.5, "gray", 1, 0.75);
makeLine(131.5, 0, 131.5, 527.5, "gray", 1, 0.75);
makeLine(0, 142.5, 1001.5, 142.5, "gray", 1, 0.75);
makeLine(142.5, 0, 142.5, 527.5, "gray", 1, 0.75);
makeLine(0, 153.5, 1001.5, 153.5, "gray", 1, 0.75);
makeLine(153.5, 0, 153.5, 527.5, "gray", 1, 0.75);
makeLine(0, 164.5, 1001.5, 164.5, "gray", 1, 0.75);
makeLine(164.5, 0, 164.5, 527.5, "gray", 1, 0.75);
makeLine(0, 175.5, 1001.5, 175.5, "gray", 1, 0.75);
makeLine(175.5, 0, 175.5, 527.5, "gray", 1, 0.75);
makeLine(0, 186.5, 1001.5, 186.5, "gray", 1, 0.75);
makeLine(186.5, 0, 186.5, 527.5, "gray", 1, 0.75);
makeLine(0, 197.5, 1001.5, 197.5, "gray", 1, 0.75);
makeLine(197.5, 0, 197.5, 527.5, "gray", 1, 0.75);
makeLine(0, 208.5, 1001.5, 208.5, "gray", 1, 0.75);
makeLine(208.5, 0, 208.5, 527.5, "gray", 1, 0.75);
makeLine(0, 219.5, 1001.5, 219.5, "gray", 1, 0.75);
makeLine(219.5, 0, 219.5, 527.5, "gray", 1, 0.75);
makeLine(0, 230.5, 1001.5, 230.5, "gray", 1, 0.75);
makeLine(230.5, 0, 230.5, 527.5, "gray", 1, 0.75);
makeLine(0, 241.5, 1001.5, 241.5, "gray", 1, 0.75);
makeLine(241.5, 0, 241.5, 527.5, "gray", 1, 0.75);
makeLine(0, 252.5, 1001.5, 252.5, "gray", 1, 0.75);
makeLine(252.5, 0, 252.5, 527.5, "gray", 1, 0.75);
makeLine(0, 263.5, 1001.5, 263.5, "gray", 1, 0.75);
makeLine(263.5, 0, 263.5, 527.5, "gray", 1, 0.75);
makeLine(0, 274.5, 1001.5, 274.5, "gray", 1, 0.75);
makeLine(274.5, 0, 274.5, 527.5, "gray", 1, 0.75);
makeLine(0, 285.5, 1001.5, 285.5, "gray", 1, 0.75);
makeLine(285.5, 0, 285.5, 527.5, "gray", 1, 0.75);
makeLine(0, 296.5, 1001.5, 296.5, "gray", 1, 0.75);
makeLine(296.5, 0, 296.5, 527.5, "gray", 1, 0.75);
makeLine(0, 307.5, 1001.5, 307.5, "gray", 1, 0.75);
makeLine(307.5, 0, 307.5, 527.5, "gray", 1, 0.75);
makeLine(0, 318.5, 1001.5, 318.5, "gray", 1, 0.75);
makeLine(318.5, 0, 318.5, 527.5, "gray", 1, 0.75);
makeLine(0, 329.5, 1001.5, 329.5, "gray", 1, 0.75);
makeLine(329.5, 0, 329.5, 527.5, "gray", 1, 0.75);
makeLine(0, 340.5, 1001.5, 340.5, "gray", 1, 0.75);
makeLine(340.5, 0, 340.5, 527.5, "gray", 1, 0.75);
makeLine(0, 351.5, 1001.5, 351.5, "gray", 1, 0.75);
makeLine(351.5, 0, 351.5, 527.5, "gray", 1, 0.75);
makeLine(0, 362.5, 1001.5, 362.5, "gray", 1, 0.75);
makeLine(362.5, 0, 362.5, 527.5, "gray", 1, 0.75);
makeLine(0, 373.5, 1001.5, 373.5, "gray", 1, 0.75);
makeLine(373.5, 0, 373.5, 527.5, "gray", 1, 0.75);
makeLine(0, 384.5, 1001.5, 384.5, "gray", 1, 0.75);
makeLine(384.5, 0, 384.5, 527.5, "gray", 1, 0.75);
makeLine(0, 395.5, 1001.5, 395.5, "gray", 1, 0.75);
makeLine(395.5, 0, 395.5, 527.5, "gray", 1, 0.75);
makeLine(0, 406.5, 1001.5, 406.5, "gray", 1, 0.75);
makeLine(406.5, 0, 406.5, 527.5, "gray", 1, 0.75);
makeLine(0, 417.5, 1001.5, 417.5, "gray", 1, 0.75);
makeLine(417.5, 0, 417.5, 527.5, "gray", 1, 0.75);
makeLine(0, 428.5, 1001.5, 428.5, "gray", 1, 0.75);
makeLine(428.5, 0, 428.5, 527.5, "gray", 1, 0.75);
makeLine(0, 439.5, 1001.5, 439.5, "gray", 1, 0.75);
makeLine(439.5, 0, 439.5, 527.5, "gray", 1, 0.75);
makeLine(0, 450.5, 1001.5, 450.5, "gray", 1, 0.75);
makeLine(450.5, 0, 450.5, 527.5, "gray", 1, 0.75);
makeLine(0, 461.5, 1001.5, 461.5, "gray", 1, 0.75);
makeLine(461.5, 0, 461.5, 527.5, "gray", 1, 0.75);
makeLine(0, 472.5, 1001.5, 472.5, "gray", 1, 0.75);
makeLine(472.5, 0, 472.5, 527.5, "gray", 1, 0.75);
makeLine(0, 483.5, 1001.5, 483.5, "gray", 1, 0.75);
makeLine(483.5, 0, 483.5, 527.5, "gray", 1, 0.75);
  //makeLine(0, 494.5, 1001.5, 494.5, "gray", 1, 0.75);
makeLine(494.5, 0, 494.5, 527.5, "gray", 1, 0.75);
  //makeLine(0, 505.5, 1001.5, 505.5, "gray", 1, 0.75);
makeLine(505.5, 0, 505.5, 527.5, "gray", 1, 0.75);
  //makeLine(0, 516.5, 1001.5, 516.5, "gray", 1, 0.75);
makeLine(516.5, 0, 516.5, 527.5, "gray", 1, 0.75);
makeLine(527.5, 0, 527.5, 527.5, "gray", 1, 0.75);
makeLine(538.5, 0, 538.5, 527.5, "gray", 1, 0.75);
makeLine(549.5, 0, 549.5, 527.5, "gray", 1, 0.75);
makeLine(560.5, 0, 560.5, 527.5, "gray", 1, 0.75);
makeLine(571.5, 0, 571.5, 527.5, "gray", 1, 0.75);
makeLine(582.5, 0, 582.5, 527.5, "gray", 1, 0.75);
makeLine(593.5, 0, 593.5, 527.5, "gray", 1, 0.75);
makeLine(604.5, 0, 604.5, 527.5, "gray", 1, 0.75);
makeLine(615.5, 0, 615.5, 527.5, "gray", 1, 0.75);
makeLine(626.5, 0, 626.5, 527.5, "gray", 1, 0.75);
makeLine(637.5, 0, 637.5, 527.5, "gray", 1, 0.75);
makeLine(648.5, 0, 648.5, 527.5, "gray", 1, 0.75);
makeLine(659.5, 0, 659.5, 527.5, "gray", 1, 0.75);
makeLine(670.5, 0, 670.5, 527.5, "gray", 1, 0.75);
makeLine(681.5, 0, 681.5, 527.5, "gray", 1, 0.75);
makeLine(692.5, 0, 692.5, 527.5, "gray", 1, 0.75);
makeLine(703.5, 0, 703.5, 527.5, "gray", 1, 0.75);
makeLine(714.5, 0, 714.5, 527.5, "gray", 1, 0.75);
makeLine(725.5, 0, 725.5, 527.5, "gray", 1, 0.75);
makeLine(736.5, 0, 736.5, 527.5, "gray", 1, 0.75);
makeLine(747.5, 0, 747.5, 527.5, "gray", 1, 0.75);
makeLine(758.5, 0, 758.5, 527.5, "gray", 1, 0.75);
makeLine(769.5, 0, 769.5, 527.5, "gray", 1, 0.75);
makeLine(780.5, 0, 780.5, 527.5, "gray", 1, 0.75);
makeLine(791.5, 0, 791.5, 527.5, "gray", 1, 0.75);
makeLine(802.5, 0, 802.5, 527.5, "gray", 1, 0.75);
makeLine(813.5, 0, 813.5, 527.5, "gray", 1, 0.75);
makeLine(824.5, 0, 824.5, 527.5, "gray", 1, 0.75);
makeLine(835.5, 0, 835.5, 527.5, "gray", 1, 0.75);
makeLine(846.5, 0, 846.5, 527.5, "gray", 1, 0.75);
makeLine(857.5, 0, 857.5, 527.5, "gray", 1, 0.75);
makeLine(868.5, 0, 868.5, 527.5, "gray", 1, 0.75);
makeLine(879.5, 0, 879.5, 527.5, "gray", 1, 0.75);
makeLine(890.5, 0, 890.5, 527.5, "gray", 1, 0.75);
makeLine(901.5, 0, 901.5, 527.5, "gray", 1, 0.75);
makeLine(912.5, 0, 912.5, 527.5, "gray", 1, 0.75);
makeLine(923.5, 0, 923.5, 527.5, "gray", 1, 0.75);
makeLine(934.5, 0, 934.5, 527.5, "gray", 1, 0.75);
makeLine(945.5, 0, 945.5, 527.5, "gray", 1, 0.75);
makeLine(956.5, 0, 956.5, 527.5, "gray", 1, 0.75);
makeLine(967.5, 0, 967.5, 527.5, "gray", 1, 0.75);
makeLine(978.5, 0, 978.5, 527.5, "gray", 1, 0.75);
makeLine(989.5, 0, 989.5, 527.5, "gray", 1, 0.75);

var wall =  [makeRect(11, 11, 10, 10, "black", 1), 
makeRect(11, 22, 10, 10, "black", 1), 
makeRect(11, 33, 10, 10, "black", 1), 
makeRect(11, 44, 10, 10, "black", 1), 
makeRect(11, 55, 10, 10, "black", 1), 
makeRect(11, 66, 10, 10, "black", 1), 
makeRect(11, 77, 10, 10, "black", 1), 
makeRect(11, 88, 10, 10, "black", 1), 
makeRect(11, 99, 10, 10, "black", 1), 
makeRect(11, 110, 10, 10, "black", 1), 
makeRect(11, 121, 10, 10, "black", 1), 
makeRect(11, 132, 10, 10, "black", 1), 
makeRect(11, 143, 10, 10, "black", 1), 
makeRect(11, 154, 10, 10, "black", 1), 
makeRect(11, 165, 10, 10, "black", 1), 
makeRect(11, 176, 10, 10, "black", 1), 
makeRect(11, 187, 10, 10, "black", 1), 
makeRect(11, 198, 10, 10, "black", 1), 
makeRect(11, 209, 10, 10, "black", 1), 
makeRect(22, 99, 10, 10, "black", 1), 
makeRect(22, 121, 10, 10, "black", 1), 
makeRect(22, 165, 10, 10, "black", 1), 
makeRect(22, 209, 10, 10, "black", 1), 
makeRect(33, 11, 10, 10, "black", 1), 
makeRect(33, 22, 10, 10, "black", 1), 
makeRect(33, 33, 10, 10, "black", 1), 
makeRect(33, 55, 10, 10, "black", 1), 
makeRect(33, 66, 10, 10, "black", 1), 
makeRect(33, 77, 10, 10, "black", 1), 
makeRect(33, 99, 10, 10, "black", 1), 
makeRect(33, 121, 10, 10, "black", 1), 
makeRect(33, 143, 10, 10, "black", 1), 
makeRect(33, 165, 10, 10, "black", 1), 
makeRect(33, 187, 10, 10, "black", 1), 
makeRect(33, 209, 10, 10, "black", 1), 
makeRect(44, 11, 10, 10, "black", 1), 
makeRect(44, 55, 10, 10, "black", 1), 
makeRect(44, 77, 10, 10, "black", 1), 
makeRect(44, 143, 10, 10, "black", 1), 
makeRect(44, 165, 10, 10, "black", 1), 
makeRect(44, 187, 10, 10, "black", 1), 
makeRect(44, 209, 10, 10, "black", 1), 
makeRect(55, 11, 10, 10, "black", 1), 
makeRect(55, 33, 10, 10, "black", 1), 
makeRect(55, 44, 10, 10, "black", 1), 
makeRect(55, 55, 10, 10, "black", 1), 
makeRect(55, 77, 10, 10, "black", 1), 
makeRect(55, 88, 10, 10, "black", 1), 
makeRect(55, 99, 10, 10, "black", 1), 
makeRect(55, 110, 10, 10, "black", 1), 
makeRect(55, 121, 10, 10, "black", 1), 
makeRect(55, 132, 10, 10, "black", 1), 
makeRect(55, 143, 10, 10, "black", 1), 
makeRect(55, 165, 10, 10, "black", 1), 
makeRect(55, 176, 10, 10, "black", 1), 
makeRect(55, 187, 10, 10, "black", 1), 
makeRect(55, 209, 10, 10, "black", 1), 
makeRect(66, 11, 10, 10, "black", 1), 
makeRect(66, 33, 10, 10, "black", 1), 
makeRect(66, 77, 10, 10, "black", 1), 
makeRect(66, 143, 10, 10, "black", 1), 
makeRect(66, 209, 10, 10, "black", 1), 
makeRect(77, 11, 10, 10, "black", 1), 
makeRect(77, 33, 10, 10, "black", 1), 
makeRect(77, 55, 10, 10, "black", 1), 
makeRect(77, 66, 10, 10, "black", 1), 
makeRect(77, 77, 10, 10, "black", 1), 
makeRect(77, 99, 10, 10, "black", 1), 
makeRect(77, 110, 10, 10, "black", 1), 
makeRect(77, 121, 10, 10, "black", 1), 
makeRect(77, 143, 10, 10, "black", 1), 
makeRect(77, 165, 10, 10, "black", 1), 
makeRect(77, 176, 10, 10, "black", 1), 
makeRect(77, 187, 10, 10, "black", 1), 
makeRect(77, 198, 10, 10, "black", 1), 
makeRect(77, 209, 10, 10, "black", 1), 
makeRect(88, 11, 10, 10, "black", 1), 
makeRect(88, 55, 10, 10, "black", 1), 
makeRect(88, 99, 10, 10, "black", 1), 
makeRect(88, 143, 10, 10, "black", 1), 
makeRect(88, 209, 10, 10, "black", 1), 
makeRect(99, 11, 10, 10, "black", 1), 
makeRect(99, 33, 10, 10, "black", 1), 
makeRect(99, 44, 10, 10, "black", 1), 
makeRect(99, 55, 10, 10, "black", 1), 
makeRect(99, 77, 10, 10, "black", 1), 
makeRect(99, 99, 10, 10, "black", 1), 
makeRect(99, 121, 10, 10, "black", 1), 
makeRect(99, 132, 10, 10, "black", 1), 
makeRect(99, 143, 10, 10, "black", 1), 
makeRect(99, 154, 10, 10, "black", 1), 
makeRect(99, 165, 10, 10, "black", 1), 
makeRect(99, 176, 10, 10, "black", 1), 
makeRect(99, 187, 10, 10, "black", 1), 
makeRect(99, 209, 10, 10, "black", 1), 
makeRect(110, 11, 10, 10, "black", 1), 
makeRect(110, 55, 10, 10, "black", 1), 
makeRect(110, 77, 10, 10, "black", 1), 
makeRect(110, 99, 10, 10, "black", 1), 
makeRect(110, 187, 10, 10, "black", 1), 
makeRect(110, 209, 10, 10, "black", 1), 
makeRect(121, 11, 10, 10, "black", 1), 
makeRect(121, 33, 10, 10, "black", 1), 
makeRect(121, 55, 10, 10, "black", 1), 
makeRect(121, 77, 10, 10, "black", 1), 
makeRect(121, 99, 10, 10, "black", 1), 
makeRect(121, 110, 10, 10, "black", 1), 
makeRect(121, 121, 10, 10, "black", 1), 
makeRect(121, 132, 10, 10, "black", 1), 
makeRect(121, 143, 10, 10, "black", 1), 
makeRect(121, 154, 10, 10, "black", 1), 
makeRect(121, 165, 10, 10, "black", 1), 
makeRect(121, 187, 10, 10, "black", 1), 
makeRect(121, 209, 10, 10, "black", 1), 
makeRect(132, 11, 10, 10, "black", 1), 
makeRect(132, 33, 10, 10, "black", 1), 
makeRect(132, 55, 10, 10, "black", 1), 
makeRect(132, 77, 10, 10, "black", 1), 
makeRect(132, 143, 10, 10, "black", 1), 
makeRect(132, 187, 10, 10, "black", 1), 
makeRect(132, 209, 10, 10, "black", 1), 
makeRect(143, 11, 10, 10, "black", 1), 
makeRect(143, 33, 10, 10, "black", 1), 
makeRect(143, 55, 10, 10, "black", 1), 
makeRect(143, 77, 10, 10, "black", 1), 
makeRect(143, 88, 10, 10, "black", 1), 
makeRect(143, 99, 10, 10, "black", 1), 
makeRect(143, 110, 10, 10, "black", 1), 
makeRect(143, 121, 10, 10, "black", 1), 
makeRect(143, 132, 10, 10, "black", 1), 
makeRect(143, 143, 10, 10, "black", 1), 
makeRect(143, 165, 10, 10, "black", 1), 
makeRect(143, 176, 10, 10, "black", 1), 
makeRect(143, 187, 10, 10, "black", 1), 
makeRect(143, 209, 10, 10, "black", 1), 
makeRect(154, 11, 10, 10, "black", 1), 
makeRect(154, 33, 10, 10, "black", 1), 
makeRect(154, 55, 10, 10, "black", 1), 
makeRect(154, 143, 10, 10, "black", 1), 
makeRect(154, 165, 10, 10, "black", 1), 
makeRect(154, 209, 10, 10, "black", 1), 
makeRect(165, 11, 10, 10, "black", 1), 
makeRect(165, 33, 10, 10, "black", 1), 
makeRect(165, 55, 10, 10, "black", 1), 
makeRect(165, 66, 10, 10, "black", 1), 
makeRect(165, 77, 10, 10, "black", 1), 
makeRect(165, 88, 10, 10, "black", 1), 
makeRect(165, 99, 10, 10, "black", 1), 
makeRect(165, 110, 10, 10, "black", 1), 
makeRect(165, 121, 10, 10, "black", 1), 
makeRect(165, 143, 10, 10, "black", 1), 
makeRect(165, 165, 10, 10, "black", 1), 
makeRect(165, 187, 10, 10, "black", 1), 
makeRect(165, 198, 10, 10, "black", 1), 
makeRect(165, 209, 10, 10, "black", 1), 
makeRect(176, 11, 10, 10, "black", 1), 
makeRect(176, 33, 10, 10, "black", 1), 
makeRect(176, 77, 10, 10, "black", 1), 
makeRect(176, 143, 10, 10, "black", 1), 
makeRect(176, 165, 10, 10, "black", 1), 
makeRect(176, 209, 10, 10, "black", 1), 
makeRect(187, 11, 10, 10, "black", 1), 
makeRect(187, 33, 10, 10, "black", 1), 
makeRect(187, 55, 10, 10, "black", 1), 
makeRect(187, 66, 10, 10, "black", 1), 
makeRect(187, 77, 10, 10, "black", 1), 
makeRect(187, 99, 10, 10, "black", 1), 
makeRect(187, 110, 10, 10, "black", 1), 
makeRect(187, 121, 10, 10, "black", 1), 
makeRect(187, 132, 10, 10, "black", 1), 
makeRect(187, 143, 10, 10, "black", 1), 
makeRect(187, 165, 10, 10, "black", 1), 
makeRect(187, 176, 10, 10, "black", 1), 
makeRect(187, 187, 10, 10, "black", 1), 
makeRect(187, 198, 10, 10, "black", 1), 
makeRect(187, 209, 10, 10, "black", 1), 
makeRect(198, 11, 10, 10, "black", 1), 
makeRect(198, 33, 10, 10, "black", 1), 
makeRect(198, 143, 10, 10, "black", 1), 
makeRect(198, 209, 10, 10, "black", 1), 
makeRect(209, 11, 10, 10, "black", 1), 
makeRect(209, 22, 10, 10, "black", 1), 
makeRect(209, 33, 10, 10, "black", 1), 
makeRect(209, 44, 10, 10, "black", 1), 
makeRect(209, 55, 10, 10, "black", 1), 
makeRect(209, 66, 10, 10, "black", 1), 
makeRect(209, 77, 10, 10, "black", 1), 
makeRect(209, 88, 10, 10, "black", 1), 
makeRect(209, 99, 10, 10, "black", 1), 
makeRect(209, 110, 10, 10, "black", 1), 
makeRect(209, 121, 10, 10, "black", 1), 
makeRect(209, 132, 10, 10, "black", 1), 
makeRect(209, 143, 10, 10, "black", 1), 
makeRect(209, 154, 10, 10, "black", 1), 
makeRect(209, 165, 10, 10, "black", 1), 
makeRect(209, 176, 10, 10, "black", 1), 
makeRect(209, 187, 10, 10, "black", 1), 
makeRect(209, 209, 10, 10, "black", 1)] ;


var Gate1 = makeRect(22 ,11, 10, 10, "purple", 1);
var Gate2 = makeRect(209,198, 10, 10, "purple", 1);
alert("Use W,A,S,D to move the green square. Use F to kill the brown square. After the brown sqaure is dead, escape out the bottom of the maze.")
//var FOW = makeRect(0, 0, 1001.5, 610.5, "black", 0);
    var player = makeRect(22, 22, 10, 10, "green", 1), 
        x = getX(player), 
        xscore = x, 
        y = getY(player), 
        yscore = y,  
        xscoreText = makeText(xscore, 969, 20, 20, "sans-serif", "blue"), 
        yscoreText = makeText(yscore, 969, 50, 20, "sans-serif", "blue"), 
        minotaur = makeRect(99, 110, 10, 10, "brown", 1),
        minox = getX(minotaur),
        minoy = getY(minotaur),
        mdead = false,
        pdead = false;
        for (var wallpiece of wall)
        var wallx = getX(wallpiece);
        var wally = getY(wallpiece);
        console.log(wallx);
        console.log(wally);
        addEventListener('keydown', movePlayer);

    function movePlayer(event) {
 //   console.log(event)
    if(pdead === true){
        
    }else{
        
    if (event.key === "a" && x > 5) {
        move(player, -11, 0);
         for (var wallpiece of wall) {
             console.log("Stuff");
        if(wallx === x && wally === y){
         move(player, 11, 0);  
            console.log("YOUR MOVE");
        }
         }
    } else if (event.key === "d" && x < 219.5) {
        move(player, 11, 0);
         for (var wallpiece of wall) {
             console.log("Stuff");
        if(wallx === x && wally === y){
         move(player, -11, 0);
            console.log("YOUR MOVE");
        }
         }
    } else if (event.key === "w" && y > 5) {
        move(player, 0, -11);
             console.log("Stuff");
        if(wallx === x && wally === y){
         move(player, 0, 11);
            console.log("YOUR MOVE");
        }
    } else if (event.key === "s" && y < 219.5) {
        move(player, 0, 11);
             console.log("Stuff");
        if(wallx === x && wally === y){
         move(player, 0, -11);
            console.log("YOUR MOVE");
        }
    }else if (event.key === "f"){
        if(minox === x + 11 || minox === x - 11){
            if(minoy === y){
                mdead = true;
            }
        }
    }
        x = getX(player);
        y = getY(player);
        player.setAttribute("opacity", 0);
        player = makeRect(x, y, 10, 10, "green", 1);
    }
    }

function minotaurz() {
    if(mdead === true){
        
    }else{
    var minogoes = Math.random() * 100;
        if(minogoes <= 25 && minox < 1314.5){
            move(minotaur, 11, 0);
            if(wallx === minox && wally === minoy){
                move(minotaur, -11, 0);  
            } 
        } else if (minogoes <= 50 && minogoes >= 25 && minoy < 594.5){
            move(minotaur, 0, -11);
            if(wallx === minox && wally === minoy){
                move(minotaur, 0, 11);  
            }
        } else if(minogoes <= 75 && minogoes >= 50 && minox > 5){
            move(minotaur, -11, 0);
            if(wallx === minox && wally === minoy){
                move(minotaur, 11, 0);  
            }

        }else if(minogoes <= 100 && minogoes >= 75 && minoy > 5){
            move(minotaur, 0, 11);
                if(wallx === minox && wally === minoy){
                    move(minotaur, 0, -11);  
                }
        }
        if(minoy > 594.5){
         move(minotaur, 0, -11);   
        }else if (minoy < 5){
         move(minotaur, 0, 11);   
        }

        if(minox === x && minoy === y){
            player.parentNode.removeChild(player);
            alert("You died!");
            alert("Resetting Maze...");
            document.location.reload(); 
        }   
            
        minox = getX(minotaur);
        minoy = getY(minotaur);
    }
}
minotaurz();
var minotaurgo = setInterval(minotaurz, 1500); 

//collision();

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
 console.log(time);
}
//var newVar = setInterval(timer, 1000);

function ismdead(){
    if(mdead === true){
     Gate1.parentNode.removeChild(Gate1);
     Gate2.parentNode.removeChild(Gate2);
     minotaur.parentNode.removeChild(minotaur);    
    }
    requestAnimationFrame(ismdead);
}
ismdead();

function escape(){
  if(x === 220 && y === 198 && mdead === true){
     alert("You win!");
        alert("Resetting Maze...");
        document.location.reload();
    }
    
}
var newVar = setInterval(escape, 1000);