/*
 * Author: Johan Suarez
 * Purpose: Linked list implementation
 *
 */

#include <stdio.h>
#include <stdlib.h>

typedef struct node {
  int data;
  struct node *next;
} node;

node *head = NULL;

void insert(int data) {
  node *temp = (node *)malloc(sizeof(node));
  temp->data = data;
  temp->next = head;
  head = temp;
}

void print() {
  node *temp = head;
  while (temp != NULL) {
    printf("%d ", temp->data);
    temp = temp->next;
  }
  printf("\n");
}

void delete(int data) {
  node *temp = head;
  node *prev = NULL;
  while (temp != NULL) {
    if (temp->data == data) {
      if (prev == NULL) {
        head = temp->next;
      } else {
        prev->next = temp->next;
      }
      free(temp);
      return;
    }
    prev = temp;
    temp = temp->next;
  }
}

int main() {
  insert(1);
  insert(2);
  insert(3);
  insert(4);
  insert(5);
  print();
  delete (3);
  print();
  delete (1);
  print();
  delete (5);
  print();
  delete (2);
  print();
  delete (4);
  print();
  return 0;
}
