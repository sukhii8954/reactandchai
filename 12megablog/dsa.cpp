#include <bits/stdc++.h>
using namespace std;

void printAlpha(int n)
{

    char a = 'A';
    char b = 'a';

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {

            if ((i + j) % 2 == 0)
            {
                cout << a << " ";
            } else{
                cout<<b<<" ";
            }

            if(a=='Z'){
                a=(char)(a-26);
            }
            a++;
            if (b=='z')
            {
                b=(char)(b-26);
            }
            b++;
            
        }

        cout<<endl;
    }
}
int main()
{

    int n;
    cin >> n;

    cout << printAlpha(n);
    return 0;
}