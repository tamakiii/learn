#include <GLUT/GLUT.h>

void display(void) {
    glClear(GL_COLOR_BUFFER_BIT);
    glRotatef(1, 0, 0, 1);
    glutWireTeapot(1);
    glutSwapBuffers();
}

void idle(void) {
  glutPostRedisplay();
}

int main(int argc, char *argv[])
{
  glutInit(&argc, argv);
  glutInitWindowPosition(640, 0);
  glutInitWindowSize(640, 640);
  glutCreateWindow("Title");
  glClearColor(0, 0, 0, 1.0f);
  glutDisplayFunc(display);
  glutIdleFunc(idle);
  glutMainLoop();
}
