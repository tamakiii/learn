#include <GLUT/GLUT.h>
#include <glm/glm.hpp>
#include <iostream>
#include "font.hpp"
#include "rect.hpp"

using namespace glm;

ivec2 windowSize = {800, 600};
Rect rect = Rect(vec2(100, 100), vec2(200, 200));

bool keys[256] ;

void display(void) {
  glClear(GL_COLOR_BUFFER_BIT);
  glMatrixMode(GL_PROJECTION);
  glLoadIdentity();
  gluOrtho2D(0, windowSize.x, windowSize.y, 0); // Orthographic projection

  glMatrixMode(GL_MODELVIEW);
  glLoadIdentity();

  // glTranslatef(windowSize.x/2, windowSize.y/2, 0);

  // static float angle;
  //
  // if (keys['d'] == true && ++angle >= 360) {
  //   angle = 0;
  // }
  // if (keys['a'] == true && --angle <= 0) {
  //   angle = 360;
  // }
  
  rect.draw();

  font::begin();
  font::setColor(0, 0xff, 0);
  font::setSize(50.f);
  font::setPosition(0, windowSize.y - font::getSize() * 1.5);
  // font::draw("angle:%f", angle);
  font::end();

  glutSwapBuffers();
}

void timer(int value) {
  glutPostRedisplay();
  glutTimerFunc(1000/60, timer, 0);
}

void reshape(int width, int height) {
  windowSize = ivec2(width, height);
  glViewport(0, 0, windowSize.x, windowSize.y);
}

void keyboard(unsigned char key, int x, int y) {
  // std::cout << key << std::endl;
  keys[key] = true;
}

void keyboardUp(unsigned char key, int x, int y) {
  // std::cout << key << std::endl;
  keys[key] = false;
}

void idle() {
  float f = 4.f;

  if (keys['w']) rect.position.y -= f;
  if (keys['s']) rect.position.y += f;
  if (keys['a']) rect.position.x -= f;
  if (keys['d']) rect.position.x += f;

  glutPostRedisplay();
}

int main(int argc, char *argv[])
{
  glutInit(&argc, argv);
  glutInitWindowPosition(640, 0);
  glutInitWindowSize(windowSize.x, windowSize.y);
  glutCreateWindow("Title");
  glClearColor(0, 0, 0, 1.0f);
  glutDisplayFunc(display);
  glutTimerFunc(0, timer, 0);
  glutReshapeFunc(reshape);
  glutIgnoreKeyRepeat(GL_TRUE);
  glutKeyboardFunc(keyboard);
  glutKeyboardUpFunc(keyboardUp);
  glutIdleFunc(idle);
  glutMainLoop();
}
