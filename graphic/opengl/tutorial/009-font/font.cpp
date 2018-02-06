#include <GLUT/GLUT.h>
#include <glm/glm.hpp>
#include <iostream>
#include <stdio.h>
#include <stdarg.h>

#define FONT_DEFAULT_SIZE (100.f)

namespace font {
  static glm::ivec2 position;
  static float size = FONT_DEFAULT_SIZE;
  static unsigned char color[3];

  void test() {
    std::cout << size << std::endl;
  }

  void begin() {
    glPushMatrix();
    glPushAttrib(GL_ALL_ATTRIB_BITS);

    GLint viewport[4];
    glGetIntegerv(GL_VIEWPORT, viewport);

    gluOrtho2D(0, viewport[2], viewport[3], 0); // Orthographic projection

    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    glDisable(GL_DEPTH_TEST);
    glDisable(GL_LIGHTING);
    glDisable(GL_TEXTURE_2D);
  }

  void end() {
    glPopMatrix();
    glPopAttrib();
  }

  // void draw(const char *format) {
  //   while (*format) {
  //     glutStrokeCharacter(GLUT_STROKE_ROMAN, *format);
  //     format++;
  //   }
  // }

  void draw(const char *format, ...) {
    char str[256];
    va_list list;

    va_start(list, format);
    vsprintf(str, format, list);
    va_end(list);

    glColor3ub(color[0], color[1], color[2]);

    // glPushMatrix();
    // {
      glTranslatef(position.x, position.y + size, 0);
      float scale = size / FONT_DEFAULT_SIZE;
      glScalef(scale, -scale, scale);
      for (char *p = str; *p != '\0'; ++p) {
        glutStrokeCharacter(GLUT_STROKE_ROMAN, *p);
      }
    // }
    // glPopMatrix();
  }

  void setPosition(float x, float y) {
    position = glm::vec2(x, y);
  }

  void setSize(float _size) {
    size = _size;
  }

  float getSize() {
    return size;
  }

  void setColor(unsigned char red, unsigned char green, unsigned char blue) {
    color[0] = red;
    color[1] = green;
    color[2] = blue;
  }
}
