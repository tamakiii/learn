#include <GLUT/GLUT.h>
#include <iostream>

int windowWidth = 800;
int windowHeight = 600;

bool keys[256] ;

void display(void) {
  glClear(GL_COLOR_BUFFER_BIT);
  glMatrixMode(GL_PROJECTION);
  glLoadIdentity();
  gluOrtho2D(0, windowWidth, windowHeight, 0); // Orthographic projection

  glMatrixMode(GL_MODELVIEW);
  glLoadIdentity();

  glTranslatef(windowWidth/2, windowHeight/2, 0);

  static float angle;

  if (keys['d'] == true && ++angle >= 360) {
    angle = 0;
  }
  if (keys['a'] == true && --angle <= 0) {
    angle = 360;
  }

  glRotatef(angle, 0, 0, 1);

  glScalef(256, 256, 1);
  glutWireTeapot(1);
  glutSwapBuffers();
}

void timer(int value) {
  glutPostRedisplay();
  glutTimerFunc(1000/60, timer, 0);
}

void reshape(int width, int height) {
  windowWidth = width;
  windowHeight = height;
  glViewport(0, 0, windowWidth, windowHeight);
}

void keyboard(unsigned char key, int x, int y) {
  std::cout << key << std::endl;
  keys[key] = true;
}

void keyboardUp(unsigned char key, int x, int y) {
  std::cout << key << std::endl;
  keys[key] = false;
}

int main(int argc, char *argv[])
{
  glutInit(&argc, argv);
  glutInitWindowPosition(640, 0);
  glutInitWindowSize(windowWidth, windowHeight);
  glutCreateWindow("Title");
  glClearColor(0, 0, 0, 1.0f);
  glutDisplayFunc(display);
  glutTimerFunc(0, timer, 0);
  glutReshapeFunc(reshape);
  glutIgnoreKeyRepeat(GL_TRUE);
  glutKeyboardFunc(keyboard);
  glutKeyboardUpFunc(keyboardUp);
  glutMainLoop();
}
