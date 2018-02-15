#include <rect.hpp>
#include <GLUT/GLUT.h>
#include <glm/glm.hpp>

Rect::Rect(glm::vec2 const &_position, glm::vec2 const &_size) {
  position = _position;
  size = _size;
}

void Rect::draw() {
  glRectf(
    position.x, position.y,
    position.x + size.x, position.y + size.y
  );
}

