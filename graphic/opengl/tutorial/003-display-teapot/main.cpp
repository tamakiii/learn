#include <GLUT/GLUT.h>

void display()
{
  glutWireTeapot(1);
  glFlush();
}

int main(int argc, char *argv[])
{
  glutInit(&argc, argv);
  glutInitWindowPosition(640, 0);
  glutInitWindowSize(640, 640);
  glutCreateWindow("Title");
  glClearColor(1, 1, 1, 0);
  glutDisplayFunc(display);
  glutMainLoop();
}
