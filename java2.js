function minotaurz() {
  var minox = getX(minotaur);
  var minoy = getY(minotaur);
  var eastcollision = 0;
  var minogoes = Math.random() * 100;
  if (minogoes <= 25 && minox < 1314.5) {
    move(minotaur, 1, 0);
    if (collides(minotaur, wall) && eastcollision != 1) {
        
    } else {
      move(minotaur, 1, 0);
      if (collides(minotaur, wall) && eastcollision != 1) {
      } else {
        move(minotaur, 1, 0);
        if (collides(minotaur, wall) && eastcollision != 1) {
        } else {
          move(minotaur, 1, 0);
          if (collides(minotaur, wall) && eastcollision != 1) {
          } else {
            move(minotaur, 1, 0);
            if (collides(minotaur, wall) && eastcollision != 1) {
            } else {
              move(minotaur, 1, 0);
              if (collides(minotaur, wall) && eastcollision != 1) {
              } else {
                move(minotaur, 1, 0);
                if (collides(minotaur, wall) && eastcollision != 1) {
                } else {
                  move(minotaur, 1, 0);
                  if (collides(minotaur, wall) && eastcollision != 1) {
                  } else {
                    move(minotaur, 1, 0);
                    if (collides(minotaur, wall) && eastcollision != 1) {
                    } else {
                      move(minotaur, 1, 0);
                      if (collides(minotaur, wall) && eastcollision != 1) {
                      } else {
                        move(minotaur, 1, 0);
                        if (collides(minotaur, wall) && eastcollision != 1) {
                        } else {
                          move(minotaur, 1, 0);
                          if (collides(minotaur, wall) && eastcollision != 1) {
                          } else {
                            move(minotaur, 1, 0);
                            if (collides(minotaur, wall) && eastcollision != 1) {
                            } else {
                              move(minotaur, 1, 0);
                              if (collides(minotaur, wall) && eastcollision != 1) {
                              } else {
                                move(minotaur, 1, 0);
                                if (collides(minotaur, wall) && eastcollision != 1) {
                                } else {
                                  move(minotaur, 1, 0);
                                  if (collides(minotaur, wall) && eastcollision != 1) {
                                  } else {
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else if (minogoes <= 50 && minoges >= 25 && minoy < 594.5) {
    move(minotaur, 0, -16);
  } else if (minogoes <= 75 && minogoes >= 50 && minox > 5) {
    move(minotaur, -16, 0);
  } else if (minogoes <= 100 && minogoes >= 75 && minoy > 5) {
    move(minotaur, 0, 16);
  }

  minox = getX(minotaur);
  minoy = getY(minotaur);
  //    requestAnimationFrame(minotaurz);
}
//minotaurz();
var minotaurgo = setInterval(minotaurz, 1500);
