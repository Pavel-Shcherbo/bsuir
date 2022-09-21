#include <stdio.h>
int main()
{
  int a[5]; // объявлен массив a из 5 элементов
  int i;
  // Ввод элементов массива
  for (i = 0; i<5; i++)
  {
    printf("a[%d] = ", i);
    scanf("%d", &a[i]); // &a[i] - адрес i-го элемента массива
  }
  // Вывод элементов массива
  for (i = 0; i<5; i++)
    printf("%d ", a[i]); // пробел в формате печати обязателен
  getchar(); getchar();
  return 0;
}
