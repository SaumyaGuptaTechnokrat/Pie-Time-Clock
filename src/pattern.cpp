#include <iostream>
using namespace std;
int main()
{
    for(int i=5;i>=1;i--){
        for(int j=1;j<=5;j++){
                    if(j>=2 && j<=4){
                        cout<<" ";
                    }
                    else{
                        cout<<i<<" ";
                    }
        }
        cout<<endl;
    }
     return 0;
}