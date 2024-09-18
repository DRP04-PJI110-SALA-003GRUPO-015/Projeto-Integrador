#include <iostream>
#include <cstddef> //biblioteca para adiocionar ponteirop a um valor NULL
using namespace std;

int main(){
    int var1;
    int* pont1;
    var1=5;
    pont1=&var1;
       cout <<"valor da variavel atraves de seu nome:" << var1 << endl;
       cout <<"endereco armazenado no ponteiro\n"<< pont1 << endl;
       cout << "aqui com o uso de asterisco(*)  informa o valor que o ponteiro esta guardando: " << *pont1 << endl;
       cout << "sem o uso do asterisco(*) ele informa o endereco do ponteiro: " << pont1 <<endl;

    int var2;
    var2 = var1;
    cout << "aqui imprime o valor do var2 recebendo apenas o uso de igual: " << var2 << endl;
    //outra forma é indicado para onde esta o ponteiro
    var2 = *pont1;
    cout << "var2 com valor atribuido por ponteiro (asteristico *) : " << var2 << endl << endl ;

    cout<<"agora alterando o valor dos ponteiros:\n" << endl;

    *pont1 = 30;
    cout << *pont1 << endl ;
    var1 = 25;
    cout << var1 << endl ; 

    //alterando o direcionamneto do ponteiro ,antes apontava para o pont1 agora para pont2

    var2 = 251;
    pont1 = &var2;
    cout << *pont1 <<endl;
    cout << var1 << endl;

    //gravando o ponteiro em espaco nulo 'NULL' , nao em cima de outra slot
    // para funcionar a funcao NULL temos que carregar a biblioteca antes

   // int* pont2;
   // pont2 = NULL;
    //cout << *pont2;

    //gravando ponteiro

    int* pont3 = new int;
    *pont3 = 5;
    cout << pont3;
    cout << *pont3<<endl;
    cout <<"oi\n"<< *pont3<<endl;

    *pont3 = *pont1;
    delete pont3;
    pont3 = pont1;
    cout << *pont3;

    return 0;
