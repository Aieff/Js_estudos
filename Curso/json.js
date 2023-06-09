    // JSON - JavaScript Object Notation
    // JSON.stringify()
    // JSON.parse()

    const people = [
        {
          id: 1,
          name: "Felipe",
          lastName: "Fontoura",
          bornDate: new Date(1982, 1, 18),
          address: {
            city: "São José dos Campos",
          },
        },
        {
          id: 2,
          name: "Eduardo",
          lastName: "Moraes",
          bornDate: new Date(2001, 3, 5),
          address: {
            city: "Recife",
          },
        },
      ]
      console.log(JSON.stringify(people)) // conversão obj -> string / JSON
  
      const json =
        '[{"id":1,"name":"Felipe","lastName":"Fontoura","bornDate":"1982-02-18T03:00:00.000Z","address":{"city":"São José dos Campos"}},{"id":2,"name":"Eduardo","lastName":"Moraes","bornDate":"2001-04-05T03:00:00.000Z","address":{"city":"Recife"}}]'
      console.log(JSON.parse(json)) // converte uma string / JSON -> obj




      // JSON
      const person = {
        name: "Felipe Fontoura",
        age: 40,
        address: {
          street: "Rua Central",
          number: "100",
          complement: "",
          district: "Centro",
          city: "São Paulo",
          state: "São Paulo",
        },
      }

      console.log(typeof person)

      const personStr = JSON.stringify(person) // Converte para String

      console.log(typeof personStr)
      console.log(personStr) 

      const personObj = JSON.parse(personStr) // Converte para Objeto

      console.log(typeof personObj)
      console.log(personObj)