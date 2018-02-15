#include <glm/glm.hpp>

struct Rect {
  glm::vec2 position;
  glm::vec2 size;

  Rect(glm::vec2 const &_position, glm::vec2 const &_size);

  void draw();
};
