/*
Exercício de manipulação de arrays
Álvaro Orlando
Elton Junior
Micheli Ferreira
Thiago Luiz
Wanderson Serra
*/

// Array declarada como 'var' para podermos manipular seus objetos
const users = [
    {
        name: "Bruno Oliveira",
        username: "byoliveira",
        age: 24
    },
    {
        name: "João Paulo",
        username: "jpaulo",
        age: 30
    },
    {
        name: "Lays Alves",
        username: "lalves",
        age: 18
    },
    {
        name: "Julia dos Santos",
        username: "jsantos",
        age: 19
    },
    {
        name: "Brenda Araujo",
        username: "baraujo",
        age: 14
    },
    {
        name: "Henrique Souza",
        username: "hsouza",
        age: 25
    },
    {
        name: "Jose Oliveira",
        username: "joliveira",
        age: 24
    },
    {
        name: "Matheus Felix",
        username: "mfelix",
        age: 20
    },
    {
        name: "Romulo Almeida",
        username: "ralmeida",
        age: 21
    },
    {
        name: "Bruna Assis",
        username: "bassis",
        age: 29
    },
    {
        name: "Jaciane Oliveira",
        username: "joliveira",
        age: 35
    },
    {
        name: "Carlos Eduardo",
        username: "ceduardo",
        age: 18
    },
    {
        name: "Lucas Silva",
        username: "lsilva",
        age: 22
    },
    {
        name: "Douglas Costa",
        username: "dcosta",
        age: 32
    },
    {
        name: "Barbara Santos",
        username: "bsantos",
        age: 10
    },
    {
        name: "Ralf Augusto",
        username: "raugusto",
        age: 19
    },
    {
        name: "Lucas Crispin",
        username: "lcrispin",
        age: 20
    },
    {
        name: "Lucas Crispin",
        username: "lcrispin",
        age: 20
    },
    {
        name: "Lucas Crispin",
        username: "lcrispin",
        age: 20
    },
    {
        name: "Lucas Crispin",
        username: "lcrispin",
        age: 20
    },
    {
        name: "Lucas Crispin",
        username: "lcrispin",
        age: 20
    },
    {
        name: "Augusto de Melo",
        username: "amelo",
        age: 31
    },
    {
        name: "Carla Alves",
        username: "calves",
        age: 28
    },
    {
        name: "Jonas Sousa",
        username: "jsousa",
        age: 31
    },
    {
        name: "Lucas Crispin",
        username: "lcrispin",
        age: 20
    },
    {
        name: "Pedro Lara",
        username: "plara",
        age: 19
    },
    {
        name: "Victor Viegas",
        username: "vviegas",
        age: 24
    },
    {
        name: "Lucas Crispin",
        username: "lcrispin",
        age: 20
    },
    {
        name: "Matheus Augusto",
        username: "maugusto",
        age: 20
    },
    {
        name: "Silvia Bertis",
        username: "sbertis",
        age: 24
    },
    {
        name: "Glaucia Gimenes",
        username: "ggimenes",
        age: 24
    },
    {
        name: "Glaucia Gimenes",
        username: "ggimenes1",
        age: 30
    },
    {
        name: "Glaucia Gimenes",
        username: "ggimenes2",
        age: 18
    },
    {
        name: "Mayra Barbosa",
        username: "mbarbosa",
        age: 29
    },
    {
        name: "Mayla Santos",
        username: "msatnos3",
        age: 17
    },
    {
        name: "Renato Augusto",
        username: "raugusto",
        age: 31
    },
    {
        name: "Roger Guedes",
        username: "rguedes",
        age: 23
    },
    {
        name: "Gustavo Silva",
        username: "gsilva",
        age: 24
    },
    {
        name: "Fabio Santos",
        username: "fsantos",
        age: 38
    },
    {
        name: "Jose Ferreira Neto",
        username: "jneto",
        age: 51
    }
];

// Adicionando novos objetos no final do Array 'users'

users.push(
    {
        name: "Micheli Ferreira",
        username: "mferreira",
        age: 20
    },
    {
        name: "Wanderson Serra",
        username: "wserra",
        age: 39
    },
    {
        name: 'Álvaro Orlando',
        username: 'alv.orlando',
        age: 39
    },
    {
        name: "Elton",
        username: "eltonjr",
        age: 18
    },
    {
        name: 'Thiago Luiz',
        username: 'thiaguinhols',
        age: 24
    }
);

// Adicionando novos objetos no início do Array 'users'
users.unshift(
    {
        name: "Micheli Ferreira",
        username: "mferreira",
        age: 20
    },
    {
        name: "Wanderson Serra",
        username: "wserra",
        age: 39
    },
    {
        name: 'Álvaro Orlando',
        username: 'alv.orlando',
        age: 39
    },
    {
        name: "Elton",
        username: "eltonjr",
        age: 18
    },
    {
        name: 'Thiago Luiz',
        username: 'thiaguinhols',
        age: 24
    }
);

// Removendo os dois últimos objetos do array

users.splice(48, 2);

//Exibindo index de objeto com findIndex
{
    let index = users.findIndex(u => u.username == 'ggimenes1');
    console.log(index);
};

//Exibindo index de objeto com 'for'
{
    for (var i = 0; i < users.length; i++) {
        if (users[i].username == 'raugusto') {
            console.log(i)
            break
        }
    }

    {

        // Removendo usuário ggimenes1 pelo índice
        users.splice(36, 1);
        //Removendo usuário raugusto pelo índice
        users.splice(20, 1)

    }  
    

};