#include <stdio.h>
int main()
{
    int a[]={1,10,23,54,64};
    int max,i;
    max=a[0];
    for(i=1;i<5;i++){
        if(a[i]>max)
        max=a[i];
    }
    printf("%d",max);
    
}