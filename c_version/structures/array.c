/*
 * This is my Array implementation
 *
 *
 * */

#include <stdio.h>
#include <stdlib.h>

#define MAX 10

int main(void) {
  int array[MAX] = {0};
  int i = 0;
  int j = 0;
  int temp = 0;

  printf("Please input 10 numbers:\n");
  for (i = 0; i < MAX; i++) {
    scanf("%d", &array[i]);
  }

  printf("The numbers you input are:\n");
  for (i = 0; i < MAX; i++) {
    printf("%d ", array[i]);
  }
  printf("\n");

  for (i = 0; i < MAX - 1; i++) {
    for (j = 0; j < MAX - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }

  printf("The numbers after sort are:\n");
  for (i = 0; i < MAX; i++) {
    printf("%d ", array[i]);
  }
  printf("\n");

  return 0;
}
