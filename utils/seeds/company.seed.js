const companyModel = require("../../models/company.model")//Importa el modelo de company
const mongodbConfig = require("../mongodb.config")//Importa la configuración de MongoDB

const ejecutar = async()=>{
    await mongodbConfig.conectarMongoDB()
    .then(()=>{//Si conecta con MongoDB
        console.log("Conectado con MongoDB!!!")//Confirmamos por consola la conexión
    })
    .catch((err)=>{//Si no conecta con MongoDB
        console.log(`Error al conectar. Desc: ${err}`)//Tumba el servidor
        process.exit(0)
    })

    const company =[//Creamos los objetos de mongo
        {
            cif:"A12345677",
            name:"Sierras Manolo",
            city:"Valencia",
            personInCharge:"Manolito Sanchez",
            personInChargeID:"99999998Y",
            type:"FERRETERIA",
            address:"Calle Mayor, 8",
            area:"Valencia",
            postalCode:46001,
            phone:666504030,
            email:"manolosierras@sierras.com",
            createDate:"1-10-2024",
            modifiedDate: new Date()
        },
        {
            cif:"A12345678",
            name:"Aeronix",
            city:"Alicante",
            personInCharge:"Teodosio Ramirez ",
            personInChargeID:"99999997M",
            type:"INDUSTRIA",
            address:"Gran Via, 300",
            area:"Alicante",
            postalCode:33000,
            phone:666504031,
            email:"aeronix2@aero.com",
            createDate:"10-10-2024",
            modifiedDate: new Date()
        },
        {
            cif:"A12345679",
            name:"PasstaTime",
            city:"Madrid",
            personInCharge:"Antonio Virgolini",
            personInChargeID:"99999996F",
            type:"HOSTELERIA",
            address:"Gran Via, 33",
            area:"Madrid",
            postalCode:33000,
            phone:666504032,
            email:"passtasmadrid@passta.com",
            createDate:"3-10-2024",
            modifiedDate: new Date()
        }
    ]

    await companyModel.insertMany(company)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
    
    process.exit()
}

ejecutar()//Ejecuta la seed